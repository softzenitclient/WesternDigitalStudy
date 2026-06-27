import React, { useState } from 'react';
import Navbar from '../homeComponents/Navbar';
import HeroSlider from '../homeComponents/HeroSlider';
import AboutSection from '../homeComponents/AboutSection';
import SuccessStories from '../homeComponents/SuccessStories';
import ServicesSection from '../homeComponents/ServicesSection';
import HowWeWork from '../homeComponents/HowWeWork';
import Testimonials from '../homeComponents/Testimonials';
import NewsSection from '../homeComponents/NewsSection';
import ApplyBanner from '../homeComponents/ApplyBanner';
import PartnerSection from '../homeComponents/PartnerSection';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';

export default function Home({ onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleApplyNowClick = () => {
    setModalOpen(true);
  };

  const handleNavigation = (targetId) => {
    if (targetId && typeof targetId === 'string' && targetId.startsWith('/')) {
      if (onNavigate) onNavigate(targetId);
      return;
    }

    if (targetId === 'partner') {
      if (onNavigate) onNavigate('partner');
      return;
    }

    if (targetId === 'service') {
      if (onNavigate) onNavigate('service');
      return;
    }

    if (targetId === 'about') {
      if (onNavigate) onNavigate('about');
      return;
    }

    if (targetId === 'country') {
      if (onNavigate) onNavigate('country');
      return;
    }

    if (targetId === 'blog') {
      if (onNavigate) onNavigate('blog');
      return;
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'contact') {
      if (onNavigate) onNavigate('contact');
      return;
    }

    let searchId = '';
    switch (targetId) {
      case 'about':
        searchId = 'about-us-section';
        break;
      case 'service':
        searchId = 'service-section';
        break;
      case 'country':
      case 'universities':
      case 'universities?country=Australia':
      case 'universities?country=Canada':
      case 'universities?country=New Zealand':
      case 'universities?country=UK':
      case 'universities?country=USA':
        searchId = 'universities-section';
        break;
      case 'blog':
        searchId = 'news-section';
        break;
      default:
        searchId = targetId;
    }

    // Attempt to locate segment
    const segment = document.getElementById(searchId);
    if (segment) {
      const offsetTop = segment.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#f15b24]/30 selection:text-gray-900 scroll-smooth antialiased">
      {/* 1. Navbar */}
      <Navbar onApplyNowClick={handleApplyNowClick} onNavigate={handleNavigation} />

      {/* Main Stream of Sections */}
      <main className="overflow-hidden">
        {/* 2. Auto Image Slider Hero Section */}
        <HeroSlider onApplyNowClick={handleApplyNowClick} />

        {/* 3. About Us Section */}
        <AboutSection onApplyNowClick={handleApplyNowClick} />

        {/* 3.5. Student Success Section */}
        <SuccessStories />

        {/* 4. Service of Student Section */}
        <ServicesSection onApplyNowClick={handleApplyNowClick} />

        {/* 5. How We Work Section */}
        <HowWeWork />

        {/* 11. Our Partners Section */}
        <PartnerSection onNavigate={handleNavigation} />

        {/* 7. Student Feedback Section */}
        <Testimonials />

        {/* 9. News and Updates Section */}
        <NewsSection onApplyNowClick={handleApplyNowClick} onNavigate={handleNavigation} />

        {/* 10. Apply Now Banner Button Section */}
        <ApplyBanner onApplyNowClick={handleApplyNowClick} />

      </main>

      {/* 12. Footer Section */}
      <Footer onNavigate={handleNavigation} />

      {/* 13. Registration Contact Modal Popups */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
