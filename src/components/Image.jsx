import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Image({ favorites, toggleFavorite, pkg }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide to the next image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % pkg.images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [pkg.images.length]);

  // Manual navigation handlers
  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? pkg.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prevIndex => 
      (prevIndex + 1) % pkg.images.length
    );
  };

  return (
    <div className="relative overflow-hidden h-56">
      {/* Image slider */}
      <img 
        src={pkg.images[currentImageIndex]} 
        className="w-full h-full object-cover transition-transform duration-500"
        alt={pkg.destination}
      />
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow-md hover:bg-teal-500 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={goToNext} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow-md hover:bg-teal-500 hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Image counter */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
        {currentImageIndex + 1} / {pkg.images.length}
      </div>
      
      {/* Rating badge */}
      {/* <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center shadow-sm">
        <Star className="w-4 h-4 text-amber-500 mr-1 fill-current" />
        <span className="text-sm font-medium">{pkg.rating}</span>
      </div> */}
      
      {/* Favorite button */}
      {/* <button 
        onClick={() => toggleFavorite(pkg.id)}
        className={`absolute top-3 left-3 p-2 rounded-full ${favorites.includes(pkg.id) ? 'bg-red-500 text-white' : 'bg-white bg-opacity-90 text-gray-600'} shadow-sm transition-colors`}
      >
        <Heart className={`w-4 h-4 ${favorites.includes(pkg.id) ? 'fill-current' : ''}`} />
      </button> */}
    </div>
  )
}
