
export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  year: number;
  duration: string;
  genre: string[];
  isTrending?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  title: string;
  movies: Movie[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    imageUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&h=450&fit=crop",
    rating: 4.8,
    year: 2016,
    duration: "50m",
    genre: ["Drama", "Fantasy", "Horror"],
    isTrending: true
  },
  {
    id: 2,
    title: "The Crown",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    imageUrl: "https://images.unsplash.com/photo-1473856215605-9ca857f8d5c1?w=800&h=450&fit=crop",
    rating: 4.7,
    year: 2016,
    duration: "58m",
    genre: ["Drama", "History"],
    isNew: true
  },
  {
    id: 3,
    title: "Money Heist",
    description: "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history.",
    imageUrl: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&h=450&fit=crop",
    rating: 4.6,
    year: 2017,
    duration: "1h 10m",
    genre: ["Action", "Crime", "Mystery"],
    isTrending: true
  },
  {
    id: 4,
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=450&fit=crop",
    rating: 4.5,
    year: 2019,
    duration: "1h",
    genre: ["Action", "Adventure", "Fantasy"],
    isNew: true
  },
  {
    id: 5,
    title: "Dark",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    imageUrl: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=800&h=450&fit=crop",
    rating: 4.9,
    year: 2017,
    duration: "1h",
    genre: ["Crime", "Drama", "Mystery"]
  },
  {
    id: 6,
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
    rating: 4.7,
    year: 2011,
    duration: "1h 2m",
    genre: ["Drama", "Sci-Fi", "Thriller"]
  },
  {
    id: 7,
    title: "Ozark",
    description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
    rating: 4.6,
    year: 2017,
    duration: "56m",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    id: 8,
    title: "The Queen's Gambit",
    description: "Orphaned at 9, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=450&fit=crop",
    rating: 4.8,
    year: 2020,
    duration: "55m",
    genre: ["Drama"],
    isNew: true
  },
  {
    id: 9,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    imageUrl: "https://images.unsplash.com/photo-1554475901-6ffdcf804f16?w=800&h=450&fit=crop",
    rating: 4.9,
    year: 2008,
    duration: "49m",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    id: 10,
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    imageUrl: "https://images.unsplash.com/photo-1636663908580-d9d0e8f26766?w=800&h=450&fit=crop",
    rating: 4.7,
    year: 2021,
    duration: "54m",
    genre: ["Action", "Drama", "Mystery"],
    isTrending: true
  }
];

export const categories: Category[] = [
  {
    id: "trending",
    title: "Trending Now",
    movies: movies.filter(movie => movie.isTrending)
  },
  {
    id: "new",
    title: "New Releases",
    movies: movies.filter(movie => movie.isNew)
  },
  {
    id: "topRated",
    title: "Top Rated",
    movies: [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5)
  },
  {
    id: "action",
    title: "Action",
    movies: movies.filter(movie => movie.genre.includes("Action"))
  },
  {
    id: "drama",
    title: "Drama",
    movies: movies.filter(movie => movie.genre.includes("Drama"))
  }
];

export const featuredMovie = movies[0];
