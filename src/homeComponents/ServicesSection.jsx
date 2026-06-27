import React from 'react';
import { useSheetData } from '../context/SheetDataContext';
import * as Lucide from 'lucide-react';

export default function ServicesSection({ onApplyNowClick }) {
  const { services: SERVICES } = useSheetData();
  // Direct dynamic icon helper
  const renderIcon = (iconName, size = 28, className = "text-white") => {
    const IconComponent = Lucide[iconName];
    if (IconComponent) {
      return <IconComponent size={size} className={className} />;
    }
    return <Lucide.GraduationCap size={size} className={className} />;
  };

  return (
    <section id="service-section" className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
            Our Comprehensive Services for International Students
          </h2>
          <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
            Turning global education aspirations into reality through expert guidance and dedicated support.
          </p>
        </div>

        {/* Services Cards Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Highlight background flash */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#f15b24] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="flex gap-6 items-start">
                {/* Icon wrapper */}
                <div className="p-4 bg-[#2c3164] group-hover:bg-[#f15b24] rounded-2xl shadow-lg transition-colors duration-300 flex-shrink-0">
                  {renderIcon(service.icon)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#2c3164] group-hover:text-[#f15b24] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout inside services */}
        <div className="bg-gradient-to-r from-[#2c3164]/5 to-transparent p-8 rounded-2xl border border-[#2c3164]/10 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#2c3164]">Need a fully custom study-abroad roadmap?</h4>
            <p className="text-gray-500 text-sm font-sans">Schedule a 1-to-1 face-to-face counselling slot with our country desk leads.</p>
          </div>
          <button
            id="service-cta-trigger"
            onClick={onApplyNowClick}
            className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all active:scale-95 duration-200 whitespace-nowrap cursor-pointer"
          >
            Claim Free Slot
          </button>
        </div>
      </div>
    </section>
  );
}
