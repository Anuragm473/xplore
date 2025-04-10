import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ArrowRight, Compass, Star, ChevronDown } from 'lucide-react';

export default function Banner({ currentDestination, mousePosition, setCurrentDestination }) {
  const featuredDestinations = [
    { 
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc",
      tagline: "Where azure meets architecture",
      highlights: ["Sunset Views", "Whitewashed Villages", "Volcanic Beaches"],
      rating: 4.9
    },
    { 
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      tagline: "Tradition in every corner",
      highlights: ["Ancient Temples", "Cherry Blossoms", "Tea Ceremonies"],
      rating: 4.8
    },
    { 
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      tagline: "Island of the Gods",
      highlights: ["Jungle Retreats", "Sacred Temples", "Vibrant Culture"],
      rating: 4.7
    },
    { 
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260",
      tagline: "Lost city in the clouds",
      highlights: ["Incan Ruins", "Mountain Treks", "Mystical History"],
      rating: 4.9
    }
  ];

  // Enhanced design system
  const colors = {
    primary: '#F59E0B',
    secondary: '#0F766E',
    accent: '#EC4899',
    background: '#1E293B',
    text: '#F8FAFC'
  };

  const typography = {
    h1: 'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-semibold',
    body: 'text-lg md:text-xl font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  return (
    <section className="relative h-screen overflow-hidden bg-slate-800">
      {/* Enhanced Parallax Background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          key={`${currentDestination}-bg`}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${featuredDestinations[currentDestination].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(
              ${mousePosition.x / 30}px, 
              ${mousePosition.y / 30}px
            ) scale(1.15)`,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${featuredDestinations[currentDestination].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            transform: `translate(
              ${mousePosition.x / 15}px, 
              ${mousePosition.y / 15}px
            ) scale(1.2)`,
            mixBlendMode: 'overlay'
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-6">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Destination Indicator with rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center">
              <Compass className="w-6 h-6 text-amber-500" />
            </div>
            <div className="flex items-center gap-2">
              <span className={`${typography.body} text-slate-100`}>
                Currently Exploring
              </span>
              <div className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                <span className={`${typography.small} text-slate-50`}>
                  {featuredDestinations[currentDestination].rating}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with enhanced animation */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          >
            <h1 className={`${typography.h1} text-slate-50 mb-4 leading-tight`}>
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
              className="flex items-center mb-6"
            >
              <span className="text-amber-400 mr-2">✈</span>
              <span className={`${typography.body} text-slate-300`}>
                {featuredDestinations[currentDestination].name.split(',')[1]}
              </span>
            </motion.div>
          </motion.div>

          {/* Tagline with highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <p className={`${typography.body} text-slate-300 mb-6 max-w-xl`}>
              {featuredDestinations[currentDestination].tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              {featuredDestinations[currentDestination].highlights.map((highlight, index) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700/50"
                >
                  <span className="text-amber-400 mr-2 text-sm">•</span>
                  <span className={`${typography.small} text-slate-200`}>{highlight}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${colors.primary}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full font-semibold group"
            >
              <span>Start Exploration</span>
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${colors.accent}40`,
                backgroundColor: `${colors.accent}20`
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-300/20 text-slate-50 rounded-full backdrop-blur-sm flex items-center gap-2"
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

      {/* Destination Navigation with improved styling */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-3"
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
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  currentDestination === index 
                    ? 'bg-amber-500 text-slate-900 font-medium shadow-lg shadow-amber-500/30' 
                    : 'bg-slate-900/30 text-slate-300 hover:bg-slate-900/50 backdrop-blur-sm'
                }`}
                onClick={() => setCurrentDestination(index)}
              >
                <MapPin className={`w-5 h-5 mr-2 ${
                  currentDestination === index ? 'text-slate-900' : 'text-amber-500'
                }`} />
                {dest.name.split(',')[0]}
                {currentDestination === index && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 w-2 h-2 bg-slate-900 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-slate-300 mb-1 flex flex-col items-center"
          >
            <ChevronDown className="w-6 h-6" />
            <span className={`${typography.small} mt-1`}>Explore more</span>
          </motion.div>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5 }}
        className="absolute top-1/4 right-20 w-32 h-32 rounded-full bg-amber-400/20 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-1/3 left-40 w-40 h-40 rounded-full bg-teal-400/20 blur-xl"
      />
    </section>
  )
}