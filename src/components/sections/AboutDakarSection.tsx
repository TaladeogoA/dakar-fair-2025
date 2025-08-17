'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { easeInOut, motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type PartnerLogo = { src: StaticImageData | string; alt: string };

type Props = {
    partnerLogos: PartnerLogo[];
};

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

function LedeHoverFlow({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const [active, setActive] = useState<number | null>(null);
    const tokens = text.split(/(\s+)/);
    const highlightTransition = { duration: 0.5, ease: easeInOut };

    return (
        <span
            className={className}
            onMouseLeave={() => setActive(null)}
            style={{ lineHeight: '1.15' }}
        >
            {tokens.map((t, i) => {
                const isSpace = t.trim().length === 0;
                if (isSpace) return <span key={i}>{t}</span>;
                const isActive = active === i;
                return (
                    <span
                        key={i}
                        className="relative inline-block px-0.5"
                        onMouseEnter={() => setActive(i)}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="ledeHighlight"
                                className="absolute inset-x-[-3px] inset-y-[-2px] rounded-md"
                                style={{ backgroundColor: 'rgba(230,126,34,0.18)' }}
                                transition={highlightTransition}
                            />
                        )}
                        <motion.span
                            className="relative z-10"
                            animate={{ color: isActive ? '#E67E22' : '#ffffff' }}
                            transition={highlightTransition}
                        >
                            {t}
                        </motion.span>
                    </span>
                );
            })}
        </span>
    );
}

export default function AboutDakarSection({ partnerLogos }: Props) {
    const { t } = useI18n();

    return (
        <section className="py-24 px-4 bg-[#2E5339] text-white">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={container}
            >
                <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
                    <motion.h2
                        variants={item}
                        className="md:col-span-7 text-4xl md:text-6xl leading-tight font-sans text-white"
                    >
                        <LedeHoverFlow text={t('about.lede')} />
                    </motion.h2>

                    <motion.div variants={item} className="md:col-span-5 md:pl-6">
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            {t('about.supporting')}
                        </p>

                        <a
                            href="#program"
                            className="group inline-flex items-center gap-2 mt-6 text-white hover:text-gray-200 transition-colors"
                        >
                            <span className="text-sm tracking-widest">{t('about.cta')}</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
                >
                    {partnerLogos.map((logo, i) => (
                        <div key={i} className="opacity-70 sm:hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={160}
                                height={60}
                                className="object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0"
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}