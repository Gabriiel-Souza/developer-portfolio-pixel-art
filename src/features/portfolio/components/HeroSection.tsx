import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGameInteraction } from "../hooks/useGameInteraction";

export const HeroSection = () => {
  const { startGame, isGameStarted } = useGameInteraction();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-8"
      >
        <div className="inline-block px-4 py-1 bg-neon-blue/10 border border-neon-blue text-neon-blue font-pixel text-[10px] animate-pulse">
          PLAYER 1 READY
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter">
          HI, I&apos;M <span className="text-neon-blue">GABRIEL</span>,<br />
          <span className="text-neon-pink">SWIFT</span> & WEB DEVELOPER
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg font-inter">
          Criando experiências digitais de alta performance, do mobile nativo ao ecossistema web moderno, 
          sempre com uma pitada de estética retro e código limpo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="font-pixel text-[12px] bg-neon-blue text-background hover:bg-neon-blue/80 h-14 px-8 neon-glow-blue"
            onClick={startGame}
          >
            {isGameStarted ? "GAME STARTED" : "START GAME"}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-pixel text-[12px] border-neon-pink text-neon-pink hover:bg-neon-pink/10 h-14 px-8"
          >
            VIEW PROJECTS
          </Button>
        </div>
      </motion.div>

      {/* Decorative Arcade Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
         <div className="w-20 h-20 border-4 border-neon-blue rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-neon-blue rounded-full" />
         </div>
         <p className="font-pixel text-[8px] mt-2 text-center">JOYSTICK A</p>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20 text-right">
         <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-8 bg-neon-pink" />
            <div className="w-8 h-8 bg-neon-blue" />
            <div className="w-8 h-8 bg-neon-green" />
            <div className="w-8 h-8 bg-yellow-400" />
         </div>
         <p className="font-pixel text-[8px] mt-2">CONTROLS</p>
      </div>
    </section>
  );
};
