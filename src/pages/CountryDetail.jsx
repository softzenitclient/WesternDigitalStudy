import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSheetData } from '../context/SheetDataContext';
import Navbar from '../homeComponents/Navbar';
import Footer from '../homeComponents/Footer';
import ContactModal from '../homeComponents/ContactModal';
import UniversityDetailModal from '../partnerComponents/UniversityDetailModal';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Award, BookOpen, Clock, PlayCircle, HelpCircle, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

const COUNTRY_CODES = {
  'australia': 'au',
  'canada': 'ca',
  'new zealand': 'nz',
  'new-zealand': 'nz',
  'uk': 'gb',
  'united kingdom': 'gb',
  'usa': 'us',
  'united states': 'us',
  'greece': 'gr',
  'hungary': 'hu',
  'italy': 'it',
  'malaysia': 'my',
  'malta': 'mt',
  'netherlands': 'nl',
  'netherland': 'nl',
  'south korea': 'kr',
  'south-korea': 'kr',
  'korea': 'kr',
  'sweden': 'se',
  'germany': 'de',
  'france': 'fr',
  'finland': 'fi',
  'cyprus': 'cy',
  'denmark': 'dk'
};

const FLAG_MAP = {
  'australia': '🇦🇺',
  'canada': '🇨🇦',
  'new zealand': '🇳🇿',
  'new-zealand': '🇳🇿',
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
  'netherland': '🇳🇱',
  'south korea': '🇰🇷',
  'south-korea': '🇰🇷',
  'korea': '🇰🇷',
  'sweden': '🇸🇪',
  'germany': '🇩🇪',
  'france': '🇫🇷',
  'finland': '🇫🇮',
  'cyprus': '🇨🇾',
  'denmark': '🇩🇰'
};

// Curated high quality background videos & posters for destination countries
const COUNTRY_MEDIA = {
  'sweden': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1920&auto=format&fit=crop'
  },
  'finland': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1920&auto=format&fit=crop'
  },
  'germany': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop'
  },
  'canada': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop'
  },
  'uk': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop'
  },
  'united kingdom': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop'
  },
  'usa': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    poster: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1920&auto=format&fit=crop'
  },
  'united states': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    poster: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1920&auto=format&fit=crop'
  },
  'australia': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
    poster: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&auto=format&fit=crop'
  },
  'new zealand': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    poster: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop'
  },
  'new-zealand': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    poster: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop'
  },
  'italy': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1920&auto=format&fit=crop'
  },
  'netherlands': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1920&auto=format&fit=crop'
  },
  'netherland': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1920&auto=format&fit=crop'
  },
  'denmark': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1920&auto=format&fit=crop'
  },
  'hungary': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1920&auto=format&fit=crop'
  },
  'greece': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1920&auto=format&fit=crop'
  },
  'malaysia': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1920&auto=format&fit=crop'
  },
  'south korea': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1920&auto=format&fit=crop'
  },
  'south-korea': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1920&auto=format&fit=crop'
  },
  'malta': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1920&auto=format&fit=crop'
  },
  'cyprus': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1920&auto=format&fit=crop'
  },
  'france': {
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1920&auto=format&fit=crop'
  }
};

const DEFAULT_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';
const DEFAULT_POSTER = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920&auto=format&fit=crop';

// Helper to extract clean YouTube ID without playlist parameters
function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  const clean = url.trim();

  // Pattern 1: watch?v=XXXXXXXXXXX
  const vMatch = clean.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (vMatch && vMatch[1]) return vMatch[1];

  // Pattern 2: youtu.be/XXXXXXXXXXX
  const shortMatch = clean.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  // Pattern 3: embed/XXXXXXXXXXX
  const embedMatch = clean.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  // Pattern 4: shorts/XXXXXXXXXXX
  const shortsMatch = clean.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // Pattern 5: direct 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) return clean;

  return null;
}

// Background YouTube Player with 0 controls & programmatic looping to eliminate [<<] [||] [>>] buttons
function YouTubeBackground({ videoId }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!videoId) return;

    let isMounted = true;

    // Load YouTube API script once
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player || !containerRef.current) return;

      // Clean existing player if any
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) { }
      }

      const playerDiv = document.createElement('div');
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(playerDiv);

      playerRef.current = new window.YT.Player(playerDiv, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          autohide: 1
        },
        events: {
          onReady: (event) => {
            if (!isMounted) return;
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (!isMounted) return;
            // 0 = ENDED -> loop back to 0 without triggering playlist UI
            if (event.data === 0) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const timer = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(timer);
          if (isMounted) initPlayer();
        }
      }, 150);
      return () => {
        clearInterval(timer);
        isMounted = false;
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          try {
            playerRef.current.destroy();
          } catch (e) { }
        }
      };
    }

    return () => {
      isMounted = false;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) { }
      }
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      <div
        ref={containerRef}
        className="w-[300vw] h-[300vh] min-w-[100%] min-h-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none aspect-video scale-135 md:scale-120 object-cover border-0 select-none [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:pointer-events-none [&_iframe]:border-0"
      >
        {/* Instant fallback iframe without playlist param before API is ready */}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&autohide=1`}
          title="Background Video"
          tabIndex={-1}
          aria-hidden="true"
          className="w-full h-full pointer-events-none border-0"
          style={{ pointerEvents: 'none' }}
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      {/* Event shield */}
      <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />
    </div>
  );
}

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
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [uniModalOpen, setUniModalOpen] = useState(false);

  // HTML5 Video playback states
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [countryName]);

  // Find country wise details row matching this slug
  // Normalize both by comparing lowercase strings
  const details = countryPages.find(
    (page) => page.country.trim().toLowerCase() === (countryName || '').replace(/-/g, ' ').toLowerCase()
  );

  const normalizedKey = (details?.country || countryName || '').trim().toLowerCase().replace(/-/g, ' ');
  const countryCode = COUNTRY_CODES[normalizedKey] || COUNTRY_CODES[normalizedKey.replace(/\s+/g, '-')] || '';
  const flagEmoji = FLAG_MAP[normalizedKey] || FLAG_MAP[normalizedKey.replace(/\s+/g, '-')] || '🌍';

  // Dynamic media source selection
  const mediaConfig = COUNTRY_MEDIA[normalizedKey] || COUNTRY_MEDIA[normalizedKey.replace(/\s+/g, '-')] || {};
  const rawVideoLink = details?.videoUrl || mediaConfig.video || DEFAULT_VIDEO;
  const posterImage = details?.bgImage || mediaConfig.poster || DEFAULT_POSTER;

  // Check if rawVideoLink is a YouTube link
  const youtubeVideoId = extractYouTubeId(rawVideoLink);

  useEffect(() => {
    setVideoLoaded(false);
    setVideoError(false);
  }, [rawVideoLink]);

  useEffect(() => {
    if (videoRef.current && !youtubeVideoId) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented or postponed by browser
        });
      }
    }
  }, [rawVideoLink, youtubeVideoId]);

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

  // Parse fields
  const parsedOverviewBlock = parseOverview(details.overview);
  const parsedAdmissionBlock = parseAdmissionProcess(details.admissionProcess);
  const parsedFaqBlock = parseFAQ(details.faq);

  // Clean overview description for the banner (short & concise, max 2 lines)
  const cleanDescription = parsedOverviewBlock.description
    ? parsedOverviewBlock.description.replace(/^Description:\s*/i, '').trim()
    : `Explore authentic visa guides, application roadmaps, tuition timelines, and directly affiliated universities verified to process global students instantly in ${details.country}.`;

  const firstParagraph = cleanDescription.split(/\n+/)[0] || cleanDescription;
  const sentences = firstParagraph.match(/[^.!?]+[.!?]+/g) || [firstParagraph];
  const bannerDescription = sentences.slice(0, 2).join(' ').trim() || firstParagraph;

  // Filter corresponding master partners for that country
  const countryUnis = detailedUniversities.filter(
    (uni) => uni.country.trim().toLowerCase() === details.country.trim().toLowerCase()
  );

  const tabsList = [
    { id: 'overview', label: 'Overview' },
    { id: 'roadmap', label: 'Admission Roadmap' },
    { id: 'faq', label: 'Frequently Asked Questions' },
    ...(countryUnis.length > 0 ? [{ id: 'universities', label: `Partner Universities (${countryUnis.length})` }] : [])
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="country-detail-root">
      <Navbar onApplyNowClick={() => setModalOpen(true)} onNavigate={onNavigate} />

      {/* Hero Banner Section with Dynamic Background Video (YouTube or Direct Video) */}
      <section
        className="pt-40 pb-28 md:pt-48 md:pb-36 min-h-[560px] md:min-h-[640px] lg:min-h-[680px] text-white relative overflow-hidden flex items-center"
        id="country-hero"
      >
        {/* Background Video & Image Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
          {/* High-res Poster Fallback */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{ backgroundImage: `url('${posterImage}')` }}
          />

          {/* If YouTube Video ID is present: Embed YouTube Iframe as Clean Background Video with 0 controls */}
          {youtubeVideoId ? (
            <YouTubeBackground videoId={youtubeVideoId} />
          ) : (
            /* Otherwise: Render HTML5 direct MP4 Video */
            !videoError && rawVideoLink && (
              <video
                ref={videoRef}
                key={rawVideoLink}
                autoPlay
                loop
                muted
                playsInline
                poster={posterImage}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
              >
                <source src={rawVideoLink} type="video/mp4" />
              </video>
            )
          )}

          {/* Bright, Clean Subtle Overlays for high video visibility and crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Content Container (Left-aligned matching reference image) */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 text-left w-full">
          {/* Country Flag */}
          <div className="flex items-center gap-3 mb-5">
            {countryCode ? (
              <div className="w-12 h-8 md:w-16 md:h-10 rounded-md overflow-hidden shadow-xl border border-white/30 flex-shrink-0 bg-white/10">
                <img
                  src={`https://flagcdn.com/w80/${countryCode}.png`}
                  alt={`${details.country} flag`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ) : (
              <span className="text-3xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{flagEmoji}</span>
            )}
          </div>

          {/* Main Title: Study In Sweden / Study In {Country} */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-sans tracking-tight leading-[1.1] mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-4xl">
            Study In {details.country}
          </h1>

          {/* Dynamic Overview Description (Clean 2-line Subtext) */}
          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] line-clamp-2 md:line-clamp-2">
            {bannerDescription}
          </p>
        </div>
      </section>

      {/* Tabs and Details Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex-1 w-full" id="country-tabs-tablist">

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-10 overflow-x-auto gap-4 md:gap-8 scrollbar-none">
          {tabsList.map((tab) => (
            <button
              id={`tab-select-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${activeTab === tab.id
                  ? 'border-[#f15b24] text-[#f15b24]'
                  : 'border-transparent text-gray-500 hover:text-slate-800'
                }`}
            >
              {tab.label}
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

            {activeTab === 'universities' && countryUnis.length > 0 && (
              <motion.div
                key="tab-universities"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {countryUnis.map((uni) => (
                    <div
                      key={uni.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                            <img
                              src={uni.logoUrl}
                              alt={`${uni.name} Logo`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <span className="bg-[#2c3164]/10 text-[#2c3164] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {uni.country}
                          </span>
                        </div>

                        <div>
                          <h4
                            onClick={() => {
                              setSelectedUniversity(uni);
                              setUniModalOpen(true);
                            }}
                            className="font-extrabold text-[#2c3164] text-base font-serif group-hover:text-[#f15b24] transition-colors cursor-pointer"
                          >
                            {uni.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-1">
                            <MapPin size={13} className="text-gray-400" />
                            <span>{uni.location}</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-50 pt-3 space-y-2 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Ranking</span>
                            <span className="font-bold text-gray-700">{(uni.ranking || '').split('•')[0] || 'Rank N/A'}</span>
                          </div>
                          <div className="flex justify-between items-start gap-2">
                            <span className="text-gray-400 font-medium shrink-0">Popular Course</span>
                            <span className="font-semibold text-gray-700 text-right line-clamp-1">{uni.popularCourse || 'General Courses'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-50 flex gap-3">
                        <button
                          onClick={() => {
                            setSelectedUniversity(uni);
                            setUniModalOpen(true);
                          }}
                          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => setModalOpen(true)}
                          className="flex-1 bg-[#2c3164] hover:bg-[#f15b24] text-white py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <UniversityDetailModal
        isOpen={uniModalOpen}
        onClose={() => setUniModalOpen(false)}
        university={selectedUniversity}
        onApply={() => {
          setUniModalOpen(false);
          setModalOpen(true);
        }}
      />
    </div>
  );
}
