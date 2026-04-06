import React from 'react';
import { motion } from 'motion/react';
import { NUMBERS, DOS_AND_DONTS } from '@/src/data/content';
import { Hash, AlertTriangle, CheckCircle, Info, Sparkles } from 'lucide-react';

export const NumbersPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-4">Numbers & Superstitions</h1>
          <p className="text-xl text-dark-brown/60 max-w-2xl mx-auto">
            In the world of gambling, numbers are never just digits. They carry weight, history, and the power to bless or curse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {NUMBERS.map((n, idx) => (
            <motion.div
              key={n.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border-2 shadow-xl ${
                n.status === 'Lucky' 
                  ? 'bg-emerald-green/5 border-emerald-green/20' 
                  : 'bg-red-500/5 border-red-500/20'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black shadow-lg ${
                  n.status === 'Lucky' ? 'bg-emerald-green text-white' : 'bg-red-500 text-white'
                }`}>
                  {n.number}
                </div>
                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                  n.status === 'Lucky' ? 'bg-emerald-green/20 text-emerald-green' : 'bg-red-500/20 text-red-500'
                }`}>
                  {n.status} in {n.culture}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">The Meaning of {n.number}</h3>
              <p className="text-dark-brown/80 mb-6 leading-relaxed">
                {n.meaning}
              </p>
              <div className="pt-6 border-t border-dark-brown/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-dark-brown/40 mb-2">Origin</h4>
                <p className="text-sm text-dark-brown/60 italic">{n.origin}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-mystic-purple p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Hash className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Triskaidekaphobia in Casinos</h2>
            <p className="text-lg text-soft-cream/80 mb-8 leading-relaxed">
              Did you know that many major casinos in Las Vegas and Atlantic City don't have a 13th floor? 
              The fear of the number 13 is so widespread that elevators will jump from 12 to 14, 
              and table games are rarely numbered 13. This is a prime example of how superstitions 
              shape the very architecture of the gambling world.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
              <Info className="w-6 h-6 text-lucky-gold flex-shrink-0" />
              <p className="text-sm italic">"The house always respects the player's fear." — Casino Architect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DosDontsPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-4">Casino Do's & Don'ts</h1>
          <p className="text-xl text-dark-brown/60 max-w-2xl mx-auto">
            Etiquette and superstitions go hand-in-hand. Follow these unwritten rules to keep your karma clean and your luck flowing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-3 text-emerald-green">
              <CheckCircle className="w-8 h-8" /> The Lucky Actions (Do's)
            </h2>
            {DOS_AND_DONTS.filter(d => d.type === 'Do').map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border-l-8 border-emerald-green shadow-lg"
              >
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-dark-brown/70 mb-6">{item.description}</p>
                <div className="p-4 bg-emerald-green/5 rounded-xl text-sm font-medium text-emerald-green italic">
                  Pro Tip: {item.tip}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-3 text-red-500">
              <AlertTriangle className="w-8 h-8" /> The Dreaded Jinxes (Don'ts)
            </h2>
            {DOS_AND_DONTS.filter(d => d.type === "Don't").map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border-l-8 border-red-500 shadow-lg"
              >
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-dark-brown/70 mb-6">{item.description}</p>
                <div className="p-4 bg-red-500/5 rounded-xl text-sm font-medium text-red-500 italic">
                  Pro Tip: {item.tip}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
