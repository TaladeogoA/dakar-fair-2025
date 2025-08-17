'use client';

import { motion, Transition, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Voice = {
    name: string;
    role: string;
    image: string; // e.g., /images/diop.webp
};

const voices: Voice[] = [
    { name: 'Speaker One', role: 'Artist • Senegal', image: '/images/diop.webp' },
    { name: 'Speaker Two', role: 'Curator • Ghana/Nigeria', image: '/images/fatoumata.jpeg' },
    { name: 'Speaker Three', role: 'Designer • Côte d’Ivoire', image: '/images/diop.webp' },
];

const layoutTransition: Transition = { duration: 0.5, ease: 'easeInOut' };

export default function FeaturedVoicesSection() {
    const reduceMotion = useReducedMotion();
    const [active, setActive] = useState<number>(1); // center expanded by default

    return (
        <section
            id="featured-voices"
            className="relative bg-white overflow-hidden"
            aria-label="Ambience reel and featured voices"
        >
            {/* ambient blooms */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-20"
                style={{
                    background:
                        'radial-gradient(closest-side, rgba(46,83,57,0.22), rgba(230,126,34,0.08), transparent)',
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-10"
                style={{
                    background:
                        'radial-gradient(closest-side, rgba(230,126,34,0.16), rgba(46,83,57,0.08), transparent)',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 py-24 md:py-28">
                <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
                    {/* Left: Ambience Reel */}
                    <div className="md:col-span-5">
                        <div className="md:sticky md:top-24">
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                                <video
                                    className={`w-full h-[58vw] md:h-[30rem] object-cover ${reduceMotion ? '' : 'motion-safe:animate-[kenburns_18s_ease-in-out_infinite]'
                                        }`}
                                    src="/videos/ambience.mp4" // 6–8s cuts of Dakar, artisans, halls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/videos/poster.jpg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                    <span className="text-white/90 text-xs tracking-[0.22em] uppercase bg-black/35 backdrop-blur px-3 py-1.5 rounded">
                                        Ambience — Dakar
                                    </span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur px-2.5 py-1 rounded">
                                        Slow cuts
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Full-height Featured Voices */}
                    <div className="md:col-span-7">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="inline-block h-1 w-10 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                            <span className="uppercase tracking-[0.2em] text-xs" style={{ color: '#2E5339' }}>
                                Featured Voices
                            </span>
                        </div>

                        {/* Desktop/Tablet rail */}
                        <motion.div
                            layout
                            transition={layoutTransition}
                            className="hidden sm:flex gap-3 h-[22rem]"
                            onMouseLeave={() => setActive(1)}
                        >
                            {voices.map((v, i) => {
                                const expanded = i === active;
                                const basis = expanded ? '60%' : '20%';

                                return (
                                    <motion.article
                                        key={v.name}
                                        layout
                                        transition={layoutTransition}
                                        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 min-w-0"
                                        style={{ flexBasis: basis, flexGrow: 0, flexShrink: 0 }}
                                        onMouseEnter={() => setActive(i)}
                                        onFocus={() => setActive(i)}
                                        tabIndex={0}
                                        aria-label={`${v.name}, ${v.role}`}
                                    >
                                        <Image
                                            src={v.image}
                                            alt={`${v.name} portrait`}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 640px) 33vw, 100vw"
                                        />
                                        {/* ambient overlay */}
                                        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.35)_100%)] mix-blend-multiply" />
                                        {/* copy */}
                                        <motion.div
                                            initial={false}
                                            animate={{ opacity: expanded ? 1 : 0.3 }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                            className="absolute inset-0 p-5 flex flex-col"
                                        >
                                            <div className="mt-auto">
                                                <div className="text-[11px] uppercase tracking-[0.22em] text-white/80">{v.role}</div>
                                                <h4 className="mt-1 text-white text-2xl font-serif leading-tight">{v.name}</h4>
                                            </div>
                                        </motion.div>
                                        <span className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
                                    </motion.article>
                                );
                            })}
                        </motion.div>

                        {/* Mobile: stacked cards */}
                        <div className="sm:hidden grid grid-cols-1 gap-4">
                            {voices.map((v) => (
                                <article
                                    key={v.name}
                                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 h-64"
                                >
                                    <Image src={v.image} alt={`${v.name} portrait`} fill className="object-cover" sizes="100vw" />
                                    <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.35)_100%)] mix-blend-multiply" />
                                    <div className="absolute inset-0 p-5 flex flex-col">
                                        <div className="mt-auto">
                                            <div className="text-[11px] uppercase tracking-[0.22em] text-white/80">{v.role}</div>
                                            <h4 className="mt-1 text-white text-2xl font-serif leading-tight">{v.name}</h4>
                                        </div>
                                    </div>
                                    <span className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
                                </article>
                            ))}
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
            transform: scale(1.045) translateZ(0);
          }
          100% {
            transform: scale(1) translateZ(0);
          }
        }
      `}</style>
        </section>
    );
}