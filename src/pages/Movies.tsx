
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContentRow from '../components/ContentRow';
import { categories } from '../data/movies';

const Movies = () => {
  useEffect(() => {
    document.title = 'Movies - Netflix Clone';
  }, []);

  // Filter movie categories
  const movieCategories = categories.filter((category) => 
    ['Action Movies', 'Trending Films', 'New Releases'].includes(category.title)
  );

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      <Navbar />
      <div className="pt-24 pb-8">
        <h1 className="text-4xl font-bold px-4 lg:px-8 mb-8">Movies</h1>
        {movieCategories.map((category) => (
          <ContentRow
            key={category.id}
            title={category.title}
            movies={category.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
