
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[800px] mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold mb-8">{t.termsPage.title}</h1>
        
        <div className="space-y-8 text-[#111111]/70 leading-relaxed">
          {t.termsPage.sections.map((section: any, index: number) => (
            <section key={index}>
              <h2 className="text-xl font-bold text-[#111111] mb-3">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
