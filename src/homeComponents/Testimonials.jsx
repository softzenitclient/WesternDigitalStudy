import React, { useState, useEffect } from 'react';
import { useSheetData } from '../context/SheetDataContext';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { testimonials: TESTIMONIALS } = useSheetData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive: Determine the number of visible cards based on viewport size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCards);

  // Auto scroll logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="feedback-section" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
            Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
            Student Feedback
          </h2>
          <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
            Read original verified statements from student groups who departed within record time frames.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Viewport Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {TESTIMONIALS.map((f) => (
                <div
                  key={f.id}
                  style={{ width: `${100 / visibleCards}%` }}
                  className="px-3 shrink-0 py-4 h-full"
                >
                  <div className="bg-slate-50/50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm relative hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[360px] hover:-translate-y-1 bg-gradient-to-b from-white to-slate-50">
                    <div className="space-y-4">
                      {/* Rating & Quote badge */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-0.5">
                          {[...Array(f.rating || 5)].map((_, i) => (
                            <Star key={i} size={15} fill="#ffca18" className="text-yellow-400 border-none" />
                          ))}
                        </div>
                        <Quote size={28} className="text-orange-200/70" />
                      </div>

                      {/* Text Review Only */}
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans font-medium line-clamp-6">
                        "{f.feedback}"
                      </p>
                    </div>

                    {/* Author Signature Section */}
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-200/50">
                      <img 
                        src={f.photo} 
                        alt={f.name} 
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border-2 border-orange-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs md:text-sm font-bold text-[#2c3164] truncate">{f.name}</h4>
                        <p className="text-[10px] md:text-[11px] text-gray-500 font-medium truncate">
                          Enrolled: {f.university} ({f.country})
                        </p>
                        <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5 uppercase tracking-wide">
                          <ShieldCheck size={11} />
                          <span>Visa Granted</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Sleek arrow indicators */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-1 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-100 text-[#2c3164] hover:bg-[#f15b24] hover:text-white flex items-center justify-center shadow-md transition-all z-20 cursor-pointer lg:opacity-0 lg:group-hover:opacity-100"
                aria-label="Previous Review"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-100 text-[#2c3164] hover:bg-[#f15b24] hover:text-white flex items-center justify-center shadow-md transition-all z-20 cursor-pointer lg:opacity-0 lg:group-hover:opacity-100"
                aria-label="Next Review"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Carousel indicators/dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#f15b24]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
