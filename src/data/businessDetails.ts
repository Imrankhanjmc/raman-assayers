export interface BusinessDetails {
  name: string;
  category: string;
  street: string;
  landmark: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  experienceYears: number;
  experienceStatement: string;
  brandMessage: string;
  tagline: string;
  primaryService: string;
  secondaryService: string;
  primaryMarket: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export const BUSINESS_DETAILS: BusinessDetails = {
  name: "Raman Assayers",
  category: "Gold, silver, diamond and platinum jewellery buying and selling",
  street: "No. 20, KB Dasan Road",
  landmark: "Opposite Girishwari Hospital, Seethammal Colony",
  locality: "Alwarpet",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600018",
  country: "India",
  fullAddress: "No. 20, KB Dasan Road, opposite Girishwari Hospital, Seethammal Colony, Alwarpet, Chennai, Tamil Nadu 600018, India",
  phone: "+919940365637",
  phoneDisplay: "+91 99403 65637",
  whatsappNumber: "+919840215916",
  whatsappDisplay: "+91 98402 15916",
  email: "dinesh.surana31@gmail.com",
  experienceYears: 31,
  experienceStatement: "Over 31+ Years of Stated Experience",
  brandMessage: "Your Jewellery. Its True Value. Our Commitment to Trust.",
  tagline: "Trust, Value, and Transparency in Every Transaction.",
  primaryService: "Buying old jewellery and offering transparent valuations",
  secondaryService: "Selling pre-owned jewellery",
  primaryMarket: "Chennai and surrounding areas",
  // Accurate directions URL to KB Dasan Road Alwarpet Chennai
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Raman+Assayers+KB+Dasan+Road+Alwarpet+Chennai+600018",
  // Google Maps embed iframe URL pointing to KB Dasan Road, Alwarpet Chennai
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=KB+Dasan+Road,+Alwarpet,+Chennai,+Tamil+Nadu+600018&t=&z=16&ie=UTF8&iwloc=&output=embed"
};

export const CORE_VALUES = [
  {
    title: "Transparency in Every Transaction",
    description: "Every step of the evaluation and pricing calculation is conducted in front of you with clear, open communication."
  },
  {
    title: "Accuracy in Jewellery Evaluation",
    description: "Systematic assessment of purity, weight, and precious stone characteristics tailored to each individual piece."
  },
  {
    title: "One-to-One, Client-Friendly Consultation",
    description: "Every client receives undivided, attentive personal consultation in a warm, welcoming showroom environment where your questions, convenience, and individual needs are prioritized."
  },
  {
    title: "Respect for Every Customer",
    description: "We understand jewellery carries both emotional and financial significance, ensuring a courteous and dignified experience."
  },
  {
    title: "Professional & Courteous Service",
    description: "Decades of dedicated counter service with calm, attentive listening and zero pushy sales tactics."
  },
  {
    title: "Clear Communication & Informed Decisions",
    description: "No obligation to sell. We explain the assessment clearly so you make decisions with complete comfort and clarity."
  }
];

export const TRUST_HIGHLIGHTS = [
  { label: "31+ Years Experience", sub: "Established Chennai presence" },
  { label: "4.9K+ Google Reviews", sub: "Trusted for honest evaluation" },
  { label: "Worldwide Clients", sub: "Patrons across India & globally" },
  { label: "Gold, Silver, Diamond & Platinum", sub: "Complete precious metal assessment" },
  { label: "Transparent Evaluation", sub: "Open, step-by-step process" },
  { label: "Alwarpet, Chennai", sub: "Centrally located on KB Dasan Road" }
];
