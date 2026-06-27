import React from 'react';
import { Compass, GraduationCap, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function UKAdmissionStep() {
  const steps = [
    {
      step: "01",
      title: "Course Selection & Portfolio Assessment",
      desc: "Our advisors evaluate your study history to find appropriate bachelor/masters degrees across prestigious UK universities.",
      duration: "1 - 3 Days"
    },
    {
      step: "02",
      title: "Direct/UCAS Portal Submission",
      desc: "We build your academic portfolios and statements of purpose to lodge registrations. Earn direct Conditional/Unconditional Offer Letters.",
      duration: "1 - 3 Weeks"
    },
    {
      step: "03",
      title: "Pre-CAS Interview & Bank Review",
      desc: "Complete university-specific mock mock credibility rounds and organize 28-day maintenance bank deposits accurately.",
      duration: "1 - 2 Weeks"
    },
    {
      step: "04",
      title: "Deposit Fee & Earn Virtual CAS",
      desc: "Transfer initial program deposits to secure your 14-digit Confirmation of Acceptance for Studies (CAS) reference on the UKVI registry.",
      duration: "3 - 7 Days"
    },
    {
      step: "05",
      title: "UKVI Points-Based Visa Lodging",
      desc: "Apply on the official UKVI digital platform. Track your rapid document approval metrics and pre-flight briefings.",
      duration: "2 - 4 Weeks"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Streamlined Admissions Roadmap
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Admission Process to Top UK Universities
        </h2>
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
          From application submission to earning your virtual CAS number, we make admissions straightforward.
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
