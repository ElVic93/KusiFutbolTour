
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import FAQAccordion from '../components/FAQAccordion';
import { BadgeVariant } from '../types';
import { ASSETS } from '../constants';
import { getWhatsAppLink } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section con Foto Real */}
      <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="mb-6 flex gap-2">
              <Badge variant={BadgeVariant.AMBER}>{t.hero.badgeLimited}</Badge>
              <Badge variant={BadgeVariant.INFO}>{t.hero.badgeGroup}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Vive un partido de Universitario <span className="text-[#C4161C]">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#111111]/70 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {t.hero.trustChips.map((chip, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#111111]/60 bg-white px-3 py-1 rounded-full border border-[#E4E6E8]">
                  {chip}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={getWhatsAppLink(language)} 
                trackingLabel="Hero Primary" 
                trackingSection="Hero"
                variant="primary" 
                className="px-8"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#includes" variant="secondary" className="px-8">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Foto 1: Selfie Estadio */}
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl bg-[#E4E6E8] border-4 border-white">
              <img 
                src={ASSETS.hero} 
                alt="Fans KUSI en el estadio" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[20px] shadow-xl border border-[#E4E6E8] hidden lg:block animate-in fade-in slide-in-from-left-4 duration-1000">
              <p className="text-sm font-bold text-[#C4161C] uppercase tracking-wider mb-1">{t.hero.nextMatch}</p>
              <p className="text-xl font-bold">Próximo Partido en Casa</p>
              <p className="text-[#111111]/60">Estadio Monumental U • Lima</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whatIsKusi.title}</h2>
          <p className="text-xl text-[#111111]/70 max-w-3xl mx-auto leading-relaxed">
            {t.whatIsKusi.description}
          </p>
        </div>
      </section>

      <section id="includes" className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.includes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                {t.includes.subtitle}
              </h3>
              <ul className="space-y-4">
                {t.includes.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#111111]/80">
                    <div className="w-1.5 h-1.5 bg-[#C4161C] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm">✕</span>
                {t.excludes.title}
              </h3>
              <ul className="space-y-4 opacity-70">
                {t.excludes.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#111111]/80">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{t.howItWorksPage.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {t.howItWorksPage.steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#C4161C] text-[#C4161C] font-bold flex items-center justify-center mb-6">0{i+1}</div>
                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-[#111111]/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.pricingPage.title}</h2>
          <p className="text-lg text-[#111111]/60 mb-10">{t.pricingPage.subtitle}</p>
          <Card className="border-2 border-[#C4161C] py-10">
            <div className="text-5xl font-black mb-2 text-[#C4161C]">S/ 400</div>
            <p className="text-[#111111]/60 mb-8">{t.pricingPage.perPerson} • {t.pricingPage.includesTax}</p>
            <Button 
              href={getWhatsAppLink(language)} 
              trackingLabel="Home Pricing CTA" 
              trackingSection="Pricing"
              variant="primary" 
              className="px-12 h-[56px] text-lg"
            >
              {t.pricingPage.cta}
            </Button>
          </Card>
        </div>
      </section>

      <section id="trust" className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.safety.title}</h2>
            <p className="text-lg text-[#111111]/70 mb-8 leading-relaxed">{t.safety.description}</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div><h4 className="font-bold">{t.safety.monitoring}</h4><p className="text-sm text-[#111111]/60">{t.safety.monitoringDesc}</p></div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div><h4 className="font-bold">{t.safety.protocols}</h4><p className="text-sm text-[#111111]/60">{t.safety.protocolsDesc}</p></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F8FA] rounded-[24px] p-4 text-center border border-[#E4E6E8]">
             {/* Foto 2: Selfie Tribuna */}
             <img 
               src={ASSETS.safety} 
               className="rounded-[16px] shadow-lg mb-6 mx-auto object-cover h-[400px] w-full border-2 border-white" 
               alt="Garantía de seguridad KUSI" 
             />
             <p className="italic text-[#111111]/50 text-sm px-4">"{t.safety.testimonial}" — Cliente KUSI</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.faqPage.title}</h2>
          <FAQAccordion items={t.faqPage.items} />
        </div>
      </section>

      <section id="final-cta" className="py-24 bg-[#C4161C] text-white overflow-hidden relative">
        <div className="max-w-[1120px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para la próxima fecha?</h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">Los cupos son limitados (máx. 10 personas por grupo). Asegura tu lugar hoy mismo.</p>
          <Button 
            href={getWhatsAppLink(language)} 
            trackingLabel="Final CTA" 
            trackingSection="Bottom"
            variant="secondary" 
            className="px-12 h-[56px] text-lg hover:scale-105"
          >
            {t.nav.reserve}
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
      </section>
    </div>
  );
};

export default Home;
