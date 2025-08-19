'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { ArrowRight, ArrowUpRight, Download, QrCode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ParallaxFooter() {
    const { t } = useI18n();

    const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            const target = document.querySelector('#register') as HTMLElement | null;
            if (target && 'scrollIntoView' in target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.location.hash = 'register';
            }
        }
    };

    const handlePressKitDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            const a = document.createElement('a');
            a.href = '/press/press-kit.pdf';
            a.download = 'press-kit.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };

    return (
        <div className="sticky bottom-0 h-[100svh] md:h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#2E5339] text-[#F4F1EB]">
                <div className="relative h-full">
                    <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-12 md:gap-12 md:py-16 pb-[env(safe-area-inset-bottom)]">
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <h2 id="footer-heading" className="text-xl sm:text-2xl md:text-4xl font-serif leading-tight">
                                {t('footer.quote')}
                            </h2>

                            <div className="flex flex-wrap items-center gap-3">
                                <AnimatedButton
                                    variant="primary"
                                    onClick={handleRegisterClick}
                                    ariaLabel={t('register.primary')}
                                    className="gap-2"
                                >
                                    <span>{t('register.primary')}</span>
                                    <ArrowRight className="h-4 w-4" />
                                </AnimatedButton>

                                <AnimatedButton
                                    variant="secondary"
                                    onClick={handlePressKitDownload}
                                    ariaLabel={t('register.secondary')}
                                    className="gap-2"
                                    scheme={{
                                        border: 'border-[#F4F1EB]',
                                        text: 'text-[#F4F1EB]',
                                        hoverText: 'hover:text-white',
                                        overlay: 'bg-white/10',
                                    }}
                                >
                                    <Download className="h-4 w-4" />
                                    <span>{t('register.secondary')}</span>
                                </AnimatedButton>
                            </div>

                            <div className="space-y-2 text-sm md:text-base">
                                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F1EB]/60">
                                    {t('footer.contact')}
                                </div>
                                <a
                                    href={`mailto:${t('footer.email')}`}
                                    className="inline-flex items-center gap-1 text-[#F4F1EB]/90 hover:text-white transition-colors"
                                >
                                    {t('footer.email')}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <div className="pt-2 text-[#F4F1EB]/85">
                                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F1EB]/60">
                                        {t('footer.addressLabel')}
                                    </div>
                                    <p className="whitespace-pre-line">{t('footer.address')}</p>
                                </div>
                            </div>
                        </div>

                        <nav className="md:col-span-4">
                            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F1EB]/60">
                                {t('footer.navTitle')}
                            </div>
                            <ul className="mt-2 space-y-1 text-xl sm:text-3xl md:text-4xl font-serif">
                                <li className="group">
                                    <Link href="#exhibitions" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.exhibitions')}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#program" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.program')}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#pavilion" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.pavilion')}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#voices" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.voices')}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#about" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.about')}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#partners" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white/95">
                                        {t('nav.items.partners')}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="md:col-span-3 flex flex-col gap-4 md:gap-5">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 text-[#F4F1EB]">
                                    <QrCode className="h-4 w-4" />
                                    <span className="text-xs font-semibold tracking-wide">
                                        {t('register.qr.label')}
                                    </span>
                                </div>
                                <span className="text-[10px] tracking-widest text-[#F4F1EB]/60">
                                    {t('register.qr.secure')}
                                </span>
                            </div>

                            <div className="relative mx-auto w-48 sm:w-56">
                                <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-xl bg-white ring-1 ring-black/10">
                                    <a href="https://example.com/updates" aria-label={t('register.qr.aria')} className="absolute inset-0 z-10" />
                                    <Image
                                        src="/images/qr-updates.png"
                                        alt={t('register.qr.alt')}
                                        fill
                                        sizes="(min-width: 640px) 224px, 192px"
                                        className="object-contain"
                                        priority={false}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white">
                                    {t('register.qr.tag.program')}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white">
                                    {t('register.qr.tag.map')}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white">
                                    {t('register.qr.tag.calendar')}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white">
                                    {t('register.qr.tag.whatsapp')}
                                </span>
                            </div>

                            <div className="pt-2">
                                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F1EB]/60">
                                    {t('footer.connectTitle')}
                                </div>
                                <ul className="mt-2 space-y-2 text-base sm:text-lg">
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
                        </div>

                        <div className="md:col-span-12 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] tracking-widest text-[#F4F1EB]/60">
                            <div>{t('footer.rights')}</div>
                            <div>{t('footer.legalNotice')}</div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden hidden sm:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2E5339] via-[#2E5339]/70 to-transparent" />
                            <div className="whitespace-nowrap text-[18vw] leading-none font-semibold" style={{ color: 'rgba(244,241,235,0.12)' }}>
                                {t('footer.band')} {t('footer.band')} {t('footer.band')}
                            </div>
                            <div className="-mt-[2vw] whitespace-nowrap text-[18vw] leading-none font-semibold" style={{ color: 'rgba(230,126,34,0.18)' }}>
                                {t('footer.band')} {t('footer.band')} {t('footer.band')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}