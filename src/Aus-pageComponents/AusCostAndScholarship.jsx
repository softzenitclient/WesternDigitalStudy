import React from 'react';
import { DollarSign, Landmark, Award, Gift, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

export default function AusCostAndScholarship() {
  const expenses = [
    { title: "Academic Tuition Program", cost: "AUD $24,000 - $46,500 / Yr", text: "Varies depending on bachelor vs master courses, specific universities, & major fields (Business vs. STEM)." },
    { title: "Required Living Costs (DHA)", cost: "AUD $29,710 / Yr", text: "Set by the Dept. of Home Affairs to securely cover rent, meals, bills, groceries & local commutes." },
    { title: "Weekly Rent/Lease Options", cost: "AUD $180 - $450 / Wk", text: "On-campus accommodations are higher. Homestays & shared apartments in suburbs offer budget savings." },
    { title: "Overseas Student Health (OSHC)", cost: "AUD $550 - $800 / Yr", text: "Mandatory preventative wellness, doctor consults, medications, and general hospitalization insurance." }
  ];

  const scholarships = [
    {
      title: "Australia Awards Scholarships",
      val: "Full Tuition + Airfare + Allowance",
      desc: "Administered by DFAT targeting high-achieving leaders and development agents across partnered international locations."
    },
    {
      title: "Destination Australia Program",
      val: "Up to AUD $15,000 / Year",
      desc: "Supporting student enrollments in remote regional campus centers across Australia to foster decentralization."
    },
    {
      title: "University Global Merit Waivers",
      val: "15% to 30% Tuition Reduction",
      desc: "Automatically evaluated during baseline student admissions. Awarded based on your previous academic CGPA transcripts."
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cost of Living Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Budget & Financial Estimates
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              Cost of Living & Tuition Rates
            </h2>
            <p className="text-xs text-gray-400">
              Rates for 2026-2027 sessions.
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

        {/* Scholarships Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f15b24] font-mono tracking-widest uppercase block">
              Financing & Grants
            </span>
            <h2 className="text-2xl font-extrabold text-[#2c3164] font-serif tracking-tight">
              Scholarship Opportunities
            </h2>
            <p className="text-xs text-gray-400">
              Maximize your application to lower educational budgets.
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
              <h4 className="text-xs font-extrabold text-gray-800">Counsellor Tip for Funding</h4>
              <p className="text-[11px] text-gray-600 leading-normal font-sans">
                Submitting your applications early (at least 6-8 months before term intake begins) unlocks full eligibility for direct university tuition reduction grants up to 30%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
