import React from "react";
import { Terminal, Briefcase, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-pixel text-neon-pink animate-pulse">
            GAME OVER?
          </h2>
          <p className="text-xl font-heading tracking-[0.3em] text-neon-blue uppercase">
            Press Start to Continue
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="p-3 border border-foreground/10 hover:border-neon-blue hover:text-neon-blue transition-all">
            <Terminal className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-foreground/10 hover:border-neon-pink hover:text-neon-pink transition-all">
            <Briefcase className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-foreground/10 hover:border-neon-green hover:text-neon-green transition-all">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-foreground/10 hover:border-yellow-400 hover:text-yellow-400 transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="space-y-2 text-[10px] font-pixel text-muted-foreground uppercase">
          <p>© 2026 GABRIEL SOUZA - ALL RIGHTS RESERVED</p>
          <p>INSERT COIN TO REPLAY</p>
        </div>
      </div>
    </footer>
  );
};
