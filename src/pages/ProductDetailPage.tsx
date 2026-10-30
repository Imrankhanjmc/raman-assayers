import React, { useEffect } from "react";
import { ArrowLeft, MessageSquare, Phone, MapPin, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { JewelleryCategory, JEWELLERY_CATEGORIES } from "../data/jewelleryCategories";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink } from "../lib/contactLinks";

interface ProductDetailPageProps {
  categoryId: "gold" | "silver" | "diamond" | "platinum";
  onNavigateHome: () => void;
  onNavigateCategory: (id: "gold" | "silver" | "diamond" | "platinum") => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  categoryId,
  onNavigateHome,
  onNavigateCategory
}) => {
  const category =
    JEWELLERY_CATEGORIES.find((c) => c.id === categoryId) || JEWELLERY_CATEGORIES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryId]);

  const whatsappPhone = (BUSINESS_DETAILS.whatsappNumber || "+919840215916").replace(/[^0-9]/g, "");

  const getWhatsAppBuyLink = () => {
    const text = `Hello Raman Assayers, I would like to enquire about selling my ${category.title} jewellery. Please share the evaluation process and visiting details.`;
    return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppSellLink = () => {
    const text = `Hello Raman Assayers, I would like to enquire about purchasing pre-owned ${category.title} jewellery. Please share available pieces and appointment details.`;
    return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(text)}`;
  };

  const otherCategories = JEWELLERY_CATEGORIES.filter((c) => c.id !== category.id);

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
          <span className="text-[#101A2B] font-medium">{category.title} Jewellery</span>
        </nav>

        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101A2B] hover:text-[#B89452] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>
        </div>

        {/* Hero Banner: Minimalist & Refined */}
        <div className="bg-[#101A2B] text-[#FAF7F0] rounded-xs border border-[#B89452]/30 p-8 sm:p-12 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#B89452] font-semibold block">
                {category.purityNote}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
                {category.title} Jewellery
              </h1>
              <p className="text-base text-[#FAF7F0]/85 leading-relaxed max-w-xl">
                {category.shortDescription}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E8DCC5]/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B89452]" />
                  Transparent In-Person Evaluation
                </span>
                <span>·</span>
                <span>Alwarpet, Chennai</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#B89452]/40 bg-[#162238]">
                <img
                  src={category.heroImage}
                  alt={`${category.title} jewellery close-up photography`}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal 2-Panel Content: We Buy & We Sell */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Panel 1: We Buy */}
          <div className="bg-white border border-[#E8DCC5] p-7 sm:p-8 rounded-xs shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-3 border-b border-[#E8DCC5]">
                <span className="text-[11px] uppercase tracking-widest text-[#B89452] font-semibold block">
                  Buying Service
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#101A2B] mt-1">
                  We Buy {category.title}
                </h2>
              </div>

              <p className="text-sm text-[#777777] leading-relaxed">
                {category.weBuy.description}
              </p>

              {/* Items */}
              {category.weBuy.commonItems && (
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#101A2B] font-semibold block mb-2">
                    Common Items Evaluated:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#292929]/80">
                    {category.weBuy.commonItems.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#B89452]">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key points */}
              <div className="pt-3 border-t border-[#E8DCC5]/60 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#101A2B] font-semibold block">
                  Key Evaluation Highlights:
                </span>
                {category.weBuy.keyPoints.slice(0, 3).map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#292929]/85">
                    <Check className="w-3.5 h-3.5 text-[#B89452] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-[#E8DCC5] flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppBuyLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp to Sell {category.title}</span>
              </a>

              <a
                href={getPhoneLink()}
                className="px-4 py-2.5 border border-[#101A2B] text-[#101A2B] hover:bg-[#101A2B] hover:text-white text-xs font-medium uppercase tracking-wider rounded-xs transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Panel 2: We Sell */}
          <div className="bg-white border border-[#E8DCC5] p-7 sm:p-8 rounded-xs shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-3 border-b border-[#E8DCC5]">
                <span className="text-[11px] uppercase tracking-widest text-[#B89452] font-semibold block">
                  Pre-Owned Enquiries
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#101A2B] mt-1">
                  We Sell {category.title}
                </h2>
              </div>

              <p className="text-sm text-[#777777] leading-relaxed">
                {category.weSell.description}
              </p>

              {/* Key points */}
              <div className="pt-3 border-t border-[#E8DCC5]/60 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#101A2B] font-semibold block mb-2">
                  Enquiry & Purchase Details:
                </span>
                {category.weSell.keyPoints.slice(0, 3).map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#292929]/85">
                    <Check className="w-3.5 h-3.5 text-[#B89452] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#FAF7F0] border border-[#E8DCC5] rounded-xs text-[11px] text-[#777777]">
                Note: Pre-owned items are subject to verified showroom availability. Please enquire prior to visiting for specific pieces.
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-[#E8DCC5] flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppSellLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B89452] hover:bg-[#c9a665] text-[#101A2B] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp to Buy {category.title}</span>
              </a>

              <a
                href={getPhoneLink()}
                className="px-4 py-2.5 border border-[#E8DCC5] text-[#101A2B] hover:bg-[#FAF7F0] text-xs font-medium uppercase tracking-wider rounded-xs transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Category Switcher Strip */}
        <div className="bg-white border border-[#E8DCC5] p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-wider text-[#101A2B] font-semibold">
            Explore Other Categories:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {otherCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onNavigateCategory(c.id)}
                className="px-3.5 py-1.5 border border-[#E8DCC5] hover:border-[#B89452] text-xs font-medium text-[#101A2B] hover:text-[#B89452] rounded-xs transition-colors"
              >
                {c.title} Jewellery
              </button>
            ))}
          </div>
        </div>

        {/* Showroom Visit Contact Card */}
        <div className="mt-8 p-6 bg-[#162238] text-white rounded-xs border border-[#B89452]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block">
              Showroom Location
            </span>
            <p className="text-sm font-medium">
              No. 20, KB Dasan Road, opposite Girishwari Hospital, Alwarpet, Chennai 600018
            </p>
            <p className="text-xs text-[#E8DCC5]/70">
              Phone: {BUSINESS_DETAILS.phoneDisplay} · WhatsApp: {BUSINESS_DETAILS.whatsappDisplay}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(`Hello Raman Assayers, I would like to visit your showroom for ${category.title} jewellery.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={getPhoneLink()}
              className="px-4 py-2.5 bg-[#B89452] text-[#101A2B] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
