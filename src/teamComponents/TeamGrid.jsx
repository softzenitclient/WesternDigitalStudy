import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useSheetData } from '../context/SheetDataContext';

export default function TeamGrid() {
  const { teamMembers: team } = useSheetData();

  return (
    <section id="advising-team-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Clean Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#f15b24] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f15b24]" />
            <span>Expert Advisors</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Professional Advisors
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Highly trained specialists with vast industry knowledge and dedicated student-first guidance.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              id={`advisor-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 border border-gray-150/60 rounded-[32px] overflow-hidden hover:bg-white hover:border-transparent hover:shadow-2xl transition-all duration-300 relative flex flex-col group h-full"
            >
              
              {/* Photo Header Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-[#f15b24] text-[10px] font-black py-1 px-3 rounded-full shadow-md uppercase font-mono tracking-wider">
                    {member.experience}
                  </span>
                </div>

                {/* Gradient shadow overlay over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Name Overlay on Photo bottom */}
                <div className="absolute bottom-4 left-6 z-10">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Body Content Area - Only Core Desk Competency */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center space-y-4">
                <div className="space-y-3">
                  <p className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest leading-none">
                    Core Desk Competency
                  </p>
                  <div className="space-y-2 pt-1">
                    {member.highlights.map((hlt, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-gray-650">
                        <CheckCircle2 size={13} className="text-[#f15b24] shrink-0" />
                        <span className="leading-tight">{hlt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
