import React, { useState, useEffect } from "react";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink } from "../lib/contactLinks";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToPage: (page: "home" | "products" | "gold" | "silver" | "diamond" | "platinum") => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileMenu,
  onNavigateToSection,
  onNavigateToPage,
  currentPage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setProductsOpen(false);
    onNavigateToSection(id);
  };

  const handleProductPageClick = (
    e: React.MouseEvent,
    category: "products" | "gold" | "silver" | "diamond" | "platinum"
  ) => {
    e.preventDefault();
    setProductsOpen(false);
    onNavigateToPage(category);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#101A2B]/95 backdrop-blur-md shadow-md border-b border-[#B89452]/25 py-3"
          : "bg-[#101A2B] border-b border-[#101A2B] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in serif, single-line) */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToPage("home");
            }}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452] rounded"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white group-hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0">
              Raman Assayers
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8DCC5]/70 -mt-0.5">
              Alwarpet · Chennai
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#FAF7F0]/85">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToPage("home");
              }}
              className={`hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === "home" ? "text-[#B89452]" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About Us
            </a>

            {/* Products Dropdown - opens separate pages for each metal */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => handleProductPageClick(e, "products")}
                className={`flex items-center gap-1 hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1 focus:outline-none text-left ${
                  currentPage !== "home" ? "text-[#B89452]" : ""
                }`}
                aria-expanded={productsOpen}
              >
                <span>Our Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-56 bg-[#101A2B] border border-[#B89452]/30 shadow-xl py-2 rounded-xs z-50">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#B89452] font-semibold border-b border-white/10 mb-1">
                    Select Metal Category
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleProductPageClick(e, "gold")}
                    className={`w-full text-left block px-4 py-2 text-xs transition-colors ${
                      currentPage === "gold"
                        ? "bg-[#B89452]/30 text-[#B89452] font-medium"
                        : "text-[#FAF7F0] hover:bg-[#B89452]/20 hover:text-[#B89452]"
                    }`}
                  >
                    Gold Jewellery Page
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleProductPageClick(e, "silver")}
                    className={`w-full text-left block px-4 py-2 text-xs transition-colors ${
                      currentPage === "silver"
                        ? "bg-[#B89452]/30 text-[#B89452] font-medium"
                        : "text-[#FAF7F0] hover:bg-[#B89452]/20 hover:text-[#B89452]"
                    }`}
                  >
                    Silver Jewellery & Articles Page
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleProductPageClick(e, "diamond")}
                    className={`w-full text-left block px-4 py-2 text-xs transition-colors ${
                      currentPage === "diamond"
                        ? "bg-[#B89452]/30 text-[#B89452] font-medium"
                        : "text-[#FAF7F0] hover:bg-[#B89452]/20 hover:text-[#B89452]"
                    }`}
                  >
                    Diamond Jewellery Page
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleProductPageClick(e, "platinum")}
                    className={`w-full text-left block px-4 py-2 text-xs transition-colors ${
                      currentPage === "platinum"
                        ? "bg-[#B89452]/30 text-[#B89452] font-medium"
                        : "text-[#FAF7F0] hover:bg-[#B89452]/20 hover:text-[#B89452]"
                    }`}
                  >
                    Platinum Jewellery Page
                  </button>
                  <div className="border-t border-white/10 mt-1 pt-1">
                    <button
                      type="button"
                      onClick={(e) => handleProductPageClick(e, "products")}
                      className="w-full text-left block px-4 py-1.5 text-[11px] text-[#E8DCC5]/70 hover:text-[#B89452]"
                    >
                      View All 4 Categories Overview →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#why-choose-us"
              onClick={(e) => handleLinkClick(e, "why-choose-us")}
              className="hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Why Choose Us
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, "how-it-works")}
              className="hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              How It Works
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleLinkClick(e, "gallery")}
              className="hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="hover:text-[#B89452] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Prominent Call Us Button */}
            <a
              href={getPhoneLink()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101A2B] bg-[#B89452] hover:bg-[#c9a665] active:bg-[#96763A] transition-colors whitespace-nowrap shrink-0 rounded-sm shadow-sm"
              aria-label={`Call Raman Assayers at ${BUSINESS_DETAILS.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Us</span>
            </a>

            {/* Mobile compact call icon */}
            <a
              href={getPhoneLink()}
              className="sm:hidden p-2 text-[#B89452] hover:text-white border border-[#B89452]/40 rounded-sm"
              aria-label={`Call ${BUSINESS_DETAILS.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-white hover:text-[#B89452] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
