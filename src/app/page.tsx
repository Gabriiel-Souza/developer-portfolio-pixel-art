"use client";

import React from "react";
import { HeroSection } from "@/features/portfolio/components/HeroSection";
import { AboutSection } from "@/features/portfolio/components/AboutSection";
import { ServicesSection } from "@/features/portfolio/components/ServicesSection";
import { ProjectsSection } from "@/features/portfolio/components/ProjectsSection";
import { Footer } from "@/features/portfolio/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-pixel text-neon-blue text-sm">GABRIEL.EXE</div>
          <div className="hidden md:flex gap-8 font-pixel text-[10px] uppercase">
            <a href="#" className="hover:text-neon-blue transition-colors">About</a>
            <a href="#" className="hover:text-neon-pink transition-colors">Services</a>
            <a href="#" className="hover:text-neon-green transition-colors">Projects</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          <div className="px-3 py-1 border border-neon-blue text-neon-blue font-pixel text-[10px]">
            SCORE: 004500
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
      </div>

      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
    </main>
  );
}
