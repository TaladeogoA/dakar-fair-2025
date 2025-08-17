'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

export type Highlight = {
    date: string;
    title: string;
    blurb: string;
};

const sectionContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const sectionItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeInOut' },
    },
};

export default function ProgramHighlightsSection({ highlights }: { highlights: Highlight[] }) {
    return (
        <section id="program" className="py-24 px-4 bg-white">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionContainer}
            >
                <motion.div variants={sectionItem}>
                    <div className="flex items-center gap-3">
                        <span className="inline-block h-1 w-12 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                        <span className="uppercase tracking-[0.2em] text-xs" style={{ color: '#2E5339' }}>
                            Agenda at a glance
                        </span>
                    </div>
                    <h3 className="mt-6 text-3xl md:text-5xl font-serif text-gray-900">Program Highlights</h3>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        Five days hosted at the renovated Exhibition Centre in Dakar — film premieres, forums, ateliers, and a closing gala.
                    </p>
                </motion.div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href="#agenda"
                            variants={sectionItem}
                            whileHover={{ y: -2 }}
                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5"
                        >
                            <motion.span
                                initial={{ width: '0%' }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="absolute left-0 top-0 h-full"
                                style={{
                                    background:
                                        'linear-gradient(90deg, rgba(46,83,57,0.08) 0%, rgba(46,83,57,0.03) 100%)',
                                    zIndex: 0,
                                }}
                            />

                            <span
                                className="absolute left-0 top-0 w-full h-[3px]"
                                style={{ backgroundColor: idx === 0 ? '#E67E22' : '#2E5339', opacity: idx === 0 ? 1 : 0.8 }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Calendar className="w-4 h-4" style={{ color: '#2E5339' }} />
                                    <span>{item.date}</span>
                                </div>
                                <h4 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h4>
                                <p className="mt-2 text-sm text-gray-600">{item.blurb}</p>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: '#2E5339' }}>
                                    <span className="tracking-widest">EXPLORE</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div variants={sectionItem} className="mt-12 text-center">
                    <AnimatedButton variant="primary" className="px-8">
                        View full agenda
                    </AnimatedButton>
                </motion.div>
            </motion.div>
        </section>
    );
}