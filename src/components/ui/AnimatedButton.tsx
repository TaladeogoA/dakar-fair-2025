'use client';

import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

type ButtonScheme = {
    bg?: string;
    text?: string;
    border?: string;
    overlay?: string;
    hoverText?: string;
};

type Props = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
    scheme?: ButtonScheme;
};

const overlayVariants: Variants = {
    rest: { width: '0%' },
    hover: { width: '100%' },
    tap: { width: '100%' },
};

const overlayTransition: Transition = { duration: 0.35, ease: 'easeInOut' };

export default function AnimatedButton({
    children,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    ariaLabel,
    scheme,
}: Props) {
    const base =
        'relative inline-flex items-center justify-center rounded-sm px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-medium overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors';

    const classes: string[] = [base];

    if (variant === 'primary') {
        classes.push(scheme?.bg ?? 'bg-[#E67E22]');
        classes.push(scheme?.text ?? 'text-white/90 hover:text-white');
    } else {
        classes.push('bg-transparent', 'border');
        classes.push(scheme?.border ?? 'border-white');
        classes.push(scheme?.text ?? 'text-white/80');
        classes.push(scheme?.hoverText ?? 'hover:text-white');
    }

    if (className) classes.push(className);

    const overlayClasses = [
        'absolute left-0 top-0 h-full',
        scheme?.overlay ?? (variant === 'primary' ? 'bg-[#3A6A4D]' : 'bg-white/15'),
    ].join(' ');

    return (
        <motion.button
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            className={classes.join(' ')}
        >
            <motion.span
                className={overlayClasses}
                variants={overlayVariants}
                transition={overlayTransition}
                style={{ zIndex: 0 }}
            />
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}