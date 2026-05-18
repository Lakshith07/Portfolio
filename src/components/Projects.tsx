"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";

const projects = [
  {
    title: "Learn-Lens",
    subtitle: "Academic Analytics Platform",
    description:
      "An academic performance analytics platform predicting semester results and tracking subject-wise progress to identify weak subjects.",
    tags: ["JavaScript", "Analytics", "Education"],
    year: "2026",
    status: "LIVE",
    link: "https://github.com/Lakshith07/Learn-Lens",
    image: "/images/learn-lens.png",
  },
  {
    title: "Nexus-pro",
    subtitle: "Peer-to-Peer Clothing Rental",
    description:
      "A location-based platform enabling students to rent clothes for short durations at affordable prices, solving the last-minute outfit problem.",
    tags: ["HTML", "CSS", "Frontend"],
    year: "2026",
    status: "COMPLETED",
    link: "https://github.com/Lakshith07/Nexus-pro",
    image: "/images/nexus-pro.png",
  },
  {
    title: "CleanTown",
    subtitle: "Environmental Management System",
    description:
      "A waste management application with real-time environmental monitoring, emergency smoke detection, and GPS-based dustbin tracking.",
    tags: ["React", "Firebase", "Maps API"],
    year: "2025",
    status: "COMPLETED",
    link: "#",
    image: "/images/clean-town.png",
  },
  {
    title: "CampusConnect",
    subtitle: "College Discovery & Networking",
    description:
      "A comprehensive college discovery and decision platform with search, comparison tools, predictor, and community discussions.",
    tags: ["Node.js", "Express", "Firebase"],
    year: "2025",
    status: "COMPLETED",
    link: "https://github.com/Lakshith07/CampusConnect",
    image: "/images/campus-connect.png",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Brand & Showcase",
    description:
      "This very website — a world-class portfolio built with Next.js, Three.js, Framer Motion, and GSAP. Featuring cinematic scroll animations.",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    year: "2025",
    status: "LIVE",
    link: "#",
    image: "/images/portfolio.png",
  },
];

function ProjectCard({
  project,
  index,
  containerProgress,
}: {
  project: (typeof projects)[0];
  index: number;
  containerProgress: MotionValue<number>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Calculate stagger for the shooting star so they don't all fall at the exact same time
  // but they all scroll relative to the main container
  const starTop = useTransform(containerProgress, [0, 1], ["-20%", "150%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px -100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-full flex"
    >
      <a
        ref={cardRef}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-[#2a2a2a] flex flex-col justify-between group-hover:-translate-y-2"
      >
        {/* Mouse spotlight effect */}
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217,217,217,0.06), transparent 40%)`,
              inset: 0,
            }}
          />
        )}

        {/* Individual Shooting Star Line for this project */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 z-20">
          <motion.div
            className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#F5F5F5] to-transparent shadow-[0_0_15px_#F5F5F5]"
            style={{ top: starTop }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col pl-12">
          {/* Top Row */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="label-accent text-xs">{project.subtitle}</span>
              <div className="flex items-center gap-3 mt-1">
                <span className="label !text-[0.6rem]">{project.year}</span>
                <span className="w-1 h-1 rounded-full bg-[#333]" />
                <span
                  className={`label !text-[0.6rem] ${
                    project.status === "LIVE" ? "!text-green-400/70" : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Arrow icon */}
            <motion.div
              animate={isHovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 shrink-0 rounded-full border border-[#222] flex items-center justify-center group-hover:border-[#444] group-hover:bg-[#111] transition-all duration-500"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#888" strokeWidth="1.2">
                <path d="M1 13L13 1M13 1H5M13 1V9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Project Title */}
          <h3
            className="heading-md mb-4 group-hover:text-[#D9D9D9] transition-colors duration-500"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="body-md flex-1 text-sm md:text-base opacity-80 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs rounded-md border border-[#1a1a1a] text-[#777] bg-[#0d0d0d] group-hover:border-[#2a2a2a] group-hover:text-[#999] transition-all duration-500"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Simple Outline Illustration Container */}
        <div className="h-48 md:h-56 w-full border-t border-[#1a1a1a] bg-[#030303] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-[120%] w-auto object-contain mix-blend-screen opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
          />
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent group-hover:via-[#333] transition-all duration-700 z-20" />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate the horizontal shift. -82% works well for a container of w-max to leave the last item visible.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section id="projects" ref={containerRef} className="relative h-[400vh]">
      {/* Sticky content wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#050505]">
        
        {/* Main Horizontal Shooting Star Timeline */}
        <div className="absolute top-[15%] md:top-[20%] left-0 right-0 h-[1px] bg-white/10 z-10 pointer-events-none">
          <motion.div
            className="absolute top-0 h-[2px] w-48 md:w-96 bg-gradient-to-r from-transparent via-[#F5F5F5] to-transparent shadow-[0_0_20px_#F5F5F5]"
            style={{ 
              left: useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]),
              top: "-0.5px"
            }}
          />
        </div>

        {/* Horizontal Scroll Content */}
        <motion.div 
          style={{ x }} 
          className="relative z-20 flex w-max items-center h-full gap-8 px-6 md:px-20"
        >
          {/* Intro Slide */}
          <div className="w-[85vw] md:w-[500px] shrink-0 space-y-6 pt-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="label-accent">04</span>
              <span className="w-12 h-[1px] bg-[#D9D9D9]" />
              <span className="label">Selected Projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-lg leading-[1.1]"
            >
              FEATURED <br className="hidden md:block" />
              <span className="text-[#666]">WORK</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-md max-w-sm mt-4 opacity-80"
            >
              A selection of important repositories from my GitHub, featuring full-stack applications, environmental tech, and algorithm tools.
            </motion.p>
          </div>

          {/* Project Cards */}
          {projects.map((project, i) => (
            <div className="w-[85vw] md:w-[450px] lg:w-[500px] shrink-0 h-[600px] max-h-[80vh] flex items-center" key={project.title}>
              <ProjectCard project={project} index={i} containerProgress={scrollYProgress} />
            </div>
          ))}

          {/* Spacer at the end for proper padding */}
          <div className="w-[10vw] md:w-[200px] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}

