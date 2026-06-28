import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSheetData } from "../context/SheetDataContext";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MousePointerClick,
  Loader2,
} from "lucide-react";

export default function HeroSlider({ onApplyNowClick }) {
  // Use a safe fallback array just in case slides comes back undefined or null
  const { slides = [] } = useSheetData();
  const SLIDES = slides || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // CRITICAL FIX: Guard against dividing or modulo by zero when data hasn't loaded yet
    if (!SLIDES || SLIDES.length === 0) return;

    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length),
      6000, // 6 seconds auto rotation
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex, SLIDES]); // Added SLIDES dependency to trigger loop when data loads

  // Fallback loading UI if data is fetching or empty
  if (!SLIDES || SLIDES.length === 0) {
    return (
      <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-[#1e224e] mt-[100px] flex flex-col items-center justify-center text-white/70 gap-4">
        <Loader2 className="animate-spin text-[#f15b24]" size={40} />
        <p className="text-sm font-medium tracking-wide font-sans animate-pulse">
          Loading International Academic Pathways...
        </p>
      </div>
    );
  }

  const prevSlide = () => {
    if (SLIDES.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (SLIDES.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div
      id="hero-slider-section"
      className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-gray-900 mt-[100px]"
    >
      <AnimatePresence mode="wait">
        {SLIDES.map(
          (slide, index) =>
            index === currentIndex && (
              <motion.div
                key={slide.id || index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Slide Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 bg-slate-800"
                  style={{
                    backgroundImage: slide.image
                      ? `url(${slide.image})`
                      : "none",
                  }}
                >
                  {/* Overlay with matching deep navy ambient tint */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2c3164]/95 via-[#2c3164]/80 to-transparent" />
                </div>

                {/* Slide Content */}
                <div className="absolute inset-0 flex items-center px-4 md:px-12">
                  <div className="max-w-4xl mx-auto w-full text-white">
                    <div className="space-y-6">
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-[#f15b24]/20 border border-[#f15b24]/40 px-4 py-1.5 rounded-full text-[#f15b24] font-semibold text-xs md:text-sm uppercase tracking-wider w-fit"
                      >
                        <MousePointerClick size={14} />
                        <span>Certified Global Consultants</span>
                      </motion.div>

                      {/* Headline */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight text-white tracking-tight"
                      >
                        {slide.title || "Shape Your Educational Horizon"}
                      </motion.h1>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-base md:text-xl text-gray-200 font-sans max-w-2xl font-normal leading-relaxed"
                      >
                        {slide.subtitle ||
                          "Connecting talented scholars with leading global universities across international borders."}
                      </motion.p>

                      {/* CTA Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap items-center gap-4 pt-4"
                      >
                        <button
                          id="hero-slider-cta"
                          onClick={onApplyNowClick}
                          className="bg-[#f15b24] hover:bg-[#d6471c] text-white px-8 py-3.5 rounded-full text-base font-bold shadow-xl transition-all cursor-pointer flex items-center gap-2 border-2 border-transparent hover:border-white/20 hover:scale-105 active:scale-95 duration-200"
                        >
                          <span>
                            {slide.ctaText || "Apply Strategy Assessment"}
                          </span>
                          <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Slide Navigation Arrows */}
      {SLIDES.length > 1 && (
        <>
          <button
            id="hero-slider-prev-arrow"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#f15b24] hover:scale-110 text-white p-3 rounded-full transition-all cursor-pointer hidden sm:flex border border-white/10 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            id="hero-slider-next-arrow"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#f15b24] hover:scale-110 text-white p-3 rounded-full transition-all cursor-pointer hidden sm:flex border border-white/10 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide Indicators / Paginations */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {SLIDES.map((_, index) => (
            <button
              id={`hero-slider-bullet-${index}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#f15b24]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
