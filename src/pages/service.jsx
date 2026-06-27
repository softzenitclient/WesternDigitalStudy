import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';

// Import newly created service sub-components
import HeroHeader from '../serviceComponents/HeroHeader';
import CounsellingSection from '../serviceComponents/CounsellingSection';
import ApplicationSection from '../serviceComponents/ApplicationSection';
import VisaSection from '../serviceComponents/VisaSection';
import AccommodationSection from '../serviceComponents/AccommodationSection';
import PreDepartureSection from '../serviceComponents/PreDepartureSection';

export default function Service({ onNavigate }) {
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
        
        {/* 1. Hero banner */}
        <HeroHeader />

        {/* 2. Counselling Services (Grid of 4 discussion items) */}
        <CounsellingSection />

        {/* 3. University Application checklist block */}
        <ApplicationSection onApplyClick={openModal} />

        {/* 4. Visa Guidance Block */}
        <VisaSection onApplyClick={openModal} />

        {/* 5. Accommodation Advice Block */}
        <AccommodationSection onApplyClick={openModal} />

        {/* 6. Pre-Departure Briefing Block */}
        <PreDepartureSection onApplyClick={openModal} />

      </main>

      {/* Footer view */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openModal} />

      {/* Instant Action Request/Apply Contact Modal Sheet */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeModal} />

    </div>
  );
}
