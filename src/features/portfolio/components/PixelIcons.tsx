import React from "react";

export const PixelStar = ({ className = "", size = 40 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 4px currentColor)" }}
    >
      <path d="M7 1h2v2h2v2h2v2h2v2h-2v2h-2v1h-1v2H7v-2H6v-1H4v-2H2V9H0V7h2V5h2V3h2V1h1z" fill="#000" />
      <path d="M8 2h1v2h2v2h2v1H8V2z" fill="#fcd34d" />
      <path d="M7 2H6v2H4v2H2v1h5V2z" fill="#fbbf24" />
      <path d="M8 7h5v2h-2v2h-2v1H8V7z" fill="#f59e0b" />
      <path d="M7 7H2v2h2v2h2v1h1V7z" fill="#d97706" />
      <rect x="7" y="5" width="2" height="2" fill="#fff" />
    </svg>
  );
};

export const PixelPotion = ({ className = "", size = 40 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 4px currentColor)" }}
    >
      {/* Outline */}
      <path d="M6 1h4v2h2v2h1v5h-1v3h-1v2H5v-2H4v-3H3V5h1V3h2V1z" fill="#000" />
      {/* Cork */}
      <rect x="7" y="2" width="2" height="2" fill="#8b5cf6" />
      {/* Liquid Top */}
      <rect x="5" y="6" width="6" height="1" fill="#fff" fillOpacity="0.8" />
      {/* Liquid Body */}
      <path d="M4 7h8v4H4V7z" fill="#3b82f6" />
      {/* Liquid Bottom */}
      <path d="M5 11h6v2H5v-2z" fill="#1d4ed8" />
      {/* Shine */}
      <rect x="5" y="8" width="2" height="2" fill="#fff" fillOpacity="0.8" />
    </svg>
  );
};

export const PixelCoin = ({ className = "", size = 40 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 4px currentColor)" }}
    >
      {/* Outline */}
      <path d="M5 2h6v2h2v8h-2v2H5v-2H3V4h2V2z" fill="#000" />
      {/* Coin Body */}
      <path d="M6 3h4v1h1v8h-1v1H6v-1H5V4h1V3z" fill="#f59e0b" />
      {/* Inner Ring */}
      <path d="M7 4h2v8H7V4z" fill="#fbbf24" />
      {/* Shine */}
      <rect x="7" y="5" width="2" height="6" fill="#fef3c7" />
    </svg>
  );
};
