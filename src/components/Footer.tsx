"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1a1a1a]">
      {/* Large name display */}
      <div className="container-wide py-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2
            className="text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-[0.04em] text-[#111] hover:text-[#1a1a1a] transition-colors duration-700 select-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BEZAWADA
            <br />
            LAKSHITH
          </h2>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#111]">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="label !text-[0.6rem]">
            © {currentYear} BEZAWADA LAKSHITH. ALL RIGHTS RESERVED.
          </span>

          <div className="flex items-center gap-6">
            <a
              href="mailto:bezawadalakshith5@gmail.com"
              className="label !text-[0.6rem] hover:text-[#D9D9D9] transition-colors"
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/bezawadalakshith"
              target="_blank"
              rel="noopener noreferrer"
              className="label !text-[0.6rem] hover:text-[#D9D9D9] transition-colors"
            >
              LINKEDIN
            </a>
          </div>

          <span className="label !text-[0.6rem]">
            DESIGNED &amp; BUILT WITH PRECISION
          </span>
        </div>
      </div>
    </footer>
  );
}
