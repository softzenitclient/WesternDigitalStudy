import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function CanStatsAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "What is PGWP and how long can I stay in Canada after graduation?",
      a: "The Post-Graduation Work Permit (PGWP) allows you to live and work in Canada post-graduation. A 1-year academic course generally awards a 1-year PGWP, while a 2-year academic program or master's program awards a full 3-year PGWP."
    },
    {
      q: "Are students permitted to work part-time in Canada?",
      a: "Yes. Study permit holders are legally entitled to work up to 20 hours per week off-campus during academic semesters and full-time (40 hours per week) during scheduled seasonal breaks (e.g. summer/winter)."
    },
    {
      q: "Can I bring my spouse/family dependents to Canada?",
      a: "Yes. Spouses of students enrolled in Master's or Doctoral programs at public universities are eligible to apply for an Open Work Permit (SOWP), allowing them to work full-time while you complete studies. Minor children are eligible for study or visitor permits."
    },
    {
      q: "What is the minimum IELTS band score required for SDS study permits?",
      a: "For SDS stream processing, IRCC requires a minimum score of IELTS Academic overall 6.0 with no individual band score less than 6.0. Alternatively, Pearson Test of English (PTE) Academic overall scores of 60+ are accepted under Non-SDS fast-tracks."
    },
    {
      q: "How does the GIC (Guaranteed Investment Certificate) system work?",
      a: "Students transfer CAD $20,635 to a partner Canadian financial provider (like CIBC or Scotiabank). The bank holds this in an investment account and releases approximately CAD $1,600/month upon arrival to self-manage living expenses."
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
          Quick, official advice regarding your Canadian higher education applications.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              id={`can-faq-btn-${i}`}
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
