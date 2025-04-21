import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Shield, Calendar, Phone } from 'lucide-react';

export default function Banner() {
  const [destination, setDestination] = useState('Hidden Treasures');
  const destinations = ['Hidden Treasures', 'Mountain Escapes', 'Coastal Paradises', 'Desert Adventures'];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setDestination(destinations[(currentIndex + 1) % destinations.length]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-blue-50 pt-12 sm:pt-20 lg:pt-32 text-gray-800 py-10 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium mb-2">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  Discover New Adventures
                </span>
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Explore The World's</span>
              <div className="block text-center lg:inline-block lg:text-left relative h-12 sm:h-16 md:h-20 mt-2 sm:mt-4 lg:mt-0 lg:ml-3">
                <div className="absolute left-0 right-0 lg:left-0 lg:right-auto w-full lg:w-auto mx-auto">
                  {destinations.map((dest, index) => (
                    <div 
                      key={index}
                      className="absolute left-0 right-0 lg:left-0 lg:right-auto mx-auto lg:mx-0 transition-all duration-500 text-blue-600 whitespace-nowrap"
                      style={{ 
                        opacity: dest === destination ? 1 : 0,
                        transform: dest === destination ? 'translateY(0)' : 'translateY(10px)'
                      }}
                    >
                      {dest}
                    </div>
                  ))}
                </div>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Embark on unforgettable journeys to breathtaking destinations. Let us guide you through extraordinary experiences tailored to your adventurous spirit.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold rounded-lg transition duration-300 shadow-md flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                Browse Tours
              </button>
              <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-50 text-blue-600 text-sm sm:text-base font-bold rounded-lg transition duration-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                View Destinations
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center gap-2">
                <div className="text-orange-500 bg-orange-100 p-1 sm:p-2 rounded-full">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">24/7 Support</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-orange-500 bg-orange-100 p-1 sm:p-2 rounded-full">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">Secure Booking</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-orange-500 bg-orange-100 p-1 sm:p-2 rounded-full">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">Flexible Scheduling</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-10 pb-2">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">100+</p>
                <p className="text-xs sm:text-sm text-gray-600">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</p>
                <p className="text-xs sm:text-sm text-gray-600">Destinations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">10K+</p>
                <p className="text-xs sm:text-sm text-gray-600">Happy Travelers</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Travel Cards Stack - Improved responsiveness */}
          <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="relative w-72 sm:w-80 md:w-96 h-96 sm:h-108 md:h-112 mx-auto lg:mx-0">
              {/* Background glow effect - enhanced */}
              <div className="absolute w-full h-full rounded-3xl bg-gradient-to-br from-blue-300/40 to-orange-300/40 blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Animated floating circles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-blue-400/30 animate-pulse"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDuration: `${Math.random() * 4 + 2}s`,
                    animationDelay: `${Math.random()}s`
                  }}
                />
              ))}
              
              {/* Back Card */}
              <div className="absolute w-56 sm:w-64 md:w-72 h-72 sm:h-80 md:h-88 bg-white rounded-2xl shadow-lg transform rotate-12 translate-x-6 border border-gray-200 backdrop-blur-sm hidden xs:block transition-all duration-300 hover:rotate-6 hover:translate-x-2 hover:scale-105">
                <div className="h-32 sm:h-40 md:h-48 rounded-t-2xl bg-gradient-to-r from-orange-400 to-pink-400 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-sm sm:text-base md:text-lg">Desert Safari</div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-orange-500 font-bold text-sm sm:text-base md:text-lg">$1,299</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-orange-500 mx-px"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 md:mt-5 space-y-1 md:space-y-2 hidden sm:block">
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>5 Days / 4 Nights</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Middle Card */}
              <div className="absolute w-56 sm:w-64 md:w-72 h-72 sm:h-80 md:h-88 bg-white rounded-2xl shadow-lg transform -rotate-6 -translate-x-3 border border-gray-200 backdrop-blur-sm hidden sm:block transition-all duration-300 hover:rotate-2 hover:translate-x-0 hover:scale-105">
                <div className="h-32 sm:h-40 md:h-48 rounded-t-2xl bg-gradient-to-r from-blue-400 to-cyan-400 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-sm sm:text-base md:text-lg">Island Escape</div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-blue-500 font-bold text-sm sm:text-base md:text-lg">$1,899</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-blue-500 mx-px"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 md:mt-5 space-y-1 md:space-y-2 hidden sm:block">
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>8 Days / 7 Nights</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Card - Enhanced with hover effects and more details */}
              <div className="absolute w-56 sm:w-64 md:w-72 h-72 sm:h-80 md:h-88 bg-white rounded-2xl shadow-xl border border-blue-300 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-blue-400">
                <div className="h-32 sm:h-40 md:h-48 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden relative">
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{
                      animationDuration: '2s',
                      backgroundSize: '200% 100%',
                      backgroundPosition: '-100% 0'
                    }}></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/90 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-sm sm:text-base md:text-lg">Mountain Trek</div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-800 font-bold text-sm sm:text-base md:text-lg">$2,499</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-blue-500 mx-px"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2 md:space-y-3">
                    <div className="flex items-center text-xs md:text-sm text-gray-600">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>7 Days / 6 Nights</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-gray-600">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>Alps, Switzerland</span>
                    </div>
                  </div>
                  
                  <div className="pt-1 sm:pt-2 md:pt-3">
                    <div className="w-full h-1 md:h-2 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-1 md:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                      <span>75% Booked</span>
                      <span className="text-blue-600 font-medium">Book Now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Enhanced and more responsive */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              
              {/* New floating element */}
              <div className="absolute top-1/2 -right-4 md:-right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-lg animate-pulse" style={{ animationDuration: '2s' }}>
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}