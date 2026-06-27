import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import { useSheetData } from '../context/SheetDataContext';
import { 
  Calendar, 
  Search, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  Tag, 
  BookOpen, 
  X,
  ChevronRightCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogPage({ onNavigate }) {
  const { news: NEWS } = useSheetData();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  // Filter logic based on search text only
  const filteredAndSortedNews = useMemo(() => {
    const list = [...NEWS].reverse();
    return list.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.article || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });
  }, [NEWS, searchQuery]);

  // Reset page to 1 when search query is changed
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination parameters
  const postsPerPage = 12;
  const totalPosts = filteredAndSortedNews.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Paginated subset
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredAndSortedNews.slice(startIndex, startIndex + postsPerPage);
  }, [filteredAndSortedNews, currentPage, postsPerPage]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    // Scroll smoothly to start of posts container
    const section = document.getElementById('blog-grid-section');
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Main Content */}
      <main className="flex-grow pt-24">
        
        {/* Blog Hero Header */}
        <section className="relative overflow-hidden bg-[#2c3164] text-white py-14 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3164] via-[#1f234a] to-[#2c3164]" />
          
          {/* Ambient pattern layer background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f15b24_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="relative max-w-7xl mx-auto px-4 md:px-12 z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f15b24] text-white tracking-wider uppercase">
                <Sparkles size={11} />
                Knowledge Base
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold font-serif tracking-tight leading-tight">
                Our Student Blog & Advice Hub
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Expert insights, legal guides, step-by-step visa workflows, and direct news alerts compiled exclusively by professional educational consultants.
              </p>
            </div>

            
          </div>
        </section>

        {/* Filter & Search Bar Block */}
        <section className="bg-white border-b border-gray-100 shadow-sm sticky top-[72px] md:top-[80px] z-30 py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-center">
            
            {/* Search Input */}
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search articles, topics or guidelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-[#f15b24] focus:ring-2 focus:ring-[#f15b24]/20 outline-none text-sm transition-all shadow-inner placeholder-gray-400 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

          </div>
        </section>

        {/* Blog Post List Section */}
        <section id="blog-grid-section" className="py-12 max-w-7xl mx-auto px-4 md:px-12">
          
          {/* Results feedback */}
          {searchQuery && (
            <div className="mb-8 text-sm text-gray-500 font-sans">
              Found <strong className="text-[#2c3164]">{totalPosts}</strong> results matching your search "<span className="italic">{searchQuery}</span>"
            </div>
          )}

          {totalPosts === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto px-6 space-y-5">
              <div className="w-16 h-16 bg-[#f15b24]/10 rounded-full flex items-center justify-center mx-auto text-[#f15b24]">
                <BookOpen size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#2c3164]">No Publications Found</h3>
                <p className="text-gray-500 text-sm">
                  We couldn't find any articles matching your search criteria. Please try resetting your search query.
                </p>
              </div>
              <button
                onClick={() => { setSearchQuery(''); }}
                className="px-6 py-2.5 bg-[#2c3164] hover:bg-[#f15b24] text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              
              {/* Blog Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    id={`blog-card-${item.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
                    onClick={() => onNavigate && onNavigate(`/blog/${item.id}`)}
                  >
                    <div>
                      {/* Image header */}
                      <div className="h-48 overflow-hidden relative bg-slate-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content copy */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-extrabold uppercase tracking-widest font-mono">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} className="text-[#f15b24]" />
                            <span>{item.date}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={11} className="text-[#f15b24]" />
                            <span>{item.readTime}</span>
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-serif font-extrabold text-[#2c3164] group-hover:text-[#f15b24] transition-colors leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2c3164] hover:text-[#f15b24] transition-colors flex items-center gap-1">
                        <span>Read Article</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 bg-slate-100 px-2 py-0.5 rounded">
                        REF: WS0{item.id}
                      </span>
                    </div>

                  </motion.article>
                ))}
              </div>

              {/* Advanced Pagination UI */}
              {totalPages > 1 && (
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Summary labels */}
                  <span className="text-xs text-gray-500 font-sans font-medium">
                    Showing <strong className="text-[#2c3164]">{paginatedNews.length}</strong> of <strong className="text-[#2c3164]">{totalPosts}</strong> total publications
                  </span>

                  {/* Bullet buttons */}
                  <div className="flex items-center gap-2">
                    
                    <button
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2.5 rounded-xl border border-gray-100 bg-slate-50 text-gray-600 disabled:opacity-40 disabled:hover:bg-slate-50 hover:bg-slate-100 disabled:cursor-not-allowed transition cursor-pointer"
                      title="Previous Page"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-[#2c3164] text-white shadow-md'
                            : 'bg-slate-50 border border-gray-100 text-[#2c3164] hover:bg-slate-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    <button
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2.5 rounded-xl border border-gray-100 bg-slate-50 text-gray-600 disabled:opacity-40 disabled:hover:bg-slate-50 hover:bg-slate-100 disabled:cursor-not-allowed transition cursor-pointer"
                      title="Next Page"
                    >
                      <ChevronRight size={16} />
                    </button>

                  </div>

                  

                </div>
              )}

            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onApplyNowClick={openApplyModal} />

      {/* Booking Dialogue */}
      <ContactModal isOpen={isApplyModalOpen} onClose={closeApplyModal} />

    </div>
  );
}
