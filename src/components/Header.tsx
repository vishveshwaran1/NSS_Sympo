import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date (you can modify this date)
    const eventDate = new Date('2024-03-15T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">
      {/* Comic-style pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-30 transform -rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-4 border-white transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        {/* College Name and Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
            <Calendar className="w-12 h-12 text-red-800" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
            Sri Sairam Institute of Technology
          </h1>
          <p className="text-yellow-300 text-lg font-semibold">National Service Scheme</p>
        </div>

        {/* Event Title */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4 transform hover:scale-105 transition-transform duration-300"
              style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)'
              }}>
            SAMARPANA
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border-2 border-yellow-400">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-yellow-400 text-xl font-bold uppercase tracking-wider">Event Countdown</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">{timeLeft.days}</span>
              </div>
              <span className="text-white font-semibold">DAYS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">{timeLeft.hours}</span>
              </div>
              <span className="text-white font-semibold">HOURS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">{timeLeft.minutes}</span>
              </div>
              <span className="text-white font-semibold">MINS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">{timeLeft.seconds}</span>
              </div>
              <span className="text-white font-semibold">SECS</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;