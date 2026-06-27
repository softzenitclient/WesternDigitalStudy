import React from 'react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';
import * as Lucide from 'lucide-react';

export default function AboutSection({ onApplyNowClick }) {
  const { stats: STATS } = useSheetData();
  // Safe helper to render Lucide icons dynamically
  const renderIcon = (iconName, size = 24, className = "text-[#f15b24]") => {
    const IconComponent = Lucide[iconName];
    if (IconComponent) {
      return <IconComponent size={size} className={className} />;
    }
    return <Lucide.GraduationCap size={size} className={className} />;
  };

  return (
    <section id="about-us-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Images & Floating Badges */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=600&auto=format&fit=crop" 
              alt="Western Study Campus Partners" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-550"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c3164]/30 to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#2c3164] to-[#1e224e] text-white p-6 rounded-2xl shadow-xl border border-white/10 hidden sm:block">
            <h4 className="text-4xl font-extrabold text-[#f15b24] font-mono">12+</h4>
            <p className="text-xs text-orange-100 font-bold tracking-wider uppercase mt-1">Years of Trust & Success</p>
          </div>
        </div>

        {/* Right Side: Copy & Narrative details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
              Empowering Students to Achieve Global Success
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed font-sans text-base">
            Established in 2019, Western Study is committed to helping students pursue quality international education through trusted guidance and personalized support. As a leading study abroad consultancy, we assist students in making informed decisions that shape their academic and professional futures.
          </p>
 
          <p className="text-gray-600 leading-relaxed font-sans text-base">
           With collaborations across <b>210+ universities and educational institutions, we provide opportunities in Hungary, Malta, Italy, Greece, Finland, Sweden, Canada, Denmark, Netherlands, United Kingdom, South Korea, Cyprus, Malaysia, New Zealand, and other destinations.</b> Our experienced counselors guide students through every stage of the study abroad journey from university selection and applications to visa assistance and pre-departure preparation.
          </p>

          <p className="text-gray-600 leading-relaxed font-sans text-base">
          At Western Study, we believe that every student deserves access to world-class education and global opportunities. Through ethical practices, transparent counseling, and dedicated support, we strive to turn international education aspirations into reality.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              id="about-apply-trigger"
              onClick={onApplyNowClick}
              className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-7 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all active:scale-95 duration-200 cursor-pointer text-center"
            >
              Consult an Advisor
            </button>
            <a
              id="about-read-credentials"
              href="#service-section"
              className="border border-[#2c3164] text-[#2c3164] hover:bg-orange-50 px-7 py-3 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats Counter Section Grid inside About */}
      <div id="stats-counter-banner" className="max-w-7xl mx-auto px-4 md:px-12 mt-16">
        <hr className="border-gray-100 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -5 }}
              className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/60 shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-orange-200"
            >
              <div className="p-3 bg-white rounded-xl shadow-inner border border-orange-100 flex-shrink-0">
                {renderIcon(stat.icon)}
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#2c3164] font-mono leading-none">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold text-gray-800 mt-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
