'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ParallaxFooter() {
    const { t } = useI18n();

    const { scrollYProgress } = useScroll();
    const bandY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

    return (
        <div className="sticky bottom-0 h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#111111] text-[#F4F1EB]">
                <div className="relative h-full">
                    <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-12 md:gap-12">
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <h2 id="footer-heading" className="text-2xl md:text-4xl font-serif leading-tight">
                                {t('footer.quote')}
                            </h2>

                            <div className="space-y-2 text-sm md:text-base">
                                <div className="font-semibold tracking-wide text-[#9AD1AF]">↘ {t('footer.contact')}</div>
                                <a
                                    href={`mailto:${t('footer.email')}`}
                                    className="inline-flex items-center gap-1 text-[#F4F1EB]/90 hover:text-white transition-colors"
                                >
                                    {t('footer.email')}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <div className="pt-2 text-[#F4F1EB]/80">
                                    <div className="text-xs uppercase tracking-widest text-[#F4F1EB]/50">{t('footer.addressLabel')}</div>
                                    <p className="whitespace-pre-line">{t('footer.address')}</p>
                                </div>
                            </div>
                        </div>

                        <nav className="md:col-span-4">
                            <div className="text-xs uppercase tracking-widest text-[#F4F1EB]/50">{t('footer.navTitle')}</div>
                            <ul className="mt-2 space-y-1 text-3xl md:text-5xl font-serif">
                                <li>
                                    <Link href="#exhibitions" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.exhibitions')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#program" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.program')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#pavilion" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.pavilion')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#voices" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.voices')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#partners" className="hover:text-white/90 transition-colors">
                                        {t('nav.items.partners')}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="md:col-span-3">
                            <div className="text-xs uppercase tracking-widest text-[#F4F1EB]/50">{t('footer.connectTitle')}</div>
                            <ul className="mt-2 space-y-2 text-lg">
                                <li>
                                    <a
                                        href="https://instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 hover:text-white transition-colors"
                                    >
                                        {t('footer.instagram')}
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 hover:text-white transition-colors"
                                    >
                                        {t('footer.linkedin')}
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-12 mt-auto flex items-center justify-between text-[10px] tracking-widest text-[#F4F1EB]/50">
                            <div>{t('footer.rights')}</div>
                            <div>{t('footer.legalNotice')}</div>
                        </div>
                    </div>

                    <motion.div
                        aria-hidden="true"
                        style={{ y: bandY }}
                        className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
                            <div className="whitespace-nowrap text-[18vw] leading-none font-semibold text-white/10">
                                {t('footer.band')} {t('footer.band')} {t('footer.band')}
                            </div>
                            <div className="-mt-[2vw] whitespace-nowrap text-[18vw] leading-none font-semibold text-white/8">
                                {t('footer.band')} {t('footer.band')} {t('footer.band')}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}