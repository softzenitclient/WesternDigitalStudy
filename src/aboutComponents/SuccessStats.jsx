import React from 'react';
import { motion } from 'motion/react';
import { useSheetData } from '../context/SheetDataContext';
import * as Lucide from 'lucide-react';

export default function SuccessStats() {
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
    <section id="success-statistics-section" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Header Block to keep the context nice and match About page styling */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2c3164]/15 text-[#2c3164] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f15b24]" />
            <span>Success Statistics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight font-serif">
            Key Figures of Trust
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Transparent metrics testifying to our long-term admission capabilities, visa speed, and student support.
          </p>
        </div>

        {/* The Exact Stats section styling & logic from AboutSection.jsx */}
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
              <div className="flex-1 min-w-0">
                <h3 className="text-3xl font-extrabold text-[#2c3164] font-mono leading-none">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold text-gray-800 mt-1 truncate">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed font-sans">
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
