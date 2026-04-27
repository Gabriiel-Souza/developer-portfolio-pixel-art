import React from "react";
import { PixelCard } from "./PixelCard";
import { Smartphone, Globe, Brush, Code2} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Swift Development",
      description: "Desenvolvimento nativo para iOS/macOS com SwiftUI e arquiteturas modernas.",
      icon: <Smartphone className="w-8 h-8 text-neon-blue" />,
      color: "blue" as const,
    },
    {
      title: "Web Engineering",
      description: "Sites e aplicações web de alta performance com React, Next.js e Tailwind.",
      icon: <Globe className="w-8 h-8 text-neon-pink" />,
      color: "pink" as const,
    },
    {
      title: "UI/UX Design",
      description: "Interfaces intuitivas e sistemas de design escaláveis com foco no usuário.",
      icon: <Brush className="w-8 h-8 text-neon-green" />,
      color: "green" as const,
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-heading font-bold tracking-tighter uppercase">
          O Que Eu <span className="text-neon-green">Ofereço</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <PixelCard 
            key={index}
            variant={service.color}
            className="group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 bg-foreground/5 pixel-border border-foreground/10 group-hover:border-current transition-colors">
              {service.icon}
            </div>
            <h3 className="font-pixel text-[12px] min-h-[40px] flex items-center">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground font-inter">
              {service.description}
            </p>
          </PixelCard>
        ))}
      </div>
    </section>
  );
};
