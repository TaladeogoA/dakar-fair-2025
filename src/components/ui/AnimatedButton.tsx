'use client';

import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

type Props = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
};

const overlayVariants: Variants = {
    rest: { width: '0%' },
    hover: { width: '100%' },
    tap: { width: '100%' },
};

const overlayTransition: Transition = { duration: 0.35, ease: "easeInOut" };

export default function AnimatedButton({
    children,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    ariaLabel,
}: Props) {
    const base =
        'relative inline-flex items-center justify-center rounded-sm px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-medium overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors';

    const primaryBtn =
        'bg-[#2E5339] text-white/90 hover:text-white';
    const primaryOverlay = 'bg-[#3A6A4D]';

    const secondaryBtn =
        'border border-white text-white/80 hover:text-white bg-transparent';
    const secondaryOverlay = 'bg-white/15';

    const btnClasses = `${base} ${variant === 'primary' ? primaryBtn : secondaryBtn} ${className}`;
    const overlayClasses = `absolute left-0 top-0 h-full ${variant === 'primary' ? primaryOverlay : secondaryOverlay}`;

    return (
        <motion.button
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            className={btnClasses}
        >
            <motion.span
                className={overlayClasses}
                variants={overlayVariants}
                transition={overlayTransition}
                style={{ zIndex: 0 }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}