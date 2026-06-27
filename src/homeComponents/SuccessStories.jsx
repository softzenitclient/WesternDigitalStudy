import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, MapPin, GraduationCap, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSheetData } from '../context/SheetDataContext';

export default function SuccessStories() {
  const { successStories: STORIES, loading } = useSheetData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Monitor viewport size to adjust visible counts dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalStories = STORIES && STORIES.length > 0 ? STORIES : [];

  // Reset current index if it becomes out of bounds due to resize / dynamic loaded data
  useEffect(() => {
    if (currentIndex > Math.max(0, totalStories.length - visibleCount)) {
      setCurrentIndex(Math.max(0, totalStories.length - visibleCount));
    }
  }, [visibleCount, totalStories.length]);

  const maxIndex = Math.max(0, totalStories.length - visibleCount);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // Loop to end
      }
      return prev - 1;
    });
  };

  // Self-resetting auto-slide timer
  useEffect(() => {
    if (isHovered || totalStories.length <= visibleCount) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 4000); // Progress every 4 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, isHovered, visibleCount, totalStories.length]);

  return (
    <section 
      id="student-success-stories-section" 
      className="py-24 bg-slate-50 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2c3164]/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f15b24]/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full text-xs font-extrabold text-[#f15b24] tracking-wider uppercase border border-orange-100">
              <Sparkles size={12} className="animate-pulse" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#2c3164] tracking-tight leading-tight">
              Our Proud Alumni & Student Success
            </h2>
            <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
              Real visa success matches from our outstanding students currently studying in top global institutions.
            </p>
          </div>

          {/* Nav Buttons (Hidden if total items are less than or equal to visible elements) */}
          {totalStories.length > visibleCount && (
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="success-slide-prev-btn"
                onClick={handlePrev}
                className="p-3.5 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-[#f15b24] hover:border-orange-150 shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
                title="Previous Success Story"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                id="success-slide-next-btn"
                onClick={handleNext}
                className="p-3.5 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-[#f15b24] hover:border-orange-150 shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
                title="Next Success Story"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Sliding Viewport Window */}
        <div className="overflow-hidden relative -mx-4 px-4 py-2">
          {loading ? (
            /* Elegant Skeleton Loader Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 space-y-5 animate-pulse">
                  <div className="aspect-[4/3] w-full bg-slate-100 rounded-2xl" />
                  <div className="space-y-3">
                    <div className="h-5 bg-slate-100 rounded w-2/3" />
                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                  </div>
                  <div className="h-10 bg-slate-100 rounded-xl" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24}px)` }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {totalStories.map((student) => (
                <div
                  id={`success-story-card-${student.id}`}
                  key={student.id}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-orange-100/60 transition-all duration-300 flex flex-col h-full group pb-1"
                  style={{ 
                    width: `calc(${100 / visibleCount}% - ${(24 * (visibleCount - 1)) / visibleCount}px)`,
                    flexShrink: 0
                  }}
                >
                  {/* Image Container with zoom aspect is 4:3 */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                    <img
                      src={student.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"}
                      alt={student.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Visual Accent/badge on image matching country */}
                    {student.country && (
                      <div className="absolute top-4 left-4 bg-[#2c3164] text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                        <MapPin size={10} className="text-[#f15b24]" />
                        <span>{student.country}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-base font-extrabold text-[#2c3164] group-hover:text-[#f15b24] transition-colors line-clamp-1">
                        {student.name}
                      </h3>
                      
                      {/* University text info */}
                      {student.university && (
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                          <GraduationCap size={15} className="text-[#f15b24] shrink-0" />
                          <span className="line-clamp-2 leading-relaxed font-semibold">{student.university}</span>
                        </div>
                      )}
                    </div>

                    {/* FB Review button */}
                    {student.fbLink && (
                      <div className="pt-2">
                        <a
                          id={`fb-review-btn-${student.id}`}
                          href={student.fbLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                        >
                          <Facebook size={14} className="shrink-0" />
                          <span>View FB Review</span>
                          <ArrowUpRight size={13} className="shrink-0" />
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Navigation Indicator Dots */}
        {!loading && totalStories.length > visibleCount && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalStories.length - visibleCount + 1 }).map((_, idx) => (
              <button
                key={idx}
                id={`story-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#f15b24]' : 'w-2.5 bg-gray-250 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
