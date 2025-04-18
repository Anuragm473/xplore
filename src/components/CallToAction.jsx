import { motion } from 'framer-motion';
import { ArrowRight, Compass, Briefcase } from 'lucide-react';

export default function CallToAction() {
  // Design system constants for light mode
  const colors = {
    primary: '#F97316',    // Orange-500
    secondary: '#0D9488',  // Teal-600
    accent: '#D946EF',     // Fuchsia-500
    background: '#F8FAFC', // Slate-50
    text: '#0F172A'        // Slate-900
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    body: 'text-xl font-light leading-relaxed'
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-orange-400/30 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal-400/30 blur-xl"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Destination indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500/20 backdrop-blur-sm flex items-center justify-center border border-orange-500/30">
              <Briefcase className="w-7 h-7 text-orange-500" />
            </div>
          </motion.div>
          
          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${typography.h2} text-slate-900 mb-6`}
          >
            Ready to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Pack Your Bags</span>?
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className={`${typography.body} text-slate-600 mb-10`}
          >
            Let's create unforgettable memories together. Your dream adventure starts here.
          </motion.p>
          
          {/* CTA Button with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(249, 115, 22, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Planning Your Trip
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
              />
            </motion.button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <Compass className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-slate-700 text-sm font-medium">100% Customizable Trips</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-slate-700 text-sm font-medium">No Booking Fees</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}