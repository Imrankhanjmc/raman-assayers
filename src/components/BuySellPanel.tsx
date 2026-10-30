import React from "react";
import { Check, MessageSquare, Phone } from "lucide-react";
import { CategoryPanel } from "../data/jewelleryCategories";
import { getWhatsAppLink, getPhoneLink } from "../lib/contactLinks";

interface BuySellPanelProps {
  panelType: "buy" | "sell";
  categoryTitle: string;
  panelData: CategoryPanel;
}

export const BuySellPanel: React.FC<BuySellPanelProps> = ({
  panelType,
  categoryTitle,
  panelData
}) => {
  const isWeBuy = panelType === "buy"; // "buy" from customer perspective = We Buy
  const whatsappUrl = getWhatsAppLink(categoryTitle, isWeBuy ? "sell" : "buy");

  return (
    <div
      className={`p-6 sm:p-8 rounded-xs border transition-all ${
        isWeBuy
          ? "bg-[#101A2B] text-[#FAF7F0] border-[#B89452]/40"
          : "bg-white text-[#292929] border-[#E8DCC5]"
      }`}
    >
      {/* Panel Type Kicker */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-current/10">
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            isWeBuy ? "text-[#B89452]" : "text-[#101A2B]"
          }`}
        >
          {isWeBuy ? "Service: We Buy Old Jewellery" : "Service: Pre-Owned Jewellery Enquiries"}
        </span>
        <span
          className={`text-[11px] px-2 py-0.5 rounded-xs ${
            isWeBuy
              ? "bg-[#B89452]/20 text-[#E8DCC5]"
              : "bg-[#FAF7F0] text-[#777777] border border-[#E8DCC5]"
          }`}
        >
          {isWeBuy ? "Evaluation in Showroom" : "Subject to Availability"}
        </span>
      </div>

      {/* Main Heading & Description */}
      <div className="mt-5 space-y-2.5">
        <h4
          className={`font-serif text-2xl sm:text-3xl font-medium leading-snug ${
            isWeBuy ? "text-white" : "text-[#101A2B]"
          }`}
        >
          {panelData.heading}
        </h4>
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isWeBuy ? "text-[#FAF7F0]/85" : "text-[#777777]"
          }`}
        >
          {panelData.description}
        </p>
      </div>

      {/* Common Items Checked if applicable */}
      {panelData.commonItems && panelData.commonItems.length > 0 && (
        <div className="mt-6 pt-5 border-t border-current/10">
          <span
            className={`text-xs uppercase tracking-wider font-semibold block mb-3 ${
              isWeBuy ? "text-[#E8DCC5]" : "text-[#101A2B]"
            }`}
          >
            Common Items Evaluated:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {panelData.commonItems.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2 text-xs leading-normal ${
                  isWeBuy ? "text-[#FAF7F0]/80" : "text-[#292929]/80"
                }`}
              >
                <span className="text-[#B89452] mt-0.5 shrink-0">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Evaluation / Purchase Points */}
      <div className="mt-6 pt-5 border-t border-current/10">
        <span
          className={`text-xs uppercase tracking-wider font-semibold block mb-3 ${
            isWeBuy ? "text-[#E8DCC5]" : "text-[#101A2B]"
          }`}
        >
          {isWeBuy ? "Our Evaluation Standard:" : "Purchase & Enquiry Guidelines:"}
        </span>
        <ul className="space-y-2">
          {panelData.keyPoints.map((point, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-2 text-xs sm:text-sm leading-relaxed ${
                isWeBuy ? "text-[#FAF7F0]/85" : "text-[#292929]/85"
              }`}
            >
              <Check className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-5 border-t border-current/10 flex flex-wrap items-center gap-3">
        {/* Primary WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shadow-2xs ${
            isWeBuy
              ? "bg-[#25D366] hover:bg-[#20ba59] text-white"
              : "bg-[#25D366] hover:bg-[#20ba59] text-white"
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Enquiry</span>
        </a>

        {/* Secondary Call Showroom Action */}
        <a
          href={getPhoneLink()}
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium uppercase tracking-wider rounded-xs border transition-colors whitespace-nowrap ${
            isWeBuy
              ? "border-[#E8DCC5]/30 text-[#FAF7F0] hover:bg-white/10"
              : "border-[#101A2B] text-[#101A2B] hover:bg-[#101A2B] hover:text-white"
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Showroom</span>
        </a>
      </div>
    </div>
  );
};
