import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { useSheetData } from '../context/SheetDataContext';
import { Clock, ArrowLeft } from 'lucide-react';

export default function BlogDetailsPage({ onNavigate }) {
  const { id } = useParams();
  const { news: NEWS } = useSheetData();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  // Retrieve current active blog post
  const article = useMemo(() => {
    const found = NEWS.find(item => item.id === parseInt(id || '1', 10));
    return found || NEWS[0];
  }, [NEWS, id]);

  // Support paragraphs from actual sheet 'article' column
  const bodyParagraphs = useMemo(() => {
    if (article && article.article) {
      return article.article.split(/\r?\n/).filter(p => p.trim() !== '');
    }
    return null;
  }, [article]);

  // Generate dynamic extensive body texts based on article topic
  const dynamicBodyContent = useMemo(() => {
    const lowerTitle = article.title.toLowerCase();
    
    if (lowerTitle.includes('mba') || lowerTitle.includes('business')) {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg font-sans">
          <p className="font-semibold text-[#2c3164] text-lg md:text-xl">
            {article.excerpt}
          </p>
          <p>
            Securing an MBA from top dual-accredited institutions remains one of the fastest conduits for high-level global management roles. With leading centers offering streamlined post-study permissions, foreign candidates are targeting peak intakes with strategic focus.
          </p>
          <p>
            While a general MBA offers broad corporate agility, specialized degrees in Data Analytics, Venture Finance, Supply Chain Logistics, and Fintech are reporting 45% higher signing bonuses in late 2026. Top admissions departments now look for specialized expertise integrated with general leadership components.
          </p>
          <p>
            The standard assessment cycles open up to 10 months prior to the start term. Successful submissions must balance dynamic criteria such as verifiable professional achievements, decent academic records, and a highly polished statement of purpose that demonstrates your clear future objectives.
          </p>
          <p>
            To stand out in the admissions process, prepare your documentation thoroughly and apply during the early intakes. Western Study advises students to finalize language requirements early in progress to guarantee placement matching.
          </p>
        </div>
      );
    }

    if (lowerTitle.includes('visa') || lowerTitle.includes('pathway') || lowerTitle.includes('pr') || lowerTitle.includes('opt') || lowerTitle.includes('stream') || lowerTitle.includes('gte') || lowerTitle.includes('gs')) {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg font-sans">
          <p className="font-semibold text-[#2c3164] text-lg md:text-xl">
            {article.excerpt}
          </p>
          <p>
            Navigating immigration thresholds demands a pristine compliance checklist. Changes deployed across commonwealth frameworks structure student visas around authentic academic intent and upfront financial safety.
          </p>
          <p>
            In 2026, mechanical document checks have updated to complex evaluations of student coherence. Verification screens look closer at candidate academic progression, language validation metrics, and the direct alignment of your chosen course with prior educational choices.
          </p>
          <p>
            To build a robust study permit application, candidates must compile evidence that leaves zero room for ambiguity or loose interpretation. A progressive Statement of Purpose (SOP) explaining your study goals, coupled with solid liquid proof of funds, will significantly optimize your outcome.
          </p>
          <p>
            Several popular destinations have revised their study quota allocations, making strategic timing more critical than previous cycles. Consult with certified counselors early to confirm your eligibility and lock in placement parameters.
          </p>
        </div>
      );
    }

    // Default template (e.g. general course/scholarship advice)
    return (
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg font-sans">
        <p className="font-semibold text-[#2c3164] text-lg md:text-xl">
          {article.excerpt}
        </p>
        <p>
          Entering world-renowned educational landmarks gives international candidates access to state-of-the-art research resources and unparalleled industry connections. Preparing a highly calibrated profile is critical to stand out in the competitive 2026 admission cycles.
        </p>
        <p>
          Submitting basic application forms is no longer sufficient. Prestigious institutions prioritize candidates with holistic profiles, combining strong GPAs with meaningful extracurricular activities, clear intent narratives, and solid recommendation letters.
        </p>
        <p>
          Admissions teams suggest completing preparations at least 8 to 12 months before classes begin. Ensure that standard language tests, credential verifications, and custom drafts are complete prior to primary application deadlines.
        </p>
        <p>
          Our continuous monitoring indicates early registrations capture higher chances of institutional awards. Get your academic profile assessed to align your options with active study tracks.
        </p>
      </div>
    );
  }, [article.title, article.excerpt]);

  const authorName = article.writtenBy || "Western Study Editorial Board";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      
      {/* Navbar navigation line */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Main Column */}
      <main className="flex-grow pt-24 pb-20 animate-fade-in">
        
        {/* Compact Back Button Header */}
        <div className="max-w-3xl mx-auto px-4 md:px-0 mt-8 mb-6">
          <button
            onClick={() => onNavigate && onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2c3164] hover:text-[#f15b24] transition-colors cursor-pointer font-sans"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* Centered Blog Details Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <article className="space-y-8 bg-white rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm leading-relaxed">
            
            {/* 1. Title */}
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Sub Meta Info row: 3. Author Name & 4. Reading Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-semibold text-gray-500 border-y border-gray-100 py-4 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#f15b24]">Written by:</span>
                <span className="text-[#2c3164] font-extrabold">{authorName}</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock size={15} className="text-[#f15b24]" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="text-gray-400 font-medium">
                <span>Published on {article.date}</span>
              </div>
            </div>

            {/* 2. Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
              <img 
                src={article.image} 
                alt={article.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 5. Writing Content */}
            <div className="prose prose-slate max-w-none">
              {bodyParagraphs ? (
                <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg font-sans">
                  {bodyParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ) : (
                dynamicBodyContent
              )}
            </div>

          </article>
        </div>

      </main>

      {/* Footer view */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Contact modal view for seamless support */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeApplyModal} />

    </div>
  );
}
