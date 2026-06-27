import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STEPS } from '../data';
import { HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-we-work-section" className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
            The Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
            How We Work To Secure Your Visa
          </h2>
          <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
            We simplify complex application processes into three clear objectives: consult extensively, apply meticulously, and fly perfectly prepared.
          </p>
        </div>

        {/* Dynamic 3-step timeline tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Step selectors with details */}
          <div className="lg:col-span-6 space-y-4">
            {STEPS.map((step, idx) => (
              <button
                key={step.id}
                id={`how-it-works-step-tab-${step.id}`}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden group cursor-pointer ${
                  idx === activeStep
                    ? 'bg-[#2c3164] text-white border-transparent shadow-xl translate-x-2'
                    : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-orange-50/50 hover:border-orange-100 hover:translate-x-1'
                }`}
              >
                {/* Step Pill */}
                <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider flex-shrink-0 uppercase ${
                  idx === activeStep ? 'bg-[#f15b24] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.stepNumber}
                </div>

                <div className="space-y-1">
                  <h3 className={`text-lg font-extrabold ${idx === activeStep ? 'text-white' : 'text-[#2c3164]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs font-normal leading-relaxed ${idx === activeStep ? 'text-gray-200' : 'text-gray-500'}`}>
                    {step.description}
                  </p>
                </div>

                {/* Micro chevron status */}
                <div className="ml-auto self-center">
                  <ChevronRight size={18} className={`transition-transform duration-300 ${
                    idx === activeStep ? 'text-[#f15b24] translate-x-1' : 'text-gray-400 group-hover:text-[#f15b24]'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Render active step details & cover image with smooth transition */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-orange-50/30 border border-orange-100/50 p-8 rounded-3xl space-y-6"
              >
                {/* Visual Cover */}
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg relative bg-gray-100">
                  <img 
                    src={STEPS[activeStep].image} 
                    alt={STEPS[activeStep].title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative tag */}
                  <div className="absolute top-4 right-4 bg-[#f15b24] text-white text-xs font-bold font-mono py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 size={12} />
                    <span>Western Certified Standard</span>
                  </div>
                </div>

                {/* Context markup */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-extrabold text-[#2c3164]">
                    {STEPS[activeStep].title} Thorough Process
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {STEPS[activeStep].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
