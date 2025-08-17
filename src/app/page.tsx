"use client";
import Logo from '@/assets/logo.png';
import Preloader from '@/components/Preloader';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';
import { Calendar, X as CloseIcon, Globe, Heart, Lightbulb, Mail, MapPin, Menu as MenuIcon, Palette, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [currentArtisan, setCurrentArtisan] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const artisans = [
    { name: "Aminata Diallo", craft: "Textile Weaving", image: "https://images.unsplash.com/photo-1594736797933-d0f1dd2b3d8f?w=400&h=400&fit=crop" },
    { name: "Mamadou Seck", craft: "Wood Carving", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Fatou Ba", craft: "Pottery", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop" }
  ];

  const themes = [
    { title: "Cultural Heritage", icon: Heart, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Innovation Hub", icon: Lightbulb, description: "Sed do eiusmod tempor incididunt ut labore et dolore." },
    { title: "Pan-African Unity", icon: Globe, description: "Ut enim ad minim veniam, quis nostrud exercitation." },
    { title: "Artistic Excellence", icon: Palette, description: "Duis aute irure dolor in reprehenderit in voluptate." },
    { title: "Youth Engagement", icon: Users, description: "Excepteur sint occaecat cupidatat non proident." }
  ];

  const timeline = [
    { day: "Day 1", title: "Opening Ceremony", description: "Keynote on Pan-African cultural future" },
    { day: "Day 2", title: "Creative Industries", description: "Panels on economics & innovation" },
    { day: "Day 3", title: "Artisan Showcase", description: "Traditional crafts reimagined" },
    { day: "Day 4", title: "Digital Africa", description: "Technology meets tradition" },
    { day: "Day 5", title: "Closing Concert", description: "Cultural repatriation dialogue" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtisan((prev) => (prev + 1) % artisans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          {/* Hero Section (replace this whole section) */}
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
              {/* Hero content block — align bottom-left (replace your current content-on-top block) */}
              <motion.div
                className="relative z-10 h-full"
                initial="hidden"
                animate="visible"
                variants={heroContainer}
              >
                <div className="absolute bottom-0 left-0 w-full px-4 md:px-10 pb-10 md:pb-14 max-w-5xl">
                  <motion.h1
                    variants={heroItem}
                    className="text-left text-white font-serif leading-[1.05] text-5xl md:text-7xl"
                  >
                    Dakar 2025: The Pan-African Arts Renaissance
                  </motion.h1>

                  <motion.p
                    variants={heroItem}
                    className="mt-4 md:mt-6 text-left text-white/90 text-lg md:text-xl max-w-2xl"
                  >
                    Five days of art, dialogue, and innovation — reimagining Dakar&apos;s legacy as the cultural capital of Africa.
                  </motion.p>

                  <motion.div
                    variants={heroItem}
                    className="mt-6 md:mt-8 flex items-center gap-4"
                  >
                    <AnimatedButton variant="primary">
                      Register Now
                    </AnimatedButton>

                    <AnimatedButton variant="secondary">
                      Explore Program
                    </AnimatedButton>
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
                  <Image
                    src={Logo}
                    alt="Festival logo"
                    priority
                    width={0}
                    height={0}
                    sizes="200px"
                    className="h-16 w-auto object-contain mt-4"
                  />
                </div>

                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="primary-menu"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="absolute left-1/2 top-6 -translate-x-1/2 flex items-center gap-2 focus:outline-none cursor-pointer"
                >
                  <span className={`transition-colors ${menuOpen ? 'text-[#2C2C2C]' : 'text-white'}`}>
                    {menuOpen ? (
                      <CloseIcon className="w-6 h-6 transition-transform duration-300 rotate-90" />
                    ) : (
                      <MenuIcon className="w-6 h-6 transition-transform duration-300 rotate-0" />
                    )}
                  </span>
                  <span className={`text-sm tracking-[0.35em] transition-colors ${menuOpen ? 'text-[#2C2C2C]' : 'text-white'}`}>
                    MENU
                  </span>
                </button>
              </div>
            </header>
          </section>

          {/* About Dakar 2025 */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                    alt="1966 Festival"
                    className="rounded-lg grayscale"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                    alt="Modern Dakar"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-serif mb-8">About Dakar 2025</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  In 1966, Dakar hosted the Premier Festival Mondial des Arts Nègres — a landmark moment in Pan-African identity and artistic pride. In 2025, Dakar once again invites the world to witness Africa's cultural renaissance.
                </p>

                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                    <div className="text-gray-600">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
                    <div className="text-gray-600">Exhibitors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">30+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Themes & Goals */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-serif text-center mb-16">Our Themes & Goals</h2>

              <div className="grid md:grid-cols-5 gap-8">
                {themes.map((theme, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <theme.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{theme.title}</h3>
                    <p className="text-gray-600 text-sm">{theme.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Exhibition */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-gray-100 p-12 rounded-lg">
                <h3 className="text-3xl font-serif mb-6">Heritage Reimagined</h3>
                <p className="text-gray-700 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" alt="Artifact 1" className="rounded" />
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Artifact 2" className="rounded" />
                </div>
              </div>

              <div className="bg-orange-50 p-12 rounded-lg">
                <h3 className="text-3xl font-serif mb-6">Gallery Exhibitions</h3>
                <p className="text-gray-700 mb-8">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Galerie Nationale du Sénégal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Contemporary African Arts Gallery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Pan-African Heritage Center</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                View Exhibition Details
              </button>
            </div>
          </section>

          {/* Program Overview Timeline */}
          <section className="py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-serif text-center mb-16">Program Overview</h2>

              {/* Historical Timeline */}
              <div className="mb-16 text-center">
                <div className="flex items-center justify-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm">1966</div>
                    <div className="text-xs text-gray-400">Festival Mondial</div>
                  </div>
                  <div className="w-16 h-px bg-gray-600"></div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm">1977</div>
                    <div className="text-xs text-gray-400">FESTAC Lagos</div>
                  </div>
                  <div className="w-16 h-px bg-gray-600"></div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold">2025</div>
                    <div className="text-xs text-orange-300">Dakar Renaissance</div>
                  </div>
                </div>
              </div>

              {/* 5-Day Program */}
              <div className="grid md:grid-cols-5 gap-6">
                {timeline.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
                    <h4 className="text-lg mb-2">{day.title}</h4>
                    <p className="text-sm text-gray-400">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Artisanal Heritage Pavilion */}
          <section className="py-20 px-4 bg-amber-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1594736797933-d0f1dd2b3d8f?w=600&h=400&fit=crop"
                    alt="Senegalese Artisan"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-serif mb-6">Artisanal Heritage Pavilion</h2>
                  <p className="text-xl text-gray-700 mb-8">Traditional crafts reimagined for the future.</p>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Artisan Carousel */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">Featured Artisans</h3>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                  <img
                    src={artisans[currentArtisan].image}
                    alt={artisans[currentArtisan].name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold mb-2">{artisans[currentArtisan].name}</h4>
                  <p className="text-orange-500 mb-4">{artisans[currentArtisan].craft}</p>
                  <div className="flex justify-center space-x-2">
                    {artisans.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentArtisan ? 'bg-orange-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentArtisan(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Africa Pavilion */}
          <section className="py-20 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">Digital Africa Pavilion</h2>
              <p className="text-xl mb-16 max-w-3xl mx-auto">
                Where technology meets tradition. Experience the future of African innovation through VR installations, AI art, and conversations with tech pioneers.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-900 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">VR Installations</h3>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">AI Art Gallery</h3>
                  <p className="text-gray-400">Sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Tech Founder Panels</h3>
                  <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
              </div>

              <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                Join the Digital Pavilion
              </button>
            </div>
          </section>

          {/* Cultural Repatriation & Education */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-8">Cultural Repatriation & Education</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Education is the bridge between past and future. Explore partnerships that bring Africa's cultural heritage back to its people — and inspire a new generation.
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
                  alt="Heritage artifacts"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Students in workshop"
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4" style={{ backgroundColor: '#F5E6D3' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-serif mb-8">Be part of Africa's cultural renaissance.</h2>
              <p className="text-xl text-gray-700 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join us for five transformative days in Dakar.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg text-xl font-medium transition-colors">
                Register Now
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Mission</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Program</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Exhibitions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Speakers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Partners</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Sponsors</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Galleries</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Institutions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
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
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;