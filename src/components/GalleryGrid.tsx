import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "../data/galleryData";
import { Lightbox } from "./Lightbox";
import { Maximize2, Sparkles, Info } from "lucide-react";

export const GalleryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedItem(null);
  };

  const categories = [
    { id: "all", label: "All Items" },
    { id: "gold", label: "Gold" },
    { id: "silver", label: "Silver" },
    { id: "diamond", label: "Diamond" },
    { id: "platinum", label: "Platinum" }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-[#101A2B] text-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
              <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
              <span>A CLOSER LOOK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight text-balance">
              Jewellery, Detail, and Craftsmanship.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#FAF7F0]/80 leading-relaxed">
              Explore selected jewellery imagery and the details that make each piece distinctive.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#162238] border border-[#B89452]/30 rounded-xs overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "bg-[#B89452] text-[#101A2B] font-semibold"
                    : "text-[#FAF7F0]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenLightbox(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View larger image of ${item.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#B89452]/25 bg-[#162238] hover:border-[#B89452] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89452]"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#101A2B]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B] via-[#101A2B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom Affordance */}
                <div className="absolute top-3 right-3 p-2 bg-[#101A2B]/80 text-[#B89452] border border-[#B89452]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89452] font-semibold block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#E8DCC5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F0]/70 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Notice per Prompt Section 12 & 22 */}
        <div className="mt-8 flex items-center gap-2.5 text-xs text-[#E8DCC5]/70 max-w-2xl">
          <Info className="w-4 h-4 text-[#B89452] shrink-0" />
          <span>
            Jewellery photographs are illustrative craftsmanship representations of precious metal and gemstone items evaluated at Raman Assayers.
          </span>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Lightbox
        item={selectedItem}
        allItems={filteredItems}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
