import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, FileCheck2, Globe, Bookmark } from 'lucide-react';

export default function TeamCredentials() {
  const credentials = [
    {
      title: "QEAC Certified (PIER)",
      sub: "Qualified Education Agent Counsellors",
      desc: "Our counselors have undergone PIER training, certifying authentic knowledge of the Australian education framework.",
      badge: "Verify ID: G1224"
    },
    {
      title: "British Council Certified",
      sub: "UK Education Advisers Register",
      desc: "Certified by the British Council for professional advice and high-integrity consultancy services for all UK institutions.",
      badge: "British Council Approved"
    },
    {
      title: "ICEF Trained Agency Agents",
      sub: "ITAC (ICEF Certified)",
      desc: "Recognized internationally for top compliance standards, industry knowledge, and ethical student placement procedures.",
      badge: "ICEF Reg: #4812"
    },
    {
      title: "MARA Approved Networks",
      sub: "Migration Agents Registration Authority",
      desc: "Direct partnerships with registered MARA agents to review complex Visa cases and guide legal migration pathways.",
      badge: "MARA Vetted"
    }
  ];

  const teamStats = [
    { label: "Full-Time Senior Counselors", value: "35+" },
    { label: "In-House Visa App Auditors", value: "12" },
    { label: "University Liaison Managers", value: "8" },
    { label: "Pre-Departure Case Mentors", value: "15" },
  ];

  return (
    <section id="team-credentials-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Narrative list & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Accredited Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Our Specialist <br /> Credentials
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                At Western Study, we don’t rely on hearsay. Our advice is grounded in state-accredited expertise, regular compliance reviews, and verified agency certifications. Every advisor undergoes thorough testing to ensure they are fully qualified to guide your path.
              </p>
            </div>

            {/* List of facts */}
            <div className="space-y-3.5 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#f15b24] mt-0.5 flex-shrink-0" />
                <span>Continuous legal training on up-to-date Student Visa regulatory policies.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#f15b24] mt-0.5 flex-shrink-0" />
                <span>Strict adherence to the International Student Code of Ethical Practice.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#f15b24] mt-0.5 flex-shrink-0" />
                <span>Vetted by global consulates and state education departments.</span>
              </div>
            </div>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              {teamStats.map((stat, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                  <p className="text-2xl md:text-3xl font-black text-gray-900 font-sans">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-tight mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Accordion / Cards list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                id={`credential-card-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 border border-gray-100 p-6 md:p-8 rounded-[28px] hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-white text-[#f15b24] rounded-2xl border border-gray-100 shadow-sm">
                      <GraduationCap size={22} />
                    </div>
                    <span className="text-[10px] uppercase font-bold font-mono tracking-wider bg-[#f15b24]/10 text-[#f15b24] px-2.5 py-1 rounded-full">
                      Vetted
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium font-serif italic">
                      {cred.sub}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
                      {cred.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200/50 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {cred.badge}
                  </span>
                  <Award size={14} className="text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
