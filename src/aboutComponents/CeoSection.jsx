import React from 'react';
import { motion } from 'motion/react';
import { Quote, Award, Sparkles, Building2, CheckCircle } from 'lucide-react';

const CEO_IMAGE = '/src/assets/images/ceo_portrait_male_1781692129617.jpg';

export default function CeoSection() {
  return (
    <section id="ceo-message-section" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f15b24]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2c3164]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack (Takes 5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2c3164]/10 to-[#f15b24]/10 rounded-[36px] -rotate-3 scale-95 pointer-events-none border border-black/5" />
            
            {/* Image Container */}
            <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-slate-100 aspect-[3/4]">
              <img 
                src={CEO_IMAGE} 
                alt="CEO - Dr. Sayeed Hasan" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-center">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-orange-400 bg-orange-950/45 px-3 py-1 rounded-full border border-orange-500/15 inline-block mb-1.5 backdrop-blur-sm">
                  Founding Director & CEO
                </span>
                <p className="text-xl font-extrabold font-serif tracking-tight">Dr. Sayeed Hasan</p>
                <p className="text-xs text-slate-300 font-medium">Western Study Group</p>
              </div>
            </div>

            {/* Quick Badges positioned absolute around image */}
            <div className="absolute -top-4 -right-4 bg-white border border-gray-150 rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm bg-white/95">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f15b24] flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-[#2c3164]">10+ Years</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Mentorship Legacy</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-150 rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm bg-white/95">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2c3164] flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              
            </div>
          </motion.div>

          {/* Right Column: Text & Content (Takes 7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f15b24]">
              <Sparkles size={14} className="animate-pulse" />
              <span>Leadership Desk</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#2c3164] tracking-tight leading-tight">
              Words From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c3164] to-[#f15b24]">CEO</span>
            </h2>

            {/* Blockquote Box */}
            <div className="relative border-l-4 border-[#f15b24] pl-6 md:pl-8 py-3 space-y-4">
              <Quote className="absolute -top-3 left-4 text-[#f15b24]/10 shrink-0 rotate-180" size={64} />
              
              <p className="text-[#2c3164] font-serif font-black text-lg md:text-xl leading-relaxed italic relative z-10">
                "Our vision has never been just about sending students abroad; it has always been about creating ethical, transparent pathways for the next generation of global leaders."
              </p>
            </div>

            {/* Long message body */}
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Welcome to Western Study. For over a decade, we have dedicated ourselves to bridging the gap between local aspirations and global destinations. We recognize that choosing to study in a foreign land is not just an academic milestone—it is a life-defining transition requiring flawless execution and honest support.
              </p>
              <p>
                The foundation of Western Study lies on unwavering trust, absolute transparency, and a student-centric advisory system. Our credentials as a licensed and government-approved recruitment agency represent our commitment to compliance and excellence. We do not engage in generic consulting; instead, we craft tailored plans matching your distinct profile directly with our vast, verified institutional networks.
              </p>
            </div>

            {/* Sign-off & signature styling */}
            <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="text-lg font-extrabold text-[#2c3164] font-serif">Dr. Sayeed Hasan</h4>
                <p className="text-xs text-[#f15b24] font-bold tracking-wider uppercase">Founder, Chairman & MD</p>
                <p className="text-xs text-gray-400 font-medium">Western Study Group</p>
              </div>

             
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
