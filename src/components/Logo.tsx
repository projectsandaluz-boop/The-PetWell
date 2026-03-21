/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export default function Logo({ className = "", variant = "dark", showText = true }: LogoProps) {
  const logoUrl = "https://storage.googleapis.com/static-assets-aistudio/p4tiehkdg53wfoczctkraf/input_file_0.png";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden ${variant === 'light' ? 'bg-white' : 'bg-primary'}`}>
        <img 
          src={logoUrl} 
          alt="PetWell Logo" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <span className={`text-2xl font-extrabold tracking-tighter ${variant === 'light' ? 'text-white' : 'text-primary'}`}>
          PetWell
        </span>
      )}
    </div>
  );
}
