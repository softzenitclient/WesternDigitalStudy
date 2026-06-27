import React from 'react';
import { useSheetData } from '../context/SheetDataContext';
import { Calendar, User2, ArrowUpRight } from 'lucide-react';

export default function NewsSection({ onApplyNowClick, onNavigate }) {
  const { news: NEWS } = useSheetData();
  return (
    <section id="news-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
            Blog & Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
            News and updates
          </h2>
          <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
            Stay up to date with immigration reforms, academic quotas, study permit adjustments, and student helper archives.
          </p>
        </div>

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.slice(-4).reverse().map((item) => (
            <article
              key={item.id}
              id={`news-card-${item.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              onClick={() => onNavigate && onNavigate(`/blog/${item.id}`)}
            >
              <div>
                {/* News Image Header with scale-on-hover effect */}
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#2c3164]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* News Copy Content */}
                <div className="p-5 space-y-3.5">
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} className="text-[#f15b24]" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-sm md:text-base font-bold text-[#2c3164] group-hover:text-[#f15b24] transition-colors leading-snug tracking-tight line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed font-sans line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button container */}
              <div className="p-5 pt-0">
                <button
                  id={`read-article-btn-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate && onNavigate(`/blog/${item.id}`);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2c3164] hover:text-[#f15b24] transition-colors duration-200 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles link */}
        <div className="text-center mt-12">
          <button
            id="view-all-blogs-btn"
            onClick={() => onNavigate && onNavigate('/blog')}
            className="inline-flex items-center gap-2 bg-[#2c3164] hover:bg-[#f15b24] text-white font-bold text-sm px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
