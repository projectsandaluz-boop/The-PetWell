/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { logoUrl } from "../assets/images/logo";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export default function Logo({ className = "", variant, showText = true }: LogoProps) {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden ${isLight ? 'bg-white' : 'bg-[#001B3D]'}`}>
        <img 
          src={logoUrl} 
          alt="PetWell Logo" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <span className={`text-2xl font-extrabold tracking-tighter ${isLight ? 'text-white' : 'text-[#001B3D]'}`}>
          PetWell
        </span>
      )}
    </div>
  );
}
