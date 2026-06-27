import React from 'react';
import { Target, Eye, Compass, Heart, Shield, Library } from 'lucide-react';
import { motion } from 'motion/react';

export default function MissionVision() {
  const values = [
    {
      title: "Transparency & Integrity",
      desc: "We believe in honest and ethical guidance at every stage of the study abroad journey. From university selection and tuition fees to application procedures and visa requirements, we provide clear, accurate, and transparent information to help students make confident decisions.",
      icon: Shield,
    },
    {
      title: "Student-Centered Approach",
      desc: "Every student's journey is unique. We take the time to understand individual aspirations, academic backgrounds, and career goals, delivering personalized counseling and tailored solutions that support long-term success.",
      icon: Heart,
    },
    {
      title: "Commitment to Excellence",
      desc: "Our team follows the highest standards of professionalism and accuracy to ensure every application is prepared with care and precision.",
      icon: Compass,
    },
    {
      title: "Global Academic Quality",
      desc: "We collaborate with reputable and accredited institutions worldwide, connecting students with high-quality educational opportunities that support their future success.",
      icon: Library,
    }
  ];

  return (
    <section id="mission-vision-section" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Main Grid: Mission (Left) and Vision (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Corner Decorative Dot */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full pointer-events-none group-hover:bg-[#f15b24]/10 transition-colors duration-300" />
            
            <div className="space-y-6">
              <div className="p-4 bg-orange-55 shadow-md w-fit rounded-2xl text-white bg-gradient-to-tr from-[#f15b24] to-orange-400">
                <Target size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Mission Statement
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                At Western Study, our mission is to simplify and empower the study abroad journey by providing transparent, reliable, and student-focused guidance. We are committed to helping students make informed decisions and achieve their global academic aspirations through ethical counseling, personalized support, and trusted international partnerships.
              </p>
            </div>
            <div className="mt-8 border-t border-gray-100 pt-6 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>EST. 2015</span>
              <span>WESTERN STUDY CORE</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Corner Decorative Dot */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-300" />

            <div className="space-y-6">
              <div className="p-4 bg-orange-55 shadow-md w-fit rounded-2xl text-white bg-gradient-to-tr from-[#2c3164] to-indigo-500">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Strategic Vision
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                To become one of the most trusted and respected international education consultancies, recognized for service excellence, strong university partnerships, and innovative solutions that help students succeed in their academic and career goals worldwide.
              </p>
            </div>
            <div className="mt-8 border-t border-gray-100 pt-6 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>GLOBAL TARGET</span>
              <span>HORIZON 2030</span>
            </div>
          </motion.div>

        </div>

        {/* Our Shared Values Sub-Section */}
        <div className="mt-24 space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Core Principles
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              These fundamental traits govern every consult, file assessment, and institutional correspondence we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <motion.div
                  key={i}
                  id={`value-card-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-gray-100 p-6 md:p-8 rounded-[24px] hover:border-[#f15b24]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 w-fit text-[#f15b24] rounded-xl border border-gray-100">
                      <IconComp size={20} />
                    </div>
                    <h4 className="text-base font-bold text-gray-900">
                      {v.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
