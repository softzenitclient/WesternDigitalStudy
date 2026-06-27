import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { Compass, GraduationCap, Clock, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

// Import USA-specific components
import USAVisaInfo from '../USA-PageComponents/USAVisaInfo';
import USAAdmissionStep from '../USA-PageComponents/USAAdmissionStep';
import USACostAndScholarship from '../USA-PageComponents/USACostAndScholarship';
import USATopUniversities from '../USA-PageComponents/USATopUniversities';
import USAStatsAndFAQ from '../USA-PageComponents/USAStatsAndFAQ';

export default function USAPage({ onNavigate }) {
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1c1c38] via-[#242b58] to-[#0e1022] text-white relative overflow-hidden font-sans">
        {/* Scenic Golden Gate Bridge landscape with no human picture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-[#1c1c38]/90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 font-sans">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f15b24]/20 border border-[#f15b24]/30 text-orange-400 px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <span>🇺🇸 Destination Guide</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
              Study Higher Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f15b24]">
                In the USA
              </span>
            </h1>

            <p className="text-gray-200 max-w-2xl text-sm md:text-base leading-relaxed font-sans mx-auto lg:mx-0">
              Access the largest collection of top global universities, engage in state-of-the-art research programs, and secure 3 years of STEM OPT work permissions in global technology clusters.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-usa-apply-btn"
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
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-20 shadow-sm font-sans text-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex overflow-x-auto gap-2 py-3.5 no-scrollbar">
          {tabs.map((tab) => (
            <button
              id={`usa-nav-tab-${tab.id}`}
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
          <div className="space-y-12 animate-fade-in font-sans text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#f15b24] font-mono uppercase tracking-widest leading-loose">Study in the USA Overview</span>
                <h2 className="text-3xl font-extrabold text-[#2c3164] font-serif leading-tight">
                  The Forefront of Global Innovation & Careers
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The United States hosts over 1 million international students due to the supreme density of high-impact research facilities, Ivy League traditions, and generous institutional funding options (such as Graduate Teaching and Research Assistantships).
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your F-1 student status grants full Duration of Status (D/S), allowing you to reside and study comfortably under official SEVP University sponsorships, while transitioning into premium vocational pathways.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="US Ivy League Campus Architecture" 
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
                <h4 className="text-sm font-bold text-gray-800">STEM OPT Work Permits</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal font-sans">
                  Acquire up to 3 years of unrestricted, legal US work experience post-graduation with any STEM-certified degree.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Graduate Assistantships</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal">
                  Receive up to 100% tuition wavers plus monthly stipends in exchange for assisting professors in labs or lectures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Compass size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">CPT Internship Access</h4>
                <p className="text-[11px] text-gray-500 font-sans leading-normal animate-fade-in">
                  Participate in paid off-campus internships (Curricular Practical Training) with tier-1 technology and corporate employers.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visa' && <USAVisaInfo />}
        {activeTab === 'admission' && <USAAdmissionStep />}
        {activeTab === 'expenses' && <USACostAndScholarship />}
        {activeTab === 'universities' && <USATopUniversities onApplyNowClick={() => setIsApplyModalOpen(true)} />}
        {activeTab === 'faq' && <USAStatsAndFAQ />}
      </main>

      {/* Call to action section */}
      <section className="bg-slate-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 font-sans text-gray-200">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Expert Consultation Session</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-white">Apply for USA Admissions in 2026 Today</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl font-sans">
              Connect directly with certified study-abroad specialists who will guide you from I-20 application to embassy mock interviews.
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
