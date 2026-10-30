import React, { useEffect } from "react";
import { X, Shield, FileText } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? "Privacy Policy" : "Terms and Conditions"}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-[#FAF7F0] border border-[#B89452]/40 rounded-xs shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#101A2B] text-white flex items-center justify-between border-b border-[#B89452]/30">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <Shield className="w-5 h-5 text-[#B89452]" />
            ) : (
              <FileText className="w-5 h-5 text-[#B89452]" />
            )}
            <div>
              <h3 className="font-serif text-xl font-medium text-white">
                {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
              </h3>
              <p className="text-[11px] text-[#E8DCC5]/70">
                Raman Assayers · Alwarpet, Chennai 600018
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#B89452]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#292929] leading-relaxed">
          {isPrivacy ? (
            <>
              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  1. Information We Collect
                </h4>
                <p className="text-[#777777]">
                  When you submit an enquiry on our website or contact us via telephone or WhatsApp,
                  we collect your name, contact phone number, email address (if provided), and jewellery details
                  solely to provide transparent valuation and appointment services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  2. Use of Information
                </h4>
                <p className="text-[#777777]">
                  Your information is used strictly to respond to your specific enquiry, confirm appointments at our
                  Alwarpet showroom, and communicate evaluation requirements. We do not sell, rent, or trade your personal information to third parties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  3. In-Person Showroom Security & KYC
                </h4>
                <p className="text-[#777777]">
                  For transactions completed in our showroom, applicable Indian regulatory laws may require
                  identity verification (e.g. government-issued photo ID such as Aadhaar or PAN card). Such records are retained in compliance with local regulations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  4. Contact & Inquiries
                </h4>
                <p className="text-[#777777]">
                  For questions regarding your data privacy, contact us at {BUSINESS_DETAILS.email} or call {BUSINESS_DETAILS.phoneDisplay}.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  1. Valuation & In-Person Inspection
                </h4>
                <p className="text-[#777777]">
                  All jewellery buying and selling assessments conducted by Raman Assayers require physical,
                  in-person inspection of the items at our showroom located at No. 20, KB Dasan Road, Alwarpet, Chennai.
                  No binding offers are made solely over telephone or online messaging.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  2. Offer Acceptance & Transparency
                </h4>
                <p className="text-[#777777]">
                  Valuation offers are based on individual piece evaluation, net metal weight, tested purity,
                  gemstone characteristics, and applicable market rates on the date of transaction. Customers are under no obligation to accept any valuation offer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  3. Pre-Owned Inventory Availability
                </h4>
                <p className="text-[#777777]">
                  Pre-owned jewellery items shown or discussed are subject to prior sale and physical stock availability in our showroom. Please contact our team prior to visiting to confirm item availability.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#101A2B] text-sm mb-1">
                  4. Regulatory Compliance
                </h4>
                <p className="text-[#777777]">
                  All sales and purchase transactions comply with applicable commercial and precious metal laws of Tamil Nadu and India.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[#E8DCC5] text-[11px] text-[#777777] italic">
            Note: These basic policies reflect operational practices and are subject to final legal and owner review.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8DCC5] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#101A2B] text-white hover:bg-[#162238] text-xs font-semibold uppercase tracking-wider rounded-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
