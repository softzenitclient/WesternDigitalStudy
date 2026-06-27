import React from 'react';
import { FileCheck, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function USAVisaInfo() {
  const visaTypes = [
    {
      subclass: "Academic Student",
      title: "F-1 Student Visa",
      duration: "Duration of Status (D/S)",
      eligibility: "Targeted at academic studies at SEVP-certified universities. Requires the official I-20 certificate, SEVIS payment confirmation, and DS-160 submissions.",
      icon: <FileCheck className="text-[#f15b24]" size={22} />
    },
    {
      subclass: "STEM Benefit",
      title: "STEM OPT Extension",
      duration: "Up to 36 months (12m basic + 24m STEM)",
      eligibility: "International graduates holding certified Science, Technology, Engineering, or Mathematics (STEM) degrees can extend their practical work terms.",
      icon: <Award className="text-indigo-600" size={22} />
    }
  ];

  const coreRequirements = [
    { title: "Form I-20 (Certificate of Eligibility)", detail: "The foundational SEVP document generated directly by your sponsoring US university, proving academic admission and certified funding assets." },
    { title: "SEVIS I-901 Receipt Proof", detail: "Mandatory registry fee of $350 paid upfront to the US Department of Homeland Security to track student entries." },
    { title: "Completed form DS-160 & Fee Receipt", detail: "Online non-immigrant application submission barcode sheet along with your official embassy appointment fee receipt ($185)." },
    { title: "Demonstrated Financial Liquid Assets", detail: "Bank financial statements matching the total estimated cost of attendance for 1 academic year as documented in your I-20." },
    { title: "English & Academic Test Scores", detail: "Accepts TOEFL iBT (80+), IELTS Academic (6.5+), Duolingo (110+), or GRE/GMAT depending on postgraduate programs." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Visa routing & SEVP Criteria
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          United States F-1 Student Visa Essentials
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          The US Department of State evaluates non-immigrant students through comprehensive F-1 visa interviews. Our specialists guide you on DS-160 filings and mock interview answers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visaTypes.map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 shrink-0">
                {v.icon}
              </div>
              <div>
                <span className="text-[10px] bg-[#f15b24]/10 text-[#f15b24] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase">
                  {v.subclass}
                </span>
                <h3 className="text-base font-extrabold text-[#2c3164] mt-0.5 font-sans">{v.title}</h3>
              </div>
            </div>
            <div className="border-t border-slate-200/50 pt-3 space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between font-semibold text-gray-700">
                <span>Validity Target</span>
                <span className="text-indigo-600">{v.duration}</span>
              </div>
              <p className="leading-relaxed text-gray-500 pt-1 font-sans">{v.eligibility}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold font-mono tracking-wider uppercase text-gray-400">
          Essential F-1 Student Visa Document Checklist
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreRequirements.map((req, index) => (
            <div key={index} className="flex gap-3 p-3.5 hover:bg-slate-50 rounded-xl transition-colors duration-200">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-extrabold text-gray-800">{req.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-sans">{req.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
