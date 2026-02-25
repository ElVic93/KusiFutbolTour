
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Hostels from './pages/Hostels';
import WhatsAppSticky from './components/WhatsAppSticky';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Update HTML lang attribute based on current language
const LangManager = () => {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return null;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#F7F8FA]">
      <LangManager />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/hotels" element={<Hostels />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;
