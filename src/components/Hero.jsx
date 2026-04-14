import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100svh] flex flex-col justify-center pt-16 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 md:py-20">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-green-50 text-green-700 text-xs font-medium px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 shadow-sm border border-green-100"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </div>
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1]"
          >
            <span className="font-bold block">I build websites</span>
            <span className="font-bold block">that get your business</span>
            <span className="font-bold text-brand-primary block relative inline-block mt-2">
              found online.
              <svg className="absolute w-full h-3 -bottom-1 lg:-bottom-2 left-0 text-brand-border/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-500 text-lg leading-relaxed mt-6 max-w-lg"
          >
            Plumbers, roofers, painters, and contractors — I build fast, mobile-ready websites in 5–7 days so your customers find YOU on Google, not your competitor.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <a 
              href="#projects" 
              className="bg-brand-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/25 active:scale-95"
            >
              See my work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-brand-primary text-brand-primary font-semibold px-8 py-4 rounded-xl hover:bg-brand-light transition-colors active:scale-95 bg-white"
            >
              Get free quote
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 flex items-center justify-start gap-6 sm:gap-10"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-brand-primary">5</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1 block font-medium">Pages per site</span>
            </div>
            
            <div className="w-px h-10 bg-gray-200"></div>
            
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-brand-primary">5–7</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1 block font-medium">Days to deliver</span>
            </div>
            
            <div className="w-px h-10 bg-gray-200"></div>
            
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-brand-primary">₦100k</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1 block font-medium">Starting price</span>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-sm mx-auto lg:max-w-md lg:ml-auto mt-12 lg:mt-0"
        >
          {/* Photo Placeholder Square */}
          <div className="w-full aspect-square bg-gray-100 rounded-3xl flex flex-col items-center justify-center border border-gray-200 shadow-inner group overflow-hidden">
             <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 border border-gray-300 shadow-sm flex items-center justify-center text-gray-400" aria-label="Olabanji photo here">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
             </div>
             <img src="banji1.jpg" alt="main-profile-picture" />
          </div>

          {/* Floating Overlay Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
            </div>
            <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
              Open to new projects
            </span>
          </motion.div>

          {/* Decorative blur element behind */}
          <div className="absolute top-[20%] -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl z-[-1] pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
