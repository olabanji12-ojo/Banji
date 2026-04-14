import React from 'react';
import { FileText, Smartphone, MessageCircle, Search, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const cards = [
    {
      icon: <FileText size={22} className="text-brand-primary" />,
      title: "5-Page Website",
      desc: "Home, Services, About, Gallery, and Contact — every page your business needs to look professional online.",
      bgClass: "bg-brand-light"
    },
    {
      icon: <Smartphone size={22} className="text-brand-primary" />,
      title: "Mobile Optimized",
      desc: "Fully responsive design. Looks perfect on every phone, tablet, and desktop. Most customers browse on mobile.",
      bgClass: "bg-brand-light"
    },
    {
      icon: <MessageCircle size={22} className="text-accent-green" />,
      title: "WhatsApp Button",
      desc: "A floating WhatsApp button on every page so customers can message you in one tap, anytime.",
      bgClass: "bg-green-50"
    },
    {
      icon: <Search size={22} className="text-brand-primary" />,
      title: "Basic SEO Setup",
      desc: "Page titles, meta descriptions, and Google-friendly structure so your site shows up in local searches.",
      bgClass: "bg-brand-light"
    },
    {
      icon: <MapPin size={22} className="text-brand-primary" />,
      title: "Google Maps Embed",
      desc: "Your service area or business location shown directly on your contact page — customers know you're local.",
      bgClass: "bg-brand-light"
    },
    {
      icon: <Clock size={22} className="text-brand-primary" />,
      title: "5–7 Day Delivery",
      desc: "Fast turnaround without cutting corners. You get a preview link before anything goes live.",
      bgClass: "bg-brand-light"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="bg-[#F9FAFB] py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[.15em] uppercase mb-3 block">
            What I Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            One package. Everything included.
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            No hidden fees. No surprises. Delivered in 5–7 working days.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${card.bgClass}`}>
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
