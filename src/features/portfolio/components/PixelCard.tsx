import React from "react";
import { cn } from "@/lib/utils";

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "pink" | "green";
  glow?: boolean;
}

export const PixelCard = ({
  className,
  children,
  variant = "blue",
  glow = true,
  ...props
}: PixelCardProps) => {
  const glowClass = glow 
    ? variant === "blue" ? "neon-glow-blue" 
    : variant === "pink" ? "neon-glow-pink" 
    : "neon-glow-green" 
    : "";

  const borderClass = variant === "blue" ? "border-neon-blue" 
    : variant === "pink" ? "border-neon-pink" 
    : "border-neon-green";

  return (
    <div
      className={cn(
        "bg-card text-card-foreground pixel-border p-6 transition-all duration-300",
        borderClass,
        glowClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
