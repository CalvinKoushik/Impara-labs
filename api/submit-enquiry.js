/**
 * Serverless Function: /api/submit-enquiry
 * Handles student enquiry submissions, validates input, forwards payload to
 * Google Apps Script Webhook (for Google Sheet storage & email), and dispatches
 * the Lead event to Meta Conversions API (CAPI) with SHA256 hashed customer parameters.
 */
import crypto from 'crypto';

// Helper to parse cookies from header
function parseCookies(cookieHeader) {
  if (!cookieHeader) return {};
  return cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
}

// SHA-256 hash helper for Meta CAPI
const sha = (v) =>
  v ? crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex') : undefined;

export default async function handler(req, res) {
  // Support both Express/Vercel (req, res) and standard Fetch/Web Response (Netlify v2)
  const isStandardRes = res && typeof res.status === 'function';

  const sendResponse = (statusCode, data) => {
    if (isStandardRes) {
      return res.status(statusCode).json(data);
    }
    return new Response(JSON.stringify(data), {
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
        'Access-Control-Allow-Headers': '*',
      },
    });
  };

  // CORS headers
  if (isStandardRes) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    if (isStandardRes) {
      return res.status(200).end();
    }
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  if (req.method !== 'POST') {
    return sendResponse(405, {
      success: false,
      error: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_) {}
    } else if (!body && typeof req.json === 'function') {
      try {
        body = await req.json();
      } catch (_) {}
    }

    if (!body || typeof body !== 'object') {
      return sendResponse(400, {
        success: false,
        error: 'Invalid request body.',
      });
    }

    // 1. Spam honeypot trap (silently accept to confound bots)
    if (body.botField) {
      console.warn('Bot submission blocked via honeypot field');
      return sendResponse(200, {
        success: true,
        message: 'Enquiry received successfully.',
      });
    }

    // 2. Validate mandatory fields
    const { fullName, mobileNumber, email, preferredCourse } = body;
    if (!fullName || !mobileNumber || !email || !preferredCourse) {
      return sendResponse(400, {
        success: false,
        error: 'Missing required fields: Name, Mobile, Email, and Programme are required.',
      });
    }

    // 3. Forward payload to Google Apps Script Webhook (if configured)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let responseData = null;

    if (webhookUrl && !webhookUrl.includes('YOUR_DEPLOYED_SCRIPT_ID')) {
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
        eventId: body.eventId,
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
        const errorText = await webhookResponse.text().catch(() => '');
        console.error('Google Apps Script returned an error status:', webhookResponse.status, errorText);
        return sendResponse(502, {
          success: false,
          error: 'Failed to record enquiry to Google Sheet. Please check the Webhook URL.',
        });
      }

      responseData = await webhookResponse.json().catch(() => null);
    } else {
      console.warn('GOOGLE_SHEET_WEBHOOK_URL is not set or placeholder detected; skipping Google Sheet storage.');
    }

    // 4. Send Lead to Meta Conversions API (CAPI)
    const metaPixelId = process.env.META_PIXEL_ID || '2001096810847896';
    const metaCapiToken = process.env.META_CAPI_TOKEN;

    if (metaPixelId && metaCapiToken) {
      try {
        const rawPhone = String(body.mobileNumber || '').replace(/\D/g, '').slice(-10);
        const phone = rawPhone ? '91' + rawPhone : undefined;
        const firstName = body.fullName ? String(body.fullName).trim().split(' ')[0] : undefined;

        const headerCookies = typeof req.headers?.get === 'function'
          ? req.headers.get('cookie')
          : req.headers?.cookie;

        const cookies = req.cookies || parseCookies(headerCookies);
        const fbp = body.fbp || cookies._fbp;
        const fbc = body.fbc || cookies._fbc;

        const headerXForwardedFor = typeof req.headers?.get === 'function'
          ? req.headers.get('x-forwarded-for')
          : req.headers?.['x-forwarded-for'];

        const clientIp = headerXForwardedFor
          ? String(headerXForwardedFor).split(',')[0].trim()
          : req.socket?.remoteAddress || req.connection?.remoteAddress;

        const headerUserAgent = typeof req.headers?.get === 'function'
          ? req.headers.get('user-agent')
          : req.headers?.['user-agent'];

        const metaPayload = {
          data: [
            {
              event_name: 'Lead',
              event_time: Math.floor(Date.now() / 1000),
              event_id: body.eventId, // same ID as the pixel for deduplication
              action_source: 'website',
              event_source_url: 'https://www.imparalabs.com/enroll',
              user_data: {
                ...(body.email && sha(body.email) ? { em: [sha(body.email)] } : {}),
                ...(phone && sha(phone) ? { ph: [sha(phone)] } : {}),
                ...(firstName && sha(firstName) ? { fn: [sha(firstName)] } : {}),
                ...(clientIp ? { client_ip_address: clientIp } : {}),
                ...(headerUserAgent ? { client_user_agent: headerUserAgent } : {}),
                ...(fbp ? { fbp } : {}),
                ...(fbc ? { fbc } : {}),
              },
              custom_data: {
                content_name: body.preferredCourse,
              },
            },
          ],
        };

        const metaResponse = await fetch(
          `https://graph.facebook.com/v21.0/${metaPixelId}/events?access_token=${metaCapiToken}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metaPayload),
          }
        );

        const metaData = await metaResponse.json().catch(() => null);
        if (!metaResponse.ok) {
          console.warn('Meta CAPI returned an error:', metaResponse.status, metaData);
        } else {
          console.log('Meta CAPI Lead event submitted successfully:', metaData);
        }
      } catch (metaErr) {
        // Wrap the request so that if Meta's API fails, the visitor still sees the "Enquiry received" message
        console.error('Meta CAPI error (non-fatal):', metaErr);
      }
    } else {
      console.warn('Meta CAPI credentials missing (META_PIXEL_ID or META_CAPI_TOKEN). Server event skipped.');
    }

    return sendResponse(200, {
      success: true,
      message: 'Enquiry received successfully.',
      data: responseData,
    });
  } catch (error) {
    console.error('Error processing enquiry submission:', error);
    return sendResponse(500, {
      success: false,
      error: 'An internal server error occurred while processing your enquiry.',
    });
  }
}
