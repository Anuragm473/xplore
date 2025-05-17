import React, { useEffect, useState } from 'react';
import { Calendar, Star, ChevronRight, Heart, ArrowRight, ChevronLeft, MapPin, Compass, Globe, Users, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from './Image';

export default function Package({ activeTab, setActiveTab, packages, activeSlide, favorites, setActiveSlide, nextSlide, prevSlide, toggleFavorite }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

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

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100 relative" id="packages">
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
        <div className="flex justify-center mb-8 md:mb-16 px-0 md:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex rounded-full p-1 bg-white shadow-md border border-slate-200 w-full md:w-auto"
          >
            <div className="flex justify-between w-full md:flex-nowrap md:overflow-x-auto md:no-scrollbar md:space-x-2">
              {['international', 'local', 'fixesDeparture'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center flex-grow ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab === 'international' && <Globe className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  {tab === 'local' && <MapPin className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  {tab === 'fixesDeparture' && <Calendar className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />}
                  <span className="text-xs md:text-base">
                    {tab === 'fixesDeparture' ? 'Fixed Departures' : tab === 'local' ? 'Domestic' : tab.split(/(?=[A-Z])/).join(' ')}
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
              
              {/* Fixed Departure Label */}
              {pkg.fixedDeparture && (
                <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  {pkg.fixedDeparture}
                </div>
              )}
              
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
                
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                      <span className={`${typography.small}`}>{pkg.duration}</span>
                    </div>
                    {pkg.pax && (
                      <div className="flex items-center text-slate-600">
                        <Users className="w-5 h-5 mr-2 text-teal-500" />
                        <span className={`${typography.small}`}>{pkg.pax} People Required</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`${typography.small} text-slate-500`}>from</span>
                    <span className="font-bold text-amber-500 text-xl">{pkg.price}</span>
                  </div>
                </div>

                {/* Valid Until Field */}
                {pkg?.valid && (
                  <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg mb-4">
                    <Clock className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-green-700">Valid until: {pkg.valid}</span>
                  </div>
                )}

                {/* Button Group */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(pkg)}
                    className="py-3 bg-white border border-amber-500 text-amber-500 font-medium rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-amber-50"
                  >
                    <span>View Details</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: `0 0 15px ${colors.primary}40` }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href='#contact'}
                    className="py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <>
            {/* Modal Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl overflow-hidden shadow-2xl z-50 w-11/12 md:w-4/5 lg:w-2/3 max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-slate-200 bg-white sticky top-0 z-10">
                <h3 className="text-2xl font-bold text-slate-800">{selectedPackage.destination}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="rounded-full p-2 hover:bg-slate-100"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </motion.button>
              </div>
              
              <div className="overflow-y-auto p-4 md:p-6 flex-grow">
                {selectedPackage.image && (
                  <div className="rounded-xl overflow-hidden h-64 md:h-96 mb-6 relative">
                    <img 
                      src={selectedPackage.image} 
                      alt={selectedPackage.destination} 
                      className="w-full h-full object-cover" 
                    />
                    {selectedPackage.fixedDeparture && (
                      <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
                        {selectedPackage.fixedDeparture}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center bg-amber-50 px-3 py-2 rounded-full">
                    <Calendar className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="font-medium text-slate-700">{selectedPackage.duration}</span>
                  </div>
                  
                  {selectedPackage.pax && (
                    <div className="flex items-center bg-teal-50 px-3 py-2 rounded-full">
                      <Users className="w-5 h-5 text-teal-500 mr-2" />
                      <span className="font-medium text-slate-700">{selectedPackage.pax} People Required</span>
                    </div>
                  )}
                  
                  {selectedPackage.rating && (
                    <div className="flex items-center bg-blue-50 px-3 py-2 rounded-full">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500 mr-2" />
                      <span className="font-medium text-slate-700">{selectedPackage.rating}</span>
                    </div>
                  )}
                  
                  {/* Valid Until Badge in Modal */}
                  {selectedPackage?.valid && (
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-slate-700">Valid until: {selectedPackage.valid}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center ml-auto">
                    <span className="text-slate-500 mr-2">from</span>
                    <span className="font-bold text-amber-500 text-2xl">{selectedPackage.price}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Description</h4>
                  {selectedPackage.description.split('\n').map((line, idx) => (
  <p key={idx} className={`${typography.small} text-slate-600 mb-1`}>
    {line}
  </p>
))}

                  
                  {selectedPackage.highlights && selectedPackage.highlights.length > 0 && (
                    <>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Highlights</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {selectedPackage.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start"
                          >
                            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-sm font-medium mr-3 mt-0.5">{idx + 1}</span>
                            <span className="text-slate-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {selectedPackage.itinerary && (
                    <>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Itinerary</h4>
                      <div className="space-y-4 mb-6">
                        {selectedPackage.itinerary.map((day, idx) => (
                          <div key={idx} className="border-l-2 border-amber-500 pl-4 pb-4">
                            <h5 className="font-semibold text-slate-800 mb-1">Day {idx + 1}: {day.title}</h5>
                            <p className="text-slate-600">{day.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {selectedPackage.includes && (
                    <>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">What's Included</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {selectedPackage.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {selectedPackage.excludes && (
                    <>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Not Included</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedPackage.excludes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-4 md:p-6 border-t border-slate-200 bg-white sticky bottom-0 z-10">
                <div className="flex flex-col md:flex-row justify-end gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg transition-all"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: `0 0 15px ${colors.primary}40` }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      closeModal();
                      window.location.href='#contact';
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                  >
                    <span>Book This Package</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}