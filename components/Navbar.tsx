
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E4E6E8]">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-[#C4161C] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95 shadow-sm">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tighter text-[#111111]">KUSI</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4161C]">Fútbol Tours</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#111111]/60">
          <Link to="/experience" className="hover:text-[#C4161C] transition-colors">{t.nav.experience}</Link>
          <Link to="/how-it-works" className="hover:text-[#C4161C] transition-colors">{t.nav.howItWorks}</Link>
          <Link to="/pricing" className="hover:text-[#C4161C] transition-colors">{t.nav.pricing}</Link>
          <Link to="/faq" className="hover:text-[#C4161C] transition-colors">{t.nav.faq}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLanguage} className="w-10 h-10 flex items-center justify-center text-[11px] font-black border border-[#E4E6E8] rounded-xl hover:bg-[#F7F8FA]">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <Button 
            href={getWhatsAppLink(language)} 
            trackingLabel="Navbar CTA" 
            trackingSection="Header"
            variant="primary" 
            className="!rounded-xl shadow-md shadow-[#C4161C]/20"
          >
            {t.nav.reserve}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLanguage} className="w-8 h-8 flex items-center justify-center text-[10px] font-black border border-[#E4E6E8] rounded-lg">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="p-2 text-[#111111]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white border-b border-[#E4E6E8] px-6 py-8 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top">
          <Link to="/experience" className="text-xl font-bold text-[#111111]" onClick={() => setIsMenuOpen(false)}>{t.nav.experience}</Link>
          <Link to="/how-it-works" className="text-xl font-bold text-[#111111]" onClick={() => setIsMenuOpen(false)}>{t.nav.howItWorks}</Link>
          <Link to="/pricing" className="text-xl font-bold text-[#111111]" onClick={() => setIsMenuOpen(false)}>{t.nav.pricing}</Link>
          <Link to="/faq" className="text-xl font-bold text-[#111111]" onClick={() => setIsMenuOpen(false)}>{t.nav.faq}</Link>
          <div className="pt-4">
            <Button 
              href={getWhatsAppLink(language)} 
              trackingLabel="Mobile Menu CTA" 
              trackingSection="MobileHeader"
              variant="primary" 
              fullWidth
              className="!h-14 !text-lg !rounded-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.reserve}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
