import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, MapPin, BookOpen, Calendar, GraduationCap, DollarSign, Languages, Landmark, CheckCircle } from 'lucide-react';

export default function UniversityDetailModal({ isOpen, onClose, university, onApply }) {
  if (!isOpen || !university) return null;

  // Handle fallback or detailed attributes
  const description = university.description || `The ${university.name} is a premier world-class institution renowned for academic excellence, innovative research facilities, and a diverse, welcoming global campus community.`;
  const intakes = university.intake || "September, January, May";
  const tuition = university.tuition || "CAD $18,000 - $32,000 / Year";
  const scholarships = university.scholarships || "Merit scholarships and entrance bursaries value up to $15,000 based on GPA & IELTS scores.";
  const ieltsReq = university.ielts || "6.5 overall (no individual band score below 6.0) or PTE equivalent of 58+";
  const services = university.campusServices || "Comprehensive pre-arrival briefing, on-campus student housing complexes, interactive career counselling, and post-study work visa alignment support.";
  
  return (
    <AnimatePresence>
      <div id="university-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark Tint Velvet Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2c3164]/60 backdrop-blur-sm"
        />

        {/* Modal Main Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Banner / Header Layout */}
          <div className="bg-gradient-to-r from-[#2c3164] to-[#3a4185] text-white p-6 md:p-8 relative shrink-0 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <span className="bg-[#f15b24] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold leading-none uppercase tracking-wider inline-block mb-3">
                {university.country} Partner
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold font-serif tracking-tight leading-snug">
                {university.name}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-200">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#f15b24]" />
                  <span>{university.location}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg">
                  <Award size={14} className="text-yellow-400" />
                  <span className="font-semibold">{university.ranking}</span>
                </span>
              </div>
            </div>

            {university.logoUrl && (
              <div className="w-16 h-16 rounded-2xl bg-white p-0.5 flex shadow-lg items-center justify-center shrink-0 overflow-hidden border border-white/20 self-center hidden sm:flex">
                <img 
                  src={university.logoUrl} 
                  alt={`${university.name} Emblem`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}

            <button
              id="close-details-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal scrollable Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6">
            
            {/* Overview Detail Paragraph */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Institutional Profile
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">
                {description}
              </p>
            </div>

            {/* Popular Programs / Specifications section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <BookOpen size={15} className="text-[#f15b24]" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">Popular Courses</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 font-sans">
                  {university.popularCourse}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar size={15} className="text-[#f15b24]" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">Intake Periods</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 font-sans">
                  {intakes}
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Detailed Parameters */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Admission & Financial Specifications
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                    <GraduationCap size={14} className="text-indigo-500" />
                    <span>Scholarship Limits</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-6 leading-relaxed">
                    {scholarships}
                  </p>
                </div>

                

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                    <CheckCircle size={14} className="text-[#f15b24]" />
                    <span>Campus Advantage & Support</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-6 leading-relaxed">
                    {services}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer Layout */}
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
            <span className="text-xs text-gray-400 font-medium text-center sm:text-left">
              * Fast-tracked application review is available for Western Study students.
            </span>
            <button
              id="modal-apply-btn"
              onClick={() => {
                onClose();
                onApply(university);
              }}
              className="w-full sm:w-auto bg-[#f15b24] hover:bg-[#d6471c] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all active:scale-95 duration-200 cursor-pointer"
            >
              <span>Apply Now</span>
              <span>&rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
