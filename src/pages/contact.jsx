import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';

export default function ContactPage({ onNavigate }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    destination: 'Australia',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  // Simple form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message can not be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate API storage / webhook
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        destination: 'Australia',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      
      {/* 1. Header Navigation */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Main Content Pane */}
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          {/* Page Headers Block */}
          <div className="space-y-4 mb-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 bg-[#f15b24]/10 text-[#f15b24] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f15b24] animate-pulse" />
              <span>Direct Hotline Channels</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Get in Touch with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-[#f15b24] to-[#2c3164]">
                Western Study Advisors
              </span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Have questions about your global eligibility, admission deadlines, or immigration requirements? Drop us a line below or visit our Banani corporate headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* COLUMN LEFT (6 Cols) - Physical Touchpoints & Contact Card Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-6">
                
                {/* 1. Office Location Card */}
                <div className="bg-white border border-gray-150 p-6 md:p-8 rounded-[28px] shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="p-3.5 bg-orange-50 text-[#f15b24] rounded-2xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Corporate Head Office
                    </p>
                    <h3 className="text-lg font-bold text-gray-950">
                      Mohakhali, Dhaka
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      307 (3rd Floor), Road - 21, DOHS, Mohakhali, Dhaka - 1206
                    </p>
                    
                  </div>
                </div>

                {/* 2. Direct Phones Card */}
                <div className="bg-white border border-gray-150 p-6 md:p-8 rounded-[28px] shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="p-3.5 bg-blue-50 text-[#2c3164] rounded-2xl shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Telephony Coordinates
                    </p>
                    <h3 className="text-lg font-bold text-gray-950">
                      Direct Helplines
                    </h3>
                    <p className="text-xs text-gray-600 font-mono font-semibold">
                      Helpline: +8801688-176309
                    </p>
                    <p className="text-xs text-gray-600 font-mono font-semibold">
                      Whatsapp: +8801688-176309
                    </p>
                    
                  </div>
                </div>

                {/* 3. Electronic Mails Card */}
                <div className="bg-white border border-gray-150 p-6 md:p-8 rounded-[28px] shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Electronic Correspondences
                    </p>
                    <h3 className="text-lg font-bold text-gray-950">
                      Email Communication
                    </h3>
                    
                    <p className="text-xs text-slate-400 font-mono">
                      Support: westernstudybd@gmail.com
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* COLUMN RIGHT (7 Cols) - Custom Interactive Validation Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-150/80 rounded-[32px] p-6 md:p-10 shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-5 md:space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Submit Your Candidate Profile
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Our credential validators response response timeline is typically under 12 working hours.
                        </p>
                      </div>

                      {/* Row - Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-650">
                            Full Name <span className="text-[#f15b24]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. John Doe"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-xs font-medium focus:bg-white focus:outline-none transition-all duration-200 ${
                              errors.name ? 'border-[#f15b24]/50 text-[#f15b24] focus:ring-1 focus:ring-[#f15b24]' : 'border-gray-200 focus:border-[#f15b24]'
                            }`}
                          />
                          {errors.name && (
                            <p className="text-[10px] text-[#f15b24] font-medium leading-none mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-650">
                            Email Address <span className="text-[#f15b24]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. john@example.com"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-xs font-medium focus:bg-white focus:outline-none transition-all duration-200 ${
                              errors.email ? 'border-[#f15b24]/50 text-[#f15b24] focus:ring-1 focus:ring-[#f15b24]' : 'border-gray-200 focus:border-[#f15b24]'
                            }`}
                          />
                          {errors.email && (
                            <p className="text-[10px] text-[#f15b24] font-medium leading-none mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row - Phoneline */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-650">
                          Phone Number <span className="text-[#f15b24]">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +880 1700000000"
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-xs font-medium focus:bg-white focus:outline-none transition-all duration-200 ${
                            errors.phone ? 'border-[#f15b24]/50 text-[#f15b24] focus:ring-1 focus:ring-[#f15b24]' : 'border-gray-200 focus:border-[#f15b24]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-[#f15b24] font-medium leading-none mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Dropdown - Subject Interest */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-650">
                          Subject of Counseling
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-2xl text-xs font-bold focus:bg-white focus:outline-none transition-all duration-200 cursor-pointer"
                        >
                          <option value="General Inquiry">General Information Queries</option>
                          <option value="Admission Screening">Free Academic Document Pre-Check</option>
                          <option value="Scholarship Evaluation">Merit Scholarship Inquiries</option>
                          <option value="Visa Compliance Pack">Immigration & Visa Documentation Pack</option>
                          <option value="Partner Alliance">Institutional Partnerships</option>
                        </select>
                      </div>

                      {/* Textarea - Message */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-650">
                          Your Brief Background / Message <span className="text-[#f15b24]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Please specify your previous GPA, IELTS/PTE score, and target program intakes..."
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-xs font-medium focus:bg-white focus:outline-none transition-all duration-200 focus:outline-none resize-none ${
                            errors.message ? 'border-[#f15b24]/50 focus:ring-1 focus:ring-[#f15b24]' : 'border-gray-200 focus:border-[#f15b24]'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[10px] text-[#f15b24] font-medium leading-none mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit form button with loading indicators */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f15b24] hover:bg-[#e04f1c] text-white text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-[#f15b24]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Dispatching Request...</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>Transmit Secured Message</span>
                          </>
                        )}
                      </button>

                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-card"
                      className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', damping: 20 }}
                    >
                      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border-4 border-emerald-100 shadow-md animate-bounce">
                        <CheckCircle2 size={40} />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                          Message Safely Transmitted
                        </h3>
                        <p className="text-sm text-gray-550 max-w-md mx-auto leading-relaxed">
                          Thank you for connecting. Our lead academic counselor for <strong className="text-gray-900 bg-orange-50 px-1.5 py-0.5 rounded">{formData.destination || 'Australia'}</strong> has received your background dossier. We will reach back using email & phone.
                        </p>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-xs uppercase font-bold tracking-wider text-[#f15b24] bg-[#f15b24]/10 hover:bg-[#f15b24]/15 px-6 py-2.5 rounded-xl transition-all"
                        >
                          Send Another Query
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer Section */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Applied dialog modal */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeApplyModal} />

    </div>
  );
}
