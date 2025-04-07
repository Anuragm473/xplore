import React, { useEffect } from 'react';
import { Calendar, Star, ChevronRight,Heart, ArrowRight,ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './Image';

export default function Package({activeTab,setActiveTab,packages,activeSlide,favorites,setActiveSlide,nextSlide,prevSlide,toggleFavorite}) {

      
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
            <button
              onClick={() => setActiveTab('fixesDeparture')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === 'fixesDeparture' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Fixes Departure
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
              <Image favorites={favorites} toggleFavorite={toggleFavorite} pkg={pkg}/> 
                
              
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
