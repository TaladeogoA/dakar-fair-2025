'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download, QrCode } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeInOut' } },
};

export default function RegisterUpdatesSection() {
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
        <section id="register-updates" className="relative bg-[#F4F1EB] px-4 py-20">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={container}
            >
                <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
                    <motion.div variants={item} className="md:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#2E5339]/10 px-3 py-1 text-xs tracking-wide text-[#2E5339]">
                            <span className="font-semibold">Digital Africa Leadership</span>
                            <span className="h-1 w-1 rounded-full bg-[#2E5339]" />
                            <span className="opacity-80">{t('register.badge')}</span>
                        </div>

                        <h3 className="mt-4 text-3xl md:text-5xl font-serif leading-tight text-[#111]">
                            {t('register.title')}
                        </h3>
                        <p className="mt-3 text-base md:text-lg text-[#2C2C2C] max-w-2xl">
                            {t('register.subtitle')}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <AnimatedButton
                                variant="primary"
                                onClick={handleRegisterClick}
                                ariaLabel={t('register.primary')}
                                className="gap-2"
                            // Primary keeps brand colors; override here if needed via `scheme`
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
                                    border: 'border-[#2E5339]',
                                    text: 'text-[#2E5339]',
                                    hoverText: 'hover:text-white',
                                    overlay: 'bg-[#2E5339]/15',
                                }}
                            >
                                <Download className="h-4 w-4" />
                                <span>{t('register.secondary')}</span>
                            </AnimatedButton>
                        </div>

                        <div className="mt-3 text-xs text-[#2C2C2C]/70">
                            {t('register.disclaimer')}
                        </div>
                    </motion.div>

                    <motion.aside variants={item} className="md:col-span-5 md:pl-4">
                        <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div className="inline-flex items-center gap-2 text-[#2E5339]">
                                    <QrCode className="h-4 w-4" />
                                    <span className="text-xs font-semibold tracking-wide">
                                        {t('register.qr.label')}
                                    </span>
                                </div>
                                <span className="text-[10px] tracking-widest text-black/50">
                                    {t('register.qr.secure')}
                                </span>
                            </div>

                            <div className="relative px-4 pb-4">
                                <div className="relative mx-auto mt-3 h-56 w-56 sm:h-64 sm:w-64">
                                    <a
                                        href="https://example.com/updates"
                                        aria-label={t('register.qr.aria')}
                                        className="absolute inset-0"
                                    />
                                    <Image
                                        src="/images/qr-updates.png"
                                        alt={t('register.qr.alt')}
                                        fill
                                        sizes="256px"
                                        className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                                        priority={false}
                                    />
                                </div>

                                <div className="mt-4 rounded-xl bg-[#F4F1EB] p-4">
                                    <p className="text-sm text-[#2C2C2C]">
                                        {t('register.qr.desc')}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] tracking-wide text-[#2E5339]">
                                            {t('register.qr.tag.program')}
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] tracking-wide text-[#2E5339]">
                                            {t('register.qr.tag.map')}
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] tracking-wide text-[#2E5339]">
                                            {t('register.qr.tag.calendar')}
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] tracking-wide text-[#2E5339]">
                                            {t('register.qr.tag.whatsapp')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </motion.div>
        </section>
    );
}