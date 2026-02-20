
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#E4E6E8] pt-16 pb-24 md:pb-16">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            {/* Logo Group Consistent with Navbar */}
            <Link to="/" className="flex items-center gap-2.5 group mb-6 inline-flex">
              <div className="w-9 h-9 bg-[#C4161C] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tighter text-[#111111]">KUSI</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4161C]">Fútbol Tours</span>
              </div>
            </Link>
            <p className="text-[#111111]/60 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-[#111111]/70">
              <li><Link to="/experience" className="hover:text-[#C4161C] transition-colors">{t.nav.experience}</Link></li>
              <li><Link to="/faq" className="hover:text-[#C4161C] transition-colors">{t.nav.faq}</Link></li>
              <li><Link to="/hostels" className="hover:text-[#C4161C] transition-colors">{t.nav.hostels}</Link></li>
              <li><Link to="/contact" className="hover:text-[#C4161C] transition-colors">{t.footer.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-[#111111]/70">
              <li><Link to="/terms" className="hover:text-[#C4161C] transition-colors">{t.footer.terms}</Link></li>
              <li><Link to="/privacy" className="hover:text-[#C4161C] transition-colors">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E4E6E8] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#111111]/40">
            © {new Date().getFullYear()} KUSI Fútbol Tours. {t.footer.rights}
          </p>
          <div className="flex gap-6 grayscale opacity-20">
            {/* Placeholder for social icons */}
            <div className="w-5 h-5 bg-black rounded-sm"></div>
            <div className="w-5 h-5 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
