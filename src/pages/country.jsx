import React, { useState, useEffect } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import UniversityDetailModal from '../partnerComponents/UniversityDetailModal';
import { useSheetData } from '../context/SheetDataContext';
import { Search, MapPin, Award, BookOpen, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function CountryPage({ onNavigate }) {
  const { detailedUniversities: MASTER_PARTNERS } = useSheetData();
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredUniversities = MASTER_PARTNERS.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.popularCourse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleCardClick = (uni) => {
    setSelectedUniversity(uni);
    setModalOpen(true);
  };

  const handleApplyNow = (uni) => {
    setSelectedUniversity(uni);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      {/* Navbar segment */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={() => setIsApplyModalOpen(true)} />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-900 via-[#2c3164] to-slate-900 text-white relative overflow-hidden">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 via-indigo-200 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#f15b24]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#f15b24]/10 border border-[#f15b24]/30 text-[#f15b24] px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Globe size={13} className="animate-spin-slow" />
            <span>Official University Partners</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight leading-tight max-w-4xl mx-auto">
            Our Partners
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Direct affiliations with 210+ certified public colleges and universities across the globe. Filter through countries, courses, and fee budgets to begin your admissions process instantly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full">

        {/* Filter and search bar layout */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10 flex justify-center items-center">
          {/* Search box search design */}
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="country-search-field"
              type="text"
              placeholder="Search by college name, country, city, or course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-gray-50 border border-gray-150 rounded-xl text-sm outline-none focus:border-[#f15b24] focus:bg-white focus:ring-1 focus:ring-[#f15b24]/20 transition-all text-gray-800 placeholder-gray-400 font-medium shadow-inner"
            />
          </div>
        </div>

        {/* Missing results message */}
        {filteredUniversities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="text-gray-300 text-5xl mb-4 font-extrabold font-serif">?</div>
            <h3 className="text-lg font-bold text-[#2c3164]">No Universities Found</h3>
            <p className="text-gray-400 text-sm mt-1 max-w-sm mx-auto">
              We couldn't find any institutions fitting your current search criteria. Try modifying your search query or selecting a different country.
            </p>
          </motion.div>
        )}

        {/* Main Grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              key={`${searchQuery}-${uni.id}`}
              id={`university-page-card-${uni.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              {/* Top border decor */}
              <div
                className="absolute top-0 inset-x-0 h-1.5 opacity-80"
                style={{ backgroundColor: uni.color }}
              />

              <div className="space-y-4">
                {/* Branding row */}
                <div className="flex items-start justify-between gap-3 pt-1">
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
                    <div className="text-[10px] text-[#f15b24] font-bold font-mono">
                      {uni.intake} Intakes
                    </div>
                  </div>
                </div>

                {/* Info summary */}
                <div className="space-y-1.5 cursor-pointer" onClick={() => handleCardClick(uni)}>
                  <h3 className="font-extrabold text-[#2c3164] tracking-tight text-base font-serif group-hover:text-[#f15b24] transition-colors line-clamp-1">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <MapPin size={13} className="text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{uni.location}</span>
                  </div>
                </div>

                {/* Bullet attributes */}
                <div className="border-t border-gray-50 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 flex items-center gap-1.5 font-medium">
                      <Award size={13} className="text-yellow-500 shrink-0" />
                      <span>Ranking</span>
                    </span>
                    <span className="font-bold text-gray-700">{(uni.ranking || '').split('•')[0] || 'Rank N/A'}</span>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-400 flex items-center gap-1.5 font-medium shrink-0">
                      <BookOpen size={13} className="text-cyan-500 shrink-0" />
                      <span>Popular course</span>
                    </span>
                    <span className="font-semibold text-gray-700 text-right line-clamp-1 max-w-[150px]">
                      {uni.popularCourse || 'General Courses'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons row */}
              <div className="mt-5 pt-3 border-t border-b border-gray-50 pb-3 flex justify-center text-xs">
                <button
                  id={`book-button-${uni.id}`}
                  onClick={() => handleApplyNow(uni)}
                  className="w-full bg-[#2c3164] hover:bg-[#f15b24] text-white py-2.5 rounded-xl font-bold transition-all duration-200 text-center cursor-pointer shadow-sm hover:shadow-md"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer segment */}
      <Footer onNavigate={onNavigate} />

      {/* Detail info popup */}
      <UniversityDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        university={selectedUniversity}
        onApply={() => {
          setModalOpen(false);
          setIsApplyModalOpen(true);
        }}
      />

      {/* Profile/Consultation Dialog */}
      <ContactModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
