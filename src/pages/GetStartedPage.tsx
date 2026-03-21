/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  PawPrint, 
  ShieldCheck, 
  Plus, 
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <a className="font-headline text-sm font-semibold tracking-tight text-secondary hover:text-primary transition-colors" href="#">About Us</a>
          <a className="font-headline text-sm font-semibold tracking-tight text-secondary hover:text-primary transition-colors" href="#">Our Mission</a>
        </div>
      </div>
    </nav>
  );
};

const RoleCard = ({ 
  title, 
  description, 
  linkText, 
  icon: Icon, 
  bgIcon: BgIcon,
  linkTo = "#" 
}: { 
  title: string; 
  description: string; 
  linkText: string; 
  icon: any; 
  bgIcon: any;
  linkTo?: string;
}) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-surface-container-high relative overflow-hidden group"
  >
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center mb-8">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-3xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-secondary text-lg leading-relaxed mb-10">
        {description}
      </p>
      <Link 
        to={linkTo} 
        className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all"
      >
        {linkText} <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
    
    {/* Decorative Background Icon */}
    <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
      <BgIcon className="w-48 h-48 text-primary rotate-12" />
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="w-full py-12 px-8 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <Logo className="mb-2" />
        <p className="text-xs text-secondary">© 2024 PetWell. The Empathetic Guardian. All rights reserved.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Terms of Service</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Cookie Settings</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Accessibility</a>
      </div>
    </div>
  </footer>
);

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F0F4FF] to-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl"
        >
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Welcome to <span className="text-surface-tint">PetWell</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            To provide the best care for your companions, please tell us how you'll be using the platform today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <RoleCard 
            title="Pet Owner"
            description="Manage your pet's health records, schedule appointments, and connect with expert guardians."
            linkText="Get Started"
            icon={PawPrint}
            bgIcon={Leaf}
            linkTo="/owner-login"
          />
          <RoleCard 
            title="Admin"
            description="Access clinic management tools, oversee staff schedules, and monitor facility operations."
            linkText="Management Portal"
            icon={ShieldCheck}
            bgIcon={Plus}
            linkTo="/admin-login"
          />
        </div>

        <p className="mt-16 text-secondary font-medium">
          Not sure which to choose? <button className="text-primary font-bold hover:underline">Learn more about our roles</button>
        </p>
      </main>

      <Footer />
    </div>
  );
}
