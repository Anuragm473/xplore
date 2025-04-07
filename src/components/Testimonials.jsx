import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react';

export default function Testimonials({testimonials,currentTestimonial}) {


  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our <span className="text-orange-500">Travelers Say</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Real experiences from travelers who discovered the world with Xplore.</p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={currentTestimonial}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">"{testimonials[currentTestimonial].text}"</p>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
