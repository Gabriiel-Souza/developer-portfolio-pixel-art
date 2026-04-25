import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PixelStar, PixelPotion, PixelCoin } from "./PixelIcons";
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

      {/* Estrela — topo esquerda */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[8%] hidden lg:flex flex-col items-center gap-2 opacity-70"
      >
        <PixelStar size={52} className="text-yellow-400" />
        <span className="font-pixel text-[8px] text-yellow-400">STAR ×1</span>
      </motion.div>

      {/* Moeda — topo direita */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute top-[22%] right-[8%] hidden lg:flex flex-col items-center gap-2 opacity-70"
      >
        <PixelCoin size={52} className="text-orange-400" />
        <span className="font-pixel text-[8px] text-orange-400">COIN ×5</span>
      </motion.div>

      {/* Poção — baixo esquerda */}
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-[18%] left-[12%] hidden lg:flex flex-col items-center gap-2 opacity-70"
      >
        <PixelPotion size={52} className="text-blue-400" />
        <span className="font-pixel text-[8px] text-blue-400">POTION</span>
      </motion.div>

      {/* Estrela extra — baixo direita */}
      <motion.div
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[12%] hidden lg:flex flex-col items-center gap-2 opacity-70"
      >
        <PixelCoin size={44} className="text-yellow-300" />
        <span className="font-pixel text-[8px] text-yellow-300">COIN ×3</span>
      </motion.div>
    </section>
  );
};
