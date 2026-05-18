"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function ResumeButton({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.a
      href="/Lakshith32.pdf"
      target="_blank"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2 }}
      className={`relative hidden md:inline-flex items-center justify-center border border-[#333] hover:border-[#F5F5F5] bg-[#050505] text-[#F5F5F5] transition-all duration-500 font-mono text-[0.8rem] font-bold tracking-[0.2em] rounded-none px-7 py-3 group overflow-hidden ${
        isScrolled 
          ? "shadow-none" 
          : "shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      }`}
    >
      {/* Background Wipe Fill */}
      <div className="absolute inset-0 bg-[#F5F5F5] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
      
      <div className="relative z-10 flex items-center gap-2.5 group-hover:text-[#050505] transition-colors duration-500 ease-out mt-[1px]">
        RESUME
        
        {/* Animated Double Arrow */}
        <div className="relative w-3 h-3 overflow-hidden">
          {/* Primary Arrow that leaves */}
          <div className="absolute inset-0 flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 13L13 1M13 1H5M13 1V9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Secondary Arrow that enters */}
          <div className="absolute inset-0 flex -translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 13L13 1M13 1H5M13 1V9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(currentScrollY / scrollHeight);
      }

      // Active section detection based on manual scroll position
      // This is required because the Projects section is 400vh tall, 
      // making IntersectionObserver highly inaccurate for it.
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";
      
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        // Trigger point is 1/3 down the viewport
        const scrollTrigger = currentScrollY + window.innerHeight / 3;
        
        if (scrollTrigger >= sectionTop && scrollTrigger < sectionTop + sectionHeight) {
          currentActive = el.id;
        }
      });

      // Special case: if we hit the bottom of the page, force Contact active
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        currentActive = "contact";
      }

      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: "transparent",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          paddingTop: isScrolled ? "20px" : "32px",
          paddingBottom: isScrolled ? "20px" : "32px",
        }}
        transition={{ 
          y: { duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.8, delay: 1.5 },
          paddingTop: { duration: 0.4 },
          paddingBottom: { duration: 0.4 }
        }}
        className="fixed top-0 left-0 right-0 z-[1000] w-full px-6 lg:px-12 flex justify-center"
      >
        <div className="container-wide w-full relative flex items-center justify-between">
          
          {/* Scroll Progress Bar */}
          <div className="absolute -bottom-[21px] left-0 h-[2px] bg-white/0 w-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#F5F5F5] shadow-[0_0_15px_#F5F5F5]"
              style={{ width: `${scrollProgress * 100}%`, opacity: isScrolled ? 1 : 0 }}
              transition={{ opacity: { duration: 0.3 } }}
            />
          </div>

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative z-10 flex items-center group"
            >
              <span
                className="text-2xl md:text-3xl tracking-[0.05em] font-bold !normal-case text-[#F5F5F5]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                BLAKSHITH
              </span>
              <span className="label-accent ml-3 hidden sm:inline text-[0.85rem] !normal-case opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                / PORTFOLIO
              </span>
            </motion.a>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  className={`relative px-5 py-2.5 label !text-[0.95rem] !tracking-[0.15em] transition-colors duration-300 bg-transparent border-none cursor-pointer z-10 ${
                    isActive
                      ? "!text-[#050505] font-bold"
                      : "text-[#B0B0B0] hover:text-[#F5F5F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#F5F5F5] z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Resume & Mobile Toggle */}
          <div className="flex-shrink-0 flex items-center gap-6">
            <ResumeButton isScrolled={isScrolled} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col justify-center items-center gap-[6px] bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block w-7 h-[1.5px] bg-[#F5F5F5] origin-center"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-5 h-[1.5px] bg-[#F5F5F5] self-end"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="block w-7 h-[1.5px] bg-[#F5F5F5] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-[#050505]/98 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="heading-md cursor-pointer bg-transparent border-none text-[#F5F5F5] hover:text-[#D9D9D9] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
