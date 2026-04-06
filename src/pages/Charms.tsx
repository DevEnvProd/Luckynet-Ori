import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { CHARMS } from '@/src/data/content';
import { ArrowLeft, MapPin, Sparkles } from 'lucide-react';

export const CharmsLibrary = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-4">Lucky Charms Library</h1>
          <p className="text-xl text-dark-brown/60 max-w-2xl">
            A curated collection of artifacts, tokens, and symbols believed to bring fortune to those who carry them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CHARMS.map((charm, idx) => (
            <motion.div
              key={charm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-lucky-gold/10 hover:border-lucky-gold transition-all"
            >
              <Link to={`/charms/${charm.slug}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={charm.image} 
                    alt={charm.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-mystic-purple text-xs font-bold rounded-full shadow-sm">
                      {charm.origin}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-mystic-purple transition-colors">{charm.name}</h3>
                  <p className="text-dark-brown/60 mb-6 line-clamp-3">{charm.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-mystic-purple font-bold text-sm">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-soft-cream flex items-center justify-center group-hover:bg-lucky-gold transition-colors">
                      <Sparkles className="w-4 h-4 text-mystic-purple" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CharmDetail = () => {
  const { slug } = useParams();
  const charm = CHARMS.find(c => c.slug === slug);

  if (!charm) return <div className="py-20 text-center">Charm not found.</div>;

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/charms" className="inline-flex items-center gap-2 text-mystic-purple font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Library
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src={charm.image} 
              alt={charm.name} 
              className="w-full h-full object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 text-mystic-purple font-bold uppercase tracking-widest text-sm mb-4">
              <MapPin className="w-4 h-4" /> {charm.origin}
            </div>
            <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-6">{charm.name}</h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8">
              {charm.description}
            </p>
            
            <div className="p-6 bg-lucky-gold/10 rounded-2xl border border-lucky-gold/20">
              <h4 className="font-bold text-mystic-purple mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> How to Use for Luck
              </h4>
              <p className="text-dark-brown/70 italic">
                "{charm.howToUse}"
              </p>
            </div>
          </motion.div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold mb-6 border-b-2 border-lucky-gold/20 pb-4">Cultural Significance</h2>
          <p className="text-dark-brown/70 leading-relaxed">
            {charm.culturalSignificance}
          </p>
          <p className="mt-8 text-dark-brown/70 leading-relaxed">
            Throughout history, the {charm.name} has transcended its physical form to become a psychological anchor for those facing uncertainty. In the high-stakes environment of a casino, where chance reigns supreme, these tokens provide a sense of agency and protection.
          </p>
        </div>

        <div className="mt-20 p-10 mystic-gradient rounded-3xl text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">Ready to test your luck?</h3>
          <p className="text-soft-cream/80 mb-8 max-w-xl mx-auto">
            Take your {charm.name} to the tables at Platinum Casino and see if the spirits are on your side.
          </p>
          <a 
            href="https://example.com/platinum-casino" 
            className="inline-block px-8 py-4 bg-lucky-gold text-mystic-purple font-bold rounded-xl hover:bg-white transition-all shadow-lg"
          >
            Play at Platinum Casino
          </a>
        </div>
      </div>
    </div>
  );
};
