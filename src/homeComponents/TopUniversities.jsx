import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UNIVERSITIES } from '../data';
import { Award, Landmark, BookOpen, ArrowUpRight } from 'lucide-react';

export default function TopUniversities({ onApplyNowClick }) {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filterTabs = ['All', 'Australia', 'Canada', 'New Zealand', 'UK', 'USA'];

  const filteredUniversities = selectedCountry === 'All'
    ? UNIVERSITIES
    : UNIVERSITIES.filter(u => u.country === selectedCountry);

  return (
    <section id="universities-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
            Partner Institutes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
            Discover Top-Rated Universities
          </h2>
          <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
            Get instant on-spot assessments, credit transfers, and direct merit scholarship access from top global educational conglomerates.
          </p>
        </div>

        {/* Filter interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          {filterTabs.map((tab) => (
            <button
              id={`university-filter-${tab}`}
              key={tab}
              onClick={() => setSelectedCountry(tab)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all relative cursor-pointer active:scale-95 duration-200 ${
                selectedCountry === tab
                  ? 'bg-[#2c3164] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-[#f15b24] border border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* University cards grid with motion layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredUniversities.map((uni) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={uni.id}
                id={`university-card-${uni.id}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  {/* Brand Card Top with color avatar */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f15b24] font-serif font-extrabold text-xs flex items-center justify-center border border-orange-100 shadow-inner">
                      {uni.logoPlaceholder}
                    </div>
                    <div>
                      <span className="bg-[#2c3164]/10 text-[#2c3164] px-2.5 py-0.5 rounded-full text-[10px] font-bold block uppercase tracking-wider w-max mb-1 font-sans">
                        {uni.country}
                      </span>
                      <span className="text-gray-400 text-[11px] font-medium block">
                        {uni.location}
                      </span>
                    </div>
                  </div>

                  <hr className="border-gray-100" />

                  {/* Program Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#2c3164] tracking-tight group-hover:text-[#f15b24] transition-colors duration-200 line-clamp-1">
                      {uni.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                      <Award size={13} className="text-yellow-500" />
                      <span>{uni.ranking}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-gray-600 font-medium">
                      <BookOpen size={13} className="text-[#f15b24] mt-0.5" />
                      <span className="line-clamp-2"><strong>Focus:</strong> {uni.popularCourse}</span>
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="pt-6">
                  <button
                    id={`uni-card-cta-${uni.id}`}
                    onClick={onApplyNowClick}
                    className="w-full flex items-center justify-center gap-2 bg-[#2c3164]/5 group-hover:bg-[#f15b24] text-[#2c3164] group-hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-300"
                  >
                    <span>More Detials</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
