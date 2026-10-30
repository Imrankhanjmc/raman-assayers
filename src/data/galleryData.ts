export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "gold" | "silver" | "diamond" | "platinum";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  craftsmanshipDetail: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Heritage 22K Gold Temple Choker & Bangles",
    category: "gold",
    categoryLabel: "Gold Jewellery",
    image: "/images/hero_jewellery_craft_1793250069869.jpg",
    alt: "Traditional Indian gold necklace with ornate filigree and gemstone inlays",
    description: "Detailed hand-embossed gold floral motifs, delicate droplet tassels, and stone settings.",
    craftsmanshipDetail: "Evaluated for gross vs. net gold weight, purity testing, and craft assessment."
  },
  {
    id: "g2",
    title: "Handcrafted 22K Gold Bangles & Bridal Set",
    category: "gold",
    categoryLabel: "Gold Jewellery",
    image: "/images/product_gold_collection_1793250070897.jpg",
    alt: "Arrangement of 22k gold bangles with intricate engraving and ruby-emerald motifs",
    description: "Classic South Indian bridal bangles and layered necklace resting on warm travertine.",
    craftsmanshipDetail: "Careful purity verification with density and touchstone testing protocols."
  },
  {
    id: "g3",
    title: "Artisanal Sterling Silver Articles & Ornaments",
    category: "silver",
    categoryLabel: "Silver Jewellery & Articles",
    image: "/images/product_silver_collection_1793250071468.jpg",
    alt: "Sterling silver engraved bowl, silver bangles, anklets, and turquoise pendant",
    description: "Intricately chiseled silver bowl, hammered bangles, and delicate 925 silver chain necklace.",
    craftsmanshipDetail: "Standardized weight checks and alloy composition assessment."
  },
  {
    id: "g4",
    title: "Solitaire Diamond Ring & Tennis Bracelet",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    image: "/images/product_diamond_solitaire_1793250071467.jpg",
    alt: "Solitaire diamond ring on deep navy textured fabric alongside diamond tennis bracelet",
    description: "Brilliant-cut solitaire diamond with micro-pavé halo setting on 18K white gold mount.",
    craftsmanshipDetail: "Individual 4Cs examination, mounting integrity review, and documentation assessment."
  },
  {
    id: "g5",
    title: "Pt 950 Platinum Couple Bands & Cable Chain",
    category: "platinum",
    categoryLabel: "Platinum Jewellery",
    image: "/images/product_platinum_band_1793250071675.jpg",
    alt: "Pair of polished platinum wedding bands with milgrain detail and platinum chain",
    description: "Subtle satin-brushed finish and high-polish bevels on 950 purity platinum bands.",
    craftsmanshipDetail: "Pt950 hallmark verification, density check, and accurate material evaluation."
  }
];
