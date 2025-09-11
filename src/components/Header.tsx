import React, { useEffect, useState } from "react";

// Simple Clock Icon (SVG) for demonstration
const Clock = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
  </svg>
);

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-23T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen w-full bg-black bg-opacity-40 overflow-hidden flex flex-col justify-center">
      {/* Logo row at the top */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-8">
          <img src="/1.png" alt="Logo 1" className="w-20 h-20 object-contain" />
          <img src="/2.png" alt="Logo 2" className="w-20 h-20 object-contain" />
          <img src="/3.png" alt="Logo 3" className="w-20 h-20 object-contain" />
          <img src="/4.png" alt="Logo 4" className="w-20 h-20 object-contain" />
          <img src="/5.png" alt="Logo 5" className="w-20 h-20 object-contain" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        {/* College Name and Logo */}
        <div className="mb-10 mt-28">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-avengero">
            Sri Sairam Institute of Technology
          </h1>
          <p className="text-yellow-300 text-2xl md:text-4xl font-semibold font-avengero">
            National Service Scheme
          </p>
        </div>

        {/* Event Title */}
        <div className="mb-12">
          <h2
            className="text-6xl md:text-8xl font-black text-white mb-4 transform hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow: "4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            SAMARPANA
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border-2 border-yellow-400">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-yellow-400 text-xl font-bold uppercase tracking-wider">
              Event Countdown
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  {timeLeft.days}
                </span>
              </div>
              <span className="text-white font-semibold">DAYS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-white font-semibold">HOURS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-white font-semibold">MINS</span>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-lg p-4 mb-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  {timeLeft.seconds}
                </span>
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
