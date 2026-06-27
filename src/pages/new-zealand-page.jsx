import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { Compass, GraduationCap, Clock, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

// Import New Zealand-specific components
import NewVisaInfo from '../New-pageComponents/NewVisaInfo';
import NewAdmissionStep from '../New-pageComponents/NewAdmissionStep';
import NewCostAndScholarship from '../New-pageComponents/NewCostAndScholarship';
import NewTopUniversities from '../New-pageComponents/NewTopUniversities';
import NewStatsAndFAQ from '../New-pageComponents/NewStatsAndFAQ';

export default function NewZealandPage({ onNavigate }) {
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#132d29] via-[#1a3d37] to-[#0d1e1b] text-white relative overflow-hidden font-sans">
        {/* Scenic New Zealand landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-[#132d29]/90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <span>🇳🇿 Destination Guide</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
              Study Higher Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#f15b24]">
                In New Zealand
              </span>
            </h1>

            <p className="text-gray-200 max-w-2xl text-sm md:text-base leading-relaxed font-sans mx-auto lg:mx-0">
              Secure top-tier qualifications, a peaceful student atmosphere, incredible nature parameters, and competitive pathways to Permanent Residency in Christchurch, Wellington, or Auckland.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-nz-apply-btn"
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
              id={`nz-nav-tab-${tab.id}`}
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
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full space-y-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#f15b24] font-mono uppercase tracking-widest font-sans">Study in New Zealand Overview</span>
                <h2 className="text-3xl font-extrabold text-[#2c3164] font-serif leading-tight">
                  A High Quality Lifestyle with Global Focus
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All 8 of New Zealand's public institutions belong to the worldwide standard QS global Top 500 catalog. They coordinate closely on applied vocational training modules, biotechnology, deep technical systems, visual computing, and sustainable commerce methods.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Immigration New Zealand's Pathway student stream allows you to plan out full study courses under pre-vetted institutes with immense financial clarity, transitioning directly to Post-Study Work stream opportunities in major industries.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="New Zealand Campus landscape" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-orange-50 text-[#f15b24] flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">100% Accredited Courses</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Degrees are recognized internationally across the whole OECD framework with direct vocational qualifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Part-Time Options</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Work professionally up to 20 hours per week off-campus during terms and 40 hours during seasonal breaks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Compass size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Green List PR Paths</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Direct points parameters for high demand ICT, medical, engineering and teaching jobs.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visa' && <NewVisaInfo />}
        {activeTab === 'admission' && <NewAdmissionStep />}
        {activeTab === 'expenses' && <NewCostAndScholarship />}
        {activeTab === 'universities' && <NewTopUniversities onApplyNowClick={() => setIsApplyModalOpen(true)} />}
        {activeTab === 'faq' && <NewStatsAndFAQ />}
      </main>

      {/* Call to action section */}
      <section className="bg-slate-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Expert Consultation Session</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif">Apply for New Zealand Admissions in 2026 Today</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl font-sans">
              Connect directly with certified specialists handling NZQA applications so you can travel without hassle.
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
