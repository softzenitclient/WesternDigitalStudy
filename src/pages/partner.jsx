import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import UniversityDetailModal from '../partnerComponents/UniversityDetailModal';
import { PARTNERS } from '../data';
import { useSheetData } from '../context/SheetDataContext';
import { Search, MapPin, Award, BookOpen, Clock, Layers, ArrowLeft, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Partner({ onNavigate }) {
  const { detailedUniversities: DETAILED_UNIVERSITIES } = useSheetData();
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  // Auto-scroll to top upon loading
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Set up filters dynamically based on countries in DETAILED_UNIVERSITIES
  const defaultTabNames = ['Australia', 'Canada', 'New Zealand', 'UK', 'USA'];
  const foundCountries = Array.from(new Set(DETAILED_UNIVERSITIES.map(uni => uni.country).filter(Boolean)));
  const sortedFoundOthers = foundCountries
    .filter(c => !defaultTabNames.some(d => d.toLowerCase() === c.trim().toLowerCase()))
    .sort();
  const filterTabs = ['All', ...defaultTabNames, ...sortedFoundOthers];

  const filteredUniversities = DETAILED_UNIVERSITIES.filter((uni) => {
    const matchesCountry = selectedCountry === 'All' || uni.country.toLowerCase() === selectedCountry.toLowerCase();
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.popularCourse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const handleViewDetails = (uni) => {
    setSelectedUniversity(uni);
    setModalOpen(true);
  };

  const handleApplyNow = (uni) => {
    setSelectedUniversity(uni);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-850 font-sans selection:bg-[#f15b24]/30 selection:text-gray-900 antialiased pt-28">
      {/* Navbar Integration */}
      <Navbar onApplyNowClick={() => setContactOpen(true)} onNavigate={onNavigate} />

      {/* Pages Header banner */}
      <div className="bg-[#2c3164] text-white py-16 md:py-20 relative overflow-hidden">
        {/* Abstract background vector meshes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f15b24]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-950 rounded-full blur-3xl opacity-60" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 text-xs font-bold text-orange-200 hover:text-white uppercase tracking-wider font-mono cursor-pointer transition-all hover:-translate-x-1"
            >
              <ArrowLeft size={13} />
              <span>Back to home</span>
            </button>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight leading-none text-white">
              Official Partner Universities
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-sans font-medium tracking-wide leading-relaxed">
              We proudly represent over 350+ highly ranked educational elite institutions. Discover details, rankings, custom programs and fly with 100% secure admissions guidance.
            </p>
          </div>

          <div className="flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:max-w-xs space-y-3">
            <span className="text-xs font-bold text-[#f15b24] uppercase tracking-wider block font-mono">⚡ QUICK STATS</span>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xl font-extrabold text-white">350+</span>
                <span className="block text-[10px] text-gray-400 font-bold uppercase font-sans">Tie-ups</span>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-[#f15b24]">99.2%</span>
                <span className="block text-[10px] text-gray-400 font-bold uppercase font-sans">Visa Ratio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Workspace Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16">
        
        {/* Search & Interactive Filter Control panel */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 mb-12">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Box inputs */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="university-search-input"
                type="text"
                placeholder="Search university name, city location, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f15b24]/20 focus:border-[#f15b24] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="text-right text-xs text-gray-400 font-mono font-bold shrink-0">
              SHOWING <span className="text-[#f15b24]">{filteredUniversities.length}</span> OUT OF {DETAILED_UNIVERSITIES.length} PREMIUMS
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Styled Filter Buttons for countries */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
              Country Categories
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  id={`country-tab-btn-${tab}`}
                  key={tab}
                  onClick={() => {
                    setSelectedCountry(tab);
                    setSearchQuery('');
                  }}
                  className={`px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all relative cursor-pointer active:scale-95 duration-200 border ${
                    selectedCountry === tab
                      ? 'bg-[#2c3164] text-white border-transparent shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-[#f15b24] border-gray-100'
                  }`}
                >
                  {tab === 'All' ? 'All Countries' : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty Search Fallback */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-lg mx-auto">
            <Layers size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#2c3164]">No Universities Found</h3>
            <p className="text-gray-500 text-sm mt-1 px-6">
              We couldn't find any partner matching "{searchQuery}" in country "{selectedCountry}". Try removing filters or searching general names.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCountry('All');
              }}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#f15b24] hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Main interactive Bento-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              key={`${selectedCountry}-${searchQuery}-${uni.id}`}
              id={`university-page-card-${uni.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
            >
                {/* Visual subtle accent strip */}
                <div 
                  className="absolute top-0 inset-x-0 h-1.5 opacity-8 overflow-hidden" 
                  style={{ backgroundColor: uni.color }}
                />

                <div className="space-y-4">
                  {/* Top layout */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden border border-gray-100 relative">
                      <img 
                        src={uni.logoUrl} 
                        alt={`${uni.name} Logo`} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#2c3164]/10 text-[#2c3164] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans mb-1">
                        {uni.country}
                      </span>
                      <span className="block text-gray-400 text-[10px] sm:text-xs font-bold tracking-tight">
                        {uni.location}
                      </span>
                    </div>
                  </div>

                  <hr className="border-gray-50" />

                  {/* Body elements */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#2c3164] tracking-tight group-hover:text-[#f15b24] transition-colors leading-snug">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                      <Award size={14} className="text-yellow-500" />
                      <span className="font-semibold text-gray-700">{uni.ranking}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-gray-600 font-medium pt-1">
                      <BookOpen size={13} className="text-[#f15b24] mt-0.5 shrink-0" />
                      <p className="line-clamp-2">
                        <strong>Focus:</strong> {uni.popularCourse}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium pt-1">
                      <Clock size={13} className="text-blue-500 shrink-0" />
                      <span><strong>Intakes:</strong> {uni.intake}</span>
                    </div>
                  </div>
                </div>

                {/* Submitting CTA Row buttons */}
                <div className="grid grid-cols-2 gap-3 pt-6 shrink-0 mt-4 border-t border-gray-50">
                  <button
                    id={`view-details-${uni.id}`}
                    onClick={() => handleViewDetails(uni)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-[#2c3164] py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    id={`apply-prev-${uni.id}`}
                    onClick={() => handleApplyNow(uni)}
                    className="w-full bg-[#2c3164] hover:bg-[#f15b24] text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-center cursor-pointer shadow-sm hover:shadow"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

      </main>

      {/* Global Footer Integration */}
      <Footer onNavigate={onNavigate} />

      {/* Dynamic Popups */}
      <UniversityDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        university={selectedUniversity}
        onApply={(uni) => {
          setSelectedUniversity(uni);
          setContactOpen(true);
        }}
      />

      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </div>
  );
}
