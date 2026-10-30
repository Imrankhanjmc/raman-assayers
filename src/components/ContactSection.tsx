import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock,
  MessageSquare,
  Copy,
  Check,
  ShieldCheck,
  Building
} from "lucide-react";
import { BUSINESS_DETAILS } from "../data/businessDetails";
import { getPhoneLink, getEmailLink, getDirectionsLink, getWhatsAppLink } from "../lib/contactLinks";

export const ContactSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DETAILS.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const whatsappPhone = (BUSINESS_DETAILS.whatsappNumber || "+919840215916").replace(/[^0-9]/g, "");

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF7F0] text-[#292929] border-t border-[#E8DCC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B89452] mb-3">
            <span className="w-5 h-px bg-[#B89452]" aria-hidden="true" />
            <span>VISIT OUR SHOWROOM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#101A2B] leading-tight text-balance">
            Visit Raman Assayers in Alwarpet, Chennai.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] leading-relaxed">
            We invite you to bring your gold, silver, diamond, and platinum jewellery for a transparent,
            in-person evaluation. Reach out to our team directly via phone, WhatsApp, or visit our showroom on KB Dasan Road.
          </p>
        </div>

        {/* 3 Direct Communication Channels */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Direct Phone Call */}
          <div className="bg-white border border-[#E8DCC5] p-7 rounded-xs shadow-xs hover:border-[#B89452] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xs bg-[#101A2B] text-[#B89452] border border-[#B89452]/40 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block">
                Direct Phone
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#101A2B]">
                {BUSINESS_DETAILS.phoneDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Speak directly with our showroom team for instant evaluation questions, parking guidance, or directions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DCC5]">
              <a
                href={getPhoneLink()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#101A2B] text-white hover:bg-[#162238] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white border border-[#B89452]/40 p-7 rounded-xs shadow-xs hover:border-[#B89452] transition-colors flex flex-col justify-between relative">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xs bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#25D366] font-semibold block">
                WhatsApp Chat & Inquiries
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#101A2B]">
                {BUSINESS_DETAILS.whatsappDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Chat directly on WhatsApp to share photos, enquire about jewellery selling procedures, or schedule a visit.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DCC5]">
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent("Hello Raman Assayers, I would like to enquire about jewellery buying and selling services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="bg-white border border-[#E8DCC5] p-7 rounded-xs shadow-xs hover:border-[#B89452] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xs bg-[#101A2B] text-[#B89452] border border-[#B89452]/40 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block">
                Email Desk
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#101A2B] break-all">
                {BUSINESS_DETAILS.email}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Send formal evaluation requests, inheritance/estate jewellery inquiries, or documentation questions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DCC5]">
              <a
                href={getEmailLink()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#101A2B] text-[#101A2B] hover:bg-[#101A2B] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Address & Showroom Location Block with Map */}
        <div className="mt-14 bg-white border border-[#E8DCC5] rounded-xs overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 6 cols: Location & Timings Details */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89452] font-semibold block mb-1">
                    Showroom Address
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#101A2B]">
                    No. 20, KB Dasan Road, Alwarpet
                  </h3>
                  <p className="text-xs text-[#777777] mt-0.5">
                    Opposite Girishwari Hospital · Seethammal Colony
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F0] border border-[#E8DCC5] rounded-xs space-y-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#292929]">
                    <MapPin className="w-4 h-4 text-[#B89452] shrink-0 mt-1" />
                    <span>
                      {BUSINESS_DETAILS.street}, {BUSINESS_DETAILS.landmark}, {BUSINESS_DETAILS.locality}, {BUSINESS_DETAILS.city}, {BUSINESS_DETAILS.state} {BUSINESS_DETAILS.pincode}, India.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#B89452] hover:text-[#96763A] font-semibold pt-1 focus:outline-none"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Full Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address for GPS / Uber / Ola</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Timings & Visiting Guidance */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#B89452] shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs uppercase tracking-wider text-[#101A2B] block">
                        Visiting Hours & Appointments
                      </strong>
                      <p className="text-xs sm:text-sm text-[#777777] mt-0.5 leading-relaxed">
                        Jewellery evaluation is conducted during standard Chennai retail hours.
                        Walk-ins are always welcome, or you may call / WhatsApp ahead to ensure zero waiting time with our valuation desk.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#B89452] shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs uppercase tracking-wider text-[#101A2B] block">
                        In-Person Testing Assurance
                      </strong>
                      <p className="text-xs sm:text-sm text-[#777777] mt-0.5 leading-relaxed">
                        All evaluations are carried out directly in front of you with certified scales and touchstone/density testing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#E8DCC5] flex flex-wrap items-center gap-3">
                <a
                  href={getDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89452] hover:bg-[#c9a665] text-[#101A2B] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#101A2B] text-[#101A2B] hover:bg-[#101A2B] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_DETAILS.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right 6 cols: Google Maps Embed */}
            <div className="lg:col-span-6 bg-[#FAF7F0] border-t lg:border-t-0 lg:border-l border-[#E8DCC5] min-h-[360px] lg:min-h-[480px] relative">
              <iframe
                title="Raman Assayers Showroom Location in Alwarpet Chennai"
                src={BUSINESS_DETAILS.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px] lg:min-h-full"
              />
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-[#E8DCC5] text-[11px] text-[#777777] shadow-sm">
                <a
                  href={getDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B89452] font-semibold hover:underline"
                >
                  View Large Map ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
