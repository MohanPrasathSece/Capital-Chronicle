export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const data = req.body;

    const [first_name, ...lastNameParts] = (data.name || "Unknown").trim().split(" ");
    const last_name = lastNameParts.join(" ") || "Lead";

    let phone = (data.number || data.phone || "").replace(/[^0-9+]/g, '');
    if (phone) {
      if (phone.startsWith('+')) {
        phone = '00' + phone.slice(1);
      }
      if (phone.startsWith('41') && phone.length === 11) {
        phone = '00' + phone;
      }
      if (!phone.startsWith('0041')) {
        if (phone.startsWith('0') && !phone.startsWith('00')) {
          phone = '0041' + phone.slice(1);
        } else if (!phone.startsWith('00')) {
          phone = '0041' + phone;
        }
      }
    } else {
      phone = "0000000000";
    }

    
        let finalPhone = (leadData.number || leadData.phone || "").replace(/[^0-9+]/g, '');
        if (finalPhone && finalPhone.startsWith('+')) {
            finalPhone = '00' + finalPhone.slice(1);
        }
        let countryName = leadData.countryCode ? leadData.countryCode.toLowerCase() : "ch";

        const payload = {
      country_name: countryName,
      description: "Capital Chronicle",
      phone: finalPhone,
      email: data.email,
      first_name: first_name,
      last_name: last_name,
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
    
    // Fire-and-forget: increment leads count
    try {
      const host = req.headers.host || "localhost:3000";
      const protocol = host.startsWith("localhost") ? "http" : "https";
      fetch(`${protocol}://${host}/api/leads-count`, { method: "POST" }).catch((err) =>
        console.warn("[leads-count] Failed to increment:", err)
      );
    } catch (e) {
    const rawMsg = (e.message || e.toString() || "");
    if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists") || rawMsg.toLowerCase().includes("contacted")) {
      if (typeof res.status === 'function') {
        return res.status(400).json({ error: "You have already contacted us pls wait" });
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "You have already contacted us pls wait" }));
        return;
      }
    }

      console.warn("[leads-count] Error triggering increment:", e);
    }

    if (response.ok) {
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Capital Chronicle", type: "contact", name: data.name, email: data.email})
        }).catch(() => {});
      } catch(e){
    const rawMsg = (e.message || e.toString() || "");
    if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists") || rawMsg.toLowerCase().includes("contacted")) {
      if (typeof res.status === 'function') {
        return res.status(400).json({ error: "You have already contacted us pls wait" });
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "You have already contacted us pls wait" }));
        return;
      }
    }
}
    }
    if (response.ok) {
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Capital Chronicle", type: "contact", name: data.name, email: data.email})
        }).catch(() => {});
      } catch(e){
    const rawMsg = (e.message || e.toString() || "");
    if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists") || rawMsg.toLowerCase().includes("contacted")) {
      if (typeof res.status === 'function') {
        return res.status(400).json({ error: "You have already contacted us pls wait" });
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "You have already contacted us pls wait" }));
        return;
      }
    }
}
    }
    res.status(200).json({ success: response.ok, data: result });
  } catch (error) {
    const rawMsg = (error.message || error.toString() || "");
    if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists") || rawMsg.toLowerCase().includes("contacted")) {
      if (typeof res.status === 'function') {
        return res.status(400).json({ error: "You have already contacted us pls wait" });
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "You have already contacted us pls wait" }));
        return;
      }
    }

    res.status(500).json({ success: false, error: error.message });
  }
}
