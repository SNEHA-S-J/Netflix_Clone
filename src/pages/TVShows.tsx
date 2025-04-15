
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContentRow from '../components/ContentRow';
import { Badge } from "@/components/ui/badge";
import { categories, tvShowCategories, popularFilters } from '../data/movies';

const TVShows = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    document.title = 'TV Shows - Netflix Clone';
  }, []);

  // Filter TV show categories
  const filteredCategories = selectedCategory === "All" 
    ? categories.filter(category => tvShowCategories.includes(category.title))
    : categories.filter(category => category.title === selectedCategory);

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      <Navbar />
      <div className="pt-24 pb-8">
        <div className="px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">TV Shows</h1>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge 
              variant={selectedCategory === "All" ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Badge>
            {tvShowCategories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Popular filters */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-400 mb-2">Popular Filters:</h3>
            <div className="flex flex-wrap gap-2">
              {popularFilters.map((filter) => (
                <Badge key={filter} variant="outline" className="text-xs">
                  ✔️ {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Content rows */}
        {filteredCategories.map((category) => (
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

export default TVShows;

