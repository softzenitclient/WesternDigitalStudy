import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';

export default function PreDepartureSection({ onApplyClick }) {
  const { servicesDetailedSections } = useSheetData();

  const defaultHero = {
    title: "Pre-Departure briefing",
    description: "Preparing for life in a new country goes beyond obtaining a visa. At Western Study, our comprehensive pre-departure sessions equip students with the knowledge and confidence needed for a smooth transition abroad. From travel arrangements to cultural adaptation, we ensure students are fully prepared for their academic journey.",
    bgImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop",
    checklist: [
      "Provide detailed guidance on travel arrangements, flights, and airport procedures",
      "Advise on baggage policies, currency exchange, banking, and international SIM cards",
      "Prepare students for cultural differences, local customs, and campus life",
      "Share important information on health insurance, emergency contacts, and student safety",
      "Offer practical advice on daily living, transportation, and settling into a new environment"
    ]
  };

  const sectionData = servicesDetailedSections?.find(s => s.sectionKey === 'predeparture') || defaultHero;

  const renderTitle = () => {
    if (sectionData.title.includes('\n')) {
      return sectionData.title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line} {i === 0 && <br />}
        </React.Fragment>
      ));
    }
    if (sectionData.title.toLowerCase().includes('pre-departure')) {
      return <>Pre-Departure <br /> briefing</>;
    }
    return sectionData.title;
  };

  return (
    <section id="pre-departure-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: content and checklist */}
            <div className="lg:col-span-12 lg:order-1 lg:col-start-1 lg:col-end-13 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
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

                {/* Button CTA */}
                <div className="pt-4">
                  <button
                    id="callback-btn-predeparture"
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

              {/* Right side: Classroom presentation image mockup */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
                <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-tr from-[#f15b24]/5 to-[#2c3164]/5 rounded-3xl rotate-2 scale-95" />
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
      </div>
    </section>
  );
}
