import React, { useState } from "react";
import { JEWELLERY_CATEGORIES, JewelleryCategory } from "../data/jewelleryCategories";
import { ProductCategoryCard } from "./ProductCategoryCard";
import { BuySellPanel } from "./BuySellPanel";
import { Info } from "lucide-react";

interface JewelleryCategoriesSectionProps {
  activeCategory?: string;
  onNavigateToPage?: (page: "gold" | "silver" | "diamond" | "platinum") => void;
}

export const JewelleryCategoriesSection: React.FC<JewelleryCategoriesSectionProps> = ({
  activeCategory: externalActiveCategory,
  onNavigateToPage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("gold");

  // Keep internal state updated if external category changes
  const activeCatId = externalActiveCategory || selectedCategory;
  const currentCategory =
    JEWELLERY_CATEGORIES.find((c) => c.id === activeCatId) || JEWELLERY_CATEGORIES[0];

  const handleSelectCategory = (id: string) => {
    if (onNavigateToPage && (id === "gold" || id === "silver" || id === "diamond" || id === "platinum")) {
      onNavigateToPage(id);
      return;
    }
    setSelectedCategory(id);
    const detailSection = document.getElementById("category-details");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-24 bg-[#FAF7F0] border-t border-[#E8DCC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
            <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
            <span>EXPLORE OUR CATEGORIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#101A2B] leading-tight text-balance">
            Explore Jewellery Across Four Categories.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] leading-relaxed">
            Whether you want to sell jewellery you no longer use or explore pre-owned pieces,
            discover our gold, silver, diamond, and platinum categories.
          </p>
        </div>

        {/* 4 Category Overview Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JEWELLERY_CATEGORIES.map((category) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              onExplore={handleSelectCategory}
            />
          ))}
        </div>

        {/* Detailed Category Buying & Selling Deep Dive */}
        <div id="category-details" className="mt-20 pt-16 border-t border-[#E8DCC5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block">
                Detailed Services
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#101A2B] mt-1">
                {currentCategory.title} Buying & Selling Details
              </h3>
              <p className="text-sm text-[#777777] mt-1">
                {currentCategory.purityNote} · Dedicated valuation in Alwarpet, Chennai
              </p>
            </div>

            {/* Interactive Category Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DCC5] rounded-xs overflow-x-auto max-w-full">
              {JEWELLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap ${
                    currentCategory.id === cat.id
                      ? "bg-[#101A2B] text-white"
                      : "text-[#292929] hover:bg-[#FAF7F0]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Differentiated Side-by-Side Panels: We Buy vs We Sell */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* We Buy Panel */}
            <BuySellPanel
              panelType="buy"
              categoryTitle={currentCategory.title}
              panelData={currentCategory.weBuy}
            />

            {/* We Sell Panel */}
            <BuySellPanel
              panelType="sell"
              categoryTitle={currentCategory.title}
              panelData={currentCategory.weSell}
            />
          </div>

          {/* Important Transparency Notice */}
          <div className="mt-8 p-4 bg-white border border-[#E8DCC5] rounded-xs flex items-start gap-3 text-xs text-[#777777] leading-relaxed">
            <Info className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#101A2B] font-medium">Evaluation Policy Notice: </strong>
              All valuations require in-person inspection of the physical piece at our Alwarpet showroom.
              Values are determined according to the individual item, tested purity, accurate net weight,
              and prevailing market conditions on the day of evaluation. Pre-owned inventory is subject to confirmed availability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
