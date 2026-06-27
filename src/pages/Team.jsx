import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';

// Import newly created team sub-components
import TeamHero from '../teamComponents/TeamHero';
import TeamGrid from '../teamComponents/TeamGrid';

export default function TeamPage({ onNavigate }) {
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
        <TeamHero />

        {/* 2. Team Grid with photos and credentials */}
        <TeamGrid />

      </main>

      {/* Footer view */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openModal} />

      {/* Contact Modal Panel */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeModal} />

    </div>
  );
}
