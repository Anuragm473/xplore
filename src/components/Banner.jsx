import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ArrowRight, Compass, Star, ChevronDown } from 'lucide-react';

export default function Banner({ currentDestination, mousePosition, setCurrentDestination }) {
  const featuredDestinations = [
    { 
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc",
      mobileImage: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Where azure meets architecture",
      highlights: ["Sunset Views", "Whitewashed Villages", "Volcanic Beaches"],
      rating: 4.9
    },
    { 
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      mobileImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Tradition in every corner",
      highlights: ["Ancient Temples", "Cherry Blossoms", "Tea Ceremonies"],
      rating: 4.8
    },
    { 
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      mobileImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Island of the Gods",
      highlights: ["Jungle Retreats", "Sacred Temples", "Vibrant Culture"],
      rating: 4.7
    },
    { 
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260",
      mobileImage: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tagline: "Lost city in the clouds",
      highlights: ["Incan Ruins", "Mountain Treks", "Mystical History"],
      rating: 4.9
    }
  ];

  // Enhanced responsive design system
  const colors = {
    primary: '#F59E0B',
    secondary: '#0F766E',
    accent: '#EC4899',
    background: '#1E293B',
    text: '#F8FAFC'
  };

  const typography = {
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-semibold',
    body: 'text-base sm:text-lg md:text-xl font-light leading-relaxed',
    small: 'text-xs sm:text-sm font-medium'
  };

  return (
    <section className="relative h-screen md:h-[90vh] lg:h-screen overflow-hidden bg-slate-800">
      {/* Responsive Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          key={`${currentDestination}-bg`}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${
              window.innerWidth < 768 
                ? featuredDestinations[currentDestination].mobileImage 
                : featuredDestinations[currentDestination].image
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // transform: window.innerWidth > 768 
            //   ? `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px) scale(1.15)`
            //   : 'none',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
        {window.innerWidth > 768 && (
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${featuredDestinations[currentDestination].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              // transform: `translate(
              //   ${mousePosition.x / 15}px, 
              //   ${mousePosition.y / 15}px
              // ) scale(1.2)`,
              mixBlendMode: 'overlay'
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-300/60 via-slate-700/30 to-slate-800/60" />
<div className="absolute inset-0 bg-gradient-to-r from-slate-700/40 to-transparent" />


      </div>

      {/* Content Container with responsive padding */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full">
          {/* Destination Indicator - Stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className={`${typography.small} text-slate-100`}>
                Currently Exploring
              </span>
              <div className="flex items-center bg-slate-800/50 px-2 sm:px-3 py-1 rounded-full">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400 mr-1" />
                <span className={`${typography.small} text-slate-50`}>
                  {featuredDestinations[currentDestination].rating}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading - Adjusted for mobile */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          >
            <h1 className={`${typography.h1} text-slate-50 mb-3 md:mb-4 leading-tight`}>
              <span className="inline-block">
                Discover{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {featuredDestinations[currentDestination].name.split(',')[0]}
                </span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center mb-4 md:mb-6"
            >
              <span className="text-amber-400 mr-2 text-lg">✈</span>
              <span className={`${typography.body} text-slate-300`}>
                {featuredDestinations[currentDestination].name.split(',')[1]}
              </span>
            </motion.div>
          </motion.div>

          {/* Tagline with highlights - Adjusted for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <p className={`${typography.body} text-slate-300 mb-4 md:mb-6 max-w-xl`}>
              {featuredDestinations[currentDestination].tagline}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {featuredDestinations[currentDestination].highlights.map((highlight, index) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700/50"
                >
                  <span className="text-amber-400 mr-1 md:mr-2 text-xs md:text-sm">•</span>
                  <span className={`${typography.small} text-slate-200`}>{highlight}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons - Stacked on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${colors.primary}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full font-semibold group text-sm md:text-base"
            >
              <span>Start Exploration</span>
              <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${colors.accent}40`,
                backgroundColor: `${colors.accent}20`
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-slate-300/20 text-slate-50 rounded-full backdrop-blur-sm gap-2 text-sm md:text-base"
            >
              <span>View Gallery</span>
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      delay: i * 0.1 
                    }}
                    className="w-1 h-1 bg-slate-50 rounded-full mx-0.5"
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Responsive Destination Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 overflow-x-auto px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-start md:justify-center gap-2 md:gap-3 pb-2 md:pb-0"
          >
            {featuredDestinations.map((dest, index) => (
              <motion.button
                key={dest.name}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: currentDestination === index 
                    ? colors.primary 
                    : `${colors.primary}20`
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                  currentDestination === index 
                    ? 'bg-amber-500 text-slate-900 font-medium shadow-lg shadow-amber-500/30' 
                    : 'bg-slate-900/30 text-slate-300 hover:bg-slate-900/50 backdrop-blur-sm'
                }`}
                onClick={() => setCurrentDestination(index)}
              >
                <MapPin className={`w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 ${
                  currentDestination === index ? 'text-slate-900' : 'text-amber-500'
                }`} />
                <span className="whitespace-nowrap">
                  {dest.name.split(',')[0]}
                </span>
                {currentDestination === index && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-1 md:ml-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-900 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Responsive Scrolling Indicator - Hidden on smallest screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="hidden xs:flex absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-slate-300 mb-1 flex flex-col items-center"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            <span className={`${typography.small} mt-1`}>Explore more</span>
          </motion.div>
          <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>
      </motion.div>

      {/* Floating decorative elements - Hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5 }}
        className="hidden md:block absolute top-1/4 right-20 w-32 h-32 rounded-full bg-amber-400/20 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.7 }}
        className="hidden md:block absolute bottom-1/3 left-40 w-40 h-40 rounded-full bg-teal-400/20 blur-xl"
      />
    </section>
  );
}