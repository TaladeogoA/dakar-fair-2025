'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { easeInOut, motion, Variants } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { RefCallback, useEffect, useMemo, useRef, useState } from 'react';

export type Highlight = {
    date: string;
    title: string;
    blurb: string;
};

const sectionContainer: Variants = {
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
        transition: { duration: 0.55, ease: easeInOut },
    },
};

export default function ProgramHighlightsSection({ highlights }: { highlights: Highlight[] }) {
    const { t } = useI18n();
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const manualUntilRef = useRef<number | null>(null);
    const manualTimerRef = useRef<number | null>(null);

    const setItemRefAt = (index: number): RefCallback<HTMLLIElement> => (el) => {
        itemRefs.current[index] = el;
    };

    const triggerManual = (idx: number) => {
        setCurrentIndex(idx);
        manualUntilRef.current = Date.now() + 1200;
        if (manualTimerRef.current) window.clearTimeout(manualTimerRef.current);
        manualTimerRef.current = window.setTimeout(() => {
            manualUntilRef.current = null;
        }, 1200);
    };

    useEffect(() => {
        const items = itemRefs.current.filter((el): el is HTMLLIElement => !!el);
        if (!items.length) return;
        const observer = new IntersectionObserver(
            (entries) => {
                let bestIdx = 0;
                let bestRatio = 0;
                entries.forEach((e) => {
                    const idxAttr = (e.target as HTMLElement).dataset.index;
                    const idx = idxAttr ? Number(idxAttr) : 0;
                    if (e.intersectionRatio > bestRatio) {
                        bestRatio = e.intersectionRatio;
                        bestIdx = idx;
                    }
                });
                if (bestRatio >= 0.55 && (!manualUntilRef.current || Date.now() > manualUntilRef.current)) {
                    setCurrentIndex(bestIdx);
                }
            },
            { root: null, threshold: [0, 0.25, 0.55, 0.75, 1] }
        );
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [highlights.length]);

    const header = useMemo(
        () => (
            <motion.div variants={sectionItem} className="text-center">
                <div className="flex items-center justify-center gap-3">
                    <span className="inline-block h-1 w-12 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                    <span className="uppercase tracking-[0.2em] text-xs" style={{ color: '#2E5339' }}>
                        {t('program.kicker')}
                    </span>
                </div>
                <h3 className="mt-6 text-3xl md:text-5xl font-serif text-gray-900">{t('program.title')}</h3>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    {t('program.desc')}
                </p>
            </motion.div>
        ),
        [t]
    );

    return (
        <section id="program" className="pb-16 px-4 bg-white">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionContainer}
            >
                {header}

                <div className="relative mt-12 mx-auto max-w-3xl pl-8">
                    <span className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#2E5339]/20 via-[#2E5339]/30 to-[#2E5339]/20" />
                    <ul className="space-y-2">
                        {highlights.map((item, idx) => {
                            const active = currentIndex === idx;
                            return (
                                <motion.li
                                    key={idx}
                                    ref={setItemRefAt(idx)}
                                    data-index={idx}
                                    variants={sectionItem}
                                    className="rounded-xl"
                                >
                                    <a
                                        href="#agenda"
                                        onMouseEnter={() => triggerManual(idx)}
                                        onFocus={() => triggerManual(idx)}
                                        className="group relative grid grid-cols-[2rem_1fr] items-start gap-4 rounded-xl px-3 py-5"
                                    >
                                        <div className="relative z-10 flex items-start">
                                            <div className="relative h-8 w-8 grid place-items-center">
                                                {idx === 0 && (
                                                    <motion.span
                                                        aria-hidden
                                                        className="absolute h-5 w-5 rounded-full"
                                                        animate={{
                                                            boxShadow: [
                                                                '0 0 0 0 rgba(230,126,34,0.45)',
                                                                '0 0 0 10px rgba(230,126,34,0)',
                                                            ],
                                                        }}
                                                        transition={{ duration: 1.6, ease: easeInOut, repeat: Infinity }}
                                                    />
                                                )}
                                                <span
                                                    className="h-2.5 w-2.5 rounded-full"
                                                    style={{ backgroundColor: idx === 0 ? '#E67E22' : '#2E5339', opacity: idx === 0 ? 1 : 0.9 }}
                                                />
                                                {active && (
                                                    <motion.span layoutId="dotIndicator" className="absolute inset-0 grid place-items-center" transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.5 }}>
                                                        <span className="h-6 w-6 rounded-full ring-2 ring-[#2E5339] shadow-[0_0_0_6px_rgba(46,83,57,0.12)]" />
                                                    </motion.span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <Calendar className="w-4 h-4" style={{ color: '#2E5339' }} />
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="mt-1">
                                                <h4 className="text-lg font-semibold transition-colors" style={{ color: active ? '#2E5339' : '#111827' }}>
                                                    {item.title}
                                                </h4>
                                                <p className="mt-1.5 text-sm text-gray-600 max-w-prose">{item.blurb}</p>
                                                <div className="mt-3 inline-flex items-center gap-2 text-sm" style={{ color: '#2E5339' }}>
                                                    <span className="tracking-widest">{t('program.explore')}</span>
                                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>

                <motion.div variants={sectionItem} className="mt-12 text-center">
                    <AnimatedButton variant="primary" className="px-8">
                        {t('program.cta')}
                    </AnimatedButton>
                </motion.div>
            </motion.div>
        </section>
    );
}