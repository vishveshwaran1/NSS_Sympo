import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  backgroundColor = 'bg-gradient-to-r from-red-900 to-red-800' 
}) => {
  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-wider"
              style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '2px 2px 0px #000'
              }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-yellow-300 text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;