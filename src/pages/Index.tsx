
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';
import { categories, featuredMovie } from '../data/movies';

const Index = () => {
  useEffect(() => {
    document.title = 'Netflix Clone - Watch TV Shows & Movies';
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      <Navbar />
      
      <main>
        <HeroBanner movie={featuredMovie} />
        
        <div className="mt-0 lg:-mt-16 relative z-10">
          {categories.map((category) => (
            <ContentRow
              key={category.id}
              title={category.title}
              movies={category.movies}
            />
          ))}
        </div>
      </main>
      
      <footer className="py-8 px-4 lg:px-8 text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <p>© {new Date().getFullYear()} Netflix Clone</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Audio Description</a></li>
                <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
                <li><a href="#" className="hover:text-gray-400">Legal Notices</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
                <li><a href="#" className="hover:text-gray-400">Cookie Preferences</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Gift Cards</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-400">Corporate Information</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Media Center</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Placeholder for future bot integration */}
      <div className="hidden fixed right-4 bottom-4 z-50">
        {/* Bot will be integrated here */}
      </div>
    </div>
  );
};

export default Index;
