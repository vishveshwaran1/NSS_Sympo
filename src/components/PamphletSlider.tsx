import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

const PamphletSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const pamphlets = [
    { id: 1, title: 'Event Poster 1', imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' },
    { id: 2, title: 'Event Poster 2', imageUrl: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg' },
    { id: 3, title: 'Event Poster 3', imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pamphlets.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pamphlets.length) % pamphlets.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {pamphlets.map((pamphlet) => (
            <div key={pamphlet.id} className="w-full flex-shrink-0">
              <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image className="w-24 h-24 text-gray-400" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{pamphlet.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {pamphlets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PamphletSlider;