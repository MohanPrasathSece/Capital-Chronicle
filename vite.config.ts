import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

const apiPlugin = (env: Record<string, string>) => ({
  name: 'api-plugin',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res, next) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const parts = data.name ? data.name.split(' ') : ['User'];
            const first_name = parts[0];
            const last_name = parts.slice(1).join(' ') || 'Client';
            
            const crmRes = await fetch(env.CRM_API_URL || 'https://inwo.crmcore.me/api/lead_management/api/affiliates', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'authorization': env.CRM_API_TOKEN
              },
              body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: data.email,
                phone: data.number || data.phone || '',
                description: data.message || 'Lead from European Insight Form',
                country_name: 'GB',
                password: 'Password123!'
              })
            });
            const text = await crmRes.text();
            console.log('CRM Status:', crmRes.status, 'Response:', text);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: crmRes.ok, data: text }));
          } catch(e) {
            console.error('CRM Proxy Error:', e);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      tailwindcss(),
      TanStackRouterVite({ target: "react" }),
      react(),
      tsconfigPaths(),
      apiPlugin(env)
    ],
  };
});
