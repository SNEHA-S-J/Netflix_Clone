
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { movies } from '../data/movies';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof movies>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filteredResults = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="absolute right-0 flex items-center">
      <div className="relative">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Titles, people, genres"
          className="bg-black/80 border border-white/30 text-white px-8 py-1 w-64 rounded-sm focus:outline-none focus:ring-1 focus:ring-white/50"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleEscape}
        />
        <Search size={16} className="absolute left-2 top-2 text-gray-400" />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-2 top-2 text-gray-400"
          >
            <X size={16} />
          </button>
        )}
      </div>
      <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white">
        <X size={20} />
      </button>

      {searchResults.length > 0 && (
        <div className="absolute top-full right-0 mt-2 bg-netflix-dark-gray w-96 max-h-96 overflow-y-auto rounded-md shadow-lg z-50">
          {searchResults.map(movie => (
            <div key={movie.id} className="flex p-2 hover:bg-netflix-light-gray border-b border-gray-700 last:border-0">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-16 h-20 object-cover rounded-sm"
              />
              <div className="ml-3 text-left">
                <h4 className="text-sm font-medium">{movie.title}</h4>
                <p className="text-xs text-gray-400">{movie.genre.join(', ')}</p>
                <p className="text-xs text-gray-400 mt-1">{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
