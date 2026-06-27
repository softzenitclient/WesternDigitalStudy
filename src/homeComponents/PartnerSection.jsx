import React, { useState } from 'react';
import { useSheetData } from '../context/SheetDataContext';
import { PARTNERS } from '../data';
import { Landmark } from 'lucide-react';

// Sub-component to handle image loading state and fallback elegantly
function PartnerLogo({ partner }) {
  const [imgError, setImgError] = useState(false);
  const partnerColor = partner.color || partner.accentColor || '#f15b24';

  return (
    <div 
      className="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-[#f15b24]/10 flex items-center justify-center transition-colors duration-300 border border-orange-100/50 overflow-hidden flex-shrink-0"
    >
      {partner.logoUrl && !imgError ? (
        <img 
          src={partner.logoUrl} 
          alt={`${partner.name} logo`} 
          className="w-full h-full object-contain p-1"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      ) : (
        <Landmark size={18} style={{ color: partnerColor }} />
      )}
    </div>
  );
}

export default function PartnerSection({ onNavigate }) {
  const { detailedUniversities } = useSheetData();
  
  // Use detailedUniversities if loaded and non-empty, otherwise fallback to offline static PARTNERS
  const hasSheetPartners = detailedUniversities && detailedUniversities.length > 0;
  const sourcePartners = hasSheetPartners ? detailedUniversities : PARTNERS;

  // Split partners into two active rows to create a balanced dual-track system
  const row1 = sourcePartners.filter((_, idx) => idx % 2 === 0);
  const row2 = sourcePartners.filter((_, idx) => idx % 2 !== 0);

  // Quadruple the arrays to guarantee plenty of width to fill ultra-wide screens and loop seamlessly at 50% transform offset
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  const handlePartnerClick = () => {
    if (onNavigate) {
      onNavigate('country');
    }
  };

  return (
    <section id="partner-universities-section" className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl space-y-2 text-left">
          <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block font-mono">
            Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#2c3164] tracking-tight">
            Official Partner Universities
          </h2>
          <p className="text-gray-500 font-sans text-xs md:text-sm">
            We are official representative leads for 350+ elite global campus programs. Click any partner to explore details.
          </p>
        </div>
        
        <button
          id="btn-go-to-partners"
          onClick={handlePartnerClick}
          className="bg-[#2c3164] hover:bg-[#f15b24] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 duration-200 cursor-pointer self-start md:self-auto shrink-0 animate-pulse hover:animate-none"
        >
          View All Partner Universities &rarr;
        </button>
      </div>

      {/* Modern Marquee Double Track with Side-fade Gradient Overlays */}
      <div className="relative w-full space-y-6">
        {/* Soft elegant vignette masks on the left and right borders */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Scrolling Track */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {row1Items.map((partner, index) => (
              <div
                key={`row1-${partner.id}-${index}`}
                onClick={handlePartnerClick}
                className="flex-shrink-0 w-52 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3.5 hover:border-[#f15b24] hover:shadow-md transition-all duration-300 group h-20 text-left select-none cursor-pointer"
              >
                <PartnerLogo partner={partner} />
                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold text-gray-800 tracking-tight leading-snug font-sans group-hover:text-[#f15b24] transition-colors truncate">
                    {partner.name}
                  </span>
                  <span className="block text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5 font-mono">
                    {partner.country ? `${partner.country} Campus` : 'Official Rep'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling Track (Reverse orientation) */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex w-max gap-6 animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer">
            {row2Items.map((partner, index) => (
              <div
                key={`row2-${partner.id}-${index}`}
                onClick={handlePartnerClick}
                className="flex-shrink-0 w-52 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3.5 hover:border-[#f15b24] hover:shadow-md transition-all duration-300 group h-20 text-left select-none cursor-pointer"
              >
                <PartnerLogo partner={partner} />
                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold text-gray-800 tracking-tight leading-snug font-sans group-hover:text-[#f15b24] transition-colors truncate">
                    {partner.name}
                  </span>
                  <span className="block text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5 font-mono">
                    {partner.country ? `${partner.country} Campus` : 'Official Rep'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
