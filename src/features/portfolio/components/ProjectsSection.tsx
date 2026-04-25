import React from "react";
import { PixelCard } from "./PixelCard";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { ExternalLink, Terminal } from "lucide-react";

export const ProjectsSection = () => {
  const { projects } = usePortfolioData();

  return (
    <section className="py-20 px-4 bg-foreground/5">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-heading font-bold tracking-tighter uppercase">
              Projetos <span className="text-neon-pink">Recentes</span>
            </h2>
            <p className="text-muted-foreground font-inter text-lg">
              Uma seleção das minhas aventuras mais recentes no desenvolvimento.
            </p>
          </div>
          <div className="flex gap-4 font-pixel text-[10px]">
            <button className="px-4 py-2 bg-neon-blue text-background pixel-border border-neon-blue">ALL</button>
            <button className="px-4 py-2 border border-foreground/20 hover:border-neon-blue transition-colors">SWIFT</button>
            <button className="px-4 py-2 border border-foreground/20 hover:border-neon-pink transition-colors">WEB</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PixelCard 
              key={project.id} 
              variant={project.type === "Swift" ? "blue" : "pink"}
              className="p-0 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center font-pixel text-foreground/20 text-[20px] uppercase">
                  {project.type} PROJECT
                </div>
                {/* Image would go here */}
              </div>
              
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-heading font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Terminal className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground font-inter flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-foreground/5 text-[10px] font-pixel border border-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};
