import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { CharmsLibrary, CharmDetail } from './pages/Charms';
import { RitualsArchive, RitualDetail } from './pages/Rituals';
import { NumbersPage, DosDontsPage } from './pages/Numbers';
import { QuizPage } from './pages/Quiz';
import { AboutPage } from './pages/About';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/charms" element={<CharmsLibrary />} />
              <Route path="/charms/:slug" element={<CharmDetail />} />
              <Route path="/rituals" element={<RitualsArchive />} />
              <Route path="/rituals/:slug" element={<RitualDetail />} />
              <Route path="/numbers" element={<NumbersPage />} />
              <Route path="/dos-donts" element={<DosDontsPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
