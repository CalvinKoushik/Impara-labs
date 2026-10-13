/**
 * Vercel Serverless Function: /api/submit-enquiry
 * Handles student enquiry submissions, validates input, and forwards
 * payload to Google Apps Script Webhook (for Google Sheet storage & direct email).
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!body || typeof body !== 'object') {
      return res.status(400).json({
        success: false,
        error: 'Invalid request body.',
      });
    }

    // 1. Spam honeypot trap (silently accept to confound bots)
    if (body.botField) {
      console.warn('Bot submission blocked via honeypot field');
      return res.status(200).json({
        success: true,
        message: 'Enquiry received successfully.',
      });
    }

    // 2. Validate mandatory fields
    const { fullName, mobileNumber, email, preferredCourse } = body;
    if (!fullName || !mobileNumber || !email || !preferredCourse) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name, Mobile, Email, and Programme are required.',
      });
    }

    // 3. Check for Google Sheet Webhook URL
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(
        'GOOGLE_SHEET_WEBHOOK_URL environment variable is not configured in Vercel project settings.'
      );
      return res.status(503).json({
        success: false,
        error:
          'Backend storage is not configured yet. Please set GOOGLE_SHEET_WEBHOOK_URL in Vercel Environment Variables.',
      });
    }

    // 4. Forward payload to Google Apps Script Webhook
    const payload = {
      fullName: String(fullName).trim(),
      mobileNumber: String(mobileNumber).trim(),
      email: String(email).trim(),
      preferredCourse: String(preferredCourse).trim(),
      preferredSchedule: String(body.preferredSchedule || 'Flexible').trim(),
      learningMode: String(body.learningMode || 'Need guidance').trim(),
      currentStatus: String(body.currentStatus || 'Student').trim(),
      collegeOrOrganization: String(body.collegeOrOrganization || '').trim(),
      degree: String(body.degree || '').trim(),
      graduationYear: String(body.graduationYear || '').trim(),
      learningGoals: String(body.learningGoals || '').trim(),
      submittedAt: new Date().toISOString(),
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Google Apps Script returned an error status:', webhookResponse.status, errorText);
      return res.status(502).json({
        success: false,
        error: 'Failed to record enquiry to Google Sheet. Please check the Webhook URL.',
      });
    }

    const responseData = await webhookResponse.json().catch(() => null);

    return res.status(200).json({
      success: true,
      message: 'Enquiry recorded in Google Sheet and email notification sent successfully.',
      data: responseData,
    });
  } catch (error) {
    console.error('Error processing enquiry submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your enquiry.',
    });
  }
}
