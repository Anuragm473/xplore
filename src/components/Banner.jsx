import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ArrowRight, Compass } from 'lucide-react';

export default function Banner({ currentDestination, mousePosition, setCurrentDestination }) {
  const featuredDestinations = [
    { 
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc",
      tagline: "Where azure meets architecture",
    },
    { 
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      tagline: "Tradition in every corner",
    },
    { 
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      tagline: "Island of the Gods",
    },
    { 
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260",
      tagline: "Lost city in the clouds",
    }
  ];

  // Design system constants
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    background: '#1E293B', // Slate-800
    text: '#F8FAFC'        // Slate-50
  };

  const typography = {
    h1: 'text-5xl md:text-7xl font-bold',
    h2: 'text-3xl md:text-4xl font-semibold',
    body: 'text-lg md:text-xl font-light'
  };

  return (
    <section className="relative h-screen overflow-hidden bg-slate-800">
      {/* Parallax Background */}
      <motion.div 
        key={currentDestination}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${featuredDestinations[currentDestination].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(
            ${mousePosition.x / 40}px, 
            ${mousePosition.y / 40}px
          ) scale(1.1)`,
        }}
        transition={{ type: 'tween', duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-6">
        <div className="max-w-2xl">
          {/* Destination Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex items-center"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center mr-4">
              <Compass className="w-6 h-6 text-amber-500" />
            </div>
            <span className={`${typography.body} text-slate-100`}>
              Currently Exploring
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`${typography.h1} text-slate-50 mb-6`}
          >
            Discover{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {featuredDestinations[currentDestination].name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${typography.body} text-slate-300 mb-12 max-w-xl`}
          >
            {featuredDestinations[currentDestination].tagline}
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-amber-500 text-slate-900 rounded-full font-semibold"
            >
              Start Exploration
              <ArrowRight className="ml-3 w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-300/20 text-slate-50 rounded-full backdrop-blur-sm"
            >
              View Gallery
            </motion.button>
          </div>
        </div>
      </div>

      {/* Destination Navigation */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4">
            {featuredDestinations.map((dest, index) => (
              <motion.button
                key={dest.name}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-6 py-3 rounded-full backdrop-blur-sm transition-colors ${
                  currentDestination === index 
                    ? 'bg-amber-500/90 text-slate-900' 
                    : 'bg-slate-900/30 text-slate-300 hover:bg-slate-900/50'
                }`}
                onClick={() => setCurrentDestination(index)}
              >
                <MapPin className={`w-5 h-5 mr-2 ${
                  currentDestination === index ? 'text-slate-900' : 'text-amber-500'
                }`} />
                {dest.name.split(',')[0]}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        animate={{ y: [0, 20], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-8 h-14 rounded-3xl border-2 border-slate-300/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-slate-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}