import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { SheetDataProvider } from './context/SheetDataContext';
import Home from './pages/home';
import Country from './pages/country';
import Service from './pages/service';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import BlogPage from './pages/blog';
import BlogDetailsPage from './blogComponents/blogdetails';
import ChatUs from './pages/ChatUs';
import CountryDetail from './pages/CountryDetail';

function AppContent() {
  const navigate = useNavigate();

  const handleNavigate = (targetId) => {
    if (targetId && typeof targetId === 'string' && targetId.startsWith('/')) {
      navigate(targetId);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (targetId === 'partner') {
      navigate('/partner');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (targetId === 'blog') {
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (targetId === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'country') {
      navigate('/country');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (targetId === 'service') {
      navigate('/service');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (targetId === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (targetId === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // If we are navigating to standard about/service sections on home:
      navigate('/');
      
      // Allow a brief delay for page components to render and mount
      setTimeout(() => {
        let searchId = '';
        switch (targetId) {
          case 'about':
            searchId = 'about-us-section';
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

        const segment = document.getElementById(searchId);
        if (segment) {
          const offsetTop = segment.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home onNavigate={handleNavigate} />} />
      <Route path="/partner" element={<Country onNavigate={handleNavigate} />} />
      <Route path="/country" element={<Country onNavigate={handleNavigate} />} />
      <Route path="/country/:countryName" element={<CountryDetail onNavigate={handleNavigate} />} />
      <Route path="/service" element={<Service onNavigate={handleNavigate} />} />
      <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
      <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
      <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
      <Route path="/blog/:id" element={<BlogDetailsPage onNavigate={handleNavigate} />} />
      {/* Fallback route handles all other entries by redirecting to home */}
      <Route path="*" element={<Home onNavigate={handleNavigate} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SheetDataProvider>
        <AppContent />
        <ChatUs />
      </SheetDataProvider>
    </BrowserRouter>
  );
}
