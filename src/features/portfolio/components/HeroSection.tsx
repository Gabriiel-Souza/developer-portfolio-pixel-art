import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, FlaskConical, Coins } from "lucide-react";
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

      {/* Decorative RPG Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] opacity-40 text-yellow-400 flex flex-col items-center"
      >
        <Star size={40} className="fill-yellow-400/50 pixel-border border-yellow-400 p-1" />
        <span className="font-pixel text-[8px] mt-2">STAR</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] opacity-40 text-neon-green flex flex-col items-center"
      >
        <FlaskConical size={40} className="fill-neon-green/30 pixel-border border-neon-green p-1" />
        <span className="font-pixel text-[8px] mt-2">POTION</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-[20%] opacity-40 text-orange-400 flex flex-col items-center"
      >
        <Coins size={36} className="pixel-border border-orange-400 p-1" />
        <span className="font-pixel text-[8px] mt-2">COIN</span>
      </motion.div>
    </section>
  );
};
