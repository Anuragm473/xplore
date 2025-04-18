import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Globe, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials({ testimonials, currentTestimonial, setCurrentTestimonial }) {
  // Updated light mode color palette
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#0369A1',     // Sky-600
    background: '#F8FAFC', // Slate-50
    text: '#0F172A'        // Slate-900
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    body: 'text-lg font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-slate-100 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute top-1/4 left-20 w-48 h-48 rounded-full bg-amber-400/30 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/3 right-32 w-64 h-64 rounded-full bg-sky-400/30 blur-xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-6 bg-white/70 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-200">
            <Globe className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-700`}>TRAVELER STORIES</span>
          </div>
          
          <h2 className={`${typography.h2} text-slate-900 mb-4`}>
            What Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Travelers</span> Say
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`${typography.body} text-slate-600 max-w-2xl mx-auto`}
          >
            Real experiences from travelers who discovered the world with Xplore World.
          </motion.p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            key={currentTestimonial}
            transition={{ duration: 0.5 }}
            className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 shadow-lg"
          >
            {/* Quote icon */}
            <Quote className="absolute top-8 left-8 w-10 h-10 text-amber-400/30" />
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* User image */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400"
                >
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-500/10" />
                </motion.div>
              </div>
              
              {/* Testimonial content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{testimonials[currentTestimonial].name}</h3>
                    <div className="flex items-center text-slate-500">
                      <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                      <span>{testimonials[currentTestimonial].location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center md:ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300 fill-slate-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-slate-700 font-medium">
                      {testimonials[currentTestimonial].rating}.0
                    </span>
                  </div>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${typography.body} text-slate-600 italic relative pl-6 border-l-2 border-amber-400`}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>
                
                {/* Destination visited */}
                {testimonials[currentTestimonial].destination && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className={`${typography.small} text-slate-500`}>Visited:</span>
                    {testimonials[currentTestimonial].destination.split(',').map((dest, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-sky-700 rounded-full text-xs border border-blue-100"
                      >
                        {dest.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(
                (currentTestimonial - 1 + testimonials.length) % testimonials.length
              )}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-slate-200 text-amber-500 hover:bg-amber-50"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-amber-500' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(
                (currentTestimonial + 1) % testimonials.length
              )}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-slate-200 text-amber-500 hover:bg-amber-50"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Trust badges at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200">
            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={`${typography.small} text-slate-700`}>Verified Reviews</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200">
            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={`${typography.small} text-slate-700`}>Real Travelers</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200">
            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={`${typography.small} text-slate-700`}>Unedited Stories</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}