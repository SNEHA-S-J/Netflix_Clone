
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import { Movie } from '../data/movies';

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

const ContentRow = ({ title, movies }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-row-container px-4 lg:px-8 my-8">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      
      <div className="group relative">
        <div ref={rowRef} className="content-row">
          {movies.map((movie) => (
            <ContentCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hidden group-hover:block"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hidden group-hover:block"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ContentRow;
