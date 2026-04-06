import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clover, Zap, Hash, ShieldCheck } from 'lucide-react';
import { CHARMS, RITUALS } from '@/src/data/content';
import { AffiliateBanner } from '@/src/components/Layout';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mystic-purple/10 text-mystic-purple font-bold text-sm mb-6 border border-mystic-purple/20">
              <Sparkles className="w-4 h-4" />
              The World's Largest Superstition Archive
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-mystic-purple leading-tight mb-6">
              luckynet — Rituals, Charms & Luck from <span className="text-lucky-gold italic">Gamblers Worldwide</span>
            </h1>
            <p className="text-xl text-dark-brown/70 mb-10 leading-relaxed">
              From the baccarat rooms of Macau to the high-stakes tables of Las Vegas, 
              discover the fascinating traditions that players use to tilt the odds in their favor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/charms"
                className="w-full sm:w-auto px-8 py-4 bg-mystic-purple text-white font-bold rounded-xl shadow-xl hover:bg-purple-700 transition-all transform hover:-translate-y-1"
              >
                Explore Charms
              </Link>
              <Link
                to="/quiz"
                className="w-full sm:w-auto px-8 py-4 bg-white text-mystic-purple font-bold rounded-xl border-2 border-mystic-purple/20 shadow-lg hover:bg-soft-cream transition-all transform hover:-translate-y-1"
              >
                Find Your Lucky Charm
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CategoryGrid = () => {
  const categories = [
    { title: 'Lucky Charms', icon: Clover, color: 'bg-emerald-green', path: '/charms', desc: 'Ancient artifacts and modern tokens of fortune.' },
    { title: 'Casino Rituals', icon: Zap, color: 'bg-mystic-purple', path: '/rituals', desc: 'The physical acts that summon the winning spirits.' },
    { title: 'Numbers', icon: Hash, color: 'bg-lucky-gold', path: '/numbers', desc: 'The hidden meanings behind the digits on the wheel.' },
    { title: 'Do\'s & Don\'ts', icon: ShieldCheck, color: 'bg-red-500', path: '/dos-donts', desc: 'Essential etiquette to avoid the dreaded jinx.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Explore the Archive</h2>
          <div className="w-24 h-1 bg-lucky-gold mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={cat.path} className="group block h-full p-8 rounded-2xl border-2 border-soft-cream hover:border-lucky-gold transition-all card-shadow bg-soft-cream/20">
                <div className={`${cat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <cat.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{cat.title}</h3>
                <p className="text-dark-brown/60 mb-6">{cat.desc}</p>
                <span className="text-mystic-purple font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedContent = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-mystic-purple font-bold uppercase tracking-widest text-sm">Weekly Spotlight</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Ritual of the Week</h2>
          </div>
          <Link to="/rituals" className="text-mystic-purple font-bold hover:underline">View all rituals →</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <img 
              src={RITUALS[0].image} 
              alt={RITUALS[0].name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="px-3 py-1 bg-lucky-gold text-mystic-purple text-xs font-bold rounded-full uppercase tracking-widest mb-2 inline-block">
                {RITUALS[0].region}
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">{RITUALS[0].name}</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold mb-6 text-mystic-purple">The Art of {RITUALS[0].name}</h3>
            <p className="text-lg text-dark-brown/70 mb-8 leading-relaxed">
              {RITUALS[0].description}
            </p>
            <div className="space-y-4 mb-10">
              {RITUALS[0].steps.slice(0, 3).map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-lucky-gold/20 text-lucky-gold flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-dark-brown/80">{step}</p>
                </div>
              ))}
            </div>
            <Link 
              to={`/rituals/${RITUALS[0].slug}`}
              className="inline-flex items-center gap-2 text-mystic-purple font-bold border-b-2 border-mystic-purple pb-1 hover:text-purple-700 hover:border-purple-700 transition-all"
            >
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedContent />
      <section className="py-20 bg-soft-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AffiliateBanner />
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Latest from the Library</h2>
            <p className="text-dark-brown/60">Discover new charms added to our collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHARMS.slice(0, 3).map((charm) => (
              <motion.div
                key={charm.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-lucky-gold/10"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={charm.image} 
                    alt={charm.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-mystic-purple uppercase tracking-widest mb-2 block">{charm.origin}</span>
                  <h3 className="text-2xl font-serif font-bold mb-3">{charm.name}</h3>
                  <p className="text-dark-brown/60 text-sm line-clamp-2 mb-6">{charm.description}</p>
                  <Link to={`/charms/${charm.slug}`} className="text-mystic-purple font-bold text-sm hover:underline">Read More →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
