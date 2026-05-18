"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: "HTML",
    level: 95,
    category: "CORE",
    description: "Semantic markup & accessibility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M13.5 6L10 18.5M6.5 8.5L3 12l3.5 3.5M17.5 8.5L21 12l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "CSS",
    level: 90,
    category: "CORE",
    description: "Modern layouts & animations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    level: 85,
    category: "CORE",
    description: "ES6+ & async patterns",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 15c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2c1.1 0 2 .9 2 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "React",
    level: 80,
    category: "FRAMEWORK",
    description: "Component architecture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    level: 75,
    category: "FRAMEWORK",
    description: "Full-stack React framework",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 7v10l8-10v10" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    level: 70,
    category: "LANGUAGE",
    description: "Type-safe development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11h8M12 11v7M16 11v3c0 1.1.9 2 2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "STYLING",
    description: "Utility-first CSS framework",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 8c1-4 4-4 6-2s5 0 6-4c-1 4-4 4-6 2s-5 0-6 4zM6 16c1-4 4-4 6-2s5 0 6-4c-1 4-4 4-6 2s-5 0-6 4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "UI/UX Design",
    level: 75,
    category: "DESIGN",
    description: "User-centered design thinking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L3 9v12h18V9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="13" width="8" height="8" rx="1" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-white/20"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="label-accent">02</span>
          <span className="w-12 h-[1px] bg-[#D9D9D9]" />
          <span className="label">Technical Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-16"
        >
          TOOLS &amp; <span className="text-[#666]">TECHNOLOGIES</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="card-animated-border p-6 h-full transition-all duration-500 hover:bg-[#111] relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-[#555] group-hover:text-[#D9D9D9] transition-colors duration-500">
                      {skill.icon}
                    </div>
                    <span className="label !text-[0.6rem]">{skill.category}</span>
                  </div>

                  {/* Skill name */}
                  <h3
                    className="text-lg font-medium text-[#F5F5F5] mb-1 tracking-wide"
                    style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.08em" }}
                  >
                    {skill.name}
                  </h3>

                  <p className="body-md !text-xs !text-[#666] mb-6">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="label !text-[0.55rem]">Proficiency</span>
                      <span className="label-accent !text-[0.55rem]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full bg-gradient-to-r from-[#444] to-[#D9D9D9] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 overflow-hidden border-t border-b border-[#1a1a1a] py-4"
        >
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(2)].map((_, repeatIndex) => (
              <div key={repeatIndex} className="flex items-center gap-8 mr-8">
                {skills.map((skill, i) => (
                  <span
                    key={`${repeatIndex}-${i}`}
                    className="heading-sm text-[#1a1a1a] hover:text-[#333] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {skill.name}
                    <span className="mx-4 text-[#1a1a1a]">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
