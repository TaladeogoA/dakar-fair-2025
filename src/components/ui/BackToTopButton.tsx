'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const ticking = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                const progress = scrollTop / (scrollHeight - clientHeight);
                const nearBottom = scrollHeight - (scrollTop + clientHeight) < clientHeight * 1.25;
                setVisible(progress > 0.7 || nearBottom);
                ticking.current = false;
            });
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="fixed z-50 right-4 md:right-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/10 backdrop-blur"
                    style={{
                        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
                        background:
                            'linear-gradient(135deg, rgba(230,126,34,0.95) 0%, rgba(46,83,57,0.95) 100%)',
                    }}
                >
                    <span className="sr-only">Back to top</span>
                    <div className="p-3 md:p-3.5 text-[#F4F1EB] hover:text-white transition-colors">
                        <ArrowUp className="h-5 w-5" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}