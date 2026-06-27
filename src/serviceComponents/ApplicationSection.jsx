import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ApplicationSection({ onApplyClick }) {
  const checklist = [
    "Match you with the most suitable universities based on your academic profile and career goals",
    "Assist in preparing and organizing all required application documents",
    "Ensure accurate and timely submission of applications to target institutions",
    "Provide complete support with application portals, logins, and follow-ups",
    "Track application progress and keep you informed at every stage"
    
  ];

  return (
    <section id="university-application-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Information and checklist */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                University <br className="hidden md:block" /> Application
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                At Western Study, we simplify the university application process through personalized guidance and expert support, making every step seamless, transparent, and stress-free. Our dedicated counselors work closely with each student to ensure applications are strategically prepared, maximizing opportunities for admission to leading institutions worldwide.
              </p>

              {/* Badged title */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>What we do</span>
              </div>

              {/* Checklist content */}
              <ul className="space-y-3.5 text-xs md:text-sm text-gray-700">
                {checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-orange-200 text-[#f15b24] flex items-center justify-center font-bold">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Request a Callback Button with yellow backing */}
              <div className="pt-4">
                <button
                  id="callback-btn-uni-app"
                  onClick={onApplyClick}
                  className="bg-[#ffd200] hover:bg-[#ebd039] text-gray-900 font-extrabold rounded-full px-7 py-3 flex items-center gap-3 transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md group cursor-pointer text-xs uppercase tracking-wider"
                >
                  <span>Request a callback</span>
                  <span className="p-1.5 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>
            </div>

            {/* Right side: Laptop illustration image mockup */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-tr from-[#f15b24]/5 to-[#2c3164]/5 rounded-3xl -rotate-2 scale-95" />
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
                alt="University Application Portal on Laptop Screen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100 relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
