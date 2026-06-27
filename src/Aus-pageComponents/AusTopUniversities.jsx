import React from 'react';
import { MapPin, Award, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';

export default function AusTopUniversities({ onApplyNowClick }) {
  const { detailedUniversities: DETAILED_UNIVERSITIES } = useSheetData();
  const topUnis = DETAILED_UNIVERSITIES.filter(
    (uni) => uni.country.toLowerCase() === 'australia'
  );

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
            Elite Institutions
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
            Partner Universities in Australia
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            World-class educational facilities ranked inside the QS Global Top 100 with immediate fast-track entrance schemes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topUnis.map((uni, index) => (
          <motion.div
            key={uni.id || index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card visual */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={uni.logoUrl}
                  alt={uni.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#2c3164]/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <Award size={11} className="text-yellow-400" />
                  <span>{uni.ranking}</span>
                </div>
              </div>

              {/* Info text */}
              <div className="p-5 space-y-4">
                <h3 className="font-extrabold text-[#2c3164] font-serif text-sm md:text-base leading-snug line-clamp-2 hover:text-[#f15b24] transition-colors">
                  {uni.name}
                </h3>

                <div className="space-y-2 text-xs text-gray-600 border-t border-slate-200/50 pt-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-gray-400 shrink-0" />
                    <span>{uni.location}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <BookOpen size={13} className="text-gray-400 shrink-0 mt-0.5" />
                    <span><strong className="text-gray-700">Top Classes:</strong> {uni.popularCourse}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application action */}
            <div className="p-5 pt-0">
              <button
                id={`apply-uni-btn-${index}`}
                onClick={onApplyNowClick}
                className="w-full bg-[#2c3164]/10 hover:bg-[#f15b24] text-[#2c3164] hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Admission Assessment</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
