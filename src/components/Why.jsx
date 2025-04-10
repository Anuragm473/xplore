import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Compass, Map, Globe, ShieldCheck, Award, Users, Star } from 'lucide-react';

export default function Why() {
  // Design system constants matching previous components
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#1E293B', // Slate-800
    text: '#F8FAFC'        // Slate-50
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-2xl font-bold',
    body: 'text-lg font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  const trustBadges = [
    { icon: <ShieldCheck className="w-6 h-6 text-amber-500" />, text: "Verified Safety Standards" },
    { icon: <Award className="w-6 h-6 text-amber-500" />, text: "Award-Winning Service" },
    { icon: <Users className="w-6 h-6 text-amber-500" />, text: "50,000+ Satisfied Travelers" },
    { icon: <Star className="w-6 h-6 text-amber-500" />, text: "4.9/5 Average Rating" }
  ];

  const highlights = [
    { 
      icon: <Compass className="w-8 h-8 text-amber-500" />, 
      title: 'Expert Local Guides', 
      description: 'Our guides are locals with years of experience and intimate knowledge of each destination.',
      stat: "200+ Certified Guides"
    },
    { 
      icon: <Map className="w-8 h-8 text-amber-500" />, 
      title: 'All-Inclusive Trips', 
      description: 'All accommodations, local transport, and selected meals are included in our package prices.',
      stat: "95% Satisfaction Rate"
    },
    { 
      icon: <Camera className="w-8 h-8 text-amber-500" />, 
      title: 'Unforgettable Experiences', 
      description: 'Curated activities that go beyond typical tourist attractions for authentic cultural immersion.',
      stat: "500+ Unique Experiences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-400/20 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-400/20 blur-xl"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-6 bg-slate-800/50 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-700/50">
            <Globe className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-300`}>TRUSTED WORLDWIDE</span>
          </div>
          
          <h2 className={`${typography.h2} text-slate-50 mb-4`}>
            Why <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Choose</span> Xplore World
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`${typography.body} text-slate-300 max-w-3xl mx-auto`}
          >
            Experience travel like never before with our premium services and thoughtful attention to detail, backed by industry-leading guarantees.
          </motion.p>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center bg-slate-800/50 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-700/50"
              >
                {badge.icon}
                <span className={`${typography.small} text-slate-300 ml-2`}>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Enhanced highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-slate-900/50 flex items-center justify-center mb-6 border border-slate-700/50">
                  {highlight.icon}
                </div>
                
                <h3 className={`${typography.h3} text-slate-50 mb-3`}>{highlight.title}</h3>
                <p className={`${typography.body} text-slate-400 mb-5`}>{highlight.description}</p>
                
                <div className="flex items-center">
                  <div className="w-8 h-px bg-amber-500 mr-3"></div>
                  <span className={`${typography.small} text-amber-500`}>{highlight.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust guarantee section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 md:mb-0 md:mr-8 border border-amber-500/20">
              <ShieldCheck className="w-10 h-10 text-amber-500" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className={`${typography.h3} text-slate-50 mb-3`}>Our Traveler's Guarantee</h3>
              <p className={`${typography.body} text-slate-300 mb-5 max-w-2xl`}>
                We're so confident in our experiences that we offer a 100% satisfaction guarantee. If you're not completely happy with your trip, we'll make it right or refund your money.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center bg-slate-900/50 px-4 py-2 rounded-full">
                  <span className={`${typography.small} text-slate-300`}>✓ No hidden fees</span>
                </div>
                <div className="flex items-center bg-slate-900/50 px-4 py-2 rounded-full">
                  <span className={`${typography.small} text-slate-300`}>✓ Flexible cancellation</span>
                </div>
                <div className="flex items-center bg-slate-900/50 px-4 py-2 rounded-full">
                  <span className={`${typography.small} text-slate-300`}>✓ 24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}