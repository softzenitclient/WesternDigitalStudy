import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';

// Import newly created about sub-components
import AboutHero from '../aboutComponents/AboutHero';
import HistoryTimeline from '../aboutComponents/HistoryTimeline';
import MissionVision from '../aboutComponents/MissionVision';
import SuccessStats from '../aboutComponents/SuccessStats';
import CeoSection from '../aboutComponents/CeoSection';

export default function AboutPage({ onNavigate }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openModal = () => setIsApplyModalOpen(true);
  const closeModal = () => setIsApplyModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      
      {/* Navigation Bar */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={openModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Page Header (Hero - Dynamic backdrop without human images) */}
        <AboutHero />

        {/* 2. Success Metric Benchmarks (Total placements, and percentages) */}
        <SuccessStats />

        {/* 3. Company History Timeline Story (2015 - Current) */}
        <HistoryTimeline />

        {/* 4. Strategic vision statements & core values */}
        <MissionVision />

        {/* 5. Executive desk and CEO statement */}
        <CeoSection />

      </main>

      {/* Footer view */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openModal} />

      {/* Interlink Contact Call Option Sheet */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeModal} />

    </div>
  );
}
