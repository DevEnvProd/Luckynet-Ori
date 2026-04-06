import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, RefreshCw, Share2 } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    question: "When you enter a casino, what's the first thing you do?",
    options: [
      { text: "Breathe in the 'winning air'", charm: "Rabbit's Foot" },
      { text: "Look for a specific lucky machine", charm: "Maneki-neko" },
      { text: "Touch a piece of jewelry", charm: "Evil Eye" },
      { text: "Check your horoscope", charm: "Jade Pendant" }
    ]
  },
  {
    question: "What's your favorite color to wear while gambling?",
    options: [
      { text: "Vibrant Red", charm: "Maneki-neko" },
      { text: "Deep Green", charm: "Jade Pendant" },
      { text: "Classic Gold", charm: "Four-leaf clover" },
      { text: "Mystic Purple", charm: "Evil Eye" }
    ]
  },
  {
    question: "How do you handle a losing streak?",
    options: [
      { text: "Change seats immediately", charm: "Four-leaf clover" },
      { text: "Rub your lucky token", charm: "Rabbit's Foot" },
      { text: "Take a break and walk outside", charm: "Jade Pendant" },
      { text: "Double down with confidence", charm: "Maneki-neko" }
    ]
  }
];

export const QuizPage = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<string | null>(null);

  const handleAnswer = (charm: string) => {
    const newAnswers = [...answers, charm];
    setAnswers(newAnswers);
    
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result (most frequent charm)
      const counts: Record<string, number> = {};
      newAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
      setResult(winner);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="py-20 min-h-[80vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl border-2 border-lucky-gold/20 text-center"
            >
              <div className="w-16 h-16 bg-mystic-purple/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="text-mystic-purple w-8 h-8" />
              </div>
              <span className="text-mystic-purple font-bold uppercase tracking-widest text-sm mb-2 block">
                Question {step + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-dark-brown">
                {QUIZ_QUESTIONS[step].question}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.charm)}
                    className="p-6 rounded-2xl border-2 border-soft-cream hover:border-lucky-gold hover:bg-soft-cream/30 transition-all text-left font-bold text-lg text-dark-brown/80 flex items-center justify-between group"
                  >
                    {opt.text}
                    <div className="w-6 h-6 rounded-full border-2 border-lucky-gold/30 group-hover:bg-lucky-gold transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-mystic-purple p-12 rounded-[3rem] shadow-2xl text-center text-white"
            >
              <Trophy className="text-lucky-gold w-20 h-20 mx-auto mb-8" />
              <h2 className="text-2xl font-serif font-bold mb-2 text-lucky-gold uppercase tracking-widest">Your Lucky Charm Is:</h2>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">{result}</h1>
              <p className="text-xl text-soft-cream/80 mb-12 max-w-md mx-auto">
                The spirits have spoken! Carrying a {result} will align your energy with the winning flow of the universe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
                >
                  <RefreshCw className="w-5 h-5" /> Retake Quiz
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-lucky-gold text-mystic-purple rounded-xl font-bold shadow-lg hover:bg-white transition-all">
                  <Share2 className="w-5 h-5" /> Share Result
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
