export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const response = await fetch("https://inwo.crmcore.me/api/lead_management/api/affiliates", {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
        "token": process.env.CRM_API_TOKEN || "AFF_1_92cbc1bc76284e19b711bab22587d75f" 
      },
      body: JSON.stringify({ 
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.number || req.body.phone, 
        message: req.body.message || "" 
      })
    });
    const data = await response.text();
    res.status(200).json({ success: response.ok, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
