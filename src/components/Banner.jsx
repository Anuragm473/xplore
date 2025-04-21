import React, { useState, useEffect, useRef } from 'react';
import { Globe, MapPin, Shield, Calendar, Phone, Star, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Banner({packages}) {
  const [destination, setDestination] = useState('Hidden Treasures');
  const destinations = ['Hidden Treasures', 'Mountain Escapes', 'Coastal Paradises', 'Desert Adventures'];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Package Card Stack State
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const cardStackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Packages data
  const allPackages = [
    ...packages.international,
    ...packages.local
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setDestination(destinations[(currentIndex + 1) % destinations.length]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  // Check if device is mobile/tablet
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);
  
  // Handle drag start
  const handleDragStart = (e) => {
    if (!isMobile) return;
    
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
    setDragStartX(clientX);
  };
  
  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging || !isMobile) return;
    
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStartX;
    setDragOffset(offset);
  };
  
  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging || !isMobile) return;
    
    setIsDragging(false);
    
    // If dragged more than 100px, change card
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentPackageIndex > 0) {
        // Dragged right - show previous card
        setCurrentPackageIndex(currentPackageIndex - 1);
      } else if (dragOffset < 0 && currentPackageIndex < allPackages.length - 1) {
        // Dragged left - show next card
        setCurrentPackageIndex(currentPackageIndex + 1);
      }
    }
    
    setDragOffset(0);
  };
  
  // Go to specific card (for desktop)
  const goToCard = (index) => {
    if (!isMobile) {
      setCurrentPackageIndex(index);
    }
  };
  
  // Navigate to prev/next card
  const navigatePrev = () => {
    if (currentPackageIndex > 0) {
      setCurrentPackageIndex(currentPackageIndex - 1);
    }
  };
  
  const navigateNext = () => {
    if (currentPackageIndex < allPackages.length - 1) {
      setCurrentPackageIndex(currentPackageIndex + 1);
    }
  };

  return (
    <div className="bg-blue-50 pt-24 sm:pt-16 lg:pt-20 text-gray-800 py-10 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
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
          <div className="lg:flex-1 space-y-4 sm:space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium mb-2">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  Discover New Adventures
                </span>
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-0">
              <span className="block">Explore The World's</span>
              <div className="block text-center lg:inline-block lg:text-left relative h-10 sm:h-16 md:h-20 mt-2 sm:mt-4 lg:mt-0 lg:ml-0">
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
            
            <p className="text-base mb-0 sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
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
          
          {/* Package Card Stack - Fixed positioning and images */}
          <div className="lg:flex-1 flex-col flex gap-4 items-center justify-center w-full max-w-md mx-auto mt-8 lg:mt-0">
            <div 
             className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full max-w-[13rem] sm:max-w-sm"
              ref={cardStackRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {/* Card Stack */}
              {allPackages.map((pkg, index) => {
                // Calculate card position
                const isActive = index === currentPackageIndex;
                const isPrev = index === currentPackageIndex - 1 || index === currentPackageIndex - 2;
                const isNext = index === currentPackageIndex + 1 || index === currentPackageIndex + 2;
                
                // Only render visible cards (current, 2 before, 2 after)
                if (!isActive && !isPrev && !isNext) return null;
                
                let cardStyle = {};
                let zIndex = 0;
                
                if (isActive) {
                  zIndex = 30;
                  cardStyle = {
                    transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0) rotate(0deg)',
                    opacity: 1
                  };
                } else if (index === currentPackageIndex - 1) {
                  zIndex = 20;
                  cardStyle = {
                    transform: 'translateX(-10%) rotate(-5deg)',
                    opacity: 0.9
                  };
                } else if (index === currentPackageIndex - 2) {
                  zIndex = 10;
                  cardStyle = {
                    transform: 'translateX(-15%) rotate(-10deg)',
                    opacity: 0.7
                  };
                } else if (index === currentPackageIndex + 1) {
                  zIndex = 20;
                  cardStyle = {
                    transform: 'translateX(10%) rotate(4deg)',
                    opacity: 0.9
                  };
                } else if (index === currentPackageIndex + 2) {
                  zIndex = 10;
                  cardStyle = {
                    transform: 'translateX(15%) rotate(8deg)',
                    opacity: 0.7
                  };
                }

                // Generate placeholder image URL for the card
                const imageUrl = `/api/placeholder/400/320`;
                
                return (
                  <div 
                    key={pkg.id}
                    className="absolute top-0 left-0 right-0 mx-auto w-full sm:w-4/5 md:w-full max-w-xs bg-white rounded-xl sm:rounded-2xl border border-blue-200 overflow-hidden transition-all duration-300 shadow-none lg:shadow-xl"
                    style={{
                      ...cardStyle,
                      zIndex,
                      cursor: isMobile ? 'grab' : 'pointer'
                    }}
                    onClick={() => goToCard(index)}
                  >
                    <div className="h-32 sm:h-36 md:h-40 lg:h-48 overflow-hidden relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(../${pkg.images[0]})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                      <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs sm:text-sm font-medium">
                        {pkg.destination.split(',')[0]}
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">{pkg.destination}</h3>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-xs sm:text-sm font-medium">{pkg.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">{pkg.description}</p>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="flex items-center text-xs sm:text-sm text-gray-700">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-500" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-700">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-500" />
                          <span>{pkg.destination.split(',')[0]}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-base sm:text-lg font-bold text-blue-600">{pkg.price}</div>
                        <button className="px-2 sm:px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium rounded-lg transition duration-300">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Navigation buttons */}
              <button 
                className="absolute top-1/2 left-0 z-40 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-none sm:shadow-md transition-all duration-300 transform -translate-y-1/2 -translate-x-1/2"
                onClick={navigatePrev}
                disabled={currentPackageIndex === 0}
                style={{ opacity: currentPackageIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              
              <button 
                className="absolute top-1/2 right-0 z-40 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-none sm:shadow-md transition-all duration-300 transform -translate-y-1/2 translate-x-1/2"
                onClick={navigateNext}
                disabled={currentPackageIndex === allPackages.length - 1}
                style={{ opacity: currentPackageIndex === allPackages.length - 1 ? 0.5 : 1 }}
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              
              {/* Small indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1 mb-2">
                {allPackages.slice(0, Math.min(5, allPackages.length)).map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentPackageIndex % 5 ? 'w-3 sm:w-4 bg-blue-500' : 'w-1 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-3 sm:mt-4 text-xs text-gray-500">
              {isMobile ? "Swipe to explore packages" : "Click to view package details"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}