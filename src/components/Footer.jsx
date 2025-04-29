import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  // Design system constants
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#1E293B', // Slate-800
    text: '#F8FAFC'        // Slate-50
  };

  const typography = {
    h3: 'text-2xl font-bold',
    h4: 'text-lg font-bold',
    body: 'text-base font-light',
    small: 'text-sm font-medium'
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 pt-20 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-amber-400/20 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.3 }}
        className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-teal-400/20 blur-xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                <img className="w-5 h-5 text-amber-500" src="../logo.png"/>
              </div>
              <h3 className={`${typography.h3} text-slate-50`}>Xplore World</h3>
            </div>
            <p className={`${typography.body} text-slate-400 mb-6`}>Travel beyond boundaries and discover the extraordinary.</p>
            
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social, index) => (
                <motion.a
                  key={social}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -3, backgroundColor: colors.primary }}
                  href={social=="instagram"?"https://www.instagram.com/xploreworld.in":social=="facebook"?"https://www.facebook.com/xploreworld.in/":"https://www.justdial.com/Thane/Xplore-World-Tours-and-Travels-Near-JANTA-DAIRY-Mira-Road-East/022PXX22-XX22-160503220003-L6P5_BZDET"}
                  className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center border border-slate-700/50 text-slate-300 hover:text-slate-900 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
                    {social === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>}
                    {social === 'instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                    {social === 'youtube' && (
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`${typography.h4} text-slate-50 mb-6 flex items-center`}>
              <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-2">
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Tour Packages', 'About Us', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                >
                  <a 
                    href={link === 'Tour Packages' ? '#packages' : link === 'Contact' ? '#contact' : '#'} 
                    className={`${typography.body} text-slate-400 hover:text-amber-400 transition-colors flex items-center`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`${typography.h4} text-slate-50 mb-6 flex items-center`}>
              <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-2">
                <MapPin className="w-4 h-4 text-amber-500" />
              </span>
              Destinations
            </h4>
            <ul className="space-y-3">
              {['Europe', 'Asia', 'Oceania', 'North America'].map((destination, index) => (
                <motion.li
                  key={destination}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.05) }}
                >
                  <a 
                    href="#" 
                    className={`${typography.body} text-slate-400 hover:text-amber-400 transition-colors flex items-center`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {destination}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={`${typography.h4} text-slate-50 mb-6 flex items-center`}>
              <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-2">
                <Mail className="w-4 h-4 text-amber-500" />
              </span>
              Newsletter
            </h4>
            <p className={`${typography.body} text-slate-400 mb-4`}>Subscribe to get special offers and travel tips.</p>
            
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex group"
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-5 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-l-xl border border-slate-700/50 w-full focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-slate-500"
              />
              <motion.button
                whileHover={{ backgroundColor: colors.primary }}
                className="px-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-amber-500 hover:text-slate-900 rounded-r-xl transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 text-amber-500 mr-2" />
                <span className={`${typography.small}`}>+91 9819475680</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 text-amber-500 mr-2" />
                <span className={`${typography.small}`}>info@xploreworld.in</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${typography.small} text-slate-500 mb-4 md:mb-0`}>
              &copy; {new Date().getFullYear()} Xplore World. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Privacy Policy</a>
              <a href="#" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Terms of Service</a>
              <a href="#" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}