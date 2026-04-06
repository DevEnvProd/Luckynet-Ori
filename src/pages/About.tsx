import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Globe, Mail } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-mystic-purple mb-6">About luckynet</h1>
          <p className="text-xl text-dark-brown/60 max-w-2xl mx-auto">
            Celebrating the rich, mysterious, and often hilarious culture of gambling superstitions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white rotate-3"
          >
            <img 
              src="https://images.unsplash.com/photo-1596838132731-dd9d5900f10a?auto=format&fit=crop&q=80&w=800" 
              alt="Casino Culture" 
              className="w-full h-full object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-mystic-purple">Our Mission</h2>
            <p className="text-lg text-dark-brown/70 leading-relaxed mb-6">
              luckynet was born out of a fascination with the "unseen" side of the casino floor. While the math and the odds are fixed, the human experience of gambling is anything but.
            </p>
            <p className="text-lg text-dark-brown/70 leading-relaxed">
              We believe that superstitions are more than just myths—they are cultural stories that connect us, provide comfort in the face of chance, and add a layer of magic to the game.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white rounded-3xl shadow-lg text-center border-b-4 border-lucky-gold">
            <Globe className="w-10 h-10 text-mystic-purple mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">Global Perspective</h3>
            <p className="text-dark-brown/60 text-sm">Documenting rituals from Macau to Monte Carlo.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-lg text-center border-b-4 border-lucky-gold">
            <Heart className="w-10 h-10 text-mystic-purple mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">Cultural Respect</h3>
            <p className="text-dark-brown/60 text-sm">Honoring the traditions and beliefs of every player.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-lg text-center border-b-4 border-lucky-gold">
            <Sparkles className="w-10 h-10 text-mystic-purple mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">Pure Entertainment</h3>
            <p className="text-dark-brown/60 text-sm">A lighthearted look at the magic of the tables.</p>
          </div>
        </div>

        <div className="bg-soft-cream p-12 rounded-[3rem] border-2 border-lucky-gold/20 shadow-xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Get in Touch</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark-brown/60 uppercase tracking-widest">Name</label>
              <input type="text" className="w-full p-4 rounded-xl border border-lucky-gold/20 focus:outline-none focus:ring-2 focus:ring-mystic-purple bg-white" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark-brown/60 uppercase tracking-widest">Email</label>
              <input type="email" className="w-full p-4 rounded-xl border border-lucky-gold/20 focus:outline-none focus:ring-2 focus:ring-mystic-purple bg-white" placeholder="your@email.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-dark-brown/60 uppercase tracking-widest">Message</label>
              <textarea className="w-full p-4 rounded-xl border border-lucky-gold/20 focus:outline-none focus:ring-2 focus:ring-mystic-purple bg-white h-32" placeholder="Tell us your lucky ritual..."></textarea>
            </div>
            <button className="md:col-span-2 py-4 bg-mystic-purple text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
