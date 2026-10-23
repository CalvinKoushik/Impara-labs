import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

function localApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'local-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/submit-enquiry', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');

            if (data.botField) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Enquiry received' }));
              return;
            }

            const webhookUrl = env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;

            if (webhookUrl) {
              const upstreamRes = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
                redirect: 'follow',
              });

              const upstreamData = await upstreamRes.text();
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = upstreamRes.status;
              res.end(upstreamData);
              return;
            }

            // Dispatch to Meta Conversions API if configured
            const metaPixelId = env.META_PIXEL_ID || process.env.META_PIXEL_ID || '2001096810847896';
            const metaCapiToken = env.META_CAPI_TOKEN || process.env.META_CAPI_TOKEN;

            if (metaPixelId && metaCapiToken) {
              try {
                const cryptoMod = await import('crypto');
                const sha = (v: string) =>
                  v ? cryptoMod.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex') : undefined;

                const rawPhone = String(data.mobileNumber || '').replace(/\D/g, '').slice(-10);
                const phone = rawPhone ? '91' + rawPhone : undefined;
                const firstName = data.fullName ? String(data.fullName).trim().split(' ')[0] : undefined;

                const metaPayload = {
                  data: [
                    {
                      event_name: 'Lead',
                      event_time: Math.floor(Date.now() / 1000),
                      event_id: data.eventId,
                      action_source: 'website',
                      event_source_url: 'https://www.imparalabs.com/enroll',
                      user_data: {
                        ...(data.email && sha(data.email) ? { em: [sha(data.email)] } : {}),
                        ...(phone && sha(phone) ? { ph: [sha(phone)] } : {}),
                        ...(firstName && sha(firstName) ? { fn: [sha(firstName)] } : {}),
                        ...(data.fbp ? { fbp: data.fbp } : {}),
                        ...(data.fbc ? { fbc: data.fbc } : {}),
                      },
                      custom_data: {
                        content_name: data.preferredCourse,
                      },
                    },
                  ],
                };

                const metaRes = await fetch(
                  `https://graph.facebook.com/v21.0/${metaPixelId}/events?access_token=${metaCapiToken}`,
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(metaPayload),
                  }
                );
                const metaJson = await metaRes.json().catch(() => null);
                console.log('[Local Dev API] Meta CAPI Lead Event Result:', metaJson);
              } catch (metaErr) {
                console.error('[Local Dev API] Meta CAPI Error (non-fatal):', metaErr);
              }
            }

            // Local dev mode fallback when webhook is not yet set
            console.log('\n[Local Dev API] Received enquiry submission:\n', data);
            console.log('[Local Dev API] Configure GOOGLE_SHEET_WEBHOOK_URL in .env to send to real Google Sheet & Email.\n');

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(
              JSON.stringify({
                success: true,
                message:
                  'Dev Mode: Form submitted successfully! (Configure GOOGLE_SHEET_WEBHOOK_URL in .env to write to live Google Sheet)',
              })
            );
          } catch (err: unknown) {
            const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: errorMsg }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), localApiPlugin(env)],
  };
});
