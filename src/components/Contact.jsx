import { Clock, Mail, PhoneCall, MapPin, Send, Globe } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Contact({packages}) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    packageOfInterest: '',
    message: '',
    visaType: ''
  });
  
  // Form status state
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  // Design system constants - updated for light mode
  const colors = {
    primary: '#F59E0B',    // Amber-500
    secondary: '#0F766E',  // Teal-600
    accent: '#EC4899',     // Pink-500
    background: '#F8FAFC', // Slate-50 (light background)
    text: '#1E293B'        // Slate-800 (dark text)
  };

  const typography = {
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-2xl font-bold',
    body: 'text-lg font-light leading-relaxed',
    small: 'text-sm font-medium'
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const response = await fetch('https://xplore-backend-alpha.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          packageOfInterest: formData.packageOfInterest,
          message: formData.message,
          visaType: formData.visaType
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        packageOfInterest: '',
        message: '',
        visaType: ''
      });
      
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        error: error.message || 'Failed to submit the form. Please try again.'
      });
    }
  };

  useEffect(() => {
    // Check if map is already initialized
    if (document.getElementById('map') && !document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([19.287835, 72.8561723], 13); // Mumbai coords

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Add marker
      L.marker([19.287835, 72.8561723]).addTo(map)
        .bindPopup('Xplore World Tours and Travels')
        .openPopup();
    }
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-sky-50 to-slate-100 overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-48 h-48 rounded-full bg-amber-400/30 blur-xl opacity-10" />
      <div className="absolute bottom-1/3 right-32 w-64 h-64 rounded-full bg-teal-400/30 blur-xl opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6 bg-white/70 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-200">
            <Globe className="w-5 h-5 text-amber-500 mr-2" />
            <span className={`${typography.small} text-slate-600`}>WE'RE HERE TO HELP</span>
          </div>
          
          <h2 className={`${typography.h2} text-slate-800 mb-4`}>
            Get in <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className={`${typography.body} text-slate-600 max-w-2xl mx-auto`}>
            Have questions or ready to book? Reach out to our friendly team for personalized assistance.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className={`${typography.h3} text-slate-800 mb-6 flex items-center`}>
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                  <Send className="w-4 h-4 text-amber-600" />
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <PhoneCall className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Phone</p>
                    <a 
                      href="tel:+919819475680" 
                      className="text-slate-600 group-hover:text-amber-600 transition-colors inline-flex items-center"
                    >
                      +91 9819475680
                      <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Click to call</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Email</p>
                    <a 
                      href="mailto:info@xploreworld.in" 
                      className="text-slate-600 group-hover:text-amber-600 transition-colors inline-flex items-center"
                    >
                      info@xploreworld.in
                      <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Click to email</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 border border-slate-200 group-hover:bg-amber-500/10 transition-colors">
                    <Clock className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Business Hours</p>
                    <p className="text-slate-600 group-hover:text-amber-600 transition-colors">Monday-Sunday: 10AM-9PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location with Leaflet Map */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className={`${typography.h3} text-slate-800 mb-6 flex items-center`}>
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </span>
                Our Location
              </h3>
              
              <div className="relative rounded-xl w-full h-48 overflow-hidden border-2 border-slate-200">
                {/* Leaflet map container */}
                <div id="map" className="w-full h-full"></div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-slate-700 text-sm">Xplore World Tours and Travels</p>
                    <a href="tel:+919819475680" className="text-slate-700 text-sm hover:text-amber-600 transition-colors">+91 9819475680</a>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mt-4">
                B-202, Gulistan Society, Building No.5, Pooja Nagar, Mira Road East, Thane-401107, Maharashtra.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg h-full">
              <h3 className={`${typography.h3} text-slate-800 mb-8`}>Send Us a Message</h3>
              
              {status.success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {status.error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="packageOfInterest" className="block text-slate-700 mb-2">Package of Interest</label>
                  <select 
                    id="packageOfInterest" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700"
                    value={formData.packageOfInterest}
                    onChange={handleChange}
                  >
                    <option value="" className="text-slate-400">Select a package</option>
                    {[...packages.international,...packages.local,...packages.fixesDeparture].map(el=><option value={el.destination} className="text-slate-700">{el.destination}</option>)}
                    
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                    placeholder="Tell us about your travel plans..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                {/* Simplified Visa Type Options */}
                <div>
                  <label htmlFor="visaType" className="block text-slate-700 mb-2">Visa Type Required</label>
                  <select 
                    id="visaType" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-slate-700"
                    value={formData.visaType}
                    onChange={handleChange}
                  >
                    <option value="" className="text-slate-400">Select visa type (if needed)</option>
                    <option value="tourist" className="text-slate-700">Tourist Visa</option>
                    <option value="business" className="text-slate-700">Business Visa</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center group
                    ${status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-amber-600 hover:to-amber-700'}`}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send className={`w-5 h-5 ml-2 ${status.submitting ? '' : 'group-hover:translate-x-1 transition-transform duration-300'}`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}