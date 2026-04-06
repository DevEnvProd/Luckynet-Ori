import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clover, Sparkles, Hash, Info, Home, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Charms', path: '/charms', icon: Clover },
    { name: 'Rituals', path: '/rituals', icon: Sparkles },
    { name: 'Numbers', path: '/numbers', icon: Hash },
    { name: 'Do\'s & Don\'ts', path: '/dos-donts', icon: Info },
    { name: 'Quiz', path: '/quiz', icon: Sparkles },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-soft-cream/80 backdrop-blur-md border-b border-lucky-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 mystic-gradient rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-lucky-gold w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter text-mystic-purple">
                luckynet
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-mystic-purple flex items-center gap-1.5",
                  location.pathname === item.path ? "text-mystic-purple font-bold" : "text-dark-brown/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mystic-purple p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-soft-cream border-b border-lucky-gold/20 px-4 pt-2 pb-6 space-y-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-4 rounded-lg text-base font-medium flex items-center gap-3",
                location.pathname === item.path ? "bg-mystic-purple/10 text-mystic-purple" : "text-dark-brown/70"
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dark-brown text-soft-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-lucky-gold w-6 h-6" />
              <span className="font-serif text-2xl font-bold tracking-tighter">
                luckynet
              </span>
            </div>
            <p className="text-soft-cream/70 max-w-md mb-8">
              Exploring the fascinating world of gambling superstitions, lucky charms, and rituals from every corner of the globe.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-soft-cream/10 flex items-center justify-center hover:bg-lucky-gold transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-soft-cream/10 flex items-center justify-center hover:bg-lucky-gold transition-colors cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-soft-cream/10 flex items-center justify-center hover:bg-lucky-gold transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-lucky-gold">Explore</h4>
            <ul className="space-y-4 text-soft-cream/70">
              <li><Link to="/charms" className="hover:text-lucky-gold transition-colors">Charms Library</Link></li>
              <li><Link to="/rituals" className="hover:text-lucky-gold transition-colors">Rituals Archive</Link></li>
              <li><Link to="/numbers" className="hover:text-lucky-gold transition-colors">Numbers & Luck</Link></li>
              <li><Link to="/quiz" className="hover:text-lucky-gold transition-colors">Lucky Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-lucky-gold">Company</h4>
            <ul className="space-y-4 text-soft-cream/70">
              <li><Link to="/about" className="hover:text-lucky-gold transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-lucky-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-lucky-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-lucky-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-soft-cream/10 text-center text-soft-cream/40 text-sm">
          <p>© {new Date().getFullYear()} luckynet. All rights reserved. Please gamble responsibly.</p>
          <p className="mt-2">Sponsored by Platinum Casino.</p>
        </div>
      </div>
    </footer>
  );
};

export const AffiliateBanner = ({ className }: { className?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "mystic-gradient p-8 rounded-2xl shadow-2xl relative overflow-hidden group",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-lucky-gold/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-lucky-gold/20 transition-colors" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-lucky-gold text-mystic-purple text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
            Partner Spotlight
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-soft-cream mb-2">
            Feeling Lucky?
          </h3>
          <p className="text-soft-cream/80 text-lg max-w-md">
            Put your rituals to the test at <span className="text-lucky-gold font-bold">Platinum Casino</span>. Get a RM500 welcome bonus today!
          </p>
        </div>
        <a
          href="https://example.com/platinum-casino"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-lucky-gold text-mystic-purple font-bold rounded-xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0"
        >
          Play Now at Platinum
        </a>
      </div>
    </motion.div>
  );
};
