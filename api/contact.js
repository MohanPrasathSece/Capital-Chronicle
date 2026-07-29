import { sendMetaLeadEvent } from "./metaConversionsApi.js";

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

    if (response.status === 500 || response.status === 409 || rawMsg.includes("already") || rawMsg.includes("exist") || rawMsg.includes("contacted") || rawMsg.includes("500") || rawMsg.includes("internal server")) {
        isInvalid = true;
        errorMsg = "You have already contacted us. Please wait while our team reviews your request. We'll get back to you soon.";
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
      // Fire-and-forget: Meta Conversions API Lead event
      sendMetaLeadEvent({
        email: data.email,
        phone: data.phone,
        firstName: data.first_name,
        lastName: data.last_name,
        clientIpAddress: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
        clientUserAgent: req.headers["user-agent"] || "",
        testEventCode: process.env.META_TEST_EVENT_CODE,
      }).catch((err) => console.warn("[Meta CAPI] fire-and-forget error:", err));

      res.status(200).json({ success: true, data: result });
    } else {
      res.status(400).json({ success: false, error: errorMsg });
    }
  } catch (error) {
    const rawMsg = (error.message || error.toString() || '').toLowerCase();
    if (rawMsg.includes("already") || rawMsg.includes("exist") || rawMsg.includes("contacted") || rawMsg.includes("500") || rawMsg.includes("internal server")) {
      return res.status(400).json({ success: false, error: "You have already contacted us. Please wait while our team reviews your request. We'll get back to you soon." });
    }
    res.status(500).json({ success: false, error: error.message });
  }
}
