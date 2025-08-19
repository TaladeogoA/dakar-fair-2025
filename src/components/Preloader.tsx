"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<SVGCircleElement>(null);
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    const loadAssets = async () => {
        const assetsToLoad = [
            '/videos/hero.mp4',
            '/videos/screenshot.png',
            '/images/about-dakar.jpg',
            '/images/qr-updates.png',
        ];

        const promises = assetsToLoad.map((src) => {
            return new Promise<void>((resolve, reject) => {
                if (src.endsWith('.mp4')) {
                    const video = document.createElement('video');
                    video.addEventListener('canplaythrough', () => resolve(), { once: true });
                    video.addEventListener('error', () => reject(new Error(`Failed to load video: ${src}`)), { once: true });
                    video.src = src;
                    video.load();
                } else {
                    const img = new Image();
                    img.onload = () => resolve();
                    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
                    img.src = src;
                }
            });
        });

        try {
            await Promise.allSettled(promises);
            setAssetsLoaded(true);
        } catch (error) {
            console.warn('Some assets failed to load, but continuing:', error);
            setAssetsLoaded(true);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power2.out", duration: 1.1 },
            onComplete: () => setAnimationComplete(true),
        });

        tl.fromTo("#seed", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });

        tl.fromTo(
            "#trunk",
            { scaleY: 0, transformOrigin: "bottom center" },
            { scaleY: 1, duration: 0.9 }
        );

        tl.fromTo(
            "#roots",
            { scaleX: 0, transformOrigin: "center" },
            { scaleX: 1, duration: 0.7 },
            "-=0.5"
        );

        tl.fromTo(
            "#canopy",
            { scale: 0, opacity: 0, transformOrigin: "center" },
            { scale: 1, opacity: 1, duration: 1.2 },
            "-=0.6"
        );

        tl.fromTo(
            sunRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 0.9, duration: 1.2 },
            "-=0.8"
        );

        loadAssets();

        return () => {
            tl.kill();
        };
    }, []);

    useEffect(() => {
        if (assetsLoaded && animationComplete) {
            const timer = setTimeout(() => {
                const exitTl = gsap.timeline({
                    onComplete,
                });

                exitTl.to(preloaderRef.current, {
                    opacity: 0,
                    scale: 1.3,
                    duration: 0.6,
                    ease: "power3.inOut",
                });
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [assetsLoaded, animationComplete, onComplete]);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 flex items-center justify-center bg-[#F4F1EB] z-50"
        >
            <div className="flex flex-col items-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="140"
                    height="140"
                >
                    <circle
                        ref={sunRef}
                        cx="100"
                        cy="80"
                        r="50"
                        fill="#F1C40F"
                        opacity="0.8"
                    />

                    <circle id="seed" cx="100" cy="160" r="4" fill="#2E7D32" />

                    <rect id="trunk" x="95" y="100" width="10" height="60" fill="#5D4037" />

                    <path
                        id="roots"
                        d="M95 160 Q85 170 75 175 M105 160 Q115 170 125 175"
                        stroke="#5D4037"
                        strokeWidth="4"
                        fill="none"
                    />

                    <circle
                        id="canopy"
                        cx="100"
                        cy="80"
                        r="40"
                        fill="#2E7D32"
                        opacity="0.9"
                    />
                </svg>

                <div className="text-center">
                    <div className="text-xs tracking-widest text-[#2E5339]/70 uppercase">
                        {!assetsLoaded ? 'Loading assets...' : 'Ready'}
                    </div>
                    <div className="mt-2 w-32 h-1 bg-[#2E5339]/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-[#2E5339] transition-all duration-300 ${assetsLoaded ? 'w-full' : 'w-2/3'
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;