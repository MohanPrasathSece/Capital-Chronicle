export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const data = req.body;

    const payload = {
      country_name: data.country_name || "ch",
      description: "Capital Chronicle",
      phone: data.phone,
      email: data.email,
      first_name: data.first_name || "Unknown",
      last_name: data.last_name || "",
      custom_fields: {
        Source_ID: "website",
        How_Much_Invested: data.amount || "0",
        Outline_Your_Case: data.message || ""
      }
    };

    const response = await fetch(process.env.CRM_API_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates", {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
        "authorization": process.env.CRM_API_TOKEN 
      },
      body: JSON.stringify(payload)
    });
    
    const result = await response.text();
    
    // Check if CRM actually rejected it despite a 200 OK
    const rawMsg = result.toLowerCase();
    let isInvalid = false;
    let errorMsg = "CRM Error: " + result;

    if (rawMsg.includes("already exist") || rawMsg.includes("contacted")) {
        isInvalid = true;
        errorMsg = "You have already contacted us pls wait";
    } else {
        try {
            const jsonRes = JSON.parse(result);
            if (jsonRes.success === false) {
                isInvalid = true;
                errorMsg = jsonRes.message || jsonRes.error || errorMsg;
            }
        } catch(e) {}
    }

    if (response.ok && !isInvalid) {
      res.status(200).json({ success: true, data: result });
    } else {
      res.status(400).json({ success: false, error: errorMsg });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
