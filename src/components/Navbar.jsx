import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center bg-white">
        
        {/* LEFT — Logo */}
        <a 
          href="#home" 
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-bold text-brand-primary text-xl">Bj</span>
          <span className="font-normal text-gray-400 text-xl">toms</span>
        </a>

        {/* CENTER — Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT — CTA & Availability (desktop + mobile CTA) */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </div>
            <span className="text-xs font-medium text-gray-500">Available for projects</span>
          </div>
          
          <a 
            href="#contact"
            className="bg-brand-primary text-white text-sm font-medium px-5 py-2 rounded-lg ml-4 hover:bg-brand-dark transition-colors active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* MOBILE — Hamburger */}
        <div className="md:hidden flex items-center gap-4">
           {/* Mobile availability dot - just simple implementation for mobile view balance */}
           <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE — Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-gray-100 bg-white overflow-hidden shadow-sm"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-6 text-sm font-medium text-gray-600 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="p-6 pt-4">
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-primary text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
