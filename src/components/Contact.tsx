"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const terminalLines = [
  { type: "comment", text: "// Let's connect and build something amazing" },
  { type: "prompt", text: "lakshith.email" },
  { type: "output", text: '"bezawadalakshith5@gmail.com"' },
  { type: "prompt", text: "lakshith.linkedin" },
  { type: "output", text: '"www.linkedin.com/in/bezawadalakshith"' },
  { type: "prompt", text: "lakshith.location" },
  { type: "output", text: '"Andhra Pradesh, India"' },
  { type: "prompt", text: "lakshith.status" },
  { type: "output", text: '"Open to opportunities ✓"' },
];

function TerminalLine({
  line,
  index,
  isInView,
}: {
  line: (typeof terminalLines)[0];
  index: number;
  isInView: boolean;
}) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startDelay = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex <= line.text.length) {
          setDisplayText(line.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsDone(true);
        }
      }, 25);

      return () => clearInterval(interval);
    }, index * 400);

    return () => clearTimeout(startDelay);
  }, [isInView, line.text, index]);

  if (!isInView && !isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3 }}
      className="terminal-line mb-1"
    >
      {line.type === "comment" ? (
        <span className="text-[#444]">{displayText}</span>
      ) : line.type === "prompt" ? (
        <>
          <span className="terminal-prompt">❯</span>
          <span className="text-[#D9D9D9]">{displayText}</span>
          {isTyping && <span className="terminal-cursor" />}
        </>
      ) : (
        <span className="text-[#888] pl-4">{displayText}</span>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
          <span className="label-accent">05</span>
          <span className="w-12 h-[1px] bg-[#D9D9D9]" />
          <span className="label">Get In Touch</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-lg mb-8"
            >
              LET&apos;S BUILD
              <br />
              <span className="text-[#666]">SOMETHING</span>
              <br />
              TOGETHER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="body-lg mb-10 max-w-md"
            >
              Whether it&apos;s a project collaboration, a job opportunity, or just a
              conversation about technology — I&apos;d love to hear from you.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <a
                href="mailto:bezawadalakshith5@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-lg border border-[#1a1a1a] hover:border-[#333] hover:bg-[#0a0a0a] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-md bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#444] transition-colors duration-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9D9D9"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <div>
                  <span className="label !text-[0.6rem] block mb-1">Email</span>
                  <span className="text-[#D9D9D9] text-sm group-hover:text-[#F5F5F5] transition-colors">
                    bezawadalakshith5@gmail.com
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#555"
                  strokeWidth="1.2"
                  className="ml-auto group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/bezawadalakshith"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border border-[#1a1a1a] hover:border-[#333] hover:bg-[#0a0a0a] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-md bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#444] transition-colors duration-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9D9D9"
                    strokeWidth="1.5"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="label !text-[0.6rem] block mb-1">
                    LinkedIn
                  </span>
                  <span className="text-[#D9D9D9] text-sm group-hover:text-[#F5F5F5] transition-colors">
                    linkedin.com/in/bezawadalakshith
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#555"
                  strokeWidth="1.2"
                  className="ml-auto group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#ffbd2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="label ml-4 !text-[0.6rem]">
                  contact.ts — lakshith
                </span>
              </div>
              <div className="terminal-body min-h-[300px]">
                {terminalLines.map((line, i) => (
                  <TerminalLine
                    key={i}
                    line={line}
                    index={i}
                    isInView={isInView}
                  />
                ))}

                {/* Blinking cursor at the end */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: terminalLines.length * 0.4 + 0.5 }}
                  className="terminal-line mt-2"
                >
                  <span className="terminal-prompt">❯</span>
                  <span className="terminal-cursor" />
                </motion.div>
              </div>
            </div>

            {/* Coordinates label */}
            <div className="flex items-center justify-between mt-4 px-1">
              <span className="label !text-[0.55rem]">
                AP, INDIA — 15.9129°N, 79.7400°E
              </span>
              <span className="label !text-[0.55rem]">UTC +05:30</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
