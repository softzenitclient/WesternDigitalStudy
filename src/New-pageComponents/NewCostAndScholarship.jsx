import React from 'react';
import { DollarSign, Award, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

export default function NewCostAndScholarship() {
  const expenses = [
    { title: "Academic Program Tuition", cost: "NZD $28,000 - $44,000 / Yr", text: "Varies depending on public universities vs ITP polytechnics, Level 7 certificates vs level 9 postgraduate degrees." },
    { title: "Mandatory INZ Living Funds", cost: "NZD $20,000 / Yr", text: "Compliance threshold set by INZ to ensure students cover housing, food, local travel and personal utility bills comfortably." },
    { title: "Weekly Flat/Boarding Rates", cost: "NZD $160 - $350 / Wk", text: "Suburbs in Christchurch or Hamilton offer cheaper rentals. Auckland centers features slightly higher averages." },
    { title: "Student Health Cover (OSHC)", cost: "NZD $650 - $950 / Yr", text: "Mandatory student medical insurance covering doctor checkups, hospital diagnostics, and dental emergencies." }
  ];

  const scholarships = [
    {
      title: "New Zealand Excellence Scholarships",
      val: "Up to NZD $10,000 Waiver",
      desc: "Co-funded by Education New Zealand and top NZ universities, supporting smart minds joining STEM, business & humanities."
    },
    {
      title: "Victoria Tongarewa Scholarships",
      val: "NZD $5,000 to $10,000",
      desc: "Offered at Wellington for high academic achievers entering bachelor or postgraduate degree tracks."
    },
    {
      title: "ITP Institutional Grants",
      val: "NZD $2,000 to $5,000",
      desc: "Awarded automatically at community polytechnics for students enrolling in practical vocational diplomas."
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
              Averages calculated for the 2026-2027 academic sessions in New Zealand.
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
              NZ Scholarships & Grants
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Leverage your academic profiles to earn significant tuition discounts.
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
              <h4 className="text-xs font-extrabold text-gray-800">Polytechnic Savings Tip</h4>
              <p className="text-[11px] text-gray-600 leading-normal font-sans">
                Community Institute of Technology (ITPs) courses offer tuition rates up to 30% lower than standard universities, providing excellent student pathways with the same post-study work permit rights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
