import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { Compass, GraduationCap, MapPin, Award, BookOpen, Clock, HeartHandshake, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

// Import Australia-specific components
import AusVisaInfo from '../Aus-pageComponents/AusVisaInfo';
import AusAdmissionStep from '../Aus-pageComponents/AusAdmissionStep';
import AusCostAndScholarship from '../Aus-pageComponents/AusCostAndScholarship';
import AusTopUniversities from '../Aus-pageComponents/AusTopUniversities';
import AusStatsAndFAQ from '../Aus-pageComponents/AusStatsAndFAQ';

export default function AustraliaPage({ onNavigate }) {
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

      {/* Hero Header without human pictures */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1a1c3a] via-[#2c3164] to-[#121426] text-white relative overflow-hidden">
        {/* Scenic Sydney Opera House image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-[#1a1c3a]/90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f15b24]/20 border border-[#f15b24]/30 text-orange-400 px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <span>🦘 Destination Guide</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
              Study Higher Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f15b24]">
                In Australia
              </span>
            </h1>

            <p className="text-gray-200 max-w-2xl text-sm md:text-base leading-relaxed font-sans mx-auto lg:mx-0">
              With leading scientific innovation, a global Group of Eight (Go8) network, and phenomenal post-study work visa permissions, Australia offers an exquisite layout for international students.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-aus-apply-btn"
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-lg transition-all duration-200 cursor-pointer"
              >
                Book Free
              </button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Tabs navigation anchor layout */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex overflow-x-auto gap-2 py-3.5 no-scrollbar">
          {tabs.map((tab) => (
            <button
              id={`aus-nav-tab-${tab.id}`}
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

      {/* Main Tabbed Grid section */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full space-y-12">
        {/* Dynamic section rendering with fade checks */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Quick Summary overview bento layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#f15b24] font-mono uppercase tracking-widest">About Study in Australia</span>
                <h2 className="text-3xl font-extrabold text-[#2c3164] font-serif leading-tight">
                  Discover a Continent built on Excellence
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Australia is currently home to nearly 700,000 international scholars, making it one of the top three global student hubs. Its public institutes stand strong across global indices for high-impact engineering, business leadership, biotechnology, and agricultural research.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Through the streamlined student subclass 500 processing regime, students from Bangladesh can lodge their papers under highly objective profiles, enjoying direct work permission parameters alongside studies and seamless PR career paths.
                </p>
              </div>

              {/* Graphical illustration image - no human faces */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="Australian Campus Architecture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick summary grid of benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-orange-50 text-[#f15b24] flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">World Recognition</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Degrees earned in Australia are certified across global business systems, matching qualifications in UK and Canada.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Part-Time Works</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Support your living expenses by completing up to 48 hours per fortnight of professional part-time corporate or local roles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Compass size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Pathways to PR</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Regional student pathways and Graduate Temporary subclass 485 permissions align beautifully into PR nomination schemes.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visa' && <AusVisaInfo />}
        {activeTab === 'admission' && <AusAdmissionStep />}
        {activeTab === 'expenses' && <AusCostAndScholarship />}
        {activeTab === 'universities' && <AusTopUniversities onApplyNowClick={() => setIsApplyModalOpen(true)} />}
        {activeTab === 'faq' && <AusStatsAndFAQ />}
      </main>

      {/* Call to action section banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Expert Consultation Session</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif">Apply for Australia Admissions in 2026 Today</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl font-sans">
              Our teams ensure zero document overheads. Talk directly to a certified Australian Education Counselor.
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

      {/* Footer segment */}
      <Footer onNavigate={onNavigate} />

      {/* Form modal */}
      <ContactModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
