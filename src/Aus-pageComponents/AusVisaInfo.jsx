import React from 'react';
import { FileCheck, ShieldAlert, Award, Clock, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function AusVisaInfo() {
  const visaTypes = [
    {
      subclass: "Subclass 500",
      title: "Student Visa",
      duration: "Up to 5 years (aligned with courses)",
      eligibility: "Requires Confirmation of Enrolment (CoE) from registered CRICOS school, OSHC health coverage, and GTE criteria.",
      icon: <FileCheck className="text-[#f15b24]" size={22} />
    },
    {
      subclass: "Subclass 485",
      title: "Temporary Graduate Visa",
      duration: "From 2 to 6 years post-study",
      eligibility: "Requires course completion minimum 2 years, IELTS overall 6.5, and holding active student subclass 500 status.",
      icon: <Award className="text-indigo-600" size={22} />
    }
  ];

  const coreRequirements = [
    { title: "Confirmation of Enrolment (CoE)", detail: "Your official letter of validation issued directly by educational providers upon paying the safety deposit fees." },
    { title: "Financial Capability Verification", detail: "Proof of annual funds of AUD $29,710 for primary living costs plus tuition payments & return travel ticket values." },
    { title: "English Proficiency Score", detail: "Valid IELTS (minimum 6.0 bands) or equivalent PTE Academic (50+) or TOEFL scores." },
    { title: "Overseas Student Health Cover (OSHC)", detail: "Mandatory private health insurance coverage covering the complete duration of student visa stays in Australia." },
    { title: "Genuine Student (GS) Statement", detail: "A comprehensive written statement proving your genuine intention to study in Australia with real academic ties." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      {/* Upper header */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
          Visa Framework & Subclasses
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Australian Student Visa Requirements
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          The Australian Department of Home Affairs manages streamlined visa processing for subclass 500 applicants. Study comfortably with expert guidance on necessary files.
        </p>
      </div>

      {/* Grid of visa categories */}
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

      {/* Requirement listing checklist */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold font-mono tracking-wider uppercase text-gray-400">
          Essential Visa Document Checklist
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
