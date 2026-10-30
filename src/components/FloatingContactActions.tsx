import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink, getWhatsAppLink } from "../lib/contactLinks";

export const FloatingContactActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto p-2.5 rounded-full bg-[#101A2B] text-[#B89452] border border-[#B89452]/40 shadow-lg hover:bg-[#162238] hover:text-white transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp action */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Raman Assayers on WhatsApp: ${BUSINESS_DETAILS.whatsappDisplay}`}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Call button */}
      <a
        href={getPhoneLink()}
        aria-label={`Call Raman Assayers at ${BUSINESS_DETAILS.phoneDisplay}`}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#B89452] text-[#101A2B] shadow-lg hover:bg-[#c9a665] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101A2B] group"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
          Call Showroom
        </span>
      </a>
    </aside>
  );
};
