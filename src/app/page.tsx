"use client";
import AuLogo from '@/assets/partner-au.jpg';
import AwhfLogo from '@/assets/partner-awhf.jpg';
import GoogleArtsLogo from '@/assets/partner-googlearts.webp';
import MuseeLogo from '@/assets/partner-musee.png';
import UcadLogo from '@/assets/partner-ucad.png';
import ZeitzLogo from '@/assets/partner-zeitz.jpg';
import Preloader from '@/components/Preloader';
import AboutDakarSection from '@/components/sections/AboutDakarSection';
import CuratedPavilionCarousel from '@/components/sections/CuratedPavilionCarousel';
import HeroSection from '@/components/sections/HeroSection';
import ParallaxFooter from '@/components/sections/ParallaxFooter';
import ProgramHighlightsSection from '@/components/sections/ProgramHighlightsSection';
import WhatsHappeningSection from '@/components/sections/WhatsHappeningSection';
import WhenWhereSection from '@/components/sections/WhenWhereSection';
import BackToTopButton from '@/components/ui/BackToTopButton';
import { useI18n } from '@/i18n/I18nProvider';
import { translations } from '@/i18n/translations';
import { useEffect, useMemo, useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const { locale } = useI18n();

  const partnerLogos = [
    { src: MuseeLogo, alt: 'Musée des Civilisations Noires' },
    { src: ZeitzLogo, alt: 'Zeitz MOCAA' },
    { src: GoogleArtsLogo, alt: 'Google Arts & Culture' },
    { src: AwhfLogo, alt: 'African World Heritage Fund' },
    { src: UcadLogo, alt: 'Cheikh Anta Diop University' },
    { src: AuLogo, alt: 'African Union' },
  ];

  const highlights = useMemo(() => translations[locale].highlights, [locale]);
  const whatsItems = useMemo(() => translations[locale].whats.events, [locale]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      setContentReady(true);
    }, 100);
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div
        className={`relative min-h-screen bg-white transition-opacity duration-300 ${contentReady ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        <main className="relative z-10 mb-[100vh]">
          <HeroSection />
          <AboutDakarSection partnerLogos={partnerLogos} />
          <WhatsHappeningSection items={whatsItems} />
          <ProgramHighlightsSection highlights={highlights} />
          <CuratedPavilionCarousel />
          <WhenWhereSection />
        </main>
        <ParallaxFooter />
        <BackToTopButton />
      </div>
    </>
  );
};

export default Home;