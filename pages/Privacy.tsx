
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[800px] mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold mb-8">{t.privacyPage.title}</h1>
        <div className="text-[#111111]/70 leading-relaxed">
          <p>{t.privacyPage.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
