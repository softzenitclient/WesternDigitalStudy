import React from 'react';
import { DollarSign, Landmark, Award, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

export default function CanCostAndScholarship() {
  const expenses = [
    { title: "Academic Program Tuition", cost: "CAD $18,000 - $39,000 / Yr", text: "Varies depending on public universities vs community colleges. Business & Engineering programs are higher than Arts." },
    { title: "Mandatory GIC Living Funds", cost: "CAD $20,635 / Yr", text: "Mandated upfront bank deposit by IRCC to pay for food, utilities, rentals, local travel, and winter outerwear." },
    { title: "Monthly Rental Sublets", cost: "CAD $500 - $1,100 / Mo", text: "On-campus options are popular. Most students save by renting shared basements or apartments in suburbs." },
    { title: "Textbooks & Student Health", cost: "CAD $1,200 - $2,500 / Yr", text: "Mandatory provincial health plan (e.g., UHIP in Ontario) plus textbooks, student card dues, and activities." }
  ];

  const scholarships = [
    {
      title: "Lester B. Pearson Scholarships",
      val: "100% Fully Funded Awards",
      desc: "Offered by the University of Toronto for outstanding global leaders. Co-covers tuition, room, and study materials."
    },
    {
      title: "Karen McKellin Leader of Tomorrow",
      val: "Up to CAD $40,000 / Year",
      desc: "UBC award recognizing elite global scholars with exceptional academic sheets and civic leadership skills."
    },
    {
      title: "International Entry Awards",
      val: "CAD $2,000 to $15,000",
      desc: "Automatically evaluated with standard applications at York, Alberta, Windsor, and Brock depending on high-school marks."
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cost breakdown */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Budget & Financial Estimates
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              Cost of Living & Tuition Rates
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Averages calculated for the 2026-2027 academic sessions in Canada.
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

        {/* Scholarships */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Scholarship opportunities
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              Canadian Scholarships & Grants
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              We guide students to qualify for automatic entrance awards and direct major fellowships.
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
              <h4 className="text-xs font-extrabold text-gray-800">SDS Scholarship Tip</h4>
              <p className="text-[11px] text-gray-600 leading-normal font-sans">
                Many universities reserve CAD $5,000 entrance awards automatically for high academic scholars who pay first-year fees instantly upon earning admissions offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
