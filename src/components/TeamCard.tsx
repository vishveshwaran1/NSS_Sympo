import React from 'react';
import { User } from 'lucide-react';

export interface TeamCardProps {
  name: string;
  position: string;
  isCircular?: boolean;
  className?: string;
  alt?: string;
  src?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, src, isCircular = true, alt }) => {
  return (
    <div className="text-center group">
      <div className={`relative mx-auto mb-4 overflow-hidden bg-white shadow-2xl transition-all duration-300 group-hover:scale-110 ${
        isCircular ? 'w-32 h-32 rounded-full' : 'w-40 h-48 rounded-2xl'
      }`}>
        {src ? (
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <User className="w-12 h-12 text-gray-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
        {position}
      </p>
    </div>
  );
};

export default TeamCard;