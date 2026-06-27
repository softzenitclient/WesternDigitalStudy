import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users } from 'lucide-react';

export default function AboutHero() {
  return (
    <section id="about-hero-section" className="pt-32 pb-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div 
          className="relative min-h-[300px] md:min-h-[450px] rounded-[36px] overflow-hidden flex flex-col justify-end p-8 md:p-16 text-white shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(16, 24, 40, 0.85) 0%, rgba(16, 24, 40, 0.3) 60%, rgba(16, 40, 75, 0.15) 100%), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')`,
            backgroundPosition: 'center 60%',
            backgroundSize: 'cover'
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>Who We Are</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans leading-[1.1]"
            >
              Shaping Global <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#f15b24] to-orange-300">
                Education Pathways
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-200 text-sm md:text-base max-w-xl font-light leading-relaxed"
            >
              Discover the story of Western Study. Founded with a vision to build simple, transparent, and error-free global admission channels for ambitious students worldwide.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
