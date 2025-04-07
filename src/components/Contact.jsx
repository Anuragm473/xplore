import { Clock, Mail, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in <span className="text-orange-500">Touch</span></h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Have questions or ready to book? Reach out to our friendly team.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <PhoneCall className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">info@xplore-travel.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-gray-600">Monday-Friday: 9AM-6PM EST</p>
                          <p className="text-gray-600">Saturday: 10AM-4PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Our Location</h3>
                    <div className="bg-gray-200 rounded-xl w-full h-48 overflow-hidden">
                      <img src="xplore.png" alt="Map location" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="package" className="block text-gray-700 mb-2">Package of Interest</label>
                      <select 
                        id="package" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      >
                        <option value="">Select a package</option>
                        <option value="paris">Paris, France</option>
                        <option value="bali">Bali, Indonesia</option>
                        <option value="tokyo">Tokyo, Japan</option>
                        <option value="santorini">Santorini, Greece</option>
                        <option value="grand-canyon">Grand Canyon</option>
                        <option value="yellowstone">Yellowstone Park</option>
                        <option value="new-york">New York City</option>
                        <option value="miami">Miami Beach</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                        placeholder="Tell us about your travel plans..."
                      ></textarea>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}
