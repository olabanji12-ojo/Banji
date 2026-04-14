import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="bg-white py-24 border-t border-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[.15em] uppercase mb-3 block">
            MY WORK
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Sample projects
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Built to show exactly what your business could look like online.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1 - Painters */}
          <motion.div 
            variants={itemVariants}
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white group"
          >
            {/* Header Area */}
            <div className="h-52 bg-blue-50 rounded-t-2xl flex items-end justify-center overflow-hidden">
              <img 
                src="/painting_picture.png" 
                alt="Painting project screenshot" 
                className="w-[85%] h-auto max-h-[140%] object-cover object-top rounded-t-xl transform translate-y-6 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] border border-b-0 border-gray-200" 
              />
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  Painting company
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                ProFinish Painters Lagos
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                5-page site with services, gallery, testimonials, and floating WhatsApp button. Built with React + Tailwind.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Tailwind</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Vercel</span>
              </div>

              <div className="mt-auto">
                <a href="https://painting-website-alpha.vercel.app/" className="text-brand-primary text-sm font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View live site <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Roofers */}
          <motion.div 
            variants={itemVariants}
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white group"
          >
            {/* Header Area */}
            <div className="h-52 bg-green-50 rounded-t-2xl flex items-end justify-center overflow-hidden">
              <img 
                src="/roofing_picture2.png" 
                alt="Roofing project screenshot" 
                className="w-[85%] h-auto max-h-[140%] object-cover object-top rounded-t-xl transform translate-y-6 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] border border-b-0 border-gray-200" 
              />
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Roofing company
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                ProRoof Nigeria
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                5-page site with project gallery, service areas, emergency contact section, and mobile-first design.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Tailwind</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Vercel</span>
              </div>

              <div className="mt-auto">
                <a href="https://roofing-website-one.vercel.app/" className="text-brand-primary text-sm font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View live site <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
