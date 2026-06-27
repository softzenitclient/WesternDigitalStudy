import React from 'react';
import { ShieldCheck, CalendarRange, Pointer } from 'lucide-react';

export default function ApplyBanner({ onApplyNowClick }) {
  return (
    <div id="apply-now-banner" className="py-12 bg-gradient-to-br from-[#2c3164] to-[#1e224e] relative overflow-hidden text-white">
      {/* Background vector elements to accent the look */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-12 relative text-center space-y-6">
        <span className="bg-[#f15b24]/20 border border-[#f15b24]/30 text-[#f15b24] font-bold tracking-wider font-mono text-[11px] uppercase py-1 px-4 rounded-full inline-flex items-center gap-1.5 shadow-sm">
          <CalendarRange size={12} />
          <span>Fall & Winter 2026/2027 Intakes Open</span>
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
          Ready to Elevate Your Higher Studies Abroad?
        </h2>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Don't wait until the intake lists are saturated. Submit your academic documents now and allow our country desks to analyze your scores for merit discounts of up to 100%!
        </p>

        {/* Big centered Apply Button */}
        <div className="pt-2">
          <button
            id="banner-apply-trigger"
            onClick={onApplyNowClick}
            className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-10 py-4.5 rounded-full text-base font-bold shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 group hover:scale-105 active:scale-95 duration-200"
          >
            <Pointer size={16} />
            <span>Apply Now & Get Assessment</span>
            <span className="transition-transform group-hover:translate-x-1 duration-200">
              &rarr;
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 pt-3">
          <span className="flex items-center gap-1">
            <ShieldCheck size={14} className="text-[#f15b24]" />
            <span>100% Free Preliminary Counselling</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={14} className="text-[#f15b24]" />
            <span>No File Assessment Charge</span>
          </span>
        </div>
      </div>
    </div>
  );
}
