import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: "Swift" | "Web";
  image?: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export const usePortfolioData = () => {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      title: "Swift App Project",
      description: "Um aplicativo iOS inovador focado em experiência do usuário.",
      type: "Swift",
      tags: ["Swift", "SwiftUI", "Combine"],
    },
    {
      id: "2",
      title: "Web Dashboard",
      description: "Interface administrativa com design cyberpunk e alta performance.",
      type: "Web",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      id: "3",
      title: "Game Engine Mini",
      description: "Motor de jogo simples em Swift para prototipagem rápida.",
      type: "Swift",
      tags: ["Swift", "SpriteKit"],
    },
  ]);

  const [skills] = useState<Skill[]>([
    { name: "Swift", level: 95, icon: "swift" },
    { name: "React", level: 80, icon: "react" },
    { name: "TypeScript", level: 80, icon: "ts" },
    { name: "HTML5/CSS3", level: 85, icon: "html" },
    { name: "Next.js", level: 80, icon: "next" },
  ]);

  return { projects, skills };
};
