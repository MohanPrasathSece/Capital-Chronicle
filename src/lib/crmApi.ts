interface SubmitLeadInput {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  countryCode: string;
  leadType: "contact";
  message?: string;
}

export const COUNTRY_PHONE_PATTERNS: Record<string, { dialCode: string, pattern: RegExp, example: string }> = {
  "CH": { dialCode: "41", pattern: /^(\+41|0041|0)?\s?[1-9]\d{1}\s?\d{3}\s?\d{2}\s?\d{2}$/, example: "+41 79 123 45 67" },
  "FR": { dialCode: "33", pattern: /^(\+33|0033|0)?\s?[1-9]\s?(\d{2}\s?){4}$/, example: "+33 6 12 34 56 78" },
  "BE": { dialCode: "32", pattern: /^(\+32|0032|0)?\s?[1-9]\d{0,2}\s?\d{2,3}\s?\d{2}\s?\d{2}$/, example: "+32 470 12 34 56" },
  "CA": { dialCode: "1", pattern: /^(\+1|001)?\s?[2-9]\d{2}\s?[2-9]\d{2}\s?\d{4}$/, example: "+1 416 123 4567" },
  "US": { dialCode: "1", pattern: /^(\+1|001)?\s?[2-9]\d{2}\s?[2-9]\d{2}\s?\d{4}$/, example: "+1 212 123 4567" },
  "GB": { dialCode: "44", pattern: /^(\+44|0044|0)?\s?7\d{3}\s?\d{6}$/, example: "+44 7123 123456" },
  "DE": { dialCode: "49", pattern: /^(\+49|0049|0)?\s?1[5-7]\d{1}\s?\d{7,8}$/, example: "+49 151 12345678" },
  "ES": { dialCode: "34", pattern: /^(\+34|0034)?\s?[67]\d{2}\s?\d{3}\s?\d{3}$/, example: "+34 612 345 678" },
  "IT": { dialCode: "39", pattern: /^(\+39|0039)?\s?3\d{2}\s?\d{6,7}$/, example: "+39 312 1234567" },
  "NL": { dialCode: "31", pattern: /^(\+31|0031|0)?\s?6\s?\d{8}$/, example: "+31 6 12345678" },
  "SE": { dialCode: "46", pattern: /^(\+46|0046|0)?\s?7[02369]\s?\d{7}$/, example: "+46 70 123 45 67" },
  "AU": { dialCode: "61", pattern: /^(\+61|0061|0)?\s?4\d{2}\s?\d{3}\s?\d{3}$/, example: "+61 412 345 678" },
  "IN": { dialCode: "91", pattern: /^(\+91|0091)?\s?[6-9]\d{9}$/, example: "+91 98765 43210" },
  "AE": { dialCode: "971", pattern: /^(\+971|00971|0)?\s?5[024568]\s?\d{7}$/, example: "+971 50 123 4567" },
  "SG": { dialCode: "65", pattern: /^(\+65|0065)?\s?[89]\d{7}$/, example: "+65 8123 4567" },
  "ZA": { dialCode: "27", pattern: /^(\+27|0027|0)?\s?[6-8]\d{2}\s?\d{3}\s?\d{4}$/, example: "+27 82 123 4567" },
  "BR": { dialCode: "55", pattern: /^(\+55|0055)?\s?[1-9]{2}\s?9\d{4}\s?\d{4}$/, example: "+55 11 91234 5678" },
  "MX": { dialCode: "52", pattern: /^(\+52|0052)?\s?1?\s?\d{2}\s?\d{4}\s?\d{4}$/, example: "+52 55 1234 5678" },
  "JP": { dialCode: "81", pattern: /^(\+81|0081|0)?\s?[789]0\s?\d{4}\s?\d{4}$/, example: "+81 90 1234 5678" },
  "CY": { dialCode: "357", pattern: /^(\+357|00357)?\s?9[0-9]\s?\d{6}$/, example: "+357 99 123456" },
};

export async function submitLead(data: SubmitLeadInput) {
  try {
    const dialCode = COUNTRY_PHONE_PATTERNS[data.countryCode]?.dialCode || "41";
    
    // CRM format: 00 + dialCode + number
    const crmPhone = `00${dialCode}${data.phone.replace(/\D/g, '')}`;

    const nameParts = data.name ? data.name.trim().split(" ") : [];
    const derivedFirstName = data.firstName || nameParts[0] || "";
    const derivedLastName = data.lastName || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "");

    const crmPayload = {
      first_name: derivedFirstName,
      last_name: derivedLastName,
      email: data.email,
      phone: crmPhone,
      country_name: data.countryCode.toLowerCase(),
      message: data.message || "",
    };
    
    // Call our backend to proxy to CRM safely
    const crmRes = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmPayload)
    });
    
    if (!crmRes.ok) {
        const errData = await crmRes.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to submit to CRM");
    }

    // Dashboard lead count increment
    const res = await fetch('https://lead-dashboard-orcin.vercel.app/api/increment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        website: "Capital Chronicle", 
        type: data.leadType, 
        name: data.name || `${derivedFirstName} ${derivedLastName}`.trim(), 
        email: data.email 
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to increment dashboard count");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error };
  }
}
