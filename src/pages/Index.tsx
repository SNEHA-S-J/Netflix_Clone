
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';
import { categories, featuredMovie } from '../data/movies';

const Index = () => {
  useEffect(() => {
    document.title = 'Netflix Clone - Watch TV Shows & Movies';
  }, []);

  const footerLinks = {
    column1: [
      { text: "Audio Description", href: "#" },
      { text: "Investor Relations", href: "#" },
      { text: "Legal Notices", href: "#" }
    ],
    column2: [
      { text: "Help Center", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Cookie Preferences", href: "#" }
    ],
    column3: [
      { text: "Gift Cards", href: "#" },
      { text: "Terms of Use", href: "#" },
      { text: "Corporate Information", href: "#" }
    ],
    column4: [
      { text: "Media Center", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Contact Us", href: "#" }
    ]
  };

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
      
      <footer className="py-8 px-4 lg:px-8 text-gray-500 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <ul className="space-y-2">
                {footerLinks.column1.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-400 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {footerLinks.column2.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-400 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {footerLinks.column3.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-400 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {footerLinks.column4.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-400 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs">
            <p>© {new Date().getFullYear()} Netflix Clone</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
