import React from "react";
import { PixelCard } from "./PixelCard";
import { HealthBar } from "./HealthBar";
import { usePortfolioData } from "../hooks/usePortfolioData";

export const AboutSection = () => {
  const { skills } = usePortfolioData();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-pixel text-neon-blue uppercase tracking-widest">
          Player Bio
        </h2>
        <PixelCard variant="blue" className="bg-background/50 backdrop-blur-sm">
          <div className="space-y-4 font-inter text-lg leading-relaxed">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e jogos, com foco em criar soluções 
              elegantes e performáticas. Minha jornada começou com o desenvolvimento nativo Swift, 
              onde aprendi a importância da experiência do usuário e do design minucioso.
            </p>
            <p>
              Com o tempo, expandi meus horizontes para o ecossistema Web, dominando React e Next.js 
              para construir interfaces ricas e dinâmicas que conversam perfeitamente com backend 
              escaláveis.
            </p>
            <div className="flex gap-4 pt-4">
               <div className="px-3 py-1 bg-neon-pink/20 text-neon-pink text-[10px] font-pixel border border-neon-pink">
                  LVL. 25 DEV
               </div>
               <div className="px-3 py-1 bg-neon-green/20 text-neon-green text-[10px] font-pixel border border-neon-green">
                  CLASS: FULLSTACK
               </div>
            </div>
          </div>
        </PixelCard>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-pixel text-neon-pink uppercase tracking-widest">
          Tech Stats
        </h2>
        <PixelCard variant="pink" className="space-y-6 bg-background/50 backdrop-blur-sm">
          {skills.map((skill) => (
            <HealthBar 
              key={skill.name}
              label={skill.name}
              value={skill.level}
              variant={skill.name === "Swift" ? "blue" : skill.name === "React" ? "pink" : "green"}
            />
          ))}
        </PixelCard>
      </div>
    </section>
  );
};
