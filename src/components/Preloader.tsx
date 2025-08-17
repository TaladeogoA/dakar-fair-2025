"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power2.out", duration: 1.1 },
            onComplete,
        });

        // 1. Seed appears
        tl.fromTo("#seed", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });

        // 2. Trunk grows
        tl.fromTo(
            "#trunk",
            { scaleY: 0, transformOrigin: "bottom center" },
            { scaleY: 1, duration: 0.9 }
        );

        // 3. Roots spread
        tl.fromTo(
            "#roots",
            { scaleX: 0, transformOrigin: "center" },
            { scaleX: 1, duration: 0.7 },
            "-=0.5"
        );

        // 4. Canopy grows
        tl.fromTo(
            "#canopy",
            { scale: 0, opacity: 0, transformOrigin: "center" },
            { scale: 1, opacity: 1, duration: 1.2 },
            "-=0.6"
        );

        // 5. Sun rises
        tl.fromTo(
            sunRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 0.9, duration: 1.2 },
            "-=0.8"
        );

        // 6. Smooth, fast fade + scale out
        tl.to(preloaderRef.current, {
            opacity: 0,
            scale: 1.3,
            duration: 0.6, // much quicker exit
            ease: "power3.inOut",
            delay: 0.4,
        });
    }, [onComplete]);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 flex items-center justify-center bg-[#F4F1EB] z-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                width="140"
                height="140"
            >
                {/* Sun */}
                <circle
                    ref={sunRef}
                    cx="100"
                    cy="80"
                    r="50"
                    fill="#F1C40F"
                    opacity="0.8"
                />

                {/* Seed */}
                <circle id="seed" cx="100" cy="160" r="4" fill="#2E7D32" />

                {/* Trunk */}
                <rect id="trunk" x="95" y="100" width="10" height="60" fill="#5D4037" />

                {/* Roots */}
                <path
                    id="roots"
                    d="M95 160 Q85 170 75 175 M105 160 Q115 170 125 175"
                    stroke="#5D4037"
                    strokeWidth="4"
                    fill="none"
                />

                {/* Canopy (baobab round top) */}
                <circle
                    id="canopy"
                    cx="100"
                    cy="80"
                    r="40"
                    fill="#2E7D32"
                    opacity="0.9"
                />
            </svg>
        </div>
    );
};

export default Preloader;
