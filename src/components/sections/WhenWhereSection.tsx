'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
    Accessibility,
    ArrowRight,
    Bus,
    Car,
    Droplet,
    Ear,
    Hospital,
    Info,
    Languages,
    MapPin,
    Moon,
    Plane,
    Train,
    Wifi
} from 'lucide-react';

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item: Variants = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

export default function WhenWhereSection() {
    const { t } = useI18n();

    const accessibility: { icon: LucideIcon; label: string }[] = [
        { icon: Accessibility, label: t('whenwhere.badges.stepfree') },
        { icon: Ear, label: t('whenwhere.badges.hearing') },
        { icon: Moon, label: t('whenwhere.badges.quiet') },
        { icon: Droplet, label: t('whenwhere.badges.water') },
        { icon: Wifi, label: t('whenwhere.badges.wifi') },
        { icon: Hospital, label: t('whenwhere.badges.medical') },
    ];

    const travelNotes: { icon: LucideIcon; text: string }[] = [
        { icon: Plane, text: t('whenwhere.notes.fly') },
        { icon: Languages, text: t('whenwhere.notes.languages') },
        { icon: Info, text: t('whenwhere.notes.info') },
        { icon: Car, text: t('whenwhere.notes.rides') },
    ];

    const transport: { icon: LucideIcon; text: string }[] = [
        { icon: Plane, text: t('whenwhere.transport.dss') },
        { icon: Train, text: t('whenwhere.transport.ter') },
        { icon: Bus, text: t('whenwhere.transport.shuttle') },
        { icon: Car, text: t('whenwhere.transport.parking') },
    ];

    return (
        <section id="when-where" className="relative bg-white px-3 sm:px-4 py-16 sm:py-24">
            <motion.div
                className="w-full max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={container}
            >
                <div className="flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-10 md:gap-12 items-start">
                    <motion.div variants={item} className="w-full md:col-span-5">
                        <div className="space-y-6 sm:space-y-8 md:space-y-10">
                            <div className="flex items-center gap-3">
                                <span className="inline-block h-1 w-8 sm:w-10 md:w-12 rounded-full bg-gradient-to-r from-[#E67E22] to-[#2E5339]" />
                                <span className="uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs" style={{ color: '#2E5339' }}>
                                    {t('whenwhere.kicker')}
                                </span>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <h3 className="leading-[0.9] font-serif text-[#111] text-[1.4rem] md:text-3xl lg:text-5xl break-words">
                                    {t('whenwhere.datesCardTitle')}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    {t('whenwhere.datesCardDesc')}
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <span className="inline-block h-1 w-12 sm:w-16 rounded-full bg-[#2E5339]" />
                                <h3 className="leading-[0.9] font-serif text-[#111] text-[1.4rem] md:text-3xl lg:text-5xl break-words">
                                    {t('whenwhere.venueTitle')}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    {t('whenwhere.venueDesc')}
                                </p>
                                <div className="mt-4 flex flex-col gap-3">
                                    <AnimatedButton variant="primary" className="px-4 sm:px-5 w-full sm:w-auto">
                                        {t('whenwhere.directions')}
                                    </AnimatedButton>
                                    <a
                                        href="#travel"
                                        className="group inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide text-[#2E5339] justify-center sm:justify-start"
                                    >
                                        {t('whenwhere.planTravel')}
                                        <svg
                                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M7 17L17 7" />
                                            <path d="M8 7h9v9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                    {accessibility.map(({ icon: Icon, label }, idx) => (
                                        <span key={label} className="inline-flex items-center gap-1.5 mr-2 sm:mr-3 mb-2 align-middle">
                                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#2E5339' }} />
                                            <span>{label}</span>
                                            {idx < accessibility.length - 1 ? <span className="opacity-40 mx-1">•</span> : null}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="w-full md:col-span-7">
                        <div className="relative overflow-hidden rounded-lg sm:rounded-2xl">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/9] lg:h-[28rem] lg:aspect-auto">
                                <iframe
                                    title="Map — Exhibition Centre, Dakar"
                                    className="absolute inset-0 h-full w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61760.16660734439!2d-17.520!3d14.715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sExhibition%20Centre%20Dakar!5e0!3m2!1sen!2ssn!4v0000000000000"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2E5339]/12 via-transparent to-transparent" />
                                <div className="pointer-events-none absolute -bottom-2 left-0 right-0 text-[18vw] leading-none font-semibold text-[#2E5339]/10 select-none hidden sm:block overflow-hidden">
                                    DAKAR 2025 DAKAR 2025
                                </div>
                                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]">
                                    <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full" style={{ backgroundColor: '#E67E22' }}>
                                        <MapPin className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 relative">
                                <div className="flex gap-2 overflow-x-auto pb-1 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    {transport.map(({ icon: Icon, text }) => (
                                        <span
                                            key={text}
                                            className="inline-flex items-center gap-2 rounded-full ring-1 ring-[#2E5339]/20 bg-white/70 backdrop-blur px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs text-[#2E5339] whitespace-nowrap flex-shrink-0"
                                        >
                                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                            {text}
                                        </span>
                                    ))}
                                </div>
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center">
                                    <div className="h-full w-6 sm:w-8 bg-gradient-to-l from-white to-transparent" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={item} id="travel" className="mt-8 sm:mt-10 md:mt-12">
                    <div className="text-xs sm:text-sm font-semibold tracking-widest" style={{ color: '#2E5339' }}>
                        {t('whenwhere.travelNotes')}
                    </div>
                    <div className="mt-3 relative">
                        <div className="flex gap-2 overflow-x-auto pb-1 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {travelNotes.map(({ icon: Icon, text }) => (
                                <span
                                    key={text}
                                    className="inline-flex items-center gap-2 rounded-full ring-1 ring-[#2E5339]/20 bg-white px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs text-gray-800 whitespace-nowrap flex-shrink-0"
                                >
                                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#2E5339' }} />
                                    {text}
                                </span>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center">
                            <div className="h-full w-6 sm:w-8 bg-gradient-to-l from-white to-transparent" />
                            <motion.span
                                aria-hidden="true"
                                className="pl-1 pr-2 text-[#2E5339]/70"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}