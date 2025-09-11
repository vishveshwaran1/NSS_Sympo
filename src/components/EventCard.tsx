import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, imageUrl, category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-3xl group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-6 h-6 text-white" />
        </div>
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">{category}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 px-6 rounded-full hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg center">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;