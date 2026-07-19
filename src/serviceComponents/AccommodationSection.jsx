import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';

export default function AccommodationSection({ onApplyClick }) {
  const { servicesDetailedSections } = useSheetData();

  const defaultHero = {
    title: "Accommodation Advice",
    description: "Finding the right accommodation is an essential part of a successful study abroad experience. At Western Study, we help students secure safe, comfortable, and budget-friendly housing options that best suit their lifestyle and study destination. Whether you prefer university residences or private accommodation, our team provides guidance to help you settle into your new environment with confidence.",
    bgImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&auto=format&fit=crop",
    checklist: [
      "Provide guidance on both on-campus and off-campus accommodation options",
      "Connect students with trusted and verified student housing providers",
      "Compare accommodation based on rent, location, transportation, and nearby facilities",
      "Assist with booking procedures and tenancy-related guidance",
      "Share insights on local communities, safety measures, and daily living"
    ]
  };

  const sectionData = servicesDetailedSections?.find(s => s.sectionKey === 'accommodation') || defaultHero;

  const renderTitle = () => {
    if (sectionData.title.includes('\n')) {
      return sectionData.title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line} {i === 0 && <br />}
        </React.Fragment>
      ));
    }
    if (sectionData.title.toLowerCase().includes('accommodation')) {
      return <>Accommodation <br /> Advice</>;
    }
    return sectionData.title;
  };

  return (
    <section id="accommodation-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: content and checklist */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {renderTitle()}
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {sectionData.description}
              </p>

              {/* Badged title */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>What we discuss</span>
              </div>

              {/* Checklist content */}
              <ul className="space-y-3.5 text-xs md:text-sm text-gray-700">
                {sectionData.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-orange-200 text-[#f15b24] flex items-center justify-center font-bold">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Request Callback CTA */}
              <div className="pt-4">
                <button
                  id="callback-btn-accommodation"
                  onClick={onApplyClick}
                  className="bg-[#ffd200] hover:bg-[#ebd039] text-gray-900 font-extrabold rounded-full px-7 py-3 flex items-center gap-3 transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md group cursor-pointer text-xs uppercase tracking-wider"
                >
                  <span>Request a callback</span>
                  <span className="p-1.5 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>
            </div>

            {/* Right side: rent/keys mockup illustrasyon */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-tr from-[#f15b24]/5 to-[#2c3164]/5 rounded-3xl -rotate-2 scale-95" />
              <img
                src={sectionData.bgImage}
                alt={sectionData.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100 relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
