import crypto from "crypto";

// --- Capital Chronicle Journal Meta Conversions API Config ---
const META_DATASET_ID = process.env.META_DATASET_ID || "61592759903817";
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || "EAAVo00g0MqEBSA7r2g661gBOOHoHt47LH81bIq6jveYhQIXJPuVLQvzqp7s2m8KGHz4DeXVZAp9WMPV2ZCkBGyw120xZAZCySs6oJyNBZBuFtRwmqY4wAg70iqUkueGtBpHTUFSFBZBKB29jNFzt2F1S92HOjW2aIWZC5MqQMvZCSEoULFncqqZBTACZA0x3iHmqnf7QZDZD";
const META_CRM_NAME = "capital_chronicle_journal";

function sha256(value) {
  if (!value) return undefined;
  const normalized = String(value).trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function hashPhone(phone) {
  if (!phone) return undefined;
  const digits = String(phone).replace(/[^\d]/g, "");
  if (!digits) return undefined;
  return crypto.createHash("sha256").update(digits).digest("hex");
}

/**
 * Send a Lead event to the Meta Conversions API.
 * All PII is SHA-256 hashed before transmission.
 */
export async function sendMetaLeadEvent(params = {}) {
  const datasetId = META_DATASET_ID;
  const accessToken = META_ACCESS_TOKEN;
  const crmName = META_CRM_NAME;

  if (!datasetId || !accessToken) {
    console.warn("[Meta CAPI] Dataset ID or Access Token not configured. Skipping.");
    return { ok: false, reason: "missing_config" };
  }

  const eventTime = Math.floor(Date.now() / 1000);

  const userData = {};
  const hashedEmail = sha256(params.email);
  const hashedPhone = hashPhone(params.phone);
  const hashedFn = sha256(params.firstName);
  const hashedLn = sha256(params.lastName);

  if (hashedEmail)  userData.em = [hashedEmail];
  if (hashedPhone)  userData.ph = [hashedPhone];
  if (hashedFn)     userData.fn = [hashedFn];
  if (hashedLn)     userData.ln = [hashedLn];
  if (params.clientIpAddress)  userData.client_ip_address = params.clientIpAddress;
  if (params.clientUserAgent)  userData.client_user_agent = params.clientUserAgent;

  const body = {
    data: [
      {
        event_name: params.eventName || "Lead",
        event_time: eventTime,
        action_source: "system_generated",
        custom_data: {
          event_source: "crm",
          lead_event_source: crmName,
        },
        user_data: userData,
      },
    ],
  };

  if (params.testEventCode) {
    body.test_event_code = params.testEventCode;
  }

  const url = `https://graph.facebook.com/v25.0/${datasetId}/events?access_token=${encodeURIComponent(accessToken)}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log("[Meta CAPI] Response:", JSON.stringify(result));
    return { ok: response.ok, status: response.status, data: result };
  } catch (err) {
    console.error("[Meta CAPI] Error:", err.message);
    return { ok: false, error: err.message };
  }
}
