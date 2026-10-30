import React from "react";
import { Award, Star, Globe, Gem, Scale, MapPin } from "lucide-react";
import { TRUST_HIGHLIGHTS } from "../data/businessDetails";

const ICONS = [
  Award,
  Star,
  Globe,
  Gem,
  Scale,
  MapPin
];

export const TrustHighlights: React.FC = () => {
  return (
    <section className="bg-[#162238] border-y border-[#B89452]/20 py-6" aria-label="Key Service Highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {TRUST_HIGHLIGHTS.map((item, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 p-2 rounded-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#101A2B] border border-[#B89452]/40 flex items-center justify-center text-[#B89452] mb-1">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F0]">
                  {item.label}
                </h4>
                <p className="text-[11px] text-[#E8DCC5]/70 leading-snug">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
