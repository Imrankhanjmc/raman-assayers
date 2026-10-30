import React from "react";
import { ShieldCheck, Compass, Target, CheckCircle2 } from "lucide-react";
import { CORE_VALUES } from "../data/businessDetails";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FAF7F0] text-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
            <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
            <span>OUR STORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#101A2B] leading-tight text-balance">
            Built on Trust. Guided by Transparency.
          </h2>
        </div>

        {/* Narrative & Distinct Experience Block */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#292929]/85 leading-relaxed">
            <p>
              For over 31 years, Raman Assayers has been a trusted destination in Alwarpet,
              Chennai, for buying and selling gold, silver, diamonds, platinum, and pre-owned jewellery.
            </p>
            <p>
              Our approach is built around careful evaluation, clear communication, and respectful
              customer service. We understand that jewellery can carry both financial and personal
              value, which is why we aim to make every transaction comfortable, transparent, and
              straightforward.
            </p>
            <p>
              Whether you are looking to sell old jewellery or explore pre-owned pieces, our focus
              is on helping you make informed decisions with confidence.
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#101A2B] font-medium pt-2 italic">
              “At Raman Assayers, trust is not just a promise. It is the foundation of every customer interaction.”
            </p>
          </div>

          {/* Experience & Showroom Commitment Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E8DCC5] p-8 shadow-xs rounded-xs relative">
            <div className="space-y-6">
              <div className="border-b border-[#E8DCC5] pb-5">
                <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block mb-1">
                  Local Presence
                </span>
                <span className="font-serif text-4xl font-semibold text-[#101A2B] block">
                  31+ Years
                </span>
                <p className="text-sm text-[#777777] mt-1">
                  Dedicated jewellery buying, evaluation, and selling service in Alwarpet, Chennai with over 4,900+ Google reviews and clients worldwide.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#101A2B] font-semibold text-sm">
                  <Compass className="w-4 h-4 text-[#B89452]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed pl-6">
                  To be a reliable and customer-friendly destination for jewellery buying and selling, recognised for honest evaluation, transparency, and customer confidence.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-1.5 pt-2 border-t border-[#E8DCC5]/60">
                <div className="flex items-center gap-2 text-[#101A2B] font-semibold text-sm">
                  <Target className="w-4 h-4 text-[#B89452]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed pl-6">
                  To provide fair and clearly explained valuations, professional jewellery evaluation, and a smooth customer experience in which every customer feels informed and respected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-16 pt-12 border-t border-[#E8DCC5]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block">
              Guiding Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#101A2B] mt-1">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white/80 border border-[#E8DCC5] p-5 rounded-xs space-y-2 hover:border-[#B89452] transition-colors"
              >
                <div className="text-xs font-serif text-[#B89452] font-semibold">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-semibold text-[#101A2B] leading-snug">
                  {val.title}
                </h4>
                <p className="text-xs text-[#777777] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
