import React, { useState } from 'react';
import { MessageCircle, Mail, Globe, DownloadCloud } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    status: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim() || !formData.business || !formData.status) return false;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please fill out all fields correctly.',
        confirmButtonColor: '#3b82f6',
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xdklqkde', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your message. I’ll get back to you soon!',
          confirmButtonColor: '#3b82f6',
        });
        setFormData({ name: '', phone: '', email: '', business: '', status: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again or email me directly.',
        confirmButtonColor: '#3b82f6',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F9FAFB] py-24">
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
            GET IN TOUCH
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to get your business online?
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Fill the form or reach me directly — I respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN - Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/2349020525342" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-green transition-colors">
                <MessageCircle size={20} className="text-accent-green group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">WhatsApp</span>
                <span className="text-sm font-semibold text-gray-900 block mb-1">+234 902 052 5342</span>
                <span className="text-xs text-gray-400 block">Fastest way to reach me</span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:emmanuelojo291@gmail.com" 
              className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors">
                <Mail size={20} className="text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">Email</span>
                <span className="text-sm font-semibold text-gray-900 block mb-1">emmanuelojo291@gmail.com</span>
                <span className="text-xs text-gray-400 block">I reply within 2 hours</span>
              </div>
            </a>

            {/* Portfolio Card */}
            <a 
              href="https://banji-three.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors">
                <Globe size={20} className="text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">Portfolio</span>
                <span className="text-sm font-semibold text-gray-900 block mb-1">banji-three.vercel.app</span>
                <span className="text-xs text-gray-400 block">See all my work here</span>
              </div>
            </a>

            {/* Document Download Card */}
            <a 
              href="/services.docx" 
              download="Banji_Services.docx"
              className="bg-brand-primary border border-brand-primary rounded-xl p-4 flex items-start gap-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                <DownloadCloud size={20} className="text-white group-hover:text-brand-primary transition-colors" />
              </div>
              <div>
                <span className="text-xs text-brand-light block mb-0.5">Brochure</span>
                <span className="text-sm font-semibold text-white block mb-1">Download My Services</span>
                <span className="text-xs text-brand-light block">Word Document (Click to save)</span>
              </div>
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="0902 XXX XXXX" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400" />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400" />
              </div>

              {/* Row 3: Business Type Select */}
              <div>
                <label htmlFor="business" className="text-sm font-medium text-gray-700 mb-1.5 block">What type of business do you have?</label>
                <select id="business" name="business" value={formData.business} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer">
                  <option value="" disabled>Select business type</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Painting">Painting</option>
                  <option value="Electrical">Electrical</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="General Contracting">General Contracting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Row 4: Current Website Status Select */}
              <div>
                <label htmlFor="status" className="text-sm font-medium text-gray-700 mb-1.5 block">Do you currently have a website?</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer">
                  <option value="" disabled>Select status</option>
                  <option value="none">No, I have nothing yet</option>
                  <option value="social_only">I have a Facebook/Instagram page only</option>
                  <option value="redesign">I have an old website that needs redesign</option>
                </select>
              </div>

              {/* Row 5: Message Textarea */}
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1.5 block">Tell me about your business</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  required 
                  placeholder="Where are you based? What services do you offer? Any specific things you want on your site?" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSending}
                className="mt-2 bg-brand-primary text-white font-semibold py-4 rounded-xl w-full hover:bg-brand-dark transition-colors active:scale-[0.98] shadow-lg shadow-brand-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending message...' : "Send message — let's get started"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
