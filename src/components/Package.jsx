import React from 'react'
import { Calendar, Star, ChevronRight,Heart, ArrowRight,ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Package({activeTab,packages,activeSlide,favorites}) {
  return (
    <section className="py-16 bg-gray-50" id="packages">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Discover Our <span className="text-teal-600">Tour Packages</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Handcrafted itineraries designed to provide you with unforgettable experiences and memories that last a lifetime.</p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-gray-100 shadow-sm">
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === 'international' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              International
            </button>
            <button
              onClick={() => setActiveTab('local')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === 'local' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Local
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages[activeTab].map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden h-56">
                {/* Image slider */}
                <img 
                  src={`/api/placeholder/400/320`} 
                  alt={`${pkg.destination} - ${activeSlide[pkg.id] + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                
                {/* Navigation arrows */}
                <button 
                  onClick={() => prevSlide(pkg.id)} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow-md hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => nextSlide(pkg.id)} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow-md hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                  {activeSlide[pkg.id] + 1}/{pkg.images.length}
                </div>
                
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center shadow-sm">
                  <Star className="w-4 h-4 text-amber-500 mr-1 fill-current" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
                
                {/* Favorite button */}
                <button 
                  onClick={() => toggleFavorite(pkg.id)}
                  className={`absolute top-3 left-3 p-2 rounded-full ${favorites.includes(pkg.id) ? 'bg-red-500 text-white' : 'bg-white bg-opacity-90 text-gray-600'} shadow-sm transition-colors`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(pkg.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{pkg.destination}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">from</span>
                    <span className="font-bold text-teal-600 text-lg">{pkg.price}</span>
                  </div>
                </div>
                
                <button className="w-full py-2.5 bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-600 font-medium rounded-lg transition-all duration-300 flex items-center justify-center group">
                  Book Now <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center shadow-sm"
          >
            View All Packages <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
