
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[900px] mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.howItWorksPage.title}</h1>
        <p className="text-xl text-[#111111]/60 leading-relaxed">
          {t.howItWorksPage.subtitle}
        </p>
      </div>

      <div className="max-w-[800px] mx-auto space-y-12">
        {t.howItWorksPage.steps.map((s, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
            {i !== t.howItWorksPage.steps.length - 1 && (
              <div className="hidden md:block absolute left-[27px] top-[60px] bottom-[-48px] w-[2px] bg-[#E4E6E8]"></div>
            )}
            <div className="w-14 h-14 rounded-2xl bg-[#C4161C] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg shadow-[#C4161C]/20">
              0{i+1}
            </div>
            <div className="pt-2">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-[#111111]/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[800px] mx-auto mt-24">
        <Card className="bg-[#F7F8FA] border-none text-center py-12">
          <h2 className="text-2xl font-bold mb-6">{t.howItWorksPage.ctaTitle}</h2>
          {/* Fix: Passed only language to getWhatsAppLink and moved tracking labels to Button props */}
          <Button 
            href={getWhatsAppLink(language)} 
            trackingLabel="HowItWorks Final CTA" 
            trackingSection="HowItWorks" 
            variant="primary" 
            className="px-12 h-[56px] text-lg"
          >
            {t.howItWorksPage.ctaButton}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
