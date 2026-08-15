import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook, 
  MapPin, 
  GraduationCap, 
  ArrowUpRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  X, 
  CheckCircle2, 
  Award,
  Filter,
  ExternalLink,
  Users
} from 'lucide-react';
import { useSheetData } from '../context/SheetDataContext';
import { DEFAULT_SUCCESS_STORIES } from '../data';

export default function SuccessStories({ onApplyNowClick }) {
  const { successStories: SHEET_STORIES, loading } = useSheetData();

  // Combine live data with fallback defaults if sheet data is empty
  const allStories = useMemo(() => {
    if (SHEET_STORIES && SHEET_STORIES.length > 0) {
      return SHEET_STORIES;
    }
    return DEFAULT_SUCCESS_STORIES || [];
  }, [SHEET_STORIES]);

  // Extract unique countries
  const availableCountries = useMemo(() => {
    const countries = new Set();
    allStories.forEach(s => {
      if (s.country) countries.add(s.country.trim());
    });
    return ['All', ...Array.from(countries)];
  }, [allStories]);

  // Carousel state
  const [selectedSectionCountry, setSelectedSectionCountry] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // "See All" modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalCountry, setSelectedModalCountry] = useState('All');

  // Filtered stories for carousel
  const sectionStories = useMemo(() => {
    if (selectedSectionCountry === 'All') return allStories;
    return allStories.filter(
      s => s.country && s.country.toLowerCase() === selectedSectionCountry.toLowerCase()
    );
  }, [allStories, selectedSectionCountry]);

  // Filtered stories for "See All" modal
  const modalStories = useMemo(() => {
    return allStories.filter(story => {
      const matchCountry = selectedModalCountry === 'All' || 
        (story.country && story.country.toLowerCase() === selectedModalCountry.toLowerCase());
      
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = !query || 
        (story.name && story.name.toLowerCase().includes(query)) ||
        (story.university && story.university.toLowerCase().includes(query)) ||
        (story.country && story.country.toLowerCase().includes(query));

      return matchCountry && matchSearch;
    });
  }, [allStories, selectedModalCountry, searchQuery]);

  // Monitor viewport size to adjust visible counts dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, sectionStories.length - visibleCount);

  // Reset index if out of bounds or when country tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedSectionCountry, visibleCount]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Smooth auto-slide timer with hover pause
  useEffect(() => {
    if (isHovered || isModalOpen || sectionStories.length <= visibleCount) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentIndex, isHovered, isModalOpen, visibleCount, sectionStories.length]);

  // Lock body scroll only when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const openSeeAllModal = (country = 'All') => {
    setSelectedModalCountry(country);
    setSearchQuery('');
    setIsModalOpen(true);
  };

  return (
    <section 
      id="student-success-stories-section" 
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2c3164]/5 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f15b24]/5 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="text-left max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50/90 rounded-full text-xs font-bold text-[#f15b24] tracking-wider uppercase border border-orange-200/60 shadow-xs">
              <Sparkles size={13} className="animate-spin text-[#f15b24]" style={{ animationDuration: '6s' }} />
              <span>Real Achievements</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f15b24]/60" />
              <span className="text-gray-600 font-semibold">{allStories.length}+ Visa Successes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#2c3164] tracking-tight leading-tight">
              Our Proud Alumni & Student Success
            </h2>

            <p className="text-gray-600 font-sans font-normal text-sm sm:text-base leading-relaxed">
              Real visa success matches from our outstanding students currently studying in top global institutions.
            </p>
          </div>

          {/* Action Buttons & Navigation */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            {/* "See All" Primary Highlight Button */}
            <button
              id="see-all-success-stories-btn"
              onClick={() => openSeeAllModal(selectedSectionCountry)}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#2c3164] hover:bg-[#1f2349] text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:shadow-[#2c3164]/20 transition-all duration-300 cursor-pointer active:scale-95 group border border-[#2c3164]"
            >
              <Users size={16} className="text-[#f15b24] group-hover:scale-110 transition-transform duration-300" />
              <span>See All ({allStories.length}) Stories</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-orange-400" />
            </button>

            {/* Slider Navigation Arrows */}
            {sectionStories.length > visibleCount && (
              <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-gray-200/80 shadow-xs">
                <button
                  id="success-slide-prev-btn"
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl text-gray-700 hover:text-[#f15b24] hover:bg-orange-50/70 transition-all duration-200 cursor-pointer active:scale-90"
                  title="Previous Story"
                  aria-label="Previous Story"
                >
                  <ChevronLeft size={19} />
                </button>
                <div className="h-4 w-px bg-gray-200" />
                <button
                  id="success-slide-next-btn"
                  onClick={handleNext}
                  className="p-2.5 rounded-xl text-gray-700 hover:text-[#f15b24] hover:bg-orange-50/70 transition-all duration-200 cursor-pointer active:scale-90"
                  title="Next Story"
                  aria-label="Next Story"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Smooth Country Filter Tabs */}
        {availableCountries.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline-flex items-center gap-1">
              <Filter size={12} /> Filter:
            </span>
            {availableCountries.map((country) => {
              const count = country === 'All' 
                ? allStories.length 
                : allStories.filter(s => s.country && s.country.toLowerCase() === country.toLowerCase()).length;
              
              const isSelected = selectedSectionCountry === country;

              return (
                <button
                  key={country}
                  onClick={() => setSelectedSectionCountry(country)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-[#2c3164] text-white shadow-md shadow-[#2c3164]/20 scale-102 font-bold'
                      : 'bg-white text-gray-600 border border-gray-200/80 hover:border-orange-200 hover:text-[#f15b24]'
                  }`}
                >
                  <span>{country}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-colors ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Hardware-Accelerated Sliding Viewport */}
        <div className="overflow-hidden relative -mx-4 px-4 py-2">
          {loading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 p-5 space-y-4 animate-pulse shadow-sm">
                  <div className="aspect-[4/3] w-full bg-slate-100 rounded-2xl" />
                  <div className="space-y-2">
                    <div className="h-5 bg-slate-100 rounded w-2/3" />
                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                  </div>
                  <div className="h-10 bg-slate-100 rounded-xl" />
                </div>
              ))}
            </div>
          ) : sectionStories.length === 0 ? (
            /* Empty Filter State */
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-w-md mx-auto">
              <Users size={40} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-base font-bold text-gray-700">No stories found for {selectedSectionCountry}</h3>
              <p className="text-xs text-gray-400 mt-1 mb-4">Try selecting another country tab or view all stories.</p>
              <button
                onClick={() => setSelectedSectionCountry('All')}
                className="px-4 py-2 bg-orange-50 text-[#f15b24] hover:bg-[#f15b24] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Show All Stories
              </button>
            </div>
          ) : (
            <div
              className="flex gap-6 will-change-transform"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24}px))`,
                transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {sectionStories.map((student, idx) => (
                <div
                  id={`success-story-card-${student.id || idx}`}
                  key={student.id || idx}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200/80 transition-all duration-300 flex flex-col h-full group pb-2 relative select-none"
                  style={{ 
                    width: `calc(${100 / visibleCount}% - ${(24 * (visibleCount - 1)) / visibleCount}px)`,
                    flexShrink: 0
                  }}
                >
                  {/* Student Image Banner with Visa Badge */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100 rounded-t-3xl">
                    <img
                      src={student.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"}
                      alt={student.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                    {/* Country Badge */}
                    {student.country && (
                      <div className="absolute top-3.5 left-3.5 bg-[#2c3164]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-md">
                        <MapPin size={11} className="text-[#f15b24]" />
                        <span>{student.country}</span>
                      </div>
                    )}

                    {/* Visa Approved Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-md">
                      <CheckCircle2 size={11} className="text-white" />
                      <span>Visa Granted</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-extrabold text-[#2c3164] group-hover:text-[#f15b24] transition-colors duration-300 line-clamp-1">
                          {student.name}
                        </h3>
                        <Award size={16} className="text-amber-500 shrink-0" />
                      </div>
                      
                      {/* University Info */}
                      {student.university && (
                        <div className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                          <GraduationCap size={15} className="text-[#f15b24] shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-snug font-semibold text-gray-700">
                            {student.university}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Facebook Review Link */}
                    <div className="pt-2">
                      <a
                        id={`fb-review-btn-${student.id || idx}`}
                        href={student.fbLink || "https://www.facebook.com/westernstudy/reviews"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md active:scale-95 group/btn"
                      >
                        <Facebook size={14} className="shrink-0" />
                        <span>View FB Review</span>
                        <ArrowUpRight size={13} className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Carousel Pagination Progress Dots */}
        {!loading && sectionStories.length > visibleCount && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: sectionStories.length - visibleCount + 1 }).map((_, idx) => (
              <button
                key={idx}
                id={`story-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-7 bg-[#f15b24]' 
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN "SEE ALL STORIES" OVERLAY MODAL WITH BLURRED/DIMMED BACKDROP */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Dimmed & Blurred Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-slate-50 via-white to-orange-50/30 flex flex-col gap-5 shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#f15b24] uppercase tracking-wider">
                      <Award size={14} />
                      <span>Alumni & Visa Gallery</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#2c3164]">
                      All Student Visa Success Stories
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Showing {modalStories.length} of {allStories.length} genuine student visas secured by Western Study.
                    </p>
                  </div>

                  {/* Close Modal Button */}
                  <button
                    id="close-success-stories-modal"
                    onClick={() => setIsModalOpen(false)}
                    className="p-2.5 sm:p-3 rounded-2xl bg-gray-100/80 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer active:scale-90"
                    title="Close (Esc)"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Filter and Search Bar Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Instant Search Input */}
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by student name, university, or country..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#f15b24] focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Country Filter Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                    {availableCountries.map((country) => {
                      const count = country === 'All'
                        ? allStories.length
                        : allStories.filter(s => s.country && s.country.toLowerCase() === country.toLowerCase()).length;
                      
                      const isSelected = selectedModalCountry === country;

                      return (
                        <button
                          key={`modal-filter-${country}`}
                          onClick={() => setSelectedModalCountry(country)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#2c3164] text-white shadow-xs font-bold'
                              : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-200 hover:text-[#f15b24]'
                          }`}
                        >
                          <span>{country}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Scrollable Body Grid */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                {modalStories.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-[#f15b24]">
                      <Search size={28} />
                    </div>
                    <h4 className="text-base font-bold text-gray-800">No matching student stories found</h4>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
                      We couldn't find any results matching "{searchQuery}". Try searching with a different keyword or reset filters.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedModalCountry('All');
                      }}
                      className="mt-2 px-4 py-2 bg-[#2c3164] text-white rounded-xl text-xs font-bold hover:bg-[#1f2349] transition-all cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {modalStories.map((student, idx) => (
                      <div
                        key={`modal-student-${student.id || idx}`}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                      >
                        {/* Student Image */}
                        <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                          <img
                            src={student.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"}
                            alt={student.name}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                          {/* Country Badge */}
                          {student.country && (
                            <div className="absolute top-3 left-3 bg-[#2c3164]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1">
                              <MapPin size={10} className="text-[#f15b24]" />
                              <span>{student.country}</span>
                            </div>
                          )}

                          {/* Visa Status */}
                          <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                            <CheckCircle2 size={10} />
                            <span>Visa Granted</span>
                          </div>
                        </div>

                        {/* Card Details */}
                        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-4">
                          <div className="space-y-1.5">
                            <h4 className="text-sm sm:text-base font-extrabold text-[#2c3164] group-hover:text-[#f15b24] transition-colors duration-300 line-clamp-1">
                              {student.name}
                            </h4>
                            
                            {student.university && (
                              <div className="flex items-start gap-1.5 text-xs text-gray-600">
                                <GraduationCap size={14} className="text-[#f15b24] shrink-0 mt-0.5" />
                                <span className="line-clamp-2 font-medium text-gray-700">{student.university}</span>
                              </div>
                            )}
                          </div>

                          {/* FB Review Link */}
                          <a
                            href={student.fbLink || "https://www.facebook.com/westernstudy/reviews"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
                          >
                            <Facebook size={13} className="shrink-0" />
                            <span>Read FB Review</span>
                            <ExternalLink size={11} className="shrink-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 border-t border-gray-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#2c3164]">
                    Want to study abroad with guaranteed visa support?
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Get free profile evaluation and admission guidance from our top experts.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      if (onApplyNowClick) onApplyNowClick();
                    }}
                    className="px-5 py-2.5 bg-[#f15b24] hover:bg-[#d94e1d] text-white rounded-xl text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    Start Your Application Now
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
