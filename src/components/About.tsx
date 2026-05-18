"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Frontend Development", value: "Passionate" },
  { label: "Responsive Design", value: "Expert" },
  { label: "SEO Friendly Websites", value: "Focused" },
  { label: "Presentation Skills", value: "Confident" },
];

const timeline = [
  {
    year: "2024",
    title: "Started B.Tech CSE",
    description:
      "Began Computer Science Engineering journey, diving deep into programming fundamentals and web technologies.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Mastered React, Next.js, and modern CSS frameworks. Built responsive, accessible web applications.",
  },
  {
    year: "2025",
    title: "Full-Stack Exploration",
    description:
      "Expanding into backend technologies and cloud architecture to build production-ready applications.",
  },
  {
    year: "2026",
    title: "Innovating the Future",
    description:
      "Pushing boundaries with advanced web solutions and emerging technologies to deliver exceptional value.",
  },
];

function TimelineItem({ item, index, scrollYProgress, isInView }: { item: any, index: number, scrollYProgress: any, isInView: boolean }) {
  // Use a very tight range for each step so it "snaps" as you scroll past it
  const stepStart = index * 0.25;
  const stepEnd = stepStart + 0.15;
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]),
    { stiffness: 200, damping: 20 }
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
      className="relative flex items-start gap-8"
    >
      {/* Left Column: Dots (Fixed width to perfectly center the line) */}
      <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
        {/* Active dot highlight based on scroll - SUPER BRIGHT */}
        <motion.div 
          className="absolute w-3 h-3 rounded-full bg-[#F5F5F5] shadow-[0_0_20px_rgba(255,255,255,1),_0_0_10px_rgba(255,255,255,1)] z-20"
          style={{ opacity }}
        />
        {/* Timeline dot */}
        <div className="absolute w-3 h-3 rounded-full border-2 border-white/30 bg-[#050505] z-10" />
      </div>
      
      {/* Right Column: Content */}
      <div className="flex-1 pt-0.5">
        <span className="label-accent text-xs block mb-1 opacity-60">{item.year}</span>
        <h3
          className="text-[#F5F5F5] font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.title}
        </h3>
        <p className="body-md text-sm mt-2 opacity-70 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"]
  });

  const isInView = useInView(sectionRef, { margin: "-20%" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Section Label */}
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="label-accent">01</span>
          <span className="w-12 h-[1px] bg-[#D9D9D9]" />
          <span className="label">About Me</span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="image-3d-container relative max-w-[320px] mx-auto lg:mx-0">
              {/* Blueprint-style frame */}
              <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-white/10" />
              <div className="absolute -top-4 -right-4 w-10 h-10 border-t border-r border-white/10" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b border-l border-white/10" />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-white/10" />

              {/* Static Image (No floating) */}
              <div className="image-3d relative aspect-square overflow-hidden rounded-full bg-[#111] border-2 border-white/[0.05]">
                <Image
                  src="/images/lakshith.jpg"
                  alt="Bezawada Lakshith - Software Engineer"
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                {/* Scan line effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                  }}
                />
              </div>

              {/* Image label */}
              <div className="mt-4 flex items-center justify-between">
                <span className="label">BEZAWADA LAKSHITH</span>
                <span className="label">CSE &apos;28</span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="heading-lg mb-6">
                CRAFTING
                <br />
                <span className="text-[#666]">DIGITAL</span> EXPERIENCES
              </h2>
              <p className="body-lg max-w-xl">
                I&apos;m Bezawada Lakshith, a CSE student from Andhra Pradesh, India, specializing in modern frontend engineering. I build high-performance, responsive web experiences with a focus on clean architecture.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="card-animated-border p-6 group"
                >
                  <div className="relative z-10">
                    <span className="label-accent block mb-2">{stat.value}</span>
                    <span className="body-md !text-[#888] text-sm">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="label mb-6 block">Journey</span>
              <div ref={timelineRef} className="relative space-y-12 mt-4">
                {/* Timeline base line (Centered in the w-6 dot column = left-3 (12px), minus 1px for width = left-[11px]) */}
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

                <div className="space-y-12">
                  {timeline.map((item, i) => (
                    <TimelineItem 
                      key={i} 
                      item={item} 
                      index={i} 
                      scrollYProgress={timelineScroll} 
                      isInView={isInView} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
