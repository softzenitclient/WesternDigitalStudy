import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';

export default function VisaSection({ onApplyClick }) {
  const { servicesDetailedSections } = useSheetData();

  const defaultHero = {
    title: "Visa application Guidance",
    description: "Receiving an offer letter is only the beginning of your study abroad journey. At Western Study, our experienced visa team provides end-to-end support to help students navigate the visa process confidently and successfully. We ensure your documentation is accurate, complete, and aligned with embassy and immigration requirements.",
    bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop",
    checklist: [
      "Provide a country-specific visa document checklist tailored to your destination",
      "Review and verify all required documents for accuracy and compliance",
      "Assist with financial documentation and visa file preparation",
      "Conduct professional mock interview sessions and visa briefing",
      "Guide you through biometric appointments and embassy procedures"
    ]
  };

  const sectionData = servicesDetailedSections?.find(s => s.sectionKey === 'visa') || defaultHero;

  const renderTitle = () => {
    if (sectionData.title.includes('\n')) {
      return sectionData.title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line} {i === 0 && <br />}
        </React.Fragment>
      ));
    }
    if (sectionData.title.toLowerCase().includes('visa application')) {
      return <>Visa application <br /> Guidance</>;
    }
    return sectionData.title;
  };

  return (
    <section id="visa-guidance-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12 lg:col-start-1 lg:col-end-13 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left side: Visa application and passport closeup (Image) */}
              <div className="lg:col-span-5 lg:order-1 relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-tr from-[#f15b24]/5 to-[#2c3164]/5 rounded-3xl rotate-2 scale-95" />
                <img
                  src={sectionData.bgImage}
                  alt={sectionData.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100 relative z-10 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Right side: Information and checklist (Text) */}
              <div className="lg:col-span-7 lg:order-2 space-y-6 text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                  {renderTitle()}
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {sectionData.description}
                </p>

                {/* Badged title */}
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>What we do</span>
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

                {/* Button CTA */}
                <div className="pt-4">
                  <button
                    id="callback-btn-visa"
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
