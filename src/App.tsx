import React, { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { MobileNavigation } from "./components/MobileNavigation";
import { HeroSection } from "./components/HeroSection";
import { TrustHighlights } from "./components/TrustHighlights";
import { AboutSection } from "./components/AboutSection";
import { JewelleryCategoriesSection } from "./components/JewelleryCategoriesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { GalleryGrid } from "./components/GalleryGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingContactActions } from "./components/FloatingContactActions";
import { LegalModal } from "./components/LegalModal";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProductsIndexPage } from "./pages/ProductsIndexPage";

type PageRoute = "home" | "products" | "gold" | "silver" | "diamond" | "platinum";

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  // Sync route with window.location.hash
  const parseHashRoute = useCallback((): PageRoute => {
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, "");
    if (hash === "gold" || hash === "products/gold") return "gold";
    if (hash === "silver" || hash === "products/silver") return "silver";
    if (hash === "diamond" || hash === "products/diamond") return "diamond";
    if (hash === "platinum" || hash === "products/platinum") return "platinum";
    if (hash === "products") return "products";
    return "home";
  }, []);

  useEffect(() => {
    // Initial page set from hash
    const initialRoute = parseHashRoute();
    setCurrentPage(initialRoute);

    const handleHashChange = () => {
      const newRoute = parseHashRoute();
      setCurrentPage(newRoute);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [parseHashRoute]);

  const navigateToPage = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === "home") {
      window.location.hash = "#/";
    } else if (page === "products") {
      window.location.hash = "#/products";
    } else {
      window.location.hash = `#/products/${page}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    // If not currently on Home, switch to Home first, then scroll
    if (currentPage !== "home") {
      setCurrentPage("home");
      window.location.hash = "#/";
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#292929]">
      {/* Header with Top Bar Contract & Product Page Dropdown */}
      <Header
        currentPage={currentPage}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigateToSection={scrollToSection}
        onNavigateToPage={navigateToPage}
      />

      {/* Accessible Mobile Slide-in Menu with Direct Product Pages */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigateToSection={scrollToSection}
        onNavigateToPage={navigateToPage}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentPage === "home" && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onSellClick={() => scrollToSection("category-details")}
              onExploreProductsClick={() => navigateToPage("products")}
            />

            {/* 2. Trust and Highlights Strip */}
            <TrustHighlights />

            {/* 3. About Us Section */}
            <AboutSection />

            {/* 4. Products Overview & Deep-Dive Buying/Selling Panels */}
            <JewelleryCategoriesSection
              onNavigateToPage={(metal) => navigateToPage(metal)}
            />

            {/* 5. Why Choose Us Section */}
            <WhyChooseUs />

            {/* 6. How It Works - 4-step Timeline */}
            <HowItWorks />

            {/* 7. Gallery Section with Lightbox */}
            <GalleryGrid />

            {/* 8. Showroom Contact & Location Section */}
            <ContactSection />
          </>
        )}

        {currentPage === "products" && (
          <ProductsIndexPage
            onNavigateHome={() => navigateToPage("home")}
            onNavigateCategory={(metal) => navigateToPage(metal)}
          />
        )}

        {(currentPage === "gold" ||
          currentPage === "silver" ||
          currentPage === "diamond" ||
          currentPage === "platinum") && (
          <ProductDetailPage
            categoryId={currentPage}
            onNavigateHome={() => navigateToPage("home")}
            onNavigateCategory={(metal) => navigateToPage(metal)}
          />
        )}
      </main>

      {/* Luxury Footer with Separate Product Page links */}
      <Footer
        onNavigateToSection={scrollToSection}
        onNavigateToPage={navigateToPage}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Mobile Floating Action Dock (Call, WhatsApp, Back to Top) */}
      <FloatingContactActions />

      {/* Privacy Policy and Terms & Conditions Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default App;
