import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Xplore</h3>
              <p className="text-gray-400 mb-6">Travel Beyond Boundaries</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#packages" className="text-gray-400 hover:text-orange-500 transition-colors">Tour Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Destinations</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Europe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Asia</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Oceania</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">North America</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and travel tips.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Xplore. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
