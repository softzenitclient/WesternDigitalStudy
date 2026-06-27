import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { Compass, GraduationCap, Clock, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

// Import UK-specific components
import UKVisaInfo from '../UK-pageComponents/UKVisaInfo';
import UKAdmissionStep from '../UK-pageComponents/UKAdmissionStep';
import UKCostAndScholarship from '../UK-pageComponents/UKCostAndScholarship';
import UKTopUniversities from '../UK-pageComponents/UKTopUniversities';
import UKStatsAndFAQ from '../UK-pageComponents/UKStatsAndFAQ';

export default function UKPage({ onNavigate }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'visa', label: 'Visa Guide' },
    { id: 'admission', label: 'Admission Process' },
    { id: 'expenses', label: 'Costs & Scholarships' },
    { id: 'universities', label: 'Top Universities' },
    { id: 'faq', label: 'FAQs & Reviews' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      {/* Navbar Segment */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={() => setIsApplyModalOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1b1e36] via-[#2c3260] to-[#111326] text-white relative overflow-hidden font-sans">
        {/* Scenic UK landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-[#1b1e36]/90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f15b24]/20 border border-[#f15b24]/30 text-orange-400 px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <span>🇬🇧 Destination Guide</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
              Study Higher Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f15b24]">
                In the UK
              </span>
            </h1>

            <p className="text-gray-200 max-w-2xl text-sm md:text-base leading-relaxed font-sans mx-auto lg:mx-0">
              Earn highly valued 1-year Master's degrees, engage in vibrant campus cultures, and access 2-year open Graduate visa working rights across historical UK academic symbols.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-uk-apply-btn"
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-lg transition-all duration-200 cursor-pointer"
              >
                Book Free
              </button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Tabs navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex overflow-x-auto gap-2 py-3.5 no-scrollbar">
          {tabs.map((tab) => (
            <button
              id={`uk-nav-tab-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#2c3164] text-white'
                  : 'bg-gray-50 text-gray-500 hover:bg-[#2c3164]/5 hover:text-[#2c3164]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tabbed section */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full space-y-12 font-sans text-gray-800">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#f15b24] font-mono uppercase tracking-widest leading-loose">Study in the UK Overview</span>
                <h2 className="text-3xl font-extrabold text-[#2c3164] font-serif leading-tight">
                  A Dynamic Academic Powerhouse with Rapid Options
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The UK hosts upwards of 600,000 international scholars. It is exceptionally popular for its 1-year Master's options, saving you 1 full year of international tuition fees and matching living budgets beautiful.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Through the UKVI points-based route, students with a certified CAS reference from a registered university sponsor can secure student approvals exceptionally fast, enjoying NHS healthcare and full 2-year Graduate Route work permissions.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="UK Campus Architecture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 animate-fade-in">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-orange-50 text-[#f15b24] flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">1-Year Masters Degrees</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Fulfill master qualifications in just 12 months, lowering your average academic tuition rates and living budgets.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Graduate Visas (PSW)</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Acquire up to 2 years of unrestricted, legal UK work permits immediately post-graduation with any public degree.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Compass size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">NHS Hospital Access</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  The Immigration Health Surcharge (IHS) covers your complete wellness with zero out of pocket payments.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visa' && <UKVisaInfo />}
        {activeTab === 'admission' && <UKAdmissionStep />}
        {activeTab === 'expenses' && <UKCostAndScholarship />}
        {activeTab === 'universities' && <UKTopUniversities onApplyNowClick={() => setIsApplyModalOpen(true)} />}
        {activeTab === 'faq' && <UKStatsAndFAQ />}
      </main>

      {/* Call to action section */}
      <section className="bg-slate-900 text-white py-16 border-t border-gray-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Expert Consultation Session</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif">Apply for UK Admissions in 2026 Today</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl font-sans">
              Connect directly with certified specialists handling CAS allocations so you can study in the UK without hassle.
            </p>
          </div>
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-7 py-3.5 rounded-xl font-semibold text-xs transition-transform duration-200 shadow-lg cursor-pointer hover:scale-105"
          >
            Request a Call
          </button>
        </div>
      </section>

      {/* Footer Segment */}
      <Footer onNavigate={onNavigate} />

      {/* Form modal */}
      <ContactModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
