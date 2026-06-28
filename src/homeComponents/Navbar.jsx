import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
} from "lucide-react";
import Logo from "./Logo";
import { useSheetData } from "../context/SheetDataContext";

const FLAG_MAP = {
  australia: "🇦🇺",
  canada: "🇨🇦",
  "new zealand": "🇳🇿",
  uk: "🇬🇧",
  usa: "🇺🇸",
  "united kingdom": "🇬🇧",
  "united states": "🇺🇸",
  greece: "🇬🇷",
  hungary: "🇭🇺",
  italy: "🇮🇹",
  malaysia: "🇲🇾",
  malta: "🇲🇹",
  netherlands: "🇳🇱",
  "south korea": "🇰🇷",
  sweden: "🇸🇪",
  germany: "🇩🇪",
  france: "🇫🇷",
  finland: "🇫🇮",
  cyprus: "🇨🇾",
  denmark: "🇩🇰",
};

export default function Navbar({ onApplyNowClick, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { countryPages, addressDetails } = useSheetData();

  const dynamicContact = addressDetails?.[0] || {};
  const emailText = dynamicContact.email;

  const rawPhone = dynamicContact.contact;
  const phoneText = rawPhone?.replace(/"/g, "").trim();
  // Handle scroll to change nav style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Country", id: "country" },
    { label: "Service", id: "service" },
    { label: "About", id: "about" },
    { label: "Blog", id: "blog" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleMenuClick = (item) => {
    setMobileMenuOpen(false);
    onNavigate(item.id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for Professional Information */}
      <div className="bg-[#2c3164] text-white text-xs py-2 px-4 md:px-12 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-[#f15b24] transition-colors cursor-pointer">
            <Phone size={13} className="text-[#f15b24]" />
            <span>{phoneText}</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5 hover:text-[#f15b24] transition-colors cursor-pointer">
            <Mail size={13} className="text-[#f15b24]" />
            <span>{emailText}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1.5 text-gray-300">
            <Clock size={13} />
            <span>Sat - Thu: 10:00 AM - 7:00 PM</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="navbar-container"
        className={`w-full transition-all duration-300 py-3 px-4 md:px-12 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => onNavigate("home")}>
            <Logo className="h-12 md:h-14" />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              if (item.id === "country") {
                return (
                  <div
                    key={item.id}
                    className="relative py-2"
                    onMouseEnter={() => setCountryDropdownOpen(true)}
                    onMouseLeave={() => setCountryDropdownOpen(false)}
                  >
                    <button
                      id={`nav-item-${item.id}`}
                      onClick={() => onNavigate("country")}
                      className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#f15b24] transition-colors text-sm focus:outline-none cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${countryDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Country Submenu on Hover */}
                    <AnimatePresence>
                      {countryDropdownOpen && (
                        <motion.div
                          id="country-hover-dropdown"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-[50%] -translate-x-[50%] mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-slate-100 z-[9999] overflow-hidden"
                        >
                          {/* Our Partners link */}
                          <button
                            id="dropdown-our-partners"
                            onClick={() => {
                              setCountryDropdownOpen(false);
                              onNavigate("/country");
                            }}
                            className="w-full text-left px-4 py-3 text-xs text-[#2c3164] hover:bg-orange-50 hover:text-[#f15b24] border-b border-gray-55 transition-all flex items-center gap-3 font-extrabold cursor-pointer"
                          >
                            <span>Our Partners</span>
                          </button>

                          <div className="bg-slate-50 px-4 py-1.5 text-[10px] text-gray-400 font-bold tracking-wider uppercase">
                            Study Destinations
                          </div>

                          {/* Dynamic lists of Countries */}
                          {countryPages.map((c) => {
                            const normalized = c.country.trim().toLowerCase();
                            const slug = normalized.replace(/\s+/g, "-");
                            return (
                              <button
                                id={`dropdown-country-${slug}`}
                                key={c.id}
                                onClick={() => {
                                  setCountryDropdownOpen(false);
                                  onNavigate(`/country/${slug}`);
                                }}
                                className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-orange-50 hover:text-[#f15b24] transition-all flex items-center gap-3 font-semibold cursor-pointer"
                              >
                                <span>{`Study in ${c.country}`}</span>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.id} className="relative">
                  <button
                    id={`nav-item-${item.id}`}
                    onClick={() => handleMenuClick(item)}
                    className="flex items-center gap-1 py-4 font-medium text-gray-700 hover:text-[#f15b24] transition-colors text-sm focus:outline-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Action Button & Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              id="nav-apply-now"
              onClick={onApplyNowClick}
              className="hidden sm:flex items-center gap-2 bg-[#f15b24] hover:bg-[#d6471c] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all active:scale-95 duration-200 group cursor-pointer animate-none"
            >
              <span>Apply Now</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                &rarr;
              </motion.span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2c3164] hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full border-t border-gray-100 mt-2 bg-white overflow-hidden py-4 px-2"
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="w-full">
                    {item.id === "country" ? (
                      <div>
                        {/* Nested header for Country dropdown on mobile */}
                        <button
                          id={`mobile-nav-item-${item.id}`}
                          onClick={() =>
                            setMobileCountryOpen(!mobileCountryOpen)
                          }
                          className="w-full flex justify-between items-center text-left px-4 py-3 text-sm font-medium text-gray-850 hover:bg-orange-50 hover:text-[#f15b24] rounded-xl transition-all"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${mobileCountryOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {mobileCountryOpen && (
                          <div className="bg-slate-50 rounded-xl my-1 p-2 flex flex-col gap-1 border border-slate-100/70 ml-4">
                            {/* Our Partners mobile */}
                            <button
                              id="mobile-nav-our-partners"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                onNavigate("/country");
                              }}
                              className="text-left px-4 py-2.5 text-xs text-slate-800 hover:bg-orange-100 rounded-lg flex items-center gap-2.5 font-bold"
                            >
                              <span>Our Partners</span>
                            </button>

                            {/* Dynamic lists of Countries mobile */}
                            {countryPages.map((c) => {
                              const normalized = c.country.trim().toLowerCase();
                              const slug = normalized.replace(/\s+/g, "-");
                              return (
                                <button
                                  id={`mobile-dropdown-country-${slug}`}
                                  key={c.id}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    onNavigate(`/country/${slug}`);
                                  }}
                                  className="text-left px-4 py-2 text-[11px] text-slate-600 hover:bg-orange-100 rounded-lg flex items-center gap-2.5 font-semibold"
                                >
                                  <span>{`Study in ${c.country}`}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        id={`mobile-nav-item-${item.id}`}
                        onClick={() => handleMenuClick(item)}
                        className="w-full flex justify-between items-center text-left px-4 py-3 text-sm font-medium text-slate-800 hover:bg-orange-50 hover:text-[#f15b24] rounded-xl transition-all"
                      >
                        <span>{item.label}</span>
                      </button>
                    )}
                  </div>
                ))}

                <div className="p-4 border-t border-gray-100 mt-2">
                  <button
                    id="mobile-nav-apply-btn"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onApplyNowClick();
                    }}
                    className="w-full flex justify-center items-center gap-2 bg-[#f15b24] hover:bg-[#d6471c] text-white py-3.5 rounded-xl text-sm font-semibold shadow-md transition-all active:scale-95 duration-200"
                  >
                    <span>Apply Now</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
