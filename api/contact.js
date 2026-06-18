export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const data = req.body;
    const parts = data.name ? data.name.split(' ') : ['User'];
    const first_name = parts[0];
    const last_name = parts.slice(1).join(' ') || 'Client';

    const response = await fetch(process.env.CRM_API_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates", {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
        "authorization": process.env.CRM_API_TOKEN 
      },
      body: JSON.stringify({ 
        first_name: first_name,
        last_name: last_name,
        email: data.email,
        phone: data.number || data.phone || '',
        description: data.message || 'Lead from Global Insight Form',
        country_name: 'GB',
        password: 'Password123!'
      })
    });
    const data = await response.text();
    res.status(200).json({ success: response.ok, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
