import React from 'react';
import { EVENTS } from '../data';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventsSection({ onApplyNowClick }) {
  return (
    <section id="events-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-sm font-bold text-[#f15b24] uppercase tracking-wider block">
              Upcoming Workshops
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-[#2c3164] tracking-tight">
              Study Abroad Assessment Events
            </h2>
            <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed max-w-2xl">
              Meet direct International Recruitment Officers face-to-face inside Western Study branches, present your documents and get immediate confirmation.
            </p>
          </div>
          <button
            id="view-all-events-btn"
            onClick={onApplyNowClick}
            className="flex items-center gap-1.5 text-sm font-bold text-[#2c3164] hover:text-[#f15b24] transition-colors bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm hover:shadow active:scale-95 duration-200 cursor-pointer"
          >
            <span>Reserve Session Pass</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Dynamic cards row layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              id={`event-card-${event.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Event Cover Image */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pin */}
                  <span className="absolute top-4 left-4 bg-[#f15b24] text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider shadow-md">
                    {event.category}
                  </span>
                </div>

                {/* Event Contents */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-orange-600 font-extrabold tracking-wide uppercase">
                      {event.university}
                    </span>
                    <h3 className="text-lg font-bold text-[#2c3164] tracking-tight hover:text-[#f15b24] transition-colors leading-snug line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  <hr className="border-gray-100" />

                  {/* Metadata coordinates */}
                  <div className="space-y-2.5 text-gray-500 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-[#f15b24]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-[#f15b24]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-[#f15b24] mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action register trigger */}
              <div className="p-6 pt-0">
                <button
                  id={`register-event-btn-${event.id}`}
                  onClick={onApplyNowClick}
                  className="w-full bg-orange-50 hover:bg-[#f15b24] text-[#f15b24] hover:text-white py-3 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer text-center block"
                >
                  Book Free Admission Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
