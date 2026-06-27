import React from 'react';
import { DollarSign, Landmark, Award, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

export default function UKCostAndScholarship() {
  const expenses = [
    { title: "Academic Program Tuition", cost: "£11,500 - £26,000 / Yr", text: "Varies depending on public universities, London location parameters, and major classes (STEM vs standard Humanities)." },
    { title: "Required Living Funds Outside London", cost: "£9,207 / Yr (9-months)", text: "Fixed UKVI safety value (£1,023 per month for 9 months) covering housing sublets, food, local travel and groceries." },
    { title: "Immigration Health Surcharge (IHS)", cost: "£776 / Yr", text: "Mandatory surcharge providing full legal access to National Health Service (NHS) clinics and local hospitals." },
    { title: "Required Living Funds Inside London", cost: "£12,006 / Yr (9-months)", text: "Fixed UKVI threshold (£1,334 per month for 9 months) due to higher averages in Westminster, Camden, or Southwark." }
  ];

  const scholarships = [
    {
      title: "Chevening Scholarships",
      val: "100% Fully Funded Awards",
      desc: "UK government's global scholarship scheme covering full tuition, living stipends, and economy round-trip airfare."
    },
    {
      title: "GREAT Scholarships",
      val: "Minimum £10,000 Tuition Waiver",
      desc: "Co-funded by the British Council and partner universities, targeting high intellectual minds joining specific postgraduate courses."
    },
    {
      title: "Commonwealth Fellowship Awards",
      val: "Full Postgraduate Grants",
      desc: "Targeted at graduates from developing Commonwealth nations, prioritizing high-impact developmental research."
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
              Average estimates calculated for the 2026-2027 academic sessions in the UK.
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
              UK Scholarships & Government Grants
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Earn significant merit waivers by working closely with our advisors.
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
              <h4 className="text-xs font-extrabold text-gray-800">London Living Savings Tip</h4>
              <p className="text-[11px] text-gray-600 leading-normal font-sans">
                Selecting high-ranking regional universities (e.g., in Leeds, Coventry, Sheffield, or Glasgow) lowers accommodation rentals by up to 40% compared to core London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
