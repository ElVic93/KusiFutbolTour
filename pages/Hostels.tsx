
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const Hostels: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hostelsPage.title}</h1>
          <p className="text-xl text-[#111111]/60 leading-relaxed max-w-2xl mx-auto">
            {t.hostelsPage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-[#111111]/70 mb-8 leading-relaxed">
              {t.hostelsPage.description}
            </p>
            <h3 className="text-2xl font-bold mb-6">{t.hostelsPage.benefitsTitle}</h3>
            <ul className="space-y-4">
              {t.hostelsPage.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm flex-shrink-0">✓</div>
                  <span className="text-[#111111]/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F7F8FA] rounded-[32px] p-8">
             <img src="https://picsum.photos/600/400?grayscale&random=hotel" className="rounded-[20px] shadow-lg mb-8" alt="Hotel partner" />
             {/* Fix: Passed only language to getWhatsAppLink and moved tracking labels to Button props */}
             <Button 
              href={getWhatsAppLink(language)} 
              trackingLabel="Hotel Partner CTA" 
              trackingSection="HotelsPage" 
              fullWidth 
              variant="primary" 
              className="h-[56px] text-lg"
             >
                {t.hostelsPage.cta}
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostels;
