import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PamphletSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pamphlets = [
    { id: 1, title: 'Event Poster 1', src:'./poster.jpg' },
    // { id: 2, title: 'Event Poster 2', imageUrl: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg' },
    // { id: 3, title: 'Event Poster 3', imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pamphlets.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pamphlets.length) % pamphlets.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {pamphlets.map((pamphlet) => (
            <div key={pamphlet.id} className="w-full flex-shrink-0">
           <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">

                <img
                  src={pamphlet.src}
                  alt={pamphlet.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-2xl">
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg px-6 py-4 rounded-full bg-red-600 bg-opacity-80">
                    {pamphlet.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 md:p-4 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 md:p-4 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {pamphlets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PamphletSlider;
