import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Compass, Map, Globe, ShieldCheck, Award, Users, Star, Plane, CreditCard, Building2, Phone } from 'lucide-react';

export default function Why() {
  // Light mode color palette
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#FFFFFF', // White
    backgroundAlt: '#F8FAFC', // Slate-50
    text: '#0F172A'        // Slate-900
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-2xl font-bold',
    body: 'text-lg font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  const trustBadges = [
    { icon: <ShieldCheck className="w-6 h-6 text-amber-500" />, text: "Trusted Since 2016" },
    { icon: <Award className="w-6 h-6 text-amber-500" />, text: "Excellence in Service" },
    { icon: <Users className="w-6 h-6 text-amber-500" />, text: "Growing Client Base" },
    { icon: <Star className="w-6 h-6 text-amber-500" />, text: "High Customer Satisfaction" }
  ];

  const highlights = [
    { 
      icon: <Compass className="w-8 h-8 text-amber-500" />, 
      title: 'Personalized Service', 
      description: 'Every itinerary is crafted to match your preferences, ensuring a unique travel experience.',
      stat: "Tailored to Your Dreams"
    },
    { 
      icon: <Map className="w-8 h-8 text-amber-500" />, 
      title: 'Expert Guidance', 
      description: 'Our team of travel experts provides insider tips and 24/7 support throughout your journey.',
      stat: "Always There for You"
    },
    { 
      icon: <Plane className="w-8 h-8 text-amber-500" />, 
      title: 'Comprehensive Travel Solutions', 
      description: 'From flight bookings and visa assistance to hotel reservations and travel insurance.',
      stat: "End-to-End Service"
    }
  ];

  const services = [
    { text: "International & Domestic Tour Packages" },
    { text: "Flight Bookings" },
    { text: "Visa Assistance" },
    { text: "Hotel Reservations" },
    { text: "Sightseeing & Activities" },
    { text: "Travel Insurance" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-400/30 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-400/30 blur-xl"
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
          <div className="inline-flex items-center mb-6 bg-white/70 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-200 shadow-sm">
            <Globe className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-700`}>DISCOVER THE WORLD, YOUR WAY</span>
          </div>
          
          <h2 className={`${typography.h2} text-slate-900 mb-4`}>
            Why <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Choose</span> Xplore World
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`${typography.body} text-slate-700 max-w-3xl mx-auto`}
          >
            At Xplore World Tours & Travels, we believe that travel is more than just visiting places—it's about creating memories, embracing cultures, and discovering the world's wonders.
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
                className="flex items-center bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm"
              >
                {badge.icon}
                <span className={`${typography.small} text-slate-700 ml-2`}>{badge.text}</span>
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
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
                  {highlight.icon}
                </div>
                
                <h3 className={`${typography.h3} text-slate-800 mb-3`}>{highlight.title}</h3>
                <p className={`${typography.body} text-slate-600 mb-5`}>{highlight.description}</p>
                
                <div className="flex items-center">
                  <div className="w-8 h-px bg-amber-500 mr-3"></div>
                  <span className={`${typography.small} text-amber-500`}>{highlight.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Services section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-md mb-12"
        >
          <h3 className={`${typography.h3} text-slate-800 mb-6 text-center`}>Our Services</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center bg-amber-50 px-4 py-3 rounded-lg border border-amber-100"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  {index === 0 ? <Globe className="w-4 h-4 text-amber-500" /> : 
                   index === 1 ? <Plane className="w-4 h-4 text-amber-500" /> :
                   index === 2 ? <CreditCard className="w-4 h-4 text-amber-500" /> :
                   index === 3 ? <Building2 className="w-4 h-4 text-amber-500" /> :
                   index === 4 ? <Camera className="w-4 h-4 text-amber-500" /> :
                   <ShieldCheck className="w-4 h-4 text-amber-500" />}
                </div>
                <span className={`${typography.small} text-slate-700`}>{service.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Company vision section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-50 to-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-6 md:mb-0 md:mr-8 border border-amber-200">
              <Award className="w-10 h-10 text-amber-500" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className={`${typography.h3} text-slate-800 mb-3`}>Our Vision</h3>
              <p className={`${typography.body} text-slate-700 mb-5 max-w-2xl`}>
                To be a leading travel agency in India, recognized for innovation, reliability, and exceptional customer service, while promoting sustainable and responsible tourism.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <span className={`${typography.small} text-slate-700`}>✓ Seamless experiences</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <span className={`${typography.small} text-slate-700`}>✓ Cultural sensitivity</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <span className={`${typography.small} text-slate-700`}>✓ Transparency & integrity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}