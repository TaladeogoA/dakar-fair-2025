"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const { t } = useI18n();

    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    const loadAssets = async () => {
        const assetsToLoad = [
            "/videos/hero.mp4",
            "/videos/screenshot.png",
            "/images/about-dakar.jpg",
            "/images/qr-updates.png",
        ];

        const promises = assetsToLoad.map((src) => {
            return new Promise<void>((resolve, reject) => {
                if (src.endsWith(".mp4")) {
                    const video = document.createElement("video");
                    const cleanup = () => {
                        video.removeAttribute("src");
                        video.load();
                    };
                    video.addEventListener("canplaythrough", () => {
                        cleanup();
                        resolve();
                    }, { once: true });
                    video.addEventListener("error", () => {
                        cleanup();
                        resolve();
                    }, { once: true });
                    video.src = src;
                    video.load();
                } else {
                    const img = new Image();
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                    img.src = src;
                }
            });
        });

        await Promise.all(promises);
        setAssetsLoaded(true);
    };

    useEffect(() => {
        if (!svgRef.current) return;

        const prepDraw = (el: SVGGeometryElement) => {
            try {
                const length = el.getTotalLength ? Math.ceil(el.getTotalLength()) : 0;
                if (length > 0) {
                    el.style.strokeDasharray = `${length}`;
                    el.style.strokeDashoffset = `${length}`;
                }
            } catch { }
        };

        const rootPaths = Array.from(svgRef.current.querySelectorAll<SVGPathElement>("#roots-group .draw-path"));
        const branchPaths = Array.from(svgRef.current.querySelectorAll<SVGPathElement>("#branches-group .draw-path"));
        const borderCircle = svgRef.current.querySelector<SVGCircleElement>("#border-circle");

        rootPaths.forEach(prepDraw);
        branchPaths.forEach(prepDraw);
        if (borderCircle) prepDraw(borderCircle);

        const tl = gsap.timeline({
            defaults: { ease: "power2.out", duration: 1.0 },
            onComplete: () => setAnimationComplete(true),
        });

        if (borderCircle) {
            tl.to(borderCircle, { strokeDashoffset: 0, duration: 0.9, ease: "power3.out" });
        }

        tl.fromTo("#seed", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.2");

        tl.fromTo(
            "#trunk",
            { scaleY: 0, transformOrigin: "120px 164px" },
            { scaleY: 1, duration: 0.9 },
            "-=0.1"
        );

        if (branchPaths.length) {
            tl.to(
                branchPaths,
                { strokeDashoffset: 0, duration: 1.0, stagger: 0.08, ease: "power2.out" },
                "-=0.4"
            );
        }

        if (rootPaths.length) {
            tl.to(
                rootPaths,
                { strokeDashoffset: 0, duration: 1.25, stagger: 0.05, ease: "power2.out" },
                "-=0.6"
            );
        }

        const foliageClusters = Array.from(svgRef.current.querySelectorAll<SVGGElement>("#foliage-group .foliage"));
        if (foliageClusters.length) {
            gsap.set(foliageClusters, { transformOrigin: "center", scale: 0.6, opacity: 0 });
            tl.to(
                foliageClusters,
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.06, ease: "back.out(1.6)" },
                "-=0.4"
            );
        }

        tl.fromTo(
            "#sun-group",
            { opacity: 0, scale: 0.8, transformOrigin: "center" },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.3"
        );

        gsap.to("#sun-group", {
            rotation: 360,
            transformOrigin: "162px 98px",
            duration: 16,
            ease: "none",
            repeat: -1,
        });

        loadAssets();

        return () => {
            tl.kill();
            gsap.killTweensOf("#sun-group");
        };
    }, []);

    useEffect(() => {
        if (assetsLoaded && animationComplete) {
            const timer = setTimeout(() => {
                const exitTl = gsap.timeline({ onComplete });
                exitTl.to(preloaderRef.current, {
                    opacity: 0,
                    scale: 1.06,
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [assetsLoaded, animationComplete, onComplete]);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4F1EB]"
        >
            <div className="flex flex-col items-center gap-5">
                <svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 240 240"
                    width="160"
                    height="160"
                >
                    <defs>
                        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2E5339" />
                            <stop offset="55%" stopColor="#3F7A4F" />
                            <stop offset="100%" stopColor="#E67E22" />
                        </linearGradient>
                        <filter id="canopyShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1.2" stdDeviation="1.5" floodColor="rgba(0,0,0,0.25)" />
                        </filter>
                        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FFD54F" />
                            <stop offset="60%" stopColor="#F1C40F" />
                            <stop offset="100%" stopColor="#F39C12" />
                        </radialGradient>
                    </defs>

                    <circle id="border-circle" cx="120" cy="120" r="108" fill="none" stroke="url(#borderGrad)" strokeWidth="3.5" opacity="0.95" />
                    <path d="M40 168 Q120 160 200 168" fill="none" stroke="#7D5A4F" strokeWidth="2" opacity="0.25" />
                    <circle id="seed" cx="120" cy="164" r="3.5" fill="#2E7D32" />
                    <g id="trunk"><path d="M110 164 L112 118 C112 110 120 106 120 106 C120 106 128 110 128 118 L130 164 Z" fill="#5D4037" /></g>
                    <g id="branches-group">
                        <path className="draw-path" d="M120 110 C116 102, 108 98, 98 96" fill="none" stroke="#5D4037" strokeWidth="2.4" strokeLinecap="round" />
                        <path className="draw-path" d="M120 110 C124 102, 132 98, 142 96" fill="none" stroke="#5D4037" strokeWidth="2.4" strokeLinecap="round" />
                        <path className="draw-path" d="M118 114 C110 106, 100 105, 90 108" fill="none" stroke="#5D4037" strokeWidth="2.0" strokeLinecap="round" />
                        <path className="draw-path" d="M122 114 C130 106, 140 105, 150 108" fill="none" stroke="#5D4037" strokeWidth="2.0" strokeLinecap="round" />
                        <path className="draw-path" d="M120 112 C120 104, 116 100, 114 96" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
                        <path className="draw-path" d="M120 112 C120 104, 124 100, 126 96" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
                    </g>
                    <g id="foliage-group" filter="url(#canopyShadow)">
                        <g className="foliage"><ellipse cx="120" cy="88" rx="42" ry="26" fill="#2E7D32" opacity="0.95" /></g>
                        <g className="foliage">
                            <ellipse cx="92" cy="92" rx="20" ry="14" fill="#2E5339" opacity="0.95" />
                            <ellipse cx="80" cy="96" rx="16" ry="12" fill="#3A6B48" opacity="0.95" />
                            <ellipse cx="100" cy="82" rx="16" ry="12" fill="#3F7A4F" opacity="0.95" />
                        </g>
                        <g className="foliage">
                            <ellipse cx="148" cy="92" rx="20" ry="14" fill="#2E5339" opacity="0.95" />
                            <ellipse cx="160" cy="96" rx="16" ry="12" fill="#3A6B48" opacity="0.95" />
                            <ellipse cx="140" cy="82" rx="16" ry="12" fill="#3F7A4F" opacity="0.95" />
                        </g>
                        <g className="foliage">
                            <ellipse cx="120" cy="74" rx="18" ry="12" fill="#2E7D32" opacity="0.95" />
                            <ellipse cx="106" cy="76" rx="10" ry="7" fill="#3F7A4F" opacity="0.95" />
                            <ellipse cx="134" cy="76" rx="10" ry="7" fill="#3F7A4F" opacity="0.95" />
                        </g>
                    </g>
                    <g id="roots-group" opacity="0.95">
                        <path className="draw-path" d="M120 164 C116 172, 110 178, 102 182" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
                        <path className="draw-path" d="M120 164 C124 172, 130 178, 138 182" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
                        <path className="draw-path" d="M118 168 C114 176, 104 184, 94 188" fill="none" stroke="#5D4037" strokeWidth="1.9" strokeLinecap="round" />
                        <path className="draw-path" d="M122 168 C126 176, 136 184, 146 188" fill="none" stroke="#5D4037" strokeWidth="1.9" strokeLinecap="round" />
                        <path className="draw-path" d="M120 166 C112 172, 108 176, 104 184" fill="none" stroke="#5D4037" strokeWidth="1.6" strokeLinecap="round" />
                        <path className="draw-path" d="M120 166 C128 172, 132 176, 136 184" fill="none" stroke="#5D4037" strokeWidth="1.6" strokeLinecap="round" />
                        <path className="draw-path" d="M100 180 C108 182, 132 182, 140 180" fill="none" stroke="#5D4037" strokeWidth="1.4" strokeLinecap="round" />
                        <path className="draw-path" d="M96 186 C110 188, 130 188, 144 186" fill="none" stroke="#5D4037" strokeWidth="1.3" strokeLinecap="round" />
                        <path className="draw-path" d="M92 191 C110 193, 130 193, 148 191" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" />
                        <path className="draw-path" d="M104 176 C110 178, 118 178, 124 176" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" />
                        <path className="draw-path" d="M106 184 C114 186, 126 186, 134 184" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" />
                        <path className="draw-path" d="M98 182 C96 186, 96 190, 98 192" fill="none" stroke="#5D4037" strokeWidth="1.0" strokeLinecap="round" />
                        <path className="draw-path" d="M142 182 C144 186, 144 190, 142 192" fill="none" stroke="#5D4037" strokeWidth="1.0" strokeLinecap="round" />
                        <path className="draw-path" d="M110 188 C112 192, 118 192, 122 188" fill="none" stroke="#5D4037" strokeWidth="1.0" strokeLinecap="round" />
                        <path className="draw-path" d="M126 188 C124 192, 118 194, 114 192" fill="none" stroke="#5D4037" strokeWidth="1.0" strokeLinecap="round" />
                    </g>
                    <g id="sun-group">
                        <circle cx="162" cy="98" r="13" fill="url(#sunGrad)" opacity="0.95" />
                        <g opacity="0.85">
                            <line x1="162" y1="78" x2="162" y2="84" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="162" y1="112" x2="162" y2="118" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="142" y1="98" x2="148" y2="98" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="176" y1="98" x2="182" y2="98" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="147" y1="83" x2="152" y2="88" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="172" y1="108" x2="177" y2="113" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="147" y1="113" x2="152" y2="108" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="172" y1="88" x2="177" y2="83" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    </g>
                </svg>

                <div className="flex flex-col items-center text-center">
                    <div className="text-xs tracking-widest text-[#2E5339]/70 uppercase">
                        {!assetsLoaded ? t("preloader.loading") : t("preloader.ready")}
                    </div>
                    <div className="mt-2 w-36 h-1 bg-[#2E5339]/20 rounded-full overflow-hidden mx-auto">
                        <div className={`h-full bg-[#2E5339] transition-all duration-300 ${assetsLoaded ? "w-full" : "w-2/3"}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;