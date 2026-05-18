"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <ScrollProgress />

      <main>
        <Hero />

        <div className="section-divider" />

        <About />

        <div className="section-divider" />

        <Skills />

        <div className="section-divider" />

        <Certifications />

        <div className="section-divider" />

        <Projects />

        <div className="section-divider" />

        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
