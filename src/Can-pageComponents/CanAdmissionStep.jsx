import React from 'react';
import { Compass, GraduationCap, FileCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function CanAdmissionStep() {
  const steps = [
    {
      step: "01",
      title: "Course Vetting & University Selection",
      desc: "Our advisors evaluate your CGPA & language test scores to align programs with public Designated Learning Institutions (DLI) offering PGWP.",
      duration: "1 - 3 Days"
    },
    {
      step: "02",
      title: "Apply for Letter of Acceptance (LOA)",
      desc: "We file your transcripts, SOP, and reference letters directly. Secure your crucial Letter of Acceptance with our priority partner listings.",
      duration: "3 - 6 Weeks"
    },
    {
      step: "03",
      title: "GIC Account Setup & Upfront Tuition",
      desc: "Transfer annual living funds of CAD $20,635 to open your Scotiabank/CIBC GIC account, and transfer first-year tuition directly to your university.",
      duration: "1 - 2 Weeks"
    },
    {
      step: "04",
      title: "Upfront Medical Exams & Biometrics",
      desc: "Complete panel doctor medical assessments and prepare final physical biometrics parameters ahead of launching target visa files.",
      duration: "3 - 5 Days"
    },
    {
      step: "05",
      title: "Study Permit Lodgement (GCKey)",
      desc: "Lodge your complete digital study permit application on the IRCC portal. Track real-time status with our dedicated admissions panel.",
      duration: "2 - 8 Weeks"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Step-by-Step Admissions Roadmap
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Admission Process to Top Canadian Universities
        </h2>
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
          From profile vetting to landing in Toronto or Vancouver, we manage every single step of your Canadian dream.
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
