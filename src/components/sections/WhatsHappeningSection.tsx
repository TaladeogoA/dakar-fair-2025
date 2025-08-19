'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type React from 'react';
import { useMemo, useRef } from 'react';
import type SliderType from 'react-slick';
import type { Settings as SlickSettings } from 'react-slick';

const Slider = dynamic(() => import('react-slick'), { ssr: false }) as unknown as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SlickSettings & { children?: React.ReactNode }> & React.RefAttributes<SliderType>
>;

export type WhatsItem = {
    id: string;
    category: string;
    title: string;
    venue: string;
    dateLine: string;
    summary: string;
    image: string;
    alt: string;
};

type Props = { items: WhatsItem[] };

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const headItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeInOut' } },
};

const overlayVariants: Variants = {
    rest: { y: '100%', opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
    hover: { y: '0%', opacity: 1, transition: { duration: 0.35, ease: 'easeInOut' } },
};

export default function WhatsHappeningSection({ items }: Props) {
    const { t } = useI18n();
    const sliderRef = useRef<SliderType | null>(null);

    const settings = useMemo<SlickSettings>(
        () => ({
            infinite: true,
            speed: 450,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            swipeToSlide: true,
            arrows: false,
            dots: false,
            adaptiveHeight: false,
            responsive: [
                { breakpoint: 640, settings: { variableWidth: true } },
                { breakpoint: 1024, settings: { variableWidth: true } },
            ],
        }),
        []
    );

    return (
        <section id="whats-happening" className="bg-white px-4 py-24">
            <motion.div
                className="max-w-7xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="flex items-end justify-between gap-6 mb-4">
                    <motion.div variants={headItem} className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#111]">
                            {t('whats.title')}
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl">{t('whats.intro')}</p>
                    </motion.div>

                    <motion.div variants={headItem} className="shrink-0 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#2E5339] hover:bg-[#2E5339] hover:text-white transition-colors"
                            aria-label="Previous"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => sliderRef.current?.slickNext()}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#2E5339] hover:bg-[#2E5339] hover:text-white transition-colors"
                            aria-label="Next"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="pl-4 md:pl-10">
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />
                    <Slider ref={sliderRef} {...settings}>
                        {items.map((it) => (
                            <div key={it.id} className="px-3">
                                <motion.article
                                    initial="rest"
                                    animate="rest"
                                    whileHover="hover"
                                    className="hidden lg:block group relative overflow-hidden rounded-xl border border-gray-200 bg-white/0 shrink-0 w-[20rem] sm:w-[24rem] lg:w-[28rem]"
                                >
                                    <div className="relative h-56 sm:h-64 w-full">
                                        <Image
                                            src={it.image}
                                            alt={it.alt}
                                            fill
                                            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
                                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                                        />
                                        <span className="absolute inset-0 ring-1 ring-black/5" />
                                    </div>
                                    <motion.div
                                        variants={overlayVariants}
                                        className="absolute inset-x-0 bottom-0 bg-white"
                                    >
                                        <div className="p-4">
                                            <div className="text-sm italic" style={{ color: '#2E5339' }}>
                                                {it.category}
                                            </div>
                                            <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900">
                                                {it.title}
                                            </h3>
                                            {/* Removed venue/date */}
                                            <p className="mt-2 text-sm text-gray-700">{it.summary}</p>
                                            <a
                                                href="#read"
                                                className="mt-3 inline-block text-sm font-medium tracking-wide"
                                                style={{ color: '#2E5339' }}
                                            >
                                                {t('whats.readMore')} +
                                            </a>
                                        </div>
                                    </motion.div>

                                    <span className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-black/5" />
                                </motion.article>

                                <article className="lg:hidden relative overflow-hidden rounded-xl border border-gray-200 bg-white shrink-0 w-[20rem] sm:w-[24rem]">
                                    <div className="relative h-56 sm:h-64 w-full">
                                        <Image
                                            src={it.image}
                                            alt={it.alt}
                                            fill
                                            sizes="(min-width: 640px) 24rem, 20rem"
                                            className="object-cover"
                                        />
                                        <span className="absolute inset-0 ring-1 ring-black/5" />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <div className="text-sm italic" style={{ color: '#2E5339' }}>
                                            {it.category}
                                        </div>
                                        <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900">
                                            {it.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-700">{it.summary}</p>
                                        <a
                                            href="#read"
                                            className="mt-3 inline-block text-sm font-medium tracking-wide"
                                            style={{ color: '#2E5339' }}
                                        >
                                            {t('whats.readMore')} +
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}