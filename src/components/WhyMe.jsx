import React from 'react';
import { CheckCircle2, UserCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyMe = () => {
  const features = [
    {
      title: "Built with React + Tailwind",
      detail: "Not slow, bloated WordPress. Your site loads fast and looks modern on every device."
    },
    {
      title: "I know your customer's mindset",
      detail: "I understand what makes a homeowner pick up the phone — and I build your site around that."
    },
    {
      title: "You own everything",
      detail: "All code, all files, all logins — fully handed over to you. No lock-in, no dependency on me."
    },
    {
      title: "I'm easy to work with",
      detail: "No jargon. Clear updates. Quick replies. You'll always know where your project stands."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-me" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[.15em] uppercase mb-3 block">
            WHY BJTOMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Not just a website.<br className="hidden sm:block" /> 
            A customer-winning machine.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-lg">
            I don't build websites just to say I built one. I build websites that make your phone ring. Every decision — the layout, the speed, the WhatsApp button, the SEO — is made with one goal: getting customers to contact you.
          </p>

          {/* Feature Rows */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 space-y-5"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" fill="currentColor" stroke="white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-base mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.a 
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-brand-primary text-white font-semibold px-8 py-4 rounded-xl mt-10 inline-flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/20 active:scale-95 group"
          >
            Let's build your site 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE - Photo Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="rounded-2xl overflow-hidden bg-gray-100 h-[460px] w-full border border-gray-200 flex flex-col items-center justify-center relative z-10 shadow-inner group">
             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border border-gray-300 shadow-sm flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
               <UserCircle2 size={64} strokeWidth={1} />
             </div>
             <img src="banji3.jpeg" alt="banji-working-on-laptop" />
             <p className="text-gray-400/80 text-xs mt-2 text-center px-8">
               Add a photo of you working or a professional headshot
             </p>
          </div>
          
          {/* Decorative background blocks */}
          <div className="absolute top-10 -right-6 w-full h-[90%] bg-brand-light rounded-2xl z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-[8px] border-gray-50 rounded-full z-0 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyMe;
