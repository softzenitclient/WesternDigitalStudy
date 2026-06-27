import React from 'react';
import { FileCheck, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function UKVisaInfo() {
  const visaTypes = [
    {
      subclass: "Points-Based Route",
      title: "Student Visa (Formerly Tier 4)",
      duration: "Up to 5 years (covers course length)",
      eligibility: "Requires 70 points: 50 points for CAS, 10 points for maintenance funds, and 10 points for English proficiency tests.",
      icon: <FileCheck className="text-[#f15b24]" size={22} />
    },
    {
      subclass: "Graduate Route",
      title: "Graduate Visa (PSW)",
      duration: "2 years (3 years for doctoral graduates)",
      eligibility: "Must hold active student visa status and complete an eligible UK bachelor, master or higher postgraduate program.",
      icon: <Award className="text-indigo-600" size={22} />
    }
  ];

  const coreRequirements = [
    { title: "Confirmation of Acceptance for Studies (CAS)", detail: "Your virtual 14-digit reference code generated directly by your sponsoring UK higher education provider." },
    { title: "Maintenance Living Funds Proof", detail: "Proof of £12,006 Outside London (or £13,348 Inside London) held securely in a bank account for a continuous 28-day period." },
    { title: "English Language Standard", detail: "Accepts SELT IELTS (minimum 6.0 bands) or university-specific equivalent credentials/tests." },
    { title: "Immigration Health Surcharge (IHS)", detail: "Mandatory annual medical surcharge of £776 per student year, providing full access to the UK National Health Service (NHS)." },
    { title: "Academic Technology Approval (ATAS)", detail: "Security clearance certificates required for select postgraduate courses in physical science and cyber engineering." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Visa Pathways & UKVI Metrics
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          United Kingdom Student Visa Guidelines
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          The UKVI manages student processing under a highly objective points-based route. Our experienced agency coordinates with Tier 1 UK universities for fast-track admissions.
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
          Essential UK student Visa Document Checklist
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
