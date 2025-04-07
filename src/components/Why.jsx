import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Compass, Map } from 'lucide-react';

export default function Why() {
    const highlights = [
        { icon: <Compass className="w-12 h-12 text-teal-500" />, title: 'Expert Local Guides', description: 'Our guides are locals with years of experience and intimate knowledge of each destination.' },
        { icon: <Map className="w-12 h-12 text-teal-500" />, title: 'All-Inclusive Trips', description: 'All accommodations, local transport, and selected meals are included in our package prices.' },
        { icon: <Camera className="w-12 h-12 text-teal-500" />, title: 'Unforgettable Experiences', description: 'Curated activities that go beyond typical tourist attractions for authentic cultural immersion.' }
      ];
  return (
    <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose <span className="text-teal-600">Xplore</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Experience travel like never before with our premium services and thoughtful attention to detail.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-600">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
