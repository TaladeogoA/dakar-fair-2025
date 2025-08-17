'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion, Transition, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

type Voice = {
    name: string;
    tag: string;
    quote: string;
    image: string;
};

const voices: Voice[] = [
    {
        name: 'Fatoumata Diawara',
        tag: 'Music • Mali',
        quote: 'Music is a future we can all speak.',
        image: '/images/fatoumata.jpg',
    },
    {
        name: 'El Anatsui',
        tag: 'Visual Arts • Ghana/Nigeria',
        quote: 'Material holds memory, and memory holds us.',
        image: '/images/diop.webp',
    },
    {
        name: 'Nadine Ijewere',
        tag: 'Photography • UK/Nigeria',
        quote: 'Beauty is a language of belonging.',
        image: '/images/fatoumata.jpg',
    },
    {
        name: 'Selly Raby Kane',
        tag: 'Fashion • Senegal',
        quote: 'Heritage is an engine for the new.',
        image: '/images/diop.webp',
    },
];

// Motion typing and transitions
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: 'easeOut' },
    }),
};

const sweepVariants: Variants = {
    rest: { scaleX: 0 },
    hover: { scaleX: 1 },
};

const sweepTransition: Transition = { duration: 0.45, ease: 'easeInOut' };

export default function CuratedPavilionSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="pavilion-voices"
            className="relative overflow-hidden bg-white"
            aria-label="Curated Pavilion and Featured Voices"
        >
            {/* Ambient backdrop accents */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-28 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-20"
                style={{
                    background:
                        'radial-gradient(closest-side, rgba(46,83,57,0.25), rgba(230,126,34,0.08), transparent)',
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-[-10rem] left-[-10rem] w-[30rem] h-[30rem] rounded-full blur-3xl opacity-10"
                style={{
                    background:
                        'radial-gradient(closest-side, rgba(230,126,34,0.18), rgba(46,83,57,0.08), transparent)',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 py-24 md:py-28">
                <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
                    {/* Ambience Reel — sticky on desktop, full-bleed top on mobile */}
                    <div className="md:col-span-5">
                        <div className="md:sticky md:top-24">
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                                <video
                                    className={`w-full h-[56vw] md:h-[28rem] object-cover ${reduceMotion ? '' : 'motion-safe:animate-[kenburns_18s_ease-in-out_infinite]'
                                        }`}
                                    src="/videos/ambience.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/videos/poster.jpg"
                                    aria-label="Ambience reel"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 pointer-events-none" />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                    <span className="text-white/90 text-xs tracking-[0.22em] uppercase bg-black/30 backdrop-blur px-3 py-1.5 rounded">
                                        Curated Pavilion
                                    </span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur px-2.5 py-1 rounded">
                                        Dakar • 15–19 May 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text + Featured Voices */}
                    <div className="md:col-span-7">
                        {/* Heading block */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            variants={fadeUp}
                        >
                            <h2 className="font-serif text-[2rem] md:text-[3rem] leading-[1.08] tracking-tight text-[#2E5339]">
                                The Curated Pavilion
                            </h2>
                            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                                A living archive of Pan‑African excellence. This special exhibition connects
                                heritage to future—through design, film, and research that reframes the
                                cultural horizon.
                            </p>

                            {/* Curatorial threads (chips) */}
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {['Heritage & Memory', 'Digital Africa', 'Repatriation & Education'].map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center rounded-full border border-gray-300/80 px-3 py-1.5 text-xs tracking-wide text-gray-800 bg-white"
                                    >
                                        <span
                                            className="mr-2 inline-block h-2 w-2 rounded-full"
                                            style={{ backgroundColor: '#E67E22' }}
                                        />
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Featured Voices grid */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {voices.map((v, i) => (
                                <motion.article
                                    key={v.name}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm"
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={cardVariants}
                                    whileHover={
                                        reduceMotion
                                            ? {}
                                            : { y: -2, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }
                                    }
                                >
                                    {/* Sweep accent on hover */}
                                    <motion.span
                                        aria-hidden
                                        className="absolute inset-0 bg-gradient-to-r from-[#2E5339]/0 via-[#2E5339]/6 to-[#E67E22]/10 origin-left"
                                        variants={sweepVariants}
                                        initial="rest"
                                        animate="rest"
                                        whileHover="hover"
                                        style={{ transform: 'scaleX(0)' }}
                                        transition={sweepTransition}
                                    />
                                    {/* Top accent line */}
                                    <span
                                        aria-hidden
                                        className="absolute left-0 top-0 h-[3px] w-full"
                                        style={{ background: 'linear-gradient(90deg, #E67E22, #2E5339)' }}
                                    />

                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="relative shrink-0">
                                            <span className="absolute -inset-0.5 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(230,126,34,0.35),rgba(46,83,57,0.35),transparent)] blur opacity-40" />
                                            <div className="relative h-16 w-16 rounded-full ring-2 ring-[#2E5339]/70 group-hover:ring-[#E67E22]/80 transition-colors duration-300 overflow-hidden">
                                                <Image
                                                    src={v.image}
                                                    alt={v.name}
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                                                {v.name}
                                            </h3>
                                            <div className="mt-0.5 text-[11px] uppercase tracking-[0.22em]" style={{ color: '#2E5339' }}>
                                                {v.tag}
                                            </div>
                                            <p className="mt-2 text-sm text-gray-600 italic leading-snug">
                                                “{v.quote}”
                                            </p>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <AnimatedButton variant="primary" className="px-7">
                                Explore the Pavilion
                            </AnimatedButton>
                            <button
                                className="group inline-flex items-center gap-2 text-sm tracking-widest"
                                style={{ color: '#2E5339' }}
                            >
                                MEET ALL VOICES
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translateZ(0);
          }
          50% {
            transform: scale(1.05) translateZ(0);
          }
          100% {
            transform: scale(1) translateZ(0);
          }
        }
      `}</style>
        </section>
    );
}