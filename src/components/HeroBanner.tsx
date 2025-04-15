
import { Play, Info } from 'lucide-react';
import { Movie } from '../data/movies';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner = ({ movie }: HeroBannerProps) => {
  return (
    <div className="relative h-[85vh] w-full">
      <div className="absolute inset-0">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-[20%] left-[4%] w-11/12 md:w-2/3 lg:w-1/2 z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg">{movie.title}</h1>
        <div className="flex items-center space-x-4 text-sm mb-4">
          <span className="text-green-500 font-semibold">{movie.rating.toFixed(1)} Rating</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <p className="text-base md:text-lg text-gray-300 mb-6 line-clamp-3 md:line-clamp-4">
          {movie.description}
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors">
            <Play size={24} className="mr-2" />
            Play
          </button>
          <button className="flex items-center justify-center px-8 py-3 bg-gray-500/50 text-white font-semibold rounded hover:bg-gray-500/60 transition-colors">
            <Info size={24} className="mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
