
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const GreekFlag = () => (
  <svg width="20" height="14" viewBox="0 0 27 18" className="rounded-sm">
    <rect width="27" height="2" fill="#0D5EAF"/>
    <rect y="2" width="27" height="2" fill="#FFFFFF"/>
    <rect y="4" width="27" height="2" fill="#0D5EAF"/>
    <rect y="6" width="27" height="2" fill="#FFFFFF"/>
    <rect y="8" width="27" height="2" fill="#0D5EAF"/>
    <rect y="10" width="27" height="2" fill="#FFFFFF"/>
    <rect y="12" width="27" height="2" fill="#0D5EAF"/>
    <rect y="14" width="27" height="2" fill="#FFFFFF"/>
    <rect y="16" width="27" height="2" fill="#0D5EAF"/>
    <rect width="10" height="10" fill="#0D5EAF"/>
    <rect x="1" y="4" width="8" height="2" fill="#FFFFFF"/>
    <rect x="4" y="1" width="2" height="8" fill="#FFFFFF"/>
  </svg>
);

const EnglishFlag = () => (
  <svg width="20" height="14" viewBox="0 0 60 30" className="rounded-sm">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFFFFF" strokeWidth="10"/>
    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'gr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('gr')}
        className="p-2 h-8 w-10"
      >
        <GreekFlag />
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="p-2 h-8 w-10"
      >
        <EnglishFlag />
      </Button>
    </div>
  );
};
