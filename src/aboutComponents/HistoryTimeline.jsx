import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Building, Globe, Star } from 'lucide-react';

export default function HistoryTimeline() {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      desc: "Western Study began its journey in 2019 with a vision to make quality international education more accessible to aspiring students. Starting on a modest scale, our commitment to personalized guidance and ethical counseling laid the foundation for future growth.",
      icon: Calendar,
      color: "from-orange-500 to-amber-500"
    },
    {
      year: "2021",
      title: "Expanding Global Opportunities",
      desc: "As student demand grew, Western Study strengthened its international network by collaborating with universities and educational institutions across Europe, Asia, and other leading study destinations, offering students a wider range of academic opportunities.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },
    {
      year: "2022",
      title: "Building Trust & Excellence",
      desc: "Through dedicated counseling, transparent services, and student-centered support, Western Study established itself as a trusted name in the study abroad sector, helping students navigate university admissions and visa processes with confidence.",
      icon: Award,
      color: "from-[#f15b24] to-red-500"
    },
    {
      year: "2025",
      title: "A New Chapter of Growth",
      desc: "Marking a significant milestone in our journey, Western Study relocated to a new and expanded office space in 2025. This transition reflects our continued growth and commitment to delivering an enhanced experience for students and families.",
      icon: Globe,
      color: "from-emerald-500 to-teal-500"
    },
    {
      year: "Today",
      title: "Shaping Global Futures",
      desc: "Today, Western Study proudly collaborates with 210+ universities and educational institutions across Hungary, Malta, Italy, Greece, Finland, Sweden, Canada, Denmark, Netherlands, United Kingdom, South Korea, Cyprus, and Malaysia, New Zealand and other destinations. We remain dedicated to guiding ambitious students toward world-class educational opportunities and brighter global careers.",
      icon: Star,
      color: "from-purple-500 to-[#2c3164]"
    }
  ];

  return (
    <section id="company-history-section" className="py-2 bg-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#f15b24] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f15b24]" />
            <span>Our Origin Story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Journey & History
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            A journey defined by trust, growth, and an unwavering commitment to helping students achieve their global education dreams.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative mt-8">
          
          {/* Vertical Central Line (Hidden on small, centered on large) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  id={`milestone-${item.year}`}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch md:items-center relative`}
                >
                  
                  {/* Timeline Node Badge Icon (Absolutely placed or grid aligned) */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-md md:transform md:-translate-x-1/2 md:z-10 text-[#f15b24] hover:scale-115 transition-transform duration-300">
                    <IconComp size={18} />
                  </div>

                  {/* Card Container: Clears high-contrast badge using md:pr-12 / md:pl-12 */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} text-left`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-slate-50 border border-gray-100 p-6 md:p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 w-full max-w-lg relative group text-left"
                    >
                      {/* Floating glowing color strip at top of card */}
                      <div className={`absolute top-0 inset-x-8 h-1 rounded-full bg-gradient-to-r ${item.color}`} />

                      <div className="flex flex-col space-y-3 mt-2">
                        {/* Milestone Year Header */}
                        <div className="flex items-center gap-3 justify-between group-hover:scale-102 transition-transform">
                          <span className={`text-xl md:text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.year}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-500 font-mono px-2.5 py-0.5 rounded-full">
                            Phase {idx + 1}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#f15b24] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Balanced spacer for standard grid layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
