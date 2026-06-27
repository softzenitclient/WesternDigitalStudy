import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function USAStatsAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "What is STEM OPT and how does it help international students?",
      a: "Optional Practical Training (OPT) is a 12-month work authorization for F-1 visa holders. STEM graduates (Science, Technology, Engineering, or Math) are eligible to apply for a 24-month STEM OPT extension, allowing them to work in the US for up to 3 years total."
    },
    {
      q: "Are F-1 students allowed to work during their studies?",
      a: "Yes, but with strict rules. F-1 students can work part-time up to 20 hours per week on-campus when school is in session, and full-time (40 hours per week) during holiday breaks. Off-campus work requires CPT or OPT approval."
    },
    {
      q: "What is the I-20 Form and how do I secure it?",
      a: "Form I-20 is an official SEVP document issued by your US university. It certifies your admission, course of study, and financial coverage. You must present this form during your F-1 embassy interview."
    },
    {
      q: "What is the English language score required for US Universities?",
      a: "Most US colleges accept TOEFL, IELTS, and Duolingo. Elite universities typically require TOEFL 80+, IELTS 6.5+, or Duolingo 110-120+. Some graduate schools may also require GRE or GMAT scores."
    },
    {
      q: "How does the visa officer evaluate F-1 student profiles?",
      a: "Consular officers evaluate your academic record, financial solvency (your ability to pay tuition and living expenses), and non-immigrant intent (proving strong ties to your home country that ensure your return)."
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
          Quick, official advice regarding your F-1 student visas.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              id={`usa-faq-btn-${i}`}
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
