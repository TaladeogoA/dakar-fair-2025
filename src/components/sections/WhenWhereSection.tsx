'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, Transition, useReducedMotion, Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
    Accessibility,
    Bus,
    Calendar,
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
    Wifi,
} from 'lucide-react';

const container: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut' },
    },
};

const hoverLift: Transition = { duration: 0.25, ease: 'easeOut' };

export default function WhenWhereSection() {
    const { t } = useI18n();
    const reduceMotion = useReducedMotion();

    return (
        <section id="when-where" className="relative bg-white px-4 py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-15"
                style={{ background: 'radial-gradient(closest-side, rgba(46,83,57,0.20), rgba(230,126,34,0.05), transparent)' }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-[-6rem] left-[-6rem] w-[22rem] h-[22rem] rounded-full blur-3xl opacity-10"
                style={{ background: 'radial-gradient(closest-side, rgba(230,126,34,0.18), rgba(46,83,57,0.08), transparent)' }}
            />

            <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={container}>
                <motion.div variants={item} className="mb-10">
                    <div className="flex items-center gap-3">
                        <span className="inline-block h-1 w-12 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                        <span className="uppercase tracking-[0.2em] text-xs" style={{ color: '#2E5339' }}>
                            {t('whenwhere.kicker')}
                        </span>
                    </div>
                    <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-[#2E5339]">
                        {t('whenwhere.title')}
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        {t('whenwhere.desc')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
                    <motion.div variants={item} className="md:col-span-5 space-y-6">
                        <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} transition={hoverLift} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
                            <div className="absolute left-0 top-0 h-1 w-full" style={{ background: 'linear-gradient(90deg,#E67E22,#2E5339)' }} />
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 rounded-lg p-2.5" style={{ backgroundColor: '#2E5339' }}>
                                    <Calendar className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                                        {t('whenwhere.datesCardTitle')}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {t('whenwhere.datesCardDesc')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} transition={hoverLift} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
                            <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: '#2E5339' }} />
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 rounded-lg p-2.5" style={{ backgroundColor: '#E67E22' }}>
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                                        {t('whenwhere.venueTitle')}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {t('whenwhere.venueDesc')}
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <AnimatedButton variant="primary" className="px-5">
                                            {t('whenwhere.directions')}
                                        </AnimatedButton>
                                        <a href="#travel" className="group inline-flex items-center gap-2 text-sm tracking-widest" style={{ color: '#2E5339' }}>
                                            {t('whenwhere.planTravel')}
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7" />
                                                <path d="M8 7h9v9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} id="travel" className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
                            <div className="mb-4 text-sm font-semibold tracking-widest" style={{ color: '#2E5339' }}>
                                {t('whenwhere.travelNotes')}
                            </div>
                            <ul className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <Plane className="mt-0.5 h-4 w-4" style={{ color: '#2E5339' }} />
                                    {t('whenwhere.notes.fly')}
                                </li>
                                <li className="flex items-start gap-3">
                                    <Languages className="mt-0.5 h-4 w-4" style={{ color: '#2E5339' }} />
                                    {t('whenwhere.notes.languages')}
                                </li>
                                <li className="flex items-start gap-3">
                                    <Info className="mt-0.5 h-4 w-4" style={{ color: '#2E5339' }} />
                                    {t('whenwhere.notes.info')}
                                </li>
                                <li className="flex items-start gap-3">
                                    <Car className="mt-0.5 h-4 w-4" style={{ color: '#2E5339' }} />
                                    {t('whenwhere.notes.rides')}
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={item} className="md:col-span-7">
                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                            <div className="relative h-[50vw] md:h-[28rem]">
                                <iframe
                                    title="Map — Exhibition Centre, Dakar"
                                    className="absolute inset-0 h-full w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61760.16660734439!2d-17.520!3d14.715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sExhibition%20Centre%20Dakar!5e0!3m2!1sen!2ssn!4v0000000000000"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0" />
                                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]">
                                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: '#E67E22' }}>
                                        <MapPin className="h-4 w-4 text-white" />
                                        {!reduceMotion && (
                                            <span className="absolute -z-10 block h-8 w-8 rounded-full" style={{ boxShadow: '0 0 0 0 rgba(230,126,34,0.45)' }} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 bg-white/85 px-4 py-3">
                                <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                    <Plane className="h-4 w-4" style={{ color: '#2E5339' }} />
                                    <span>{t('whenwhere.transport.dss')}</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                    <Train className="h-4 w-4" style={{ color: '#2E5339' }} />
                                    <span>{t('whenwhere.transport.ter')}</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                    <Bus className="h-4 w-4" style={{ color: '#2E5339' }} />
                                    <span>{t('whenwhere.transport.shuttle')}</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                    <Car className="h-4 w-4" style={{ color: '#2E5339' }} />
                                    <span>{t('whenwhere.transport.parking')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={item} className="mt-12">
                    <div className="mb-4 text-sm font-semibold tracking-widest" style={{ color: '#2E5339' }}>
                        {t('whenwhere.accessibilityTitle')}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {badges.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <motion.div key={b.label} whileHover={reduceMotion ? undefined : { y: -2 }} transition={hoverLift} className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-xs text-gray-800">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: i % 3 === 0 ? '#2E5339' : 'rgba(230,126,34,0.12)' }}>
                                        <Icon className="h-3.5 w-3.5" style={{ color: i % 3 === 0 ? '#fff' : '#E67E22' }} />
                                    </span>
                                    <span className="tracking-wide">{b.label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

const badges: { icon: LucideIcon; label: string }[] = [
    { icon: Accessibility, label: 'Step‑free routes' },
    { icon: Ear, label: 'Hearing assistance' },
    { icon: Moon, label: 'Quiet room' },
    { icon: Droplet, label: 'Water stations' },
    { icon: Wifi, label: 'Free Wi‑Fi' },
    { icon: Hospital, label: 'On‑site medical' },
];