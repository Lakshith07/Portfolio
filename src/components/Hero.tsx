"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const heroLines = [
  "BEZAWADA LAKSHITH",
  "SOFTWARE ENGINEER",
  "ASPIRING ENTREPRENEUR",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const parallaxEls = containerRef.current.querySelectorAll("[data-parallax]");
      parallaxEls.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "1");
        (el as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-0"
    >
      {/* 3D Background */}
      <Scene3D />

      {/* Spacer to push content below navbar */}
      <div className="h-[20vh] w-full shrink-0" />

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top-left corner lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[15%] left-[5%] w-[120px] h-[1px] bg-gradient-to-r from-[#333] to-transparent origin-left"
          data-parallax="0.5"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[15%] left-[5%] w-[1px] h-[80px] bg-gradient-to-b from-[#333] to-transparent origin-top"
          data-parallax="0.5"
        />

        {/* Bottom-right corner lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[20%] right-[5%] w-[120px] h-[1px] bg-gradient-to-l from-[#333] to-transparent origin-right"
          data-parallax="0.3"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[20%] right-[5%] w-[1px] h-[80px] bg-gradient-to-t from-[#333] to-transparent origin-bottom"
          data-parallax="0.3"
        />

        {/* Background Grids & Illustrations */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-grid-dots opacity-100" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0"
          >
            <img 
              src="/simple_tech.png" 
              alt="Simple Tech Illustration" 
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
          </motion.div>
        </div>

        {/* Floating cross markers (Simplified) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute top-[30%] right-[15%]"
          data-parallax="0.8"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="10" y1="0" x2="10" y2="20" stroke="#555" strokeWidth="0.5" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="#555" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-[35%] left-[12%]"
          data-parallax="0.6"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="0" x2="8" y2="16" stroke="#555" strokeWidth="0.5" />
            <line x1="0" y1="8" x2="16" y2="8" stroke="#555" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-wide flex flex-col justify-center text-center h-full pt-32">


        {/* Hero Headlines */}
        <div className="mb-16 w-full">
          {heroLines.map((line, i) => (
            <div key={i} className="mb-8 w-full">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ skewX: -5, transition: { duration: 0.1 } }}
                className={`text-center cursor-default transition-all duration-300 ${
                  i === 0
                    ? "heading-xl text-[#F5F5F5] italic font-bold tracking-tighter"
                    : "heading-md text-[#B0B0B0] hover:text-[#F5F5F5] font-light"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Technical Line Diagram SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-[-1]"
        >
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
              d="M100 500 L900 500" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ duration: 3, delay: 1.8, ease: "easeInOut" }}
              d="M500 100 L500 900" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" 
            />
            <motion.circle 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
              cx="500" cy="500" r="300" stroke="white" strokeWidth="0.5" 
            />
            <circle cx="500" cy="500" r="150" stroke="white" strokeWidth="0.5" opacity="0.1" />
            <rect x="200" y="200" width="600" height="600" stroke="white" strokeWidth="0.5" opacity="0.1" />
            {/* Connection points */}
            <motion.circle 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, type: "spring" }}
              cx="200" cy="200" r="3" fill="white" 
            />
            <motion.circle 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.7, type: "spring" }}
              cx="800" cy="800" r="3" fill="white" 
            />
          </svg>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="body-lg max-w-4xl mx-auto mb-32 text-center !leading-relaxed"
        >
          Responsive &amp; SEO Friendly Web Experiences with Modern Frontend
          Engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center justify-center gap-10 flex-wrap mt-32"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            View Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
          >
            Contact Me
          </button>
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[5]" />
    </section>
  );
}
