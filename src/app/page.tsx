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
import ProgramHighlightsSection from '@/components/sections/ProgramHighlightsSection';
import WhatsHappeningSection from '@/components/sections/WhatsHappeningSection';
import WhenWhereSection from '@/components/sections/WhenWhereSection';
import { useI18n } from '@/i18n/I18nProvider';
import { translations } from '@/i18n/translations';
import { useMemo, useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
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

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-white">
          <HeroSection />
          <AboutDakarSection partnerLogos={partnerLogos} />
          <ProgramHighlightsSection highlights={highlights} />
          <WhatsHappeningSection items={whatsItems} />
          <CuratedPavilionCarousel />
          <WhenWhereSection />

          {/* Final CTA */}
          {/* <section className="py-20 px-4" style={{ backgroundColor: '#F5E6D3' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-serif mb-8">Be part of Africa&apos;s cultural renaissance.</h2>
              <p className="text-xl text-gray-700 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join us for five transformative days in Dakar.</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg text-xl font-medium transition-colors">Register Now</button>
            </div>
          </section> */}

          {/* Footer */}
          {/* <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Mission
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Program</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Schedule
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Exhibitions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Speakers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Workshops
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Partners</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Sponsors
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Galleries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Institutions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Media
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Dakar, Senegal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>info@dakar2025.org</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+221 33 XXX XXXX</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p className="text-lg font-serif mb-2">Dakar 2025 — Pan-African Arts Renaissance</p>
                <p className="text-sm">&copy; 2025 Dakar Arts Festival. All rights reserved.</p>
              </div>
            </div>
          </footer> */}
        </div>
      )}
    </>
  );
};

export default Home;