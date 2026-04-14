import React from 'react';
import { MessageCircle, Laptop, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "You contact me",
      body: "Send me a WhatsApp message or email. I'll ask you 5 simple questions: business name, services you offer, your location, photos of your work, and color preference. That's all I need to get started.",
      icon: <MessageCircle size={20} className="text-brand-primary" />
    },
    {
      number: "02",
      title: "I build your site",
      body: "I design and build your complete 5-page website in 5–7 working days. Before it goes live, I send you a preview link so you can review and request any changes.",
      icon: <Laptop size={20} className="text-brand-primary" />
    },
    {
      number: "03",
      title: "You go live",
      body: "After your approval and final payment, your site goes live on your own domain. From that day, customers searching Google in your area can find and contact you directly.",
      icon: <Rocket size={20} className="text-brand-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="process" className="bg-[#F9FAFB] py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[.15em] uppercase mb-3 block">
            THE PROCESS
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Simple. Transparent. Fast.
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            From first message to live website — here's exactly what happens.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Optional connecting line behind cards on desktop */}
          <div className="hidden md:block absolute top-[60px] left-20 right-20 h-px bg-blue-100 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between relative z-10 hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <span className="text-6xl font-bold text-blue-100 block mb-2 font-serif tracking-tighter">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 border border-blue-100/50">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
