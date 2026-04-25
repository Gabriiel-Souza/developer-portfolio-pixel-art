import React from "react";
import { cn } from "@/lib/utils";

interface HealthBarProps {
  label: string;
  value: number;
  max?: number;
  variant?: "blue" | "pink" | "green";
  className?: string;
}

export const HealthBar = ({
  label,
  value,
  max = 100,
  variant = "green",
  className,
}: HealthBarProps) => {
  const percentage = (value / max) * 100;
  
  const barColor = variant === "green" ? "bg-neon-green" 
    : variant === "blue" ? "bg-neon-blue" 
    : "bg-neon-pink";

  const glowColor = variant === "green" ? "shadow-[0_0_10px_rgba(142,255,113,0.5)]" 
    : variant === "blue" ? "shadow-[0_0_10px_rgba(0,255,255,0.5)]" 
    : "shadow-[0_0_10px_rgba(255,81,250,0.5)]";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center font-pixel text-[10px] uppercase">
        <span>{label}</span>
        <span>{value}/{max} HP</span>
      </div>
      <div className="h-6 bg-muted pixel-border border-2 border-foreground/20 p-1 flex items-center">
        <div 
          className={cn("h-full transition-all duration-500", barColor, glowColor)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
