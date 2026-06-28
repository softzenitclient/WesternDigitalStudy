import React from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Inbox,
  Heart,
  Instagram,
} from "lucide-react";
import { useSheetData } from "../context/SheetDataContext";

export default function Footer({ onNavigate }) {
  const { addressDetails } = useSheetData();

  const dynamicContact = addressDetails?.[0] || {};

  const addressText = dynamicContact.addressDetails;
  const phoneText = dynamicContact.contact;
  const emailText = dynamicContact.email;

  return (
    <footer id="app-footer-node" className="bg-[#1e224e] text-gray-300">
      {/* Upper footer column groups */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Block */}
        <div className="space-y-5">
          <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
            <Logo className="h-10" showText={false} />
          </div>
          <div className="space-y-1">
            <h3 className="text-white font-serif font-bold text-lg">
              Western Study
            </h3>
            <p className="text-xs text-gray-400">
              Better Education Develops The Nation
            </p>
          </div>

          <div className="flex items-center gap-3.5">
            <a
              href="https://www.facebook.com/WesternStudy2019"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f15b24] hover:text-white flex items-center justify-center transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.instagram.com/westernstudy"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f15b24] hover:text-white flex items-center justify-center transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.youtube.com/@westernstudybd"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f15b24] hover:text-white flex items-center justify-center transition-colors"
            >
              <Youtube size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-extrabold text-sm uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f15b24]">
            Country Desks
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <button
                onClick={() => onNavigate("universities?country=Australia")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Study in Australia
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("universities?country=Canada")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Study in Canada
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("universities?country=New Zealand")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Study in New Zealand
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("universities?country=UK")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Study in United Kingdom
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("universities?country=USA")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Study in United States
              </button>
            </li>
          </ul>
        </div>

        {/* Dynamic Pages */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-extrabold text-sm uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f15b24]">
            Services
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <button
                onClick={() => onNavigate("service")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Student Profile Counselling
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("service")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                University Shortlisting
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("service")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Admission SOP/LOM Help
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("service")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Visa File Documentation Pack
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("service")}
                className="hover:text-[#f15b24] transition-colors cursor-pointer text-left"
              >
                Visa Simulation Mock Sessions
              </button>
            </li>
          </ul>
        </div>

        {/* Contact coordinates */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-extrabold text-sm uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#f15b24]">
            Head Office
          </h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex gap-2.5">
              <MapPin size={15} className="text-[#f15b24] flex-shrink-0" />
              <span>{addressText}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={15} className="text-[#f15b24] flex-shrink-0" />
              <span>{phoneText?.replace(/"/g, "").trim()}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={15} className="text-[#f15b24] flex-shrink-0" />
              <span>{emailText}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-footer banner */}
      <div className="bg-[#171a3d] py-6 px-4 md:px-12 text-center text-xs text-gray-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} <strong>Western Study</strong>.
            All Rights Reserved. Govt Lic. RL-1950.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Developed by</span>
            <span>
              <a href="https://softzenit.com/">SoftzenIT</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
