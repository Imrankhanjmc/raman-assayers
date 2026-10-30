import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { JEWELLERY_CATEGORIES, JewelleryCategory } from "../data/jewelleryCategories";

interface ProductsIndexPageProps {
  onNavigateHome: () => void;
  onNavigateCategory: (id: "gold" | "silver" | "diamond" | "platinum") => void;
}

export const ProductsIndexPage: React.FC<ProductsIndexPageProps> = ({
  onNavigateHome,
  onNavigateCategory
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#FAF7F0] text-[#292929] min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#777777] mb-8">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#B89452] transition-colors focus:outline-none"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#101A2B] font-medium">All Jewellery Categories</span>
        </nav>

        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101A2B] hover:text-[#B89452] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.22em] text-[#B89452] font-semibold block mb-2">
            RAMAN ASSAYERS CATEGORIES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#101A2B] leading-tight">
            Our Jewellery Services
          </h1>
          <p className="mt-4 text-base text-[#777777] leading-relaxed">
            Select a precious metal category below to view detailed buying and selling information, common items evaluated, and showroom enquiry options.
          </p>
        </div>

        {/* Minimal 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JEWELLERY_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigateCategory(category.id)}
              className="group bg-white border border-[#E8DCC5] hover:border-[#B89452] p-5 rounded-xs shadow-xs cursor-pointer flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-[#101A2B] mb-4">
                  <img
                    src={category.heroImage}
                    alt={`${category.title} jewellery`}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#B89452] font-semibold block mb-1">
                  {category.purityNote}
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#101A2B] group-hover:text-[#B89452] transition-colors">
                  {category.title}
                </h2>
                <p className="text-xs text-[#777777] mt-2 leading-relaxed">
                  {category.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DCC5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#101A2B] group-hover:text-[#B89452] transition-colors">
                <span>View {category.title} Page</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
