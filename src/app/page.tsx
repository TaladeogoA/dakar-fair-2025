"use client";
import Logo from '@/assets/logo.png';
import AuLogo from '@/assets/partner-au.jpg';
import AwhfLogo from '@/assets/partner-awhf.jpg';
import GoogleArtsLogo from '@/assets/partner-googlearts.webp';
import MuseeLogo from '@/assets/partner-musee.png';
import UcadLogo from '@/assets/partner-ucad.png';
import ZeitzLogo from '@/assets/partner-zeitz.jpg';
import Preloader from '@/components/Preloader';
import CuratedPavilionCarousel from '@/components/sections/CuratedPavilionCarousel';
import WhenWhereSection from '@/components/sections/WhenWhereSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  X as CloseIcon,
  Menu as MenuIcon
} from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const partnerLogos = [
    { src: MuseeLogo, alt: "Musée des Civilisations Noires" },
    { src: ZeitzLogo, alt: "Zeitz MOCAA" },
    { src: GoogleArtsLogo, alt: "Google Arts & Culture" },
    { src: AwhfLogo, alt: "African World Heritage Fund" },
    { src: UcadLogo, alt: "Cheikh Anta Diop University" },
    { src: AuLogo, alt: "African Union" },
  ];

  const highlights = [
    {
      date: 'Thu • May 15, 2025',
      title: 'Opening Night Premiere',
      blurb: 'Red-carpet screening and welcome concert at the Exhibition Centre Grand Hall.',
    },
    {
      date: 'Fri • May 16, 2025',
      title: 'Creative Industries Forum',
      blurb: 'Financing, distribution, and cross-continental co-production talks.',
    },
    {
      date: 'Sat • May 17, 2025',
      title: 'Artisanal Heritage Lab',
      blurb: 'Live craft ateliers and design collaborations with master artisans.',
    },
    {
      date: 'Sun • May 18, 2025',
      title: 'Digital Africa Summit',
      blurb: 'XR installations, AI art gallery, and founder keynotes.',
    },
    {
      date: 'Mon • May 19, 2025',
      title: 'Closing Gala & Awards',
      blurb: 'Celebrating outstanding work from across the continent.',
    },
  ];

  const heroContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const heroItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const sectionContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const sectionItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeInOut" },
    },
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            {/* Sliding hero content (video + overlay + center content) */}
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-full' : 'translate-y-0'}`}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/output.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/videos/poster.jpg"
              />
              <div className="absolute inset-0 bg-black/50" />
              {/* Hero content block — align bottom-left */}
              <motion.div className="relative z-10 h-full" initial="hidden" animate="visible" variants={heroContainer}>
                <div className="absolute bottom-0 left-0 w-full px-4 md:px-10 pb-10 md:pb-14 max-w-5xl">
                  <motion.h1 variants={heroItem} className="text-left text-white font-serif leading-[1.05] text-5xl md:text-7xl">
                    Dakar 2025: The Pan-African Arts Renaissance
                  </motion.h1>

                  <motion.p variants={heroItem} className="mt-4 md:mt-6 text-left text-white/90 text-lg md:text-xl max-w-2xl">
                    Five days of art, dialogue, and innovation — reimagining Dakar&apos;s legacy as the cultural capital of Africa.
                  </motion.p>

                  <motion.div variants={heroItem} className="mt-6 md:mt-8 flex items-center gap-4">
                    <AnimatedButton variant="primary">Register Now</AnimatedButton>
                    <AnimatedButton variant="secondary">Explore Program</AnimatedButton>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Full-page menu panel (slides down) */}
            <div className={`absolute inset-0 z-10 bg-[#F4F1EB] transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
              <nav className="h-full w-full flex items-center justify-center">
                <ul className="text-[#2C2C2C] text-3xl md:text-5xl font-serif space-y-6 text-center">
                  <li>Exhibitions</li>
                  <li>Learning and research</li>
                  <li>Another one</li>
                  <li>Etc</li>
                </ul>
              </nav>
            </div>

            {/* Top bar */}
            <header className="absolute top-0 left-0 w-full z-20">
              <div className="relative h-60">
                {/* Logo top-left */}
                <div className="absolute top-0 left-4">
                  <Image src={Logo} alt="Festival logo" priority width={0} height={0} sizes="200px" className="h-16 w-auto object-contain mt-4" />
                </div>

                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="primary-menu"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="absolute left-1/2 top-6 -translate-x-1/2 flex items-center gap-2 focus:outline-none cursor-pointer"
                >
                  <span className={`transition-colors ${menuOpen ? 'text-[#2C2C2C]' : 'text-white'}`}>
                    {menuOpen ? <CloseIcon className="w-6 h-6 transition-transform duration-300 rotate-90" /> : <MenuIcon className="w-6 h-6 transition-transform duration-300 rotate-0" />}
                  </span>
                  <span className={`text-sm tracking-[0.35em] transition-colors ${menuOpen ? 'text-[#2C2C2C]' : 'text-white'}`}>MENU</span>
                </button>
              </div>
            </header>
          </section>

          {/* About Dakar 2025 */}
          <section className="py-24 px-4 bg-[#2E5339] text-white">
            <div className="max-w-7xl mx-auto">
              {/* Lede + body */}
              <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
                {/* Lede (big statement) */}
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="md:col-span-7 text-4xl md:text-6xl leading-tight font-sans text-white"
                >
                  A reimagined International Fair returns to Dakar in 2025. A landmark meeting point for film, design, music, and technology shaping the Pan-African future.
                </motion.h2>

                {/* Supporting copy + CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="md:col-span-5 md:pl-6"
                >
                  <p className="text-base md:text-lg text-white leading-relaxed">
                    Hosted on the renovated grounds of the original Exhibition Centre, the 2025 Fair advances five core goals: Intellectual leadership in Pan-African cultural discourse, economic diversification through creative industries, the
                    preservation and innovation of artisanal heritage, Digital Africa leadership, and education through cultural repatriation.
                  </p>

                  <a href="#program" className="group inline-flex items-center gap-2 mt-6 text-white hover:text-gray-100 transition-colors">
                    <span className="text-sm tracking-widest">ABOUT THE FAIR</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </motion.div>
              </div>

              {/* Partner/Institution logos row (placeholders with subtle interactions) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
              >
                {partnerLogos.map((logo, i) => (
                  <div key={i} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className="grayscale hover:grayscale-0 object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Program Highlights (Agenda at a glance) */}
          <section id="program" className="py-24 px-4 bg-white">
            <motion.div
              className="max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={sectionContainer}
            >
              {/* Kicker + heading */}
              <motion.div variants={sectionItem}>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1 w-12 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                  <span className="uppercase tracking-[0.2em] text-xs" style={{ color: '#2E5339' }}>
                    Agenda at a glance
                  </span>
                </div>
                <h3 className="mt-6 text-3xl md:text-5xl font-serif text-gray-900">Program Highlights</h3>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Five days hosted at the renovated Exhibition Centre in Dakar — film premieres, forums, ateliers, and a closing gala.
                </p>
              </motion.div>

              {/* Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {highlights.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href="#agenda"
                    variants={sectionItem}
                    whileHover={{ y: -2 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5"
                  >
                    {/* hover overlay */}
                    <motion.span
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute left-0 top-0 h-full"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(46,83,57,0.08) 0%, rgba(46,83,57,0.03) 100%)',
                        zIndex: 0,
                      }}
                    />
                    {/* top accent line */}
                    <span className="absolute left-0 top-0 w-full h-[3px]" style={{ backgroundColor: idx === 0 ? '#E67E22' : '#2E5339', opacity: idx === 0 ? 1 : 0.8 }} />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4" style={{ color: '#2E5339' }} />
                        <span>{item.date}</span>
                      </div>
                      <h4 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-sm text-gray-600">{item.blurb}</p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: '#2E5339' }}>
                        <span className="tracking-widest">EXPLORE</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div variants={sectionItem} className="mt-12 text-center">
                <AnimatedButton variant="primary" className="px-8">
                  View full agenda
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </section>

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