import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState(null);
    const faqs = [
        { question: 'How do I book a tour package?', answer: 'Booking is simple! Browse our packages, select your preferred one, click "Book Now", fill in your details, and complete the payment process. You\'ll receive a confirmation email with all details.' },
        { question: 'What is your cancellation policy?', answer: 'We offer free cancellation up to 30 days before your trip. Cancellations made 15-29 days prior receive a 50% refund. Cancellations less than 15 days before departure are non-refundable.' },
        { question: 'Are flights included in the packages?', answer: 'International packages include round-trip flights from major cities. Local packages do not include flights unless specifically mentioned in the package details.' },
        { question: 'Do you offer customized tour packages?', answer: 'Yes! We specialize in creating custom itineraries. Contact us through the form or call us directly to discuss your dream vacation and we\'ll design a personalized experience.' }
      ];
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked <span className="text-orange-500">Questions</span></h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Get answers to common questions about our tours and booking process.</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between font-medium"
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? <ChevronDown className="w-5 h-5 text-orange-500" /> : <ChevronRight className="w-5 h-5 text-orange-500" />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
