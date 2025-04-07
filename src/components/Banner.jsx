import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Calendar, Star, Users, ChevronDown, ChevronRight,Heart, ArrowRight, PhoneCall, Mail, Clock, CheckCircle, Compass, Camera, Map, Menu, X, Search, User, ChevronLeft } from 'lucide-react';

export default function Banner({currentDestination,mousePosition}) {
    const featuredDestinations = [
        { 
          name: "Santorini, Greece", 
          image: "Santorini.jpg",
          tagline: "Where azure meets architecture",
          description: "Iconic whitewashed buildings perched on volcanic cliffs"
        },
        { 
          name: "Kyoto, Japan", 
          image: "tokyo.jpg",
          tagline: "Tradition in every corner",
          description: "Ancient temples and breathtaking cherry blossoms"
        },
        { 
          name: "Bali, Indonesia", 
          image: "bali.webp",
          tagline: "Island of the Gods",
          description: "Lush rice terraces and spiritual sanctuaries"
        },
        { 
          name: "Machu Picchu, Peru", 
          image: "paris.jpg",
          tagline: "Lost city in the clouds",
          description: "Ancient Incan marvel nestled in the Andes"
        }
      ];
  return (
    <section className="relative h-screen overflow-hidden">
        {/* Background image with overlay gradient */}
        <motion.div 
          key={currentDestination}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={featuredDestinations[currentDestination].image} 
            alt={featuredDestinations[currentDestination].name} 
            className="w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x / 80}px, ${mousePosition.y / 80}px) scale(1.1)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          {/* Enhanced gradient overlay with more vibrant colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-teal-900/50 to-indigo-900/80"></div>
          
          {/* Dynamic color accent overlay based on destination */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-teal-600 mix-blend-overlay opacity-40"
          ></motion.div>
        </motion.div>

        {/* Animated weather elements to enhance the travel feeling */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated clouds */}
          <motion.div 
            animate={{ 
              x: ['-5%', '105%'],
            }} 
            transition={{ 
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-24 left-0 w-32 h-16 bg-white opacity-40 rounded-full blur-xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: ['-10%', '110%'],
            }} 
            transition={{ 
              duration: 90,
              repeat: Infinity,
              ease: "linear",
              delay: 20
            }}
            className="absolute top-48 left-0 w-48 h-20 bg-white opacity-30 rounded-full blur-xl"
          ></motion.div>
        </div>

        {/* 3D Globe animation - enhanced with better positioning */}
        <div className="absolute -right-20 -bottom-40 md:-bottom-24 lg:bottom-0 w-full md:w-1/2 h-full pointer-events-none opacity-40">
          <motion.div 
            animate={{ 
              rotateY: [0, 360],
              rotateX: [5, -5, 5]
            }} 
            transition={{ 
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative w-full h-full"
          >
            <Globe className="absolute w-full h-full text-teal-400" strokeWidth={0.5} />
          </motion.div>
        </div>

        {/* Animated location pins */}
        <motion.div 
          className="absolute left-1/4 top-1/3 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        <motion.div 
          className="absolute right-1/3 bottom-1/4 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        <motion.div 
          className="absolute left-1/2 top-1/2 w-4 h-4"
          animate={{ 
            y: [0, -15, 0], 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 2.5
          }}
        >
          <MapPin className="w-8 h-8 text-amber-500 drop-shadow-lg" fill="#F59E0B" />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl mt-16">
            {/* Animated destination tag with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3 bg-amber-500 text-white px-6 py-2 rounded-full font-medium text-sm backdrop-blur-sm shadow-lg"
            >
              <motion.span
                key={currentDestination}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                {featuredDestinations[currentDestination].name}
              </motion.span>
            </motion.div>

            {/* Main title with animated text reveal - enhanced typography */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Discover the world, 
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-amber-400"
                >
                  one Xplore at a time
                </motion.span>
              </h1>
            </motion.div>

            {/* Destination-specific tagline */}
            <motion.p
              key={`tagline-${currentDestination}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl text-amber-300 mb-2 italic font-light"
            >
              "{featuredDestinations[currentDestination].tagline}"
            </motion.p>

            {/* Subtitle with animated reveal - improved description */}
            <motion.p 
              key={`desc-${currentDestination}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl"
            >
              {featuredDestinations[currentDestination].description}
            </motion.p>

            {/* Animated stat counters with improved styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="flex items-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  className="w-12 h-12 bg-teal-500/30 backdrop-blur-lg rounded-lg flex items-center justify-center mr-3 border border-teal-400/30"
                >
                  <Globe className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div>
                  <motion.p 
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2 }}
                    className="text-2xl font-bold text-white"
                  >
                    50+ Destinations
                  </motion.p>
                  <p className="text-teal-200 text-sm">Around the world</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                  className="w-12 h-12 bg-teal-500/30 backdrop-blur-lg rounded-lg flex items-center justify-center mr-3 border border-teal-400/30"
                >
                  <Users className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div>
                  <motion.p 
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="text-2xl font-bold text-white"
                  >
                    10,000+ Travelers
                  </motion.p>
                  <p className="text-teal-200 text-sm">Satisfied customers</p>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons with enhanced hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-500 text-white rounded-full font-medium transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center"
              >
                Explore Packages
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-teal-400 text-white rounded-full font-medium transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Destination indicators with enhanced styling */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {featuredDestinations.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`h-2 rounded-full transition-all ${
                currentDestination === index ? 'bg-amber-500 w-16' : 'bg-white/50 w-8'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll indicator with improved styling */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white"
        >
          <p className="text-sm mb-2 text-teal-200">Scroll to explore</p>
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        
        {/* Enhanced floating 3D elements */}
        <div className="hidden md:block">
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-500/20 backdrop-blur-xl rounded-full mix-blend-overlay"
          />
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-amber-500/30 backdrop-blur-xl rounded-full mix-blend-overlay"
          />
        </div>
      </section>
  )
}
