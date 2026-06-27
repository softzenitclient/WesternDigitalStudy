import React from 'react';
import { Compass, GraduationCap, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function NewAdmissionStep() {
  const steps = [
    {
      step: "01",
      title: "Course Vetting & Assessment",
      desc: "Connect with us to evaluate your academic profile against Level 7 bachelor scales or Level 8 - 9 postgraduate courses.",
      duration: "1 - 3 Days"
    },
    {
      step: "02",
      title: "Acquire 'Offer of Place' Document",
      desc: "Our counselors submit your academic logs and SOP to NZQA universities. Recieve your direct Offer of Place confirmation.",
      duration: "2 - 4 Weeks"
    },
    {
      step: "03",
      title: "Lodge Visa with Immigration NZ",
      desc: "We organize financial and sponsor files to lodge your visa application. Track responses leading to your unique AIP.",
      duration: "4 - 8 Weeks"
    },
    {
      step: "04",
      title: "Tuition Fund Transfer (AIP)",
      desc: "Once Immigration NZ grants Approval-in-Principle (AIP), transfer your first-year tuition fees directly to the university.",
      duration: "3 - 5 Days"
    },
    {
      step: "05",
      title: "Visa Grant & Airport Briefing",
      desc: "Secure your physical eVisa label. Take part in our signature pre-departure webinars to book cheap student lodging models.",
      duration: "1 - 2 Weeks"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Admissions Roadmap
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Admissions process step-by-step
        </h2>
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
          Understanding the Approval-in-Principle (AIP) sequence is vital. We ensure you complete every file correctly.
        </p>
      </div>

      <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8 py-2">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[51px] md:-left-[59px] top-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#f15b24] text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white">
              {s.step}
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-orange-200 transition-all duration-200 shadow-sm max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-extrabold text-[#2c3164] text-sm md:text-base font-sans">
                  {s.title}
                </h3>
                <span className="text-[10px] bg-[#2c3164]/10 text-[#2c3164] font-bold font-mono px-2.5 py-0.5 rounded-full shrink-0 self-start sm:self-auto">
                  {s.duration}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
