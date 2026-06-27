import React from 'react';
import { DollarSign, Award, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

export default function USACostAndScholarship() {
  const expenses = [
    { title: "Academic Program Tuition", cost: "USD $18,000 - $45,000 / Yr", text: "State public universities offer significantly lower in-state rates. Private Ivy Leagues feature premier averages." },
    { title: "Required living Costs (I-20)", cost: "USD $15,000 - $22,000 / Yr", text: "Set by universities to safely cover rent, meals, textbooks, and local commutes for 9 active academic months." },
    { title: "Monthly Rental Sublets", cost: "USD $500 - $1,200 / Mo", text: "Shared off-campus housing or suburban houses offer incredible budget savings compared to prime Boston or NYC campuses." },
    { title: "Textbooks & Health cover", cost: "USD $1,800 - $3,500 / Yr", text: "Sponsoring schools require mandatory student medical plans in the absence of corporate health sponsorships." }
  ];

  const scholarships = [
    {
      title: "Fulbright Student Fellowships",
      val: "100% Fully Funded Awards",
      desc: "Sponsored by the State Department. Co-covers full tuition, international economy airfare, books, and monthly living stipends."
    },
    {
      title: "Graduate Assistantships (TA/RA)",
      val: "100% Tuition Waive + Stipend",
      desc: "Earn full tuition write-offs and monthly salaries by teaching undergrads or conducting scientific research with professors."
    },
    {
      title: "Institutional Merit Scholarships",
      val: "USD $5,000 to $20,000 / Year",
      desc: "Universities automatically evaluate incoming applications for excellence awards based on outstanding CGPA and test scores."
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Budget & Financial Estimates
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              Cost of Living & Tuition Rates
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Estimates calculated for the 2026-2027 sessions across US states.
            </p>
          </div>

          <div className="space-y-4">
            {expenses.map((expense, idx) => (
              <div key={idx} className="flex gap-4 p-4.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-100 transition-colors">
                <div className="p-3 bg-white text-emerald-600 rounded-xl shadow-sm border border-emerald-50 h-fit">
                  <DollarSign size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="text-xs font-extrabold text-gray-800">{expense.title}</h4>
                    <span className="text-xs font-extrabold text-emerald-600 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-full">{expense.cost}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-normal font-sans">{expense.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Scholarship opportunities
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              USA Scholarships & Assistantships
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              We help graduates secure Graduate Teaching (TA) or Research Assistantships (RA) directly.
            </p>
          </div>

          <div className="space-y-4">
            {scholarships.map((sch, i) => (
              <div key={i} className="flex gap-4 p-4.5 bg-white border border-indigo-50/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl h-fit">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xs font-extrabold text-[#2c3164]">{sch.title}</h4>
                    <span className="text-[10px] bg-indigo-50 text-indigo-600 font-extrabold px-2.5 py-0.5 rounded-full font-mono">{sch.val}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-normal font-sans">{sch.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-100/50 p-4 rounded-2xl flex items-start gap-3">
            <PiggyBank className="text-[#f15b24] shrink-0 mt-0.5" size={18} />
            <div className="space-y-0.5">
              <h4 className="text-xs font-extrabold text-gray-800">Assistantship Tip</h4>
              <p className="text-[11px] text-gray-600 leading-normal font-sans">
                Postgraduate stem applicants with high GRE/GMAT scores should prioritize emailing professors directly ahead of admissions to pitch for research lab assistantships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
