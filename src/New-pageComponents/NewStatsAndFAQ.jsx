import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function NewStatsAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "What is the NZ Post-Study Work Visa validity rules?",
      a: "Immigration New Zealand grants a Post-Study Work Visa (PSWV) up to 3 years if you complete a Level 7 Bachelor degree, Level 8 Postgraduate Diploma, or Level 9 Master's program. For Level 7 non-degree courses, the validity depends on the industry demand."
    },
    {
      q: "What are the weekly work hour limitations in New Zealand?",
      a: "Yes. International student visas (Pathway/Fee Paying) allow you to work up to 20 hours per week during active semesters and unlimited hours during seasonal academic vacations."
    },
    {
      q: "Can my spouse apply for an Open Work Visa in New Zealand?",
      a: "Spouse Open Work Visas are generally eligible only if the principal applicant is studying a Level 9 Master's degree, a Level 10 PhD, or a Level 7-8 program on INZ's Green List of high-demand roles."
    },
    {
      q: "Are PTE Academic scores accepted for New Zealand student visas?",
      a: "Yes. Pearson Test of English (PTE) Academic is fully accepted by all universities and polytechnics in New Zealand, alongside IELTS Academic and TOEFL iBT. Most Master's require PTE 58+ or IELTS 6.5 overall."
    },
    {
      q: "What is the difference between NZ Universities and ITP Polytechs?",
      a: "New Zealand has 8 national public universities focused heavily on academic theories & research. Institute of Technology and Polytechnics (ITPs) offer highly practical, vocation-aligned training models that are often cheaper with identical PGWP work rights."
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-bold text-[#f15b24] font-mono uppercase tracking-wider block">
          Information Center
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
          Frequently Asked Questions (FAQs)
        </h3>
        <p className="text-gray-400 text-xs text-left">
          Quick, official advice regarding your New Zealand higher education applications.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              id={`nz-faq-btn-${i}`}
              onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
              className="w-full text-left px-5 py-4 bg-slate-50 hover:bg-slate-100/70 transition-colors flex justify-between items-center gap-4 cursor-pointer"
            >
              <span className="text-xs md:text-sm font-extrabold text-[#2c3164] flex items-center gap-2.5">
                <HelpCircle size={15} className="text-[#f15b24] shrink-0" />
                <span>{faq.q}</span>
              </span>
              <ChevronDown
                size={16}
                className={`text-[#2c3164]/60 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`bg-white transition-all duration-300 overflow-hidden ${
                activeFaq === i ? 'max-h-40 px-5 py-4 border-t border-slate-100' : 'max-h-0'
              }`}
            >
              <p className="text-xs text-gray-500 leading-relaxed font-sans">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
