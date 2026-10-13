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
