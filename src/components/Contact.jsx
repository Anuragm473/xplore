import { Clock, Mail, PhoneCall, MapPin, Send, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
  // Design system constants - updated for light mode
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#F8FAFC', // Slate-50 (light background)
    text: '#1E293B'        // Slate-800 (dark text)
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-2xl font-bold',
    body: 'text-lg font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-sky-50 to-slate-100 overflow-hidden" id="contact">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-1/4 left-20 w-48 h-48 rounded-full bg-amber-400/30 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/3 right-32 w-64 h-64 rounded-full bg-teal-400/30 blur-xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-6 bg-white/70 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-200">
            <Globe className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-600`}>WE'RE HERE TO HELP</span>
          </div>
          
          <h2 className={`${typography.h2} text-slate-800 mb-4`}>
            Get in <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`${typography.body} text-slate-600 max-w-2xl mx-auto`}
          >
            Have questions or ready to book? Reach out to our friendly team for personalized assistance.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className={`${typography.h3} text-slate-800 mb-6 flex items-center`}>
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                  <Send className="w-4 h-4 text-amber-600" />
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <PhoneCall className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Phone</p>
                    <p className="text-slate-600 group-hover:text-amber-600 transition-colors">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Email</p>
                    <p className="text-slate-600 group-hover:text-amber-600 transition-colors">info@xplore-travel.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <Clock className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Business Hours</p>
                    <p className="text-slate-600 group-hover:text-amber-600 transition-colors">Monday-Friday: 9AM-6PM EST</p>
                    <p className="text-slate-600 group-hover:text-amber-600 transition-colors">Saturday: 10AM-4PM EST</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg"
            >
              <h3 className={`${typography.h3} text-slate-800 mb-6 flex items-center`}>
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </span>
                Our Location
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl w-full h-48 overflow-hidden border-2 border-slate-200"
              >
                <img 
                  src="xplore.png" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-slate-700 text-sm">123 Travel Street, Suite 100</p>
                    <p className="text-slate-700 text-sm">Miami, FL 33101</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg h-full">
            <h3 className={`${typography.h3} text-slate-800 mb-8`}>Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="package" className="block text-slate-700 mb-2">Package of Interest</label>
                <select 
                  id="package" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700"
                >
                  <option value="" className="text-slate-400">Select a package</option>
                  <option value="paris" className="text-slate-700">Paris, France</option>
                  <option value="bali" className="text-slate-700">Bali, Indonesia</option>
                  <option value="tokyo" className="text-slate-700">Tokyo, Japan</option>
                  <option value="santorini" className="text-slate-700">Santorini, Greece</option>
                  <option value="grand-canyon" className="text-slate-700">Grand Canyon</option>
                  <option value="yellowstone" className="text-slate-700">Yellowstone Park</option>
                  <option value="new-york" className="text-slate-700">New York City</option>
                  <option value="miami" className="text-slate-700">Miami Beach</option>
                  <option value="custom" className="text-slate-700">Custom Package</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              
              {/* Visa Country Select Dropdown */}
              <div>
                <label htmlFor="visa-country" className="block text-slate-700 mb-2">Visa Services Required</label>
                <select 
                  id="visa-country" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700"
                >
                  <option value="" className="text-slate-400">Select visa services (if needed)</option>
                  <option value="usa" className="text-slate-700">USA - ₹3,000</option>
                  <option value="uk" className="text-slate-700">UK - ₹2,000</option>
                  <option value="schengen" className="text-slate-700">Schengen - ₹1,800</option>
                  <option value="canada" className="text-slate-700">Canada - ₹2,500</option>
                  <option value="australia" className="text-slate-700">Australia - ₹2,200</option>
                  <option value="japan" className="text-slate-700">Japan - ₹1,500</option>
                  <option value="singapore" className="text-slate-700">Singapore - ₹1,200</option>
                  <option value="dubai" className="text-slate-700">Dubai/UAE - ₹1,000</option>
                  <option value="thailand" className="text-slate-700">Thailand - ₹800</option>
                  <option value="other" className="text-slate-700">Other (please specify in message)</option>
                </select>
              </div>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 0 20px ${colors.primary}40`
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}