
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { BadgeVariant } from '../types';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <Badge variant={BadgeVariant.AMBER}>{t.pricingPage.subtitle}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">{t.pricingPage.title}</h1>
          <p className="text-xl text-[#111111]/60">{t.pricingPage.subtitle}</p>
        </div>

        <Card className="border-2 border-[#C4161C] p-0 overflow-hidden mb-12">
          <div className="bg-[#C4161C] p-8 text-white text-center">
            <h2 className="text-2xl font-bold opacity-80 mb-2">KUSI Matchday</h2>
            <div className="text-6xl font-black">S/ 400</div>
            <p className="mt-2 opacity-80">{t.pricingPage.perPerson} / {t.pricingPage.includesTax}</p>
          </div>
          <div className="p-8 md:p-12 bg-white">
            <h3 className="font-bold text-lg mb-6 text-center">{t.pricingPage.whyPay}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.pricingPage.benefits.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#C4161C] font-bold text-xl">✓</div>
                  <div>
                    <h4 className="font-bold text-[#111111]">{item.title}</h4>
                    <p className="text-sm text-[#111111]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#E4E6E8]">
               {/* Fix: Passed only language to getWhatsAppLink and moved tracking labels to Button props */}
               <Button 
                href={getWhatsAppLink(language)} 
                trackingLabel="Pricing Detailed CTA" 
                trackingSection="PricingPage" 
                fullWidth 
                variant="primary" 
                className="h-[60px] text-xl"
               >
                  {t.pricingPage.cta}
               </Button>
               <p className="text-center text-xs text-[#111111]/40 mt-4">{t.pricingPage.paymentNote}</p>
            </div>
          </div>
        </Card>

        <section className="space-y-8">
          <h3 className="text-2xl font-bold">{t.pricingPage.infoTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-[#E4E6E8] rounded-[18px]">
              <h4 className="font-bold mb-2">{t.pricingPage.reservaTitle}</h4>
              <p className="text-[#111111]/70 text-sm">{t.pricingPage.reservaDesc}</p>
            </div>
            <div className="p-6 bg-white border border-[#E4E6E8] rounded-[18px]">
              <h4 className="font-bold mb-2">{t.pricingPage.groupsTitle}</h4>
              <p className="text-[#111111]/70 text-sm">{t.pricingPage.groupsDesc}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
