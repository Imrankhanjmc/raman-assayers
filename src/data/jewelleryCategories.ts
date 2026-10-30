export interface CategoryPanel {
  heading: string;
  subheading: string;
  description: string;
  commonItems?: string[];
  keyPoints: string[];
  ctaText: string;
  whatsappType: "buy" | "sell";
  image: string;
  imageAlt: string;
}

export interface JewelleryCategory {
  id: "gold" | "silver" | "diamond" | "platinum";
  title: string;
  purityNote: string;
  shortDescription: string;
  heroImage: string;
  weBuy: CategoryPanel;
  weSell: CategoryPanel;
}

export const JEWELLERY_CATEGORIES: JewelleryCategory[] = [
  {
    id: "gold",
    title: "Gold",
    purityNote: "24K, 22K, 18K & Traditional Gold",
    shortDescription:
      "From everyday gold chains and rings to bangles and traditional ornaments, discover our gold jewellery buying and selling services.",
    heroImage: "/images/product_gold_collection_1793250070897.jpg",
    weBuy: {
      heading: "Sell Your Old Gold with Confidence",
      subheading: "Transparent evaluation of old, unworn, or heirloom gold jewellery",
      description:
        "Looking to sell gold jewellery you no longer use? Bring your gold items to Raman Assayers for an evaluation and a clear explanation of the offer. Our team aims to make the process straightforward, respectful, and transparent.",
      commonItems: [
        "Gold rings and bands",
        "Chains, ropes, and necklaces",
        "Bangles, kadas, and bracelets",
        "Traditional gold ornaments & temple pieces",
        "Earrings, coins, and vintage gold articles"
      ],
      keyPoints: [
        "Item-by-item physical jewellery assessment",
        "Purity and gross/net weight evaluation in your presence",
        "Clear, itemized explanation of the calculation and offer",
        "Payment arrangements confirmed before completing the transaction"
      ],
      ctaText: "Enquire About Selling Gold",
      whatsappType: "sell",
      image: "/images/hero_jewellery_craft_1793250069869.jpg",
      imageAlt: "Detailed evaluation of traditional gold jewellery ornament"
    },
    weSell: {
      heading: "Discover Gold Jewellery",
      subheading: "Curated pre-owned gold pieces, subject to verified availability",
      description:
        "Interested in purchasing gold jewellery? Contact our team to enquire about available pieces, pricing, purity details, and purchase terms.",
      keyPoints: [
        "Enquire about available designs and weight ranges",
        "Request comprehensive product and pricing details",
        "Confirm item-specific purity information before purchasing",
        "Contact the team before visiting to verify availability for a specific item"
      ],
      ctaText: "Enquire About Gold Jewellery",
      whatsappType: "buy",
      image: "/images/product_gold_collection_1793250070897.jpg",
      imageAlt: "Exquisite handcrafted gold bangles and necklace collection"
    }
  },
  {
    id: "silver",
    title: "Silver",
    purityNote: "Sterling 925 & Traditional Silver Articles",
    shortDescription:
      "Learn about our silver jewellery buying and selling services, with a focus on clear evaluation and transparent transactions.",
    heroImage: "/images/product_silver_collection_1793250071468.jpg",
    weBuy: {
      heading: "Get Your Silver Jewellery Evaluated",
      subheading: "Fair assessment for silver jewellery, utensils, and articles",
      description:
        "Bring your old silver jewellery and eligible silver items to Raman Assayers for assessment. Our team will explain the evaluation and available offer before you decide whether to proceed.",
      commonItems: [
        "Silver anklets (kolusu), payals, and chains",
        "Silver bangles, bracelets, and rings",
        "Pooja silverware, lamps (diyas), and utensils",
        "Fine sterling silver (925) ornaments",
        "Silver bars, coins, and heritage silverware"
      ],
      keyPoints: [
        "Thorough silver jewellery and silverware assessment",
        "Applicable purity and gross/net weight checks",
        "Clear, transparent pricing explanation with zero hidden deductions",
        "Straightforward, respectful transaction process"
      ],
      ctaText: "Enquire About Selling Silver",
      whatsappType: "sell",
      image: "/images/product_silver_collection_1793250071468.jpg",
      imageAlt: "Intricate handcrafted silver jewellery and traditional silverware"
    },
    weSell: {
      heading: "Explore Silver Jewellery",
      subheading: "Enquire about select pre-owned silver jewellery and articles",
      description:
        "Looking for silver jewellery or selected silver pieces? Contact our team to enquire about current availability, item details, pricing, and purchase terms.",
      keyPoints: [
        "Direct availability enquiries for silver collections",
        "Product weight, purity, and craftsmanship detail confirmation",
        "Transparent pricing enquiries before showroom visit",
        "Personal assistance tailored to your requirements"
      ],
      ctaText: "Enquire About Silver Jewellery",
      whatsappType: "buy",
      image: "/images/product_silver_collection_1793250071468.jpg",
      imageAlt: "Artisan sterling silver ornaments and engraved silverware"
    }
  },
  {
    id: "diamond",
    title: "Diamond",
    purityNote: "Solitaires, Polki, Diamond Rings & Necklaces",
    shortDescription:
      "Explore our diamond jewellery services, including enquiries about pre-owned diamond pieces and the evaluation of jewellery offered for sale.",
    heroImage: "/images/product_diamond_solitaire_1793250071467.jpg",
    weBuy: {
      heading: "Understand the Value of Your Diamond Jewellery",
      subheading: "Individual item evaluation with consideration for characteristics & paperwork",
      description:
        "If you are considering selling diamond jewellery, contact Raman Assayers to enquire about an evaluation. Assessment may depend on the individual piece, its characteristics, documentation, and applicable market conditions.",
      commonItems: [
        "Solitaire diamond engagement and cocktail rings",
        "Diamond stud earrings and tennis bracelets",
        "Diamond studded necklaces, pendants, and chokers",
        "Uncut diamond (Polki) and heritage diamond sets",
        "Pre-owned fine diamond jewellery with or without certificates"
      ],
      keyPoints: [
        "Item-specific assessment of metal mount and diamond setting",
        "Relevant diamond characteristics (cut, clarity, color, carat) considered",
        "Clear, detailed explanation of the proposed valuation",
        "Documentation, certificates, and authenticity enquiries where applicable"
      ],
      ctaText: "Enquire About Selling Diamonds",
      whatsappType: "sell",
      image: "/images/product_diamond_solitaire_1793250071467.jpg",
      imageAlt: "Macro view of brilliant solitaire diamond ring and diamond bracelet"
    },
    weSell: {
      heading: "Discover Diamond Jewellery",
      subheading: "Enquiries for verified pre-owned diamond jewellery",
      description:
        "Interested in diamond jewellery? Contact our team to enquire about available pieces, diamond details, documentation, pricing, and purchase terms.",
      keyPoints: [
        "Enquire about currently available diamond items in showroom",
        "Confirm diamond specifications and stone settings",
        "Request applicable grading documentation or appraisal details",
        "Discuss fair pricing and purchase terms in a private setting"
      ],
      ctaText: "Enquire About Diamond Jewellery",
      whatsappType: "buy",
      image: "/images/product_diamond_solitaire_1793250071467.jpg",
      imageAlt: "Fine diamond jewellery with scintillating diamond facets"
    }
  },
  {
    id: "platinum",
    title: "Platinum",
    purityNote: "Pt 950 Certified Bands, Rings & Chains",
    shortDescription:
      "Discover our platinum jewellery buying and selling services, with enquiries handled through our customer service team.",
    heroImage: "/images/product_platinum_band_1793250071675.jpg",
    weBuy: {
      heading: "Explore the Value of Your Platinum Jewellery",
      subheading: "Specialized assessment for platinum rings, bands, and chains",
      description:
        "Bring your platinum jewellery to enquire about evaluation and selling options. The assessment and offer will depend on the item and the relevant evaluation criteria.",
      commonItems: [
        "Platinum wedding bands and love bands",
        "Platinum solitaire ring settings",
        "Platinum chains and minimalist necklaces",
        "Platinum and gold combination jewellery",
        "Pre-owned platinum bracelets and ornaments"
      ],
      keyPoints: [
        "Item-specific jewellery assessment using dedicated instruments",
        "Applicable Pt950 purity hallmarks and weight checks",
        "Clear explanation of the offer based on current market dynamics",
        "Transaction terms and payout method confirmed before proceeding"
      ],
      ctaText: "Enquire About Selling Platinum",
      whatsappType: "sell",
      image: "/images/product_platinum_band_1793250071675.jpg",
      imageAlt: "Pair of polished platinum bands and fine platinum chain"
    },
    weSell: {
      heading: "Discover Platinum Jewellery",
      subheading: "Enquire about select pre-owned platinum pieces",
      description:
        "Looking for platinum jewellery? Contact Raman Assayers to enquire about current availability, specifications, pricing, and purchase terms.",
      keyPoints: [
        "Showroom availability enquiries for platinum designs",
        "Item-specific specifications and hallmark details confirmed",
        "Transparent pricing confirmation with no hidden charges",
        "Dedicated customer assistance before your showroom visit"
      ],
      ctaText: "Enquire About Platinum Jewellery",
      whatsappType: "buy",
      image: "/images/product_platinum_band_1793250071675.jpg",
      imageAlt: "Minimalist platinum wedding rings on natural slate"
    }
  }
];
