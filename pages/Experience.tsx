
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { ASSETS } from '../constants';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{t.experiencePage.title}</h1>
        
        <section className="mb-12">
          {/* Foto 3: Grupo en el bar */}
          <div className="relative">
            <img 
              src={ASSETS.experienceBanner} 
              alt="Grupo KUSI en el punto de encuentro" 
              className="w-full h-[450px] object-cover rounded-[24px] mb-8 shadow-xl border border-[#E4E6E8]" 
            />
            <div className="absolute top-4 right-4">
              <Badge variant={BadgeVariant.INFO}>{t.experiencePage.realPhoto}</Badge>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-[#C4161C]">{t.experiencePage.logisticsTitle}</h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed">
            {t.experiencePage.logisticsDesc}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t.experiencePage.scheduleTitle}</h2>
          <div className="grid grid-cols-1 gap-4">
            {t.experiencePage.schedule.map((item, i) => (
              <div key={i} className="flex gap-6 items-center p-5 border border-[#E4E6E8] rounded-[18px] hover:border-[#C4161C]/30 transition-colors">
                <span className="font-bold text-[#C4161C] text-lg w-24 flex-shrink-0">{item.time}</span>
                <span className="text-[#111111]/80 font-medium">{item.task}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-[#F7F8FA] border-none p-10">
            <h2 className="text-2xl font-bold mb-4">{t.experiencePage.paymentTitle}</h2>
            <p className="text-[#111111]/70 leading-relaxed mb-6">
              {t.experiencePage.paymentDesc}
            </p>
            <div className="p-4 bg-white rounded-xl border border-red-100 flex items-start gap-3">
              <span className="text-red-500 font-bold">!</span>
              <p className="text-sm font-semibold text-[#C4161C]">
                {t.experiencePage.paymentNote}
              </p>
            </div>
          </Card>
        </section>

        <div className="text-center pt-8 border-t border-[#E4E6E8]">
          <h3 className="text-2xl font-bold mb-6">{t.experiencePage.footerQuestion}</h3>
          <Button 
            href={getWhatsAppLink(language)} 
            trackingLabel="Experience Contact" 
            trackingSection="ExperienceDetail" 
            variant="primary" 
            className="px-12 h-[56px] text-lg"
          >
            {t.faqPage.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Importación faltante para el Badge
import Badge from '../components/Badge';
import { BadgeVariant } from '../types';

export default Experience;
