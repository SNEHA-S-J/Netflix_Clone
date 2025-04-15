
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
      className="flex-shrink-0 relative w-[200px] mr-2 transition-transform duration-300 movie-card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-[120px] object-cover rounded-sm"
      />
      
      {isHovered && (
        <div className="absolute -bottom-[100px] left-0 w-full h-auto bg-netflix-dark-gray rounded-b-md p-3 z-20 shadow-xl animate-fade-in">
          <div className="flex space-x-2 mb-2">
            <button className="bg-white text-black rounded-full p-1 hover:bg-white/90">
              <Play size={16} />
            </button>
            <button className="border border-gray-400 rounded-full p-1 hover:border-white">
              <Plus size={16} />
            </button>
            <button className="border border-gray-400 rounded-full p-1 hover:border-white">
              <ThumbsUp size={16} />
            </button>
            <button className="ml-auto border border-gray-400 rounded-full p-1 hover:border-white">
              <ChevronDown size={16} />
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
        <div className="absolute top-1 right-1 bg-netflix-red text-white text-[10px] px-1 py-0.5 rounded">
          NEW
        </div>
      )}
    </div>
  );
};

export default ContentCard;
