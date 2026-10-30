import React from "react";
import { ArrowRight } from "lucide-react";
import { JewelleryCategory } from "../data/jewelleryCategories";

interface ProductCategoryCardProps {
  category: JewelleryCategory;
  onExplore: (id: string) => void;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  category,
  onExplore
}) => {
  return (
    <div className="group bg-white border border-[#E8DCC5] hover:border-[#B89452] transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between shadow-xs">
      {/* Category Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#101A2B]">
        <img
          src={category.heroImage}
          alt={`${category.title} jewellery collection`}
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#FAF7F0]">
          <span className="font-serif text-lg font-medium text-white">{category.title}</span>
          <span className="text-[11px] text-[#E8DCC5]/90 tracking-wide">{category.purityNote}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-medium text-[#101A2B]">
            {category.title} Jewellery
          </h3>
          <p className="mt-2 text-sm text-[#777777] leading-relaxed">
            {category.shortDescription}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onExplore(category.id)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89452] hover:text-[#96763A] transition-colors focus:outline-none pt-2"
        >
          <span>Explore {category.title}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
