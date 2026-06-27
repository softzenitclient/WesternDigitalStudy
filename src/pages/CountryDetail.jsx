import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSheetData } from '../context/SheetDataContext';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Award, BookOpen, Clock, PlayCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

const FLAG_MAP = {
  'australia': '🇦🇺',
  'canada': '🇨🇦',
  'new zealand': '🇳🇿',
  'uk': '🇬🇧',
  'usa': '🇺🇸',
  'united kingdom': '🇬🇧',
  'united states': '🇺🇸',
  'greece': '🇬🇷',
  'hungary': '🇭🇺',
  'italy': '🇮🇹',
  'malaysia': '🇲🇾',
  'malta': '🇲🇹',
  'netherlands': '🇳🇱',
  'south korea': '🇰🇷',
  'sweden': '🇸🇪',
  'germany': '🇩🇪',
  'france': '🇫🇷',
  'finland': '🇫🇮',
  'cyprus': '🇨🇾',
  'denmark': '🇩🇰'
};

const GRADIENT_MAP = {
  'australia': 'from-[#006A4E] to-[#122c54]',
  'usa': 'from-[#1E3A8A] to-[#B91C1C]',
  'uk': 'from-[#0A1931] to-[#153462]',
  'canada': 'from-[#C53030] to-[#2D3748]',
  'default': 'from-[#2c3164] to-[#f15b24]'
};

// Parser helpers
function parseOverview(text) {
  if (!text) return { heading: 'About Higher Studies', description: '' };
  const headingMatch = text.match(/Heading:\s*(.*?)(?=\n|Description:|$)/i);
  const descMatch = text.match(/Description:\s*(.*)/is);
  
  const heading = headingMatch ? headingMatch[1].trim() : 'About Higher Studies';
  let description = descMatch ? descMatch[1].trim() : text;
  if (!descMatch && headingMatch) {
    description = text.replace(/Heading:\s*(.*?)(?=\n|$)/i, '').trim();
  }
  return { heading, description };
}

function parseAdmissionProcess(text) {
  if (!text) return { heading: 'Admission Roadmap', steps: [] };
  const headingMatch = text.match(/Heading:\s*(.*?)(?=\n|Process:|$)/i);
  const heading = headingMatch ? headingMatch[1].trim() : 'Admission Roadmap';
  
  let cleanText = text;
  if (headingMatch) {
    cleanText = text.replace(/Heading:\s*.*?(?=\n|$)/i, '');
  }
  
  const stepRegex = /(?:\d+[\.\)]\s*)([^\n]+)/g;
  const steps = [];
  let match;
  while ((match = stepRegex.exec(cleanText)) !== null) {
    steps.push(match[1].trim());
  }
  
  if (steps.length === 0) {
    const lines = cleanText.split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.toLowerCase().startsWith('process:'));
    steps.push(...lines);
  }
  
  return { heading, steps };
}

function parseFAQ(text) {
  if (!text) return { heading: 'Frequently Asked Questions', qas: [] };
  const headingMatch = text.match(/Heading:\s*(.*?)(?=\n|Q:|$)/i);
  const heading = headingMatch ? headingMatch[1].trim() : 'Frequently Asked Questions';
  
  const qas = [];
  const qaBlocks = text.split(/Q:/gi);
  qaBlocks.forEach(block => {
    const parts = block.split(/A:/gi);
    if (parts.length >= 2) {
      const question = parts[0].trim();
      const answer = parts[1].trim();
      if (question && answer) {
        qas.push({ question, answer });
      }
    }
  });
  
  return { heading, qas };
}

export default function CountryDetail({ onNavigate }) {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { countryPages, detailedUniversities, loading } = useSheetData();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [countryName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#2c3164]/20 border-t-[#2c3164] rounded-full animate-spin"></div>
          <div className="absolute top-1.5 left-1.5 w-13 h-13 border-4 border-[#f15b24]/20 border-t-[#f15b24] rounded-full animate-spin [animation-duration:1.5s]"></div>
        </div>
        <p className="mt-4 text-[#2c3164] font-bold text-sm tracking-wider animate-pulse">Loading Country Hub...</p>
      </div>
    );
  }

  // Find country wise details row matching this slug
  // Normalize both by comparing lowercase strings
  const details = countryPages.find(
    (page) => page.country.trim().toLowerCase() === (countryName || '').replace(/-/g, ' ').toLowerCase()
  );

  if (!details) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar onApplyNowClick={() => setModalOpen(true)} onNavigate={onNavigate} />
        <div className="flex-grow flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-3xl mb-4 text-[#f15b24]">🌍</div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Country Information Upcoming</h2>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Admissions and course curriculum templates are currently being synchronized for this country desk. Explore our active university partners list in the meantime or contact us dynamically.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => onNavigate('country')}
              className="bg-[#2c3164] hover:bg-slate-800 text-white font-semibold text-xs py-3 px-6 rounded-xl transition duration-200 cursor-pointer"
            >
              All Universities
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#f15b24] hover:bg-[#d6471c] text-white font-semibold text-xs py-3 px-6 rounded-xl transition duration-200 cursor-pointer"
            >
              Ask Advisor
            </button>
          </div>
        </div>
        <Footer onNavigate={onNavigate} />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    );
  }

  const normalizedKey = details.country.toLowerCase();
  const flag = FLAG_MAP[normalizedKey] || '🌍';
  const gradient = GRADIENT_MAP[normalizedKey] || GRADIENT_MAP['default'];

  // Parse fields
  const parsedOverviewBlock = parseOverview(details.overview);
  const parsedAdmissionBlock = parseAdmissionProcess(details.admissionProcess);
  const parsedFaqBlock = parseFAQ(details.faq);

  // Filter corresponding master partners for that country
  const countryUnis = detailedUniversities.filter(
    (uni) => uni.country.trim().toLowerCase() === details.country.trim().toLowerCase()
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="country-detail-root">
      <Navbar onApplyNowClick={() => setModalOpen(true)} onNavigate={onNavigate} />

      {/* Hero Banner Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${gradient} text-white relative overflow-hidden`} id="country-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-bold border border-white/15 backdrop-blur-sm mb-4">
            <span className="text-base leading-none">{flag}</span>
            <span>Study Abroad Hub</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-serif tracking-tight leading-tight max-w-4xl">
            Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-100">{details.country}</span>
          </h1>
          <p className="mt-3 text-base text-gray-200 max-w-2xl leading-relaxed font-medium">
            Explore authentic visa guides, application roadmaps, tuition timelines, and directly affiliated universities verified to process global students instantly.
          </p>
        </div>
      </section>

      {/* Tabs and Details Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full" id="country-tabs-tablist">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-10 overflow-x-auto gap-4 md:gap-8 scrollbar-none">
          {['overview', 'roadmap', 'faq'].map((tab) => (
            <button
              id={`tab-select-${tab}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap capitalize ${
                activeTab === tab
                  ? 'border-[#f15b24] text-[#f15b24]'
                  : 'border-transparent text-gray-500 hover:text-slate-800'
              }`}
            >
              {tab === 'roadmap' ? 'Admission Roadmap' : tab === 'faq' ? 'Frequently Answers' : tab}
            </button>
          ))}
        </div>

        {/* Dynamic Details Rendering */}
        <div className="max-w-4xl mx-auto space-y-8 animate-none" id="tab-content-container">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="tab-overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#2c3164] font-serif mb-4 flex items-center gap-2">
                    <BookOpen className="text-[#f15b24]" size={22} />
                    <span>{parsedOverviewBlock.heading}</span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium">
                    {parsedOverviewBlock.description}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'roadmap' && (
              <motion.div
                key="tab-roadmap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#2c3164] font-serif mb-6 flex items-center gap-2">
                    <PlayCircle className="text-[#f15b24]" size={22} />
                    <span>{parsedAdmissionBlock.heading}</span>
                  </h3>

                  {/* Timeline stepper */}
                  <div className="relative border-l border-gray-150 pl-6 ml-4 space-y-8 py-2">
                    {parsedAdmissionBlock.steps.map((step, idx) => (
                      <div key={idx} className="relative">
                        <span className="absolute -left-10 top-0.5 bg-orange-50 text-[#f15b24] w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-orange-100 shadow-sm">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                key="tab-faq"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#2c3164] font-serif mb-6 flex items-center gap-2">
                    <HelpCircle className="text-[#f15b24]" size={22} />
                    <span>{parsedFaqBlock.heading}</span>
                  </h3>

                  <div className="space-y-4">
                    {parsedFaqBlock.qas.length > 0 ? (
                      parsedFaqBlock.qas.map((qa, index) => (
                        <div 
                          key={index} 
                          className="bg-slate-50 border border-slate-100/80 rounded-xl transition-all duration-200"
                        >
                          <button
                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            className="w-full flex justify-between items-center text-left py-4 px-5 text-slate-800 font-bold text-sm cursor-pointer"
                          >
                            <span>{qa.question}</span>
                            <ChevronDown 
                              size={16} 
                              className={`text-slate-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {activeFaq === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden border-t border-slate-100"
                              >
                                <div className="p-5 text-gray-600 text-xs leading-relaxed font-medium">
                                  {qa.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-xs font-semibold">FAQs are currently being uploaded by Country advisors.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
