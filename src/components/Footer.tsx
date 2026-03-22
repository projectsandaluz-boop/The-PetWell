import React from "react";
import Logo from "./Logo";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-white border-t border-surface-container-high py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-6 z-50 ${className}`}>
      <div className="flex flex-col items-center md:items-start gap-2">
        <Logo />
        <p className="text-sm font-medium text-secondary">
          © 2024 PetWell. The Empathetic Guardian. All rights reserved.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-secondary">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
        <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
      </div>
    </footer>
  );
}
