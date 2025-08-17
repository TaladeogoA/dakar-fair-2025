'use client';

import Logo from '@/assets/logo.png';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion, Variants } from 'framer-motion';
import { X as CloseIcon, Menu as MenuIcon } from 'lucide-react';
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

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="relative h-screen overflow-hidden">
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

            <header className="absolute top-0 left-0 w-full z-20">
                <div className="relative h-60">
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
    );
}