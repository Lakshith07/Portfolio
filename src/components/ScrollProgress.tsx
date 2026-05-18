"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[500] hidden md:flex flex-col items-center gap-8"
    >
      <div className="flex flex-col items-center gap-4 group">
        <span 
          className="label !text-[0.65rem] !tracking-[0.4em] text-[#F5F5F5] opacity-20 group-hover:opacity-100 transition-opacity cursor-default"
          style={{ writingMode: "vertical-lr" }}
        >
          SCROLL
        </span>
        
        <div className="w-[2px] h-[200px] bg-white/[0.05] relative rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-[#F5F5F5] origin-top shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ scaleY, height: "100%" }}
          />
        </div>
      </div>

      {/* Decorative section dots */}
      <div className="flex flex-col gap-4 opacity-20">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#F5F5F5]" />
        ))}
      </div>
    </motion.div>
  );
}
