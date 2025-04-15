
import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../data/movies';

interface ContentCardProps {
  movie: Movie;
}

const ContentCard = ({ movie }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 relative w-[200px] mr-2 transition-all duration-300 transform hover:scale-105 z-10 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-[120px] object-cover rounded-t-md shadow-lg"
        loading="lazy"
      />
      
      {isHovered && (
        <div className="absolute -bottom-[100px] left-0 w-full bg-netflix-dark-gray rounded-b-md p-3 shadow-xl animate-fade-in">
          <div className="flex space-x-2 mb-2">
            <button className="bg-white text-black rounded-full p-1.5 hover:bg-white/90 transition-colors">
              <Play size={18} />
            </button>
            <button className="border border-gray-400 rounded-full p-1.5 hover:border-white transition-colors">
              <Plus size={18} />
            </button>
            <button className="border border-gray-400 rounded-full p-1.5 hover:border-white transition-colors">
              <ThumbsUp size={18} />
            </button>
            <button className="ml-auto border border-gray-400 rounded-full p-1.5 hover:border-white transition-colors">
              <ChevronDown size={18} />
            </button>
          </div>
          <div className="flex items-center space-x-2 text-xs mb-2">
            <span className="text-green-500 font-bold">{movie.rating.toFixed(1)}</span>
            <span>{movie.duration}</span>
            <span className="border border-gray-500 rounded px-1 text-[10px]">HD</span>
          </div>
          <div className="text-xs">
            {movie.genre.slice(0, 3).map((genre, i) => (
              <span key={i}>
                {genre}
                {i < Math.min(2, movie.genre.length - 1) && <span className="mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {movie.isNew && (
        <div className="absolute top-2 right-2 bg-netflix-red text-white text-xs px-2 py-1 rounded">
          NEW
        </div>
      )}
    </div>
  );
};

export default ContentCard;
