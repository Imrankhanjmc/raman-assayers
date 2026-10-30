import React from "react";
import { Scale, Eye, Users, Building2 } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Scale,
      title: "Honest Pricing",
      text: "We aim to explain the offer clearly so you can understand how your jewellery is evaluated, with full transparency on weight and purity calculation."
    },
    {
      icon: Eye,
      title: "Careful Evaluation",
      text: "Jewellery is assessed according to the item and applicable evaluation criteria, with clear communication throughout the process."
    },
    {
      icon: Users,
      title: "Customer-Focused Service",
      text: "Our team aims to provide courteous assistance and answer your questions before you make a decision, ensuring zero pressure."
    },
    {
      icon: Building2,
      title: "A Trusted Local Presence",
      text: "Located in Alwarpet, Chennai, Raman Assayers brings over 31+ years of stated business experience to its jewellery buying and selling services."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-24 bg-[#101A2B] text-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
            <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
            <span>THE RAMAN ASSAYERS DIFFERENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight text-balance">
            Trust, Value, and Transparency in Every Transaction.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FAF7F0]/80 leading-relaxed">
            Choosing where to buy or sell jewellery matters. We aim to make every interaction clear,
            comfortable, and professionally handled.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#162238] border border-[#B89452]/25 p-7 rounded-xs flex flex-col justify-between hover:border-[#B89452] transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xs bg-[#101A2B] border border-[#B89452]/40 flex items-center justify-center text-[#B89452] mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#FAF7F0]/75 leading-relaxed">
                    {card.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] uppercase tracking-widest text-[#B89452]/70 font-semibold">
                  0{idx + 1} · Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
