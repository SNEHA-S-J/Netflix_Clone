
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContentRow from '../components/ContentRow';
import { categories } from '../data/movies';

const NewAndPopular = () => {
  useEffect(() => {
    document.title = 'New & Popular - Netflix Clone';
  }, []);

  // Filter new and popular categories
  const newAndPopularCategories = categories.filter((category) => 
    ['New Releases', 'Trending Now'].includes(category.title)
  );

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      <Navbar />
      <div className="pt-24 pb-8">
        <h1 className="text-4xl font-bold px-4 lg:px-8 mb-8">New & Popular</h1>
        {newAndPopularCategories.map((category) => (
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

export default NewAndPopular;
