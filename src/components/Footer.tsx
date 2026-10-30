import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink, getEmailLink, getDirectionsLink, getWhatsAppLink } from "../lib/contactLinks";

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToPage: (page: "home" | "products" | "gold" | "silver" | "diamond" | "platinum") => void;
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onNavigateToPage,
  onOpenLegal
}) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigateToSection(id);
  };

  const handlePageLink = (
    e: React.MouseEvent,
    page: "products" | "gold" | "silver" | "diamond" | "platinum"
  ) => {
    e.preventDefault();
    onNavigateToPage(page);
  };

  return (
    <footer className="bg-[#101A2B] text-[#FAF7F0] border-t border-[#B89452]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl font-semibold tracking-wide text-white block">
              Raman Assayers
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89452] font-semibold">
              Alwarpet · Chennai
            </p>
            <p className="text-sm text-[#FAF7F0]/80 leading-relaxed max-w-sm">
              Your jewellery deserves its true value. Discover jewellery buying and selling services
              built around transparency, professional evaluation, and customer confidence.
            </p>
            <div className="pt-2 text-xs text-[#E8DCC5]/70">
              {BUSINESS_DETAILS.experienceStatement} · Tamil Nadu, India
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B89452] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F0]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToPage("home")}
                  className="hover:text-[#B89452] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLink(e, "about")}
                  className="hover:text-[#B89452] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handlePageLink(e, "products")}
                  className="hover:text-[#B89452] transition-colors text-left"
                >
                  Our Products
                </button>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLink(e, "why-choose-us")}
                  className="hover:text-[#B89452] transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleLink(e, "how-it-works")}
                  className="hover:text-[#B89452] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLink(e, "gallery")}
                  className="hover:text-[#B89452] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLink(e, "contact")}
                  className="hover:text-[#B89452] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories (3 cols) - Open Separate Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B89452] font-semibold">
              Jewellery Pages
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F0]/80">
              <li>
                <button
                  type="button"
                  onClick={(e) => handlePageLink(e, "gold")}
                  className="hover:text-[#B89452] transition-colors text-left block"
                >
                  Gold Jewellery Page →
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handlePageLink(e, "silver")}
                  className="hover:text-[#B89452] transition-colors text-left block"
                >
                  Silver Jewellery Page →
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handlePageLink(e, "diamond")}
                  className="hover:text-[#B89452] transition-colors text-left block"
                >
                  Diamond Jewellery Page →
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handlePageLink(e, "platinum")}
                  className="hover:text-[#B89452] transition-colors text-left block"
                >
                  Platinum Jewellery Page →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B89452] font-semibold">
              Contact Showroom
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F0]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
                <p>
                  No. 20, KB Dasan Road, opposite Girishwari Hospital, Alwarpet, Chennai 600018
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B89452] shrink-0" />
                <a
                  href={getPhoneLink()}
                  className="text-white hover:text-[#B89452] font-medium transition-colors"
                >
                  {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] font-medium transition-colors"
                >
                  WhatsApp: {BUSINESS_DETAILS.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B89452] shrink-0" />
                <a
                  href={getEmailLink()}
                  className="text-white hover:text-[#B89452] transition-colors break-all"
                >
                  {BUSINESS_DETAILS.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B89452] hover:text-[#c9a665] font-semibold uppercase tracking-wider"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/60">
          <p>© {currentYear} Raman Assayers. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-[#B89452] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => onOpenLegal("terms")}
              className="hover:text-[#B89452] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
