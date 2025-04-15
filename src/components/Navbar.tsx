
import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-netflix-red font-bold text-2xl md:text-3xl">NETFLIX</h1>
        </Link>
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <Link to="/" className="text-netflix-white hover:text-gray-300">Home</Link>
          <Link to="/" className="text-netflix-white hover:text-gray-300">TV Shows</Link>
          <Link to="/" className="text-netflix-white hover:text-gray-300">Movies</Link>
          <Link to="/" className="text-netflix-white hover:text-gray-300">New & Popular</Link>
          <Link to="/" className="text-netflix-white hover:text-gray-300">My List</Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          {showSearch ? (
            <SearchBar onClose={toggleSearch} />
          ) : (
            <button onClick={toggleSearch} className="text-netflix-white hover:text-gray-300">
              <Search size={20} />
            </button>
          )}
        </div>
        <button className="text-netflix-white hover:text-gray-300">
          <Bell size={20} />
        </button>
        <div className="flex items-center space-x-1">
          <div className="h-8 w-8 rounded-md bg-netflix-red text-netflix-white flex items-center justify-center">
            <span className="text-sm font-bold">N</span>
          </div>
          <ChevronDown size={16} className="text-netflix-white" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
