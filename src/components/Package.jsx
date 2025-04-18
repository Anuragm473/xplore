import React, { useEffect } from 'react';
import { Calendar, Star, ChevronRight, Heart, ArrowRight, ChevronLeft, MapPin, Compass,Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './Image';

export default function Package({ activeTab, setActiveTab, packages, activeSlide, favorites, setActiveSlide, nextSlide, prevSlide, toggleFavorite }) {

  // Enhanced design system matching the banner
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#1E293B', // Slate-800
    text: '#F8FAFC'        // Slate-50
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    body: 'text-lg md:text-xl font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100" id="packages">
      <div className="container mx-auto px-4 md:px-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
            <Compass className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-700`}>World-Class Experiences</span>
          </div>
          <h2 className={`${typography.h2} text-slate-800 mb-4`}>
            Discover <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Exclusive</span> Tour Packages
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${typography.body} text-slate-600 max-w-2xl mx-auto`}
          >
            Handcrafted itineraries designed to provide you with unforgettable experiences and memories that last a lifetime.
          </motion.p>
        </motion.div>
        
        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex rounded-full p-1 bg-white shadow-md border border-slate-200 w-full md:w-auto"
          >
            <div className="flex flex-row md:flex-nowrap overflow-x-auto w-full no-scrollbar">
              {['international', 'local', 'fixesDeparture'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center flex-shrink-0 ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab === 'international' && <Globe className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  {tab === 'local' && <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  {tab === 'fixesDeparture' && <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  <span className="text-sm md:text-base">
                    {tab === 'fixesDeparture' ? 'Fixed Departures' : tab.split(/(?=[A-Z])/).join(' ')}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
  
        {/* Add this to your global CSS */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        {/* Enhanced Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages[activeTab].map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleFavorite(pkg.id)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-full shadow-md"
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    favorites.includes(pkg.id) 
                      ? 'fill-amber-500 text-amber-500' 
                      : 'text-slate-400 group-hover:text-amber-400'
                  }`}
                />
              </motion.button>
              
              <Image favorites={favorites} toggleFavorite={toggleFavorite} pkg={pkg} />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{pkg.destination}</h3>
                  {pkg.rating && (
                    <div className="flex items-center bg-amber-50 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                      <span className={`${typography.small} text-slate-700`}>{pkg.rating}</span>
                    </div>
                  )}
                </div>
                
                <p className={`${typography.small} text-slate-600 mb-4 line-clamp-2`}>{pkg.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.highlights?.slice(0, 3).map((highlight) => (
                    <span 
                      key={highlight}
                      className="inline-block px-3 py-1 bg-blue-50 text-slate-600 rounded-full text-xs border border-slate-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                    <span className={`${typography.small}`}>{pkg.duration}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`${typography.small} text-slate-500`}>from</span>
                    <span className="font-bold text-amber-500 text-xl">{pkg.price}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 0 15px ${colors.primary}40`
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced View All Button */}
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 20px ${colors.secondary}40`
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center shadow-lg shadow-teal-500/20"
          >
            View All Packages 
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
  
        {/* Floating decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1 }}
          className="absolute left-20 top-1/3 w-48 h-48 rounded-full bg-amber-300/30 blur-xl -z-10"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.2 }}
          className="absolute right-32 bottom-1/4 w-64 h-64 rounded-full bg-teal-300/30 blur-xl -z-10"
        />
      </div>
    </section>
  )
}