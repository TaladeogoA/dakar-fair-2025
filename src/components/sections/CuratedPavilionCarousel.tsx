'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { easeInOut, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type SlideImage = { src: string; alt: string };

const images: SlideImage[] = [
    { src: '/images/pavillion-1.jpg', alt: 'Pavilion artwork — Threads of Memory' },
    { src: '/images/pavillion-2.webp', alt: 'Pavilion render — Future/Archive' },
    { src: '/images/pavillion-3.jpg', alt: 'Installation — Material & Memory' },
];

const HOLD_MS = 3000;
const FADE_S = 0.8;

export default function CuratedPavilionCarousel() {
    const { t } = useI18n();
    const reduceMotion = useReducedMotion();
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (reduceMotion) return;
        const tmt = setTimeout(() => setIdx((p) => (p + 1) % images.length), HOLD_MS);
        return () => clearTimeout(tmt);
    }, [idx, reduceMotion]);

    return (
        <section id="curated-pavilion" className="relative w-full" aria-label="Curated Pavilion — slideshow">
            <div className="relative w-full h-[70vh] md:h-[78vh] overflow-hidden">
                <div className="absolute inset-0 z-0 bg-white" />
                {images.map((img, i) => {
                    const isActive = i === idx;
                    return (
                        <motion.div
                            key={img.src}
                            className="absolute inset-0 z-10 will-change-[opacity]"
                            initial={{ opacity: i === 0 ? 1 : 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            transition={{ duration: FADE_S, ease: easeInOut }}
                            aria-hidden={!isActive}
                        >
                            <Image src={img.src} alt={img.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
                        </motion.div>
                    );
                })}

                <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.55)_100%)]" />

                <div className="absolute left-0 right-0 bottom-0 z-30">
                    <div className="max-w-7xl mx-auto px-4 pb-8">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3">
                                <span className="inline-block h-1 w-10 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                                <span className="uppercase tracking-[0.2em] text-xs text-white/85">
                                    {t('curated.kicker')}
                                </span>
                            </div>
                            <h2 className="mt-3 text-3xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
                                {t('curated.title')}
                            </h2>
                            <p className="mt-2 text-white/85 italic max-w-prose">
                                {t('curated.desc')}
                            </p>
                            <div className="mt-5">
                                <AnimatedButton variant="primary" className="px-6">
                                    {t('curated.cta')}
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}