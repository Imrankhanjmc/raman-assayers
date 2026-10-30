import React from "react";
import { MapPin, Search, FileText, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink } from "../lib/contactLinks";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: MapPin,
      title: "Visit Our Showroom",
      description:
        "Bring your jewellery to our Alwarpet location and tell our team what you would like to evaluate in a safe, comfortable setting."
    },
    {
      num: "02",
      icon: Search,
      title: "Jewellery Assessment",
      description:
        "Our team assesses the item using the applicable evaluation process and explains the relevant details right in front of you."
    },
    {
      num: "03",
      icon: FileText,
      title: "Review the Offer",
      description:
        "Understand the proposed value and any applicable deductions or transaction terms before deciding. There is zero obligation to proceed."
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Complete the Transaction",
      description:
        "If you accept the offer, the transaction and payment method are confirmed according to the agreed terms and applicable requirements."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-[#FAF7F0] border-t border-[#E8DCC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
            <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
            <span>A SIMPLE, CLEAR PROCESS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#101A2B] leading-tight text-balance">
            From Evaluation to Decision, Made Simple.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] leading-relaxed">
            We believe you deserve complete transparency at every stage of the jewellery evaluation journey.
          </p>
        </div>

        {/* 4-Step Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-14 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-[#E8DCC5] z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DCC5] p-6 sm:p-7 rounded-xs shadow-2xs flex flex-col justify-between hover:border-[#B89452] transition-colors"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#101A2B] text-[#B89452] border border-[#B89452]/40 flex items-center justify-center font-serif font-bold text-sm">
                        {step.num}
                      </div>
                      <div className="text-[#B89452]">
                        <IconComp className="w-5 h-5 opacity-80" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#101A2B] mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#777777] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DCC5]/60 text-[11px] text-[#B89452] font-semibold uppercase tracking-wider">
                    Stage {idx + 1} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Valuation Note & Call to Action */}
        <div className="mt-12 bg-white border border-[#E8DCC5] p-6 sm:p-8 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl">
            <AlertCircle className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
              <strong className="text-[#101A2B] font-semibold">Important note: </strong>
              Final offers depend on the individual item, applicable market conditions,
              evaluation results, and transaction terms. We encourage you to ask any questions before deciding.
            </p>
          </div>

          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#101A2B] text-white hover:bg-[#162238] active:bg-[#B89452] active:text-[#101A2B] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us to Learn More</span>
          </a>
        </div>
      </div>
    </section>
  );
};
