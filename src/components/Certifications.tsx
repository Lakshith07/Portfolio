"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const certifications = [
  {
    year: "2026",
    title: "Dynamic Programming Camp",
    issuer: "Completion Certificate",
    description: "Mastered dynamic programming concepts, algorithmic problem solving, and optimization techniques through intensive camp.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    issuer: "Self-Directed Learning",
    description: "Mastered HTML, CSS, JavaScript, React, and modern frontend tooling through intensive self-study and project-based learning.",
  },
  {
    year: "2024",
    title: "Responsive Web Design",
    issuer: "Practical Experience",
    description: "Built mobile-first, responsive web applications using modern CSS frameworks and design systems.",
  },
];

function CertItem({ item, index, scrollYProgress, isInView }: { item: any, index: number, scrollYProgress: any, isInView: boolean }) {
  const stepStart = index * 0.3;
  const stepEnd = stepStart + 0.15;
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]),
    { stiffness: 200, damping: 20 }
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      className="relative flex items-start gap-8 group"
    >
      {/* Left Column: Dots */}
      <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
        <motion.div 
          className="absolute w-3 h-3 rounded-full bg-[#F5F5F5] shadow-[0_0_20px_rgba(255,255,255,1),_0_0_10px_rgba(255,255,255,1)] z-20"
          style={{ opacity }}
        />
        <div className="absolute w-3 h-3 rounded-full border-2 border-white/30 bg-[#050505] z-10 group-hover:border-white/60 transition-colors" />
      </div>
      
      {/* Right Column: Content */}
      <div className="flex-1 pt-0.5">
        <span className="label-accent text-xs block mb-2 opacity-60">{item.year} - {item.issuer}</span>
        <h3
          className="text-[#F5F5F5] font-medium text-xl mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.title}
        </h3>
        <p className="body-md max-w-2xl text-sm opacity-70 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"]
  });

  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="label-accent">03</span>
          <span className="w-12 h-[1px] bg-[#D9D9D9]" />
          <span className="label">Certifications</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-16"
        >
          LEARNING <span className="text-[#666]">JOURNEY</span>
        </motion.h2>

        <div ref={timelineRef} className="relative space-y-16 mt-4 ml-4 md:ml-8">
          {/* Timeline base line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-white/10" />
          
          {/* Shooting Star Animation */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] overflow-hidden">
            <motion.div 
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#F5F5F5] to-transparent shadow-[0_0_15px_#F5F5F5]"
              style={{ 
                top: useTransform(timelineScroll, [0, 1], ["-20%", "100%"]) 
              }}
            />
          </div>

          <div className="space-y-16">
            {certifications.map((item, i) => (
              <CertItem 
                key={i} 
                item={item} 
                index={i} 
                scrollYProgress={timelineScroll} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
