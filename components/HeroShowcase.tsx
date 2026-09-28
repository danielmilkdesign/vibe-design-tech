"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

export default function HeroShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth 3D parallax tilt on mouse hover
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto select-none bg-transparent"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient background glow aura */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-700"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(85,241,239,0.35) 0%, rgba(85,241,239,0.08) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(85,241,239,0.2) 0%, rgba(85,241,239,0.03) 60%, transparent 80%)",
        }}
      />

      {/* 3D Floating Graphic */}
      <div
        className="relative overflow-visible bg-transparent transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1}, 1)`,
        }}
      >
        <div className="relative w-full aspect-[1.14/1] bg-transparent">
          <Image
            src="/vibe-hero-cropped.png"
            alt="VIBE Sistema e Site Base Interativo para Saúde e Fitness"
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            priority
            className="object-contain object-center transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  );
}
