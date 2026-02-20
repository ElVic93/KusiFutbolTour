
import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center">{t.faqPage.title}</h1>
        <p className="text-[#111111]/60 text-center mb-16 text-lg">{t.faqPage.subtitle}</p>
        
        <FAQAccordion items={t.faqPage.items} />

        <div className="mt-20 p-8 bg-[#F7F8FA] rounded-[24px] text-center border border-[#E4E6E8]">
          <h3 className="text-xl font-bold mb-4">{t.faqPage.moreQuestions}</h3>
          <p className="text-[#111111]/60 mb-8">{language === 'es' ? 'Escríbenos directamente y un miembro del equipo te atenderá en minutos.' : 'Write to us directly and a team member will assist you in minutes.'}</p>
          {/* Fix: Passed only language to getWhatsAppLink and moved tracking labels to Button props */}
          <Button 
            href={getWhatsAppLink(language)} 
            trackingLabel="FAQ Help" 
            trackingSection="FAQPage" 
            variant="primary" 
            className="px-12"
          >
            {t.faqPage.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
