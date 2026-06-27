import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function AusStatsAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "What are the primary intake periods for Australian universities?",
      a: "The main intake periods are Semester 1 (starting late February or early March) and Semester 2 (starting late July or early August). Some universities and private colleges also offer minor intakes in November (Trimester 3)."
    },
    {
      q: "What are the working hour limitations on an Australian student visa?",
      a: "As an Australian student visa holder (Subclass 500), you are legally permitted to work up to 48 hours per fortnight during active semester sessions and unlimited hours during official university breaks."
    },
    {
      q: "Can I bring my spouse/dependents with me to Australia?",
      a: "Yes. You can include your spouse and dependent children under the age of 18 in your student visa application. Spouses are generally eligible to work up to 48 hours per fortnight, or unlimited hours if you are studying a Master's degree by research or PhD."
    },
    {
      q: "What is the English language test requirement?",
      a: "Australia accepts IELTS Academic, PTE Academic, and TOEFL iBT. For most Bachelor's and Master's programs, the baseline requirement is an IELTS score of 6.5 with no band less than 6.0, though some courses accept IELTS 6.0 (or PTE equivalent of 50-58)."
    },
    {
      q: "How long can I work in Australia after graduating?",
      a: "Under the Temporary Graduate visa (subclass 485) Post-Study Work stream, graduates can work for 2 to 4 years depending on their qualification. Regional university graduates may qualify for an extra 1 to 2 years extension."
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
          Quick, official advice regarding your Australian higher education applications.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              id={`aus-faq-btn-${i}`}
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
