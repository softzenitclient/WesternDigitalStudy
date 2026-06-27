import React from 'react';
import { FileCheck, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function NewVisaInfo() {
  const visaTypes = [
    {
      subclass: "Fee Paying Student",
      title: "Pathway Student Visa",
      duration: "Up to 5 years (covers multiple study blocks)",
      eligibility: "Permits studying up to 3 consecutive courses under a pre-approved Pathway provider. Requires payment of initial terms.",
      icon: <FileCheck className="text-[#f15b24]" size={22} />
    },
    {
      subclass: "Graduate Work Stream",
      title: "Post-Study Work Visa (PSWV)",
      duration: "From 1 to 3 years post-graduation",
      eligibility: "Completion of eligible NZ Bachelor, Master or Postgraduate degrees. Level 7 graduate diploma requires relevant industry alignments.",
      icon: <Award className="text-indigo-600" size={22} />
    }
  ];

  const coreRequirements = [
    { title: "Offer of Place", detail: "Official placement letter issued by an NZQA approved educational provider (e.g., University or high-status ITP)." },
    { title: "Sufficient Finances Proof", detail: "Proof of NZD $20,000 per living year of active study (plus upfront return air ticket fees or an extra NZD $1,500)." },
    { title: "English Language Standard", detail: "Accepts IELTS Academic overall score of 6.0 or 6.5, or PTE Academic scores of 50-58+ depending on Level 7 vs postgraduate studies." },
    { title: "Upfront Tuition Payment Approval", detail: "Payment must be completed AFTER initial approval-in-principle (AIP) is granted by Immigration New Zealand (INZ)." },
    { title: "Chest X-Ray & Medical Checkups", detail: "Mandatory medical checkups at approved panel clinics for students planning on residing in New Zealand for over 12 months." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Visa Types & INZ parameters
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          New Zealand Student Visa Requirements
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          Immigration New Zealand processes standard academic student applications with clear, objective parameters. Enjoy seamless visa guidance under our INZ certified partners.
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
          Essential New Zealand Student Checklist
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
