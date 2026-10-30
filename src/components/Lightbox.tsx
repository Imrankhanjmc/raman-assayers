import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryItem } from "../data/galleryData";

interface LightboxProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  allItems,
  isOpen,
  onClose,
  onNavigate
}) => {
  const currentIndex = item ? allItems.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(allItems[currentIndex - 1]);
    } else if (currentIndex === 0) {
      onNavigate(allItems[allItems.length - 1]);
    }
  }, [currentIndex, allItems, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < allItems.length - 1 && currentIndex !== -1) {
      onNavigate(allItems[currentIndex + 1]);
    } else if (currentIndex === allItems.length - 1) {
      onNavigate(allItems[0]);
    }
  }, [currentIndex, allItems, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`View ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Top Controls Bar */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-3">
        <span className="text-xs text-[#FAF7F0]/60 tracking-wider">
          {currentIndex + 1} of {allItems.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
          aria-label="Close image lightbox (Escape)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
        aria-label="Previous image (Left arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
        aria-label="Next image (Right arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption Container */}
      <div className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative overflow-hidden rounded-xs border border-[#B89452]/40 bg-[#101A2B] shadow-2xl max-h-[70vh]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-auto max-h-[70vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Information */}
        <div className="mt-4 text-center max-w-2xl px-4 text-[#FAF7F0]">
          <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block mb-1">
            {item.categoryLabel}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
            {item.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#FAF7F0]/80">
            {item.description}
          </p>
          <p className="mt-1 text-[11px] text-[#E8DCC5]/70 italic">
            {item.craftsmanshipDetail}
          </p>
        </div>
      </div>
    </div>
  );
};
