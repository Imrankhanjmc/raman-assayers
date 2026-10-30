import React, { useEffect } from "react";
import { X, Phone, MessageSquare, ChevronRight, MapPin } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink, getWhatsAppLink } from "../lib/contactLinks";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToPage: (page: "home" | "products" | "gold" | "silver" | "diamond" | "platinum") => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
  onNavigateToPage
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavSection = (id: string) => {
    onClose();
    onNavigateToSection(id);
  };

  const handleNavPage = (page: "home" | "products" | "gold" | "silver" | "diamond" | "platinum") => {
    onClose();
    onNavigateToPage(page);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-sm bg-[#101A2B] text-[#FAF7F0] h-full flex flex-col justify-between shadow-2xl border-l border-[#B89452]/30 p-6 overflow-y-auto">
        <div>
          {/* Header row with logo and close button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#FAF7F0]/10">
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Raman Assayers
              </span>
              <p className="text-[11px] text-[#E8DCC5]/70 tracking-wider uppercase">
                Alwarpet · Chennai
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#B89452]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="mt-6 flex flex-col space-y-1">
            <button
              onClick={() => handleNavPage("home")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>

            <button
              onClick={() => handleNavSection("about")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>

            {/* Individual Product Pages */}
            <div className="py-2 border-b border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="block text-xs uppercase tracking-wider text-[#B89452] font-semibold">
                  Product Pages
                </span>
                <button
                  type="button"
                  onClick={() => handleNavPage("products")}
                  className="text-[11px] text-[#E8DCC5]/70 hover:text-[#B89452] underline"
                >
                  All Products
                </button>
              </div>
              <div className="pl-3 space-y-2">
                <button
                  onClick={() => handleNavPage("gold")}
                  className="block text-sm text-[#FAF7F0]/90 hover:text-[#B89452] py-1 text-left w-full font-medium"
                >
                  Gold Jewellery Page →
                </button>
                <button
                  onClick={() => handleNavPage("silver")}
                  className="block text-sm text-[#FAF7F0]/90 hover:text-[#B89452] py-1 text-left w-full font-medium"
                >
                  Silver Jewellery & Articles Page →
                </button>
                <button
                  onClick={() => handleNavPage("diamond")}
                  className="block text-sm text-[#FAF7F0]/90 hover:text-[#B89452] py-1 text-left w-full font-medium"
                >
                  Diamond Jewellery Page →
                </button>
                <button
                  onClick={() => handleNavPage("platinum")}
                  className="block text-sm text-[#FAF7F0]/90 hover:text-[#B89452] py-1 text-left w-full font-medium"
                >
                  Platinum Jewellery Page →
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavSection("why-choose-us")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>Why Choose Us</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>

            <button
              onClick={() => handleNavSection("how-it-works")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>How It Works</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>

            <button
              onClick={() => handleNavSection("gallery")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>Jewellery Gallery</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>

            <button
              onClick={() => handleNavSection("contact")}
              className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-[#FAF7F0] hover:text-[#B89452] border-b border-white/5"
            >
              <span>Contact Showroom</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>
          </nav>
        </div>

        {/* Bottom Contact Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-start gap-2 text-xs text-[#FAF7F0]/70">
            <MapPin className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
            <span>No. 20, KB Dasan Road, opposite Girishwari Hospital, Alwarpet, Chennai 600018</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={getPhoneLink()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#B89452] text-[#101A2B] text-xs font-semibold uppercase tracking-wider rounded-sm text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-semibold uppercase tracking-wider rounded-sm text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
