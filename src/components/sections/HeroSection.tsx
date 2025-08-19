'use client';

import Logo from '@/assets/logo.png';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, X as CloseIcon, Menu as MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const heroContainer: Variants = {
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
        transition: { duration: 0.6, ease: 'easeInOut' },
    },
};

const navItem: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { t, locale, setLocale } = useI18n();

    const textColor = menuOpen ? '#2C2C2C' : '#FFFFFF';

    const navItems = [
        { key: 'exhibitions', label: t('nav.items.exhibitions') },
        { key: 'program', label: t('nav.items.program') },
        { key: 'pavilion', label: t('nav.items.pavilion') },
        { key: 'voices', label: t('nav.items.voices') },
        { key: 'about', label: t('nav.items.about') },
        { key: 'partners', label: t('nav.items.partners') },
    ];

    return (
        <section className="relative h-screen overflow-hidden">
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-full' : 'translate-y-0'}`}>
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/videos/screenshot.png"
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div className="relative z-10 h-full" initial="hidden" animate="visible" variants={heroContainer}>
                    <div className="absolute bottom-7 left-2 md:left-7 w-full px-2 md:px-10 pb-10 md:pb-14 max-w-5xl">
                        <motion.h1 variants={heroItem} className="text-left text-white font-serif leading-[1.05] text-5xl md:text-7xl">
                            {t('hero.title')}
                        </motion.h1>

                        <motion.p variants={heroItem} className="mt-4 md:mt-6 text-left text-white/90 text-lg md:text-xl max-w-2xl">
                            {t('hero.subtitle')}
                        </motion.p>

                        <motion.div variants={heroItem} className="px-2 md:px-0 mt-6 md:mt-8 flex items-stretch gap-4">
                            <AnimatedButton variant="primary">{t('hero.register')}</AnimatedButton>
                            <AnimatedButton variant="secondary">{t('hero.explore')}</AnimatedButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className={`absolute inset-0 z-10 bg-[#F4F1EB] transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="h-full w-full flex items-center justify-center">
                    <motion.ul
                        className="text-[#2C2C2C] text-3xl md:text-5xl font-serif space-y-6 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    >
                        {navItems.map((item) => (
                            <motion.li key={item.key} variants={navItem}>
                                <button
                                    type="button"
                                    className="group inline-flex items-center gap-4 cursor-pointer select-none"
                                >
                                    <span className="relative inline-block h-6 w-6 text-[#2C2C2C] transition-transform duration-300 ease-out group-hover:rotate-45">
                                        <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-current" />
                                        <span className="absolute left-1/2 top-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                                    </span>
                                    <span className="transition-colors duration-200 ease-out group-hover:text-[#E67E22]">
                                        {item.label}
                                    </span>
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                </nav>
            </div>

            <header className="absolute top-0 left-0 w-full z-20">
                <div className="relative h-20">
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
                        <span className="transition-colors" style={{ color: textColor }}>
                            {menuOpen ? <CloseIcon className="w-6 h-6 transition-transform duration-300 rotate-90" /> : <MenuIcon className="w-6 h-6 transition-transform duration-300 rotate-0" />}
                        </span>
                        <span className="text-sm tracking-[0.35em]" style={{ color: textColor }}>{t('nav.menu')}</span>
                    </button>

                    <div className="absolute right-4 top-6">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setLangOpen((o) => !o)}
                                className="inline-flex items-center gap-1 px-2 py-1 text-sm tracking-[0.35em]"
                                style={{ color: textColor }}
                                aria-haspopup="listbox"
                                aria-expanded={langOpen}
                            >
                                <span>{locale === 'fr' ? 'FR' : 'EN'}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {langOpen && (
                                <ul
                                    role="listbox"
                                    className="absolute right-0 mt-2 min-w-[4.5rem] rounded-sm border border-black/10 bg-white/90 backdrop-blur text-[#2C2C2C] text-xs tracking-[0.35em]"
                                >
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setLocale('fr');
                                                setLangOpen(false);
                                            }}
                                            className={`block w-full px-3 py-2 text-left ${locale === 'fr' ? 'font-semibold' : ''}`}
                                        >
                                            FR
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setLocale('en');
                                                setLangOpen(false);
                                            }}
                                            className={`block w-full px-3 py-2 text-left ${locale === 'en' ? 'font-semibold' : ''}`}
                                        >
                                            EN
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}