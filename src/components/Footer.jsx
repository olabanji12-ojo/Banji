import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* TOP SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1 - Brand */}
        <div>
          <span className="text-white font-bold text-xl">Bjtoms</span>
          <p className="text-gray-400 text-sm mt-2 max-w-xs leading-relaxed">
            Web developer for home service businesses.
          </p>
          <div className="text-xs text-green-400 flex items-center gap-2 mt-4 font-medium">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            Open to new projects
          </div>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Quick links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">My Work</a></li>
            <li><a href="#process" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+234 902 052 5342</li>
            <li>emmanuelojo291@gmail.com</li>
            <li>bjtoms.vercel.app</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © 2025 Bjtoms — Olabanji. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
