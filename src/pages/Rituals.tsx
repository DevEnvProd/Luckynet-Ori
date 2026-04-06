import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { RITUALS } from '@/src/data/content';
import { ArrowLeft, Globe, CheckCircle2, Play, Sparkles } from 'lucide-react';

export const RitualsArchive = () => {
  const [filter, setFilter] = React.useState<string>('All');
  const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Global'];

  const filteredRituals = filter === 'All' 
    ? RITUALS 
    : RITUALS.filter(r => r.region === filter);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-4">Rituals Archive</h1>
          <p className="text-xl text-dark-brown/60 max-w-2xl mx-auto">
            Step-by-step guides to the physical rituals gamblers perform to summon fortune.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === region 
                  ? 'bg-mystic-purple text-white shadow-lg' 
                  : 'bg-white text-mystic-purple border border-mystic-purple/20 hover:bg-soft-cream'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredRituals.map((ritual, idx) => (
            <motion.div
              key={ritual.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-lucky-gold/10 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img 
                  src={ritual.image} 
                  alt={ritual.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-mystic-purple text-white text-xs font-bold rounded-full">
                    {ritual.region}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{ritual.name}</h3>
                  <p className="text-dark-brown/60 text-sm mb-6 line-clamp-3">{ritual.description}</p>
                </div>
                <Link 
                  to={`/rituals/${ritual.slug}`}
                  className="inline-flex items-center gap-2 text-mystic-purple font-bold hover:gap-3 transition-all"
                >
                  Learn the Ritual <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const RitualDetail = () => {
  const { slug } = useParams();
  const ritual = RITUALS.find(r => r.slug === slug);

  if (!ritual) return <div className="py-20 text-center">Ritual not found.</div>;

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/rituals" className="inline-flex items-center gap-2 text-mystic-purple font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </Link>

        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img 
            src={ritual.image} 
            alt={ritual.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex items-center gap-2 text-lucky-gold font-bold uppercase tracking-widest text-sm mb-4">
              <Globe className="w-4 h-4" /> {ritual.region}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{ritual.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">The Story</h2>
            <p className="text-xl text-dark-brown/70 leading-relaxed mb-10">
              {ritual.description}
            </p>

            <h2 className="text-3xl font-serif font-bold mb-6">Step-by-Step Guide</h2>
            <div className="space-y-6 mb-12">
              {ritual.steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-md border border-lucky-gold/10"
                >
                  <div className="w-10 h-10 rounded-full bg-mystic-purple text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <p className="text-lg text-dark-brown/80 pt-1">{step}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold mb-6">Cultural Significance</h2>
            <p className="text-lg text-dark-brown/70 leading-relaxed">
              {ritual.significance}
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 bg-mystic-purple rounded-3xl text-white shadow-xl">
                <h4 className="text-xl font-serif font-bold mb-4 text-lucky-gold">Watch the Ritual</h4>
                <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center border-2 border-lucky-gold/20 relative group cursor-pointer overflow-hidden">
                  <Play className="w-12 h-12 text-lucky-gold group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-bold text-sm">Video Coming Soon</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-soft-cream/60 italic">
                  "A ritual is only as powerful as the belief behind it."
                </p>
              </div>

              <div className="p-8 bg-white rounded-3xl border-2 border-lucky-gold/20 shadow-xl">
                <h4 className="text-xl font-serif font-bold mb-4 text-mystic-purple">Success Rate</h4>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-lucky-gold">
                    {[1, 2, 3, 4, 5].map(s => <Sparkles key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-sm font-bold text-dark-brown/40">(Verified by Users)</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-dark-brown/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-green" /> High success in Baccarat
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-brown/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-green" /> Popular in Macau
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-brown/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-green" /> Easy to perform
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
