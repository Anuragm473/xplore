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
              {[
                {name: 'facebook', url: 'https://www.facebook.com/xploreworld.in/'},
                {name: 'justdial', url: 'https://www.justdial.com/Thane/Xplore-World-Tours-and-Travels-Near-JANTA-DAIRY-Mira-Road-East/022PXX22-XX22-160503220003-L6P5_BZDET'},
                {name: 'instagram', url: 'https://www.instagram.com/xploreworld.in'},
                {name: 'google', url: 'https://www.google.com/search?q=xplore+world'}
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -3, backgroundColor: colors.primary }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center border border-slate-700/50 text-slate-300 hover:text-slate-900 transition-all"
                >
                  <span className="sr-only">{social.name}</span>
                    {social.name === 'facebook' && <>
                    <img className='rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rZEE_yb1EbJtSEfO_eitvz6rwIsKgGXqxyfLzKC3GA&s" alt="" />
                    </>}
                    {social.name === 'justdial' && (
                      <>
                        <img className='rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LXU2UrpmPdj5GU2GdfrKibuisSGjw83zbr5X252aJA&s" alt="" />
                      </>
                    )}
                    {social.name === 'instagram' && (
                      <>
                        <img className='rounded-xl' src="data:image/jpeg;base64,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" alt="" />
                      </>
                    )}
                    {social.name === 'google' && (
                      <>
                        <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png?20230822192911"/>
                      </>
                    )}
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    target="_blank"
                    rel="noopener noreferrer"
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
              <a href="#" target="_blank" rel="noopener noreferrer" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Privacy Policy</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Terms of Service</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={`${typography.small} text-slate-500 hover:text-amber-400 transition-colors`}>Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}