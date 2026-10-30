import { BUSINESS_DETAILS } from "../data/businessDetails";

/**
 * Generates an encoded WhatsApp message link to the business phone number.
 */
export function getWhatsAppLink(category?: string, enquiryType?: "sell" | "buy" | "general"): string {
  // Use international digits for WhatsApp API: 919840215916
  const cleanPhone = (BUSINESS_DETAILS.whatsappNumber || "+919840215916").replace(/[^0-9]/g, "");

  let defaultText = "Hello Raman Assayers, I would like to enquire about jewellery services. Please share the process and visiting details.";

  if (category && enquiryType === "sell") {
    defaultText = `Hello Raman Assayers, I would like to enquire about selling my ${category} jewellery. Please share the evaluation process and visiting details.`;
  } else if (category && enquiryType === "buy") {
    defaultText = `Hello Raman Assayers, I would like to enquire about purchasing pre-owned ${category} jewellery. Please share available designs and appointment details.`;
  } else if (enquiryType === "sell") {
    defaultText = "Hello Raman Assayers, I would like to enquire about selling old jewellery. Please share your evaluation process and showroom location.";
  }

  // Uses WhatsApp API endpoint
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(defaultText)}`;
}

/**
 * Click-to-call link helper
 */
export function getPhoneLink(): string {
  return `tel:${BUSINESS_DETAILS.phone}`;
}

/**
 * Mailto link helper
 */
export function getEmailLink(subject = "Jewellery Enquiry - Raman Assayers"): string {
  return `mailto:${BUSINESS_DETAILS.email}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Google Maps directions link helper
 */
export function getDirectionsLink(): string {
  return BUSINESS_DETAILS.googleMapsUrl;
}
