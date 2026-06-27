import React from 'react';
import { FileCheck, ShieldAlert, Award, Clock, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function CanVisaInfo() {
  const visaTypes = [
    {
      subclass: "SDS Pathway",
      title: "Student Direct Stream",
      duration: "Fast-track processing (within 20 days)",
      eligibility: "Requires upfront 1st year tuition payment, GIC of CAD $20,635, and minimum academic IELTS Academic overall 6.0 with no band less than 6.0 (or TEF).",
      icon: <FileCheck className="text-[#f15b24]" size={22} />
    },
    {
      subclass: "Non-SDS Pathway",
      title: "Regular Study Permit Stream",
      duration: "Standard processing (40 - 60 days)",
      eligibility: "For students with PTE, TOEFL or those without upfront GIC certificates. Requires strong proof of annual funds and liquid savings history.",
      icon: <Award className="text-indigo-600" size={22} />
    }
  ];

  const coreRequirements = [
    { title: "Letter of Acceptance (LOA)", detail: "Your official admissions seat confirmation letter issued by a Designated Learning Institution (DLI)." },
    { title: "Guaranteed Investment Certificate (GIC)", detail: "Provincial compliance requires a GIC certificate of CAD $20,635 deposited at a partner Canadian bank (e.g., CIBC or Scotiabank) to guarantee living funds." },
    { title: "English Language Mastery Test", detail: "SDS accepts IELTS Academic Academic 6.0 overall (no component lower than 6.0) or PTE 60+." },
    { title: "Upfront Tuition Payment Receipt", detail: "Proof of full payment for your first academic year tuition fees as documented in your LOA parameters." },
    { title: "Study Plan (SOP) & Explanation", detail: "A detailed custom statement of purpose explaining your program fit, academic context, and return intentions." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Visa Pathways & IRCC Rules
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Canadian Study Permit & IRCC Guidelines
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          IRCC processes study permit applications under fast-track SDS and regular Non-SDS routes. Our experienced team guides you through the full submission procedures properly.
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
          Essential Study Permit Document Checklist
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
