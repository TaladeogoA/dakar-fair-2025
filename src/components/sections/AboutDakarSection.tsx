'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

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

function HoverHighlightText({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const tokens = text.split(/(\s+)/);
    return (
        <span className={className}>
            {tokens.map((t, i) =>
                t.trim().length === 0 ? (
                    <span key={i}>{t}</span>
                ) : (
                    <span
                        key={i}
                        className="transition-colors duration-300 hover:text-[#E67E22]"
                    >
                        {t}
                    </span>
                ),
            )}
        </span>
    );
}

export default function AboutDakarSection({ partnerLogos }: Props) {
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
                        <HoverHighlightText text="A reimagined International Fair returns to Dakar in 2025. A landmark meeting point for film, design, music, and technology shaping the Pan-African future." />
                    </motion.h2>

                    <motion.div variants={item} className="md:col-span-5 md:pl-6">
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            Hosted on the renovated grounds of the original Exhibition Centre, the 2025 Fair advances five core goals: Intellectual leadership in Pan-African cultural discourse, economic diversification through creative industries, the preservation and innovation of artisanal heritage, Digital Africa leadership, and education through cultural repatriation.
                        </p>

                        <a
                            href="#program"
                            className="group inline-flex items-center gap-2 mt-6 text-white hover:text-gray-100 transition-colors"
                        >
                            <span className="text-sm tracking-widest">ABOUT THE FAIR</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
                >
                    {partnerLogos.map((logo, i) => (
                        <div key={i} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={160}
                                height={60}
                                className="grayscale hover:grayscale-0 object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}