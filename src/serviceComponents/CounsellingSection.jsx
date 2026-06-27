import React from 'react';
import { Compass, GraduationCap, Award, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

export default function CounsellingSection() {
  const cards = [
    {
      id: "001",
      title: "Academic Assessment",
      desc: "We carefully evaluate your academic qualifications, language proficiency, and career objectives to identify suitable study pathways aligned with your future ambitions.",
      icon: Compass,
    },
    {
      id: "002",
      title: "Choosing a Suitable University",
      desc: "Our counselors assist you in selecting the most suitable country, university, and study program based on your academic profile, preferences, and long-term career goals.",
      icon: GraduationCap,
    },
    {
      id: "003",
      title: "Scholarship Opportunities",
      desc: "We help students explore and apply for available scholarships, tuition waivers, and financial aid opportunities offered by institutions.",
      icon: Award,
    },
    {
      id: "004",
      title: "Financial Planning",
      desc: "We provide guidance on tuition fees, living expenses, and financial documentation requirements to help students prepare a realistic education budget.",
      icon: Calculator,
    }
  ];

  return (
    <section id="student-counselling-section" className="pt-20 pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Main Content Info Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              <span className="text-[#f15b24] mr-2">•</span>
              Student counselling
            </h2>
            
            {/* Pill: What we discuss */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>What we discuss</span>
            </div>
          </div>

          {/* Right Column: Description text */}
          <div className="lg:col-span-7 text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              At <span className="font-semibold text-gray-900">Western Study</span>, we simplify your study abroad journey through personalized counseling, expert guidance, and end-to-end support. Our mission is to empower students with accurate information and tailored advice to help them make informed decisions about their international education and future careers.
            </p>
            <p>
              We proudly collaborate with 210+ universities and educational institutions across Hungary, Malta, Italy, Greece, Finland, Sweden, Canada, Netherlands, United   Kingdom, South Korea, Cyprus, and Malaysia, New Zealand, Denmark and others destinations. Our experienced counselors carefully evaluate each student's academic profile, career aspirations, financial capacity, and personal preferences to recommend the most suitable study destination, university, and program.
            </p>
          </div>

        </div>

        {/* 4 Cards Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                id={`counselling-card-${card.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-slate-50 border border-gray-100 p-8 rounded-[28px] hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col justify-start h-full min-h-[300px]"
              >
                {/* Card Top Row: Icon & Serial Number */}
                <div className="flex justify-between items-start w-full">
                  <div className="p-3 bg-white group-hover:bg-[#f15b24]/10 rounded-2xl border border-gray-100 group-hover:border-transparent transition-colors duration-300">
                    <IconComponent size={24} className="text-[#f15b24]" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 font-bold bg-white px-2.5 py-1 rounded-full border border-gray-100 group-hover:border-transparent transition-colors">
                    {card.id}
                  </span>
                </div>

                {/* Card Bottom Row: Title & Desc with perfect baseline alignment */}
                <div className="mt-8 flex flex-col flex-grow justify-start">
                  <h3 className="text-[17px] font-extrabold text-gray-900 group-hover:text-[#f15b24] transition-colors duration-200 min-h-[52px] flex items-start mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-semibold">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
