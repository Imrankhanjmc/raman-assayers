import React from "react";
import { ArrowRight, Star, Globe, ShieldCheck } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";

interface HeroSectionProps {
  onSellClick: () => void;
  onExploreProductsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSellClick,
  onExploreProductsClick
}) => {
  return (
    <section id="home" className="relative bg-[#101A2B] text-[#FAF7F0] overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Subtle architectural gold hairline divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B89452]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Brand Proposition (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow - clean unboxed typography */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452]">
              <span className="w-6 h-px bg-[#B89452]" aria-hidden="true" />
              <span>TRUSTED JEWELLERY BUYING & SELLING IN CHENNAI</span>
            </div>

            {/* Social Proof Strip: 4.9K+ Google Reviews & International Clients */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              {/* Google Reviews */}
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-xs bg-white/5 border border-[#B89452]/30 text-[#FAF7F0]">
                <div className="flex items-center gap-0.5 text-[#B89452]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-semibold text-white">4.9 / 5</span>
                <span className="text-[#E8DCC5]/80 font-normal">· Over 4,900+ Google Reviews</span>
              </div>

              {/* Worldwide Clients */}
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-xs bg-white/5 border border-white/10 text-[#E8DCC5]">
                <Globe className="w-3.5 h-3.5 text-[#B89452]" />
                <span className="font-medium">Worldwide Clients</span>
              </div>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] text-balance">
              Your Jewellery Deserves Its True Value.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#FAF7F0]/85 font-normal leading-relaxed max-w-2xl">
              Sell your old gold, silver, diamond, and platinum jewellery with confidence.
              Discover a transparent evaluation process, professional service, and a team
              trusted by thousands of customers across Chennai, India, and worldwide.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onSellClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B89452] text-[#101A2B] hover:bg-[#c9a665] active:bg-[#96763A] text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <span>Sell Your Jewellery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreProductsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#E8DCC5]/40 text-[#FAF7F0] hover:bg-white/5 hover:border-[#B89452] text-sm font-medium tracking-wider rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452] whitespace-nowrap"
              >
                <span>Explore Our Products</span>
              </button>
            </div>

            {/* Small Trust Line - Clean typography without pills */}
            <div className="pt-4 border-t border-[#FAF7F0]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#E8DCC5]/80 font-medium tracking-wide">
              <span>Over 31+ Years of Experience</span>
              <span aria-hidden="true" className="text-[#B89452]">·</span>
              <span>4,900+ Google Reviews</span>
              <span aria-hidden="true" className="text-[#B89452]">·</span>
              <span>Worldwide Clients</span>
              <span aria-hidden="true" className="text-[#B89452]">·</span>
              <span>Alwarpet, Chennai</span>
            </div>
          </div>

          {/* Right Column: Premium Jewellery Visual (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer hairline border framing the photo */}
              <div className="relative p-2 rounded-xs border border-[#B89452]/30 bg-[#162238]">
                <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 overflow-hidden rounded-xs bg-[#101A2B]">
                  <img
                    src="/images/hero_jewellery_craft_1793250069869.jpg"
                    alt="Handcrafted Indian gold jewellery and ornate filigree ornament on travertine pedestal"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#FAF7F0]/90 bg-[#101A2B]/85 backdrop-blur-xs px-3 py-1.5 border border-[#B89452]/20">
                    <span className="font-serif italic tracking-wider">Traditional South Indian Craftsmanship</span>
                    <span className="text-[#B89452] uppercase tracking-wider text-[10px]">Global Valuation Standard</span>
                  </div>
                </div>
              </div>

              {/* Decorative gold angle accent */}
              <div className="hidden sm:block absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#B89452]" aria-hidden="true" />
              <div className="hidden sm:block absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#B89452]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
