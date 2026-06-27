import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Award, Phone } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Canada');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const countriesList = ['Australia', 'Canada', 'New Zealand', 'UK', 'USA'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate simple info
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email and Phone Number");
      return;
    }
    
    // Process WhatsApp redirection with pre-filled message
    const cleanPhone = formData.phone.trim();
    const whatsappNum = '8801688176309';
    const textMsg = `Hello Western Study,\n\nI would like to request a study abroad assessment call.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${cleanPhone}\n*Academic Profile:* ${formData.message || 'Not specified'}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(textMsg)}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedCountry('Canada');
    setFormSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="contact-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop filter blur with deep navy tint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2c3164]/60 backdrop-blur-sm"
        />

        {/* Modal Sheet panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 z-10"
        >
          {/* Header layout */}
          <div className="bg-[#2c3164] text-white p-6 relative">
            <h3 className="text-xl font-extrabold font-serif">Apply Now & Get Assessment</h3>
            <p className="text-orange-200 text-xs mt-1">Get custom profiles vetted within 24 working hours.</p>

            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            {!formSubmitted ? (
              <form id="assessment-intake-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Full Name *</label>
                  <input
                    id="input-name"
                    required
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f15b24]/20 focus:border-[#f15b24] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Email Address *</label>
                    <input
                      id="input-email"
                      required
                      type="email"
                      placeholder="e.g. name@host.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f15b24]/20 focus:border-[#f15b24] transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Phone Number *</label>
                    <input
                      id="input-phone"
                      required
                      type="tel"
                      placeholder="e.g. +880 1700-000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f15b24]/20 focus:border-[#f15b24] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Write Brief academic profile (gpa, english scores)</label>
                  <textarea
                    id="input-message"
                    rows={4}
                    placeholder="Provide your GPA, IELTS or PTE scores, and desired study field..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f15b24]/20 focus:border-[#f15b24] transition-all"
                  />
                </div>

                {/* Submit Trigger */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-modal-btn"
                    className="w-full bg-[#f15b24] hover:bg-[#d6471c] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 duration-200 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Request a Call</span>
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                id="modal-success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#2c3164]">Application Vetted Successfully!</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium max-w-xs mx-auto">
                    Thank you <strong>{formData.name}</strong>. Certified advisors from our admissions desk will audit your profile and email you with shortlisted courses within 24 working hours.
                  </p>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 flex items-center justify-center gap-3 w-5/6 mx-auto">
                  <Phone size={15} className="text-[#f15b24]" />
                  <span className="text-xs font-bold text-gray-700">Need instant answer? WhatsApp +8801688-176309</span>
                </div>
                <button
                  id="reset-form-success"
                  onClick={resetForm}
                  className="bg-[#2c3164] hover:bg-[#1e224e] text-white text-xs font-bold py-2.5 px-6 rounded-full transition-all"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
