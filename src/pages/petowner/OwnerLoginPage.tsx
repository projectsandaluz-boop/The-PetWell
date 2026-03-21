/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ThemeToggle from "../../components/ThemeToggle";

export default function OwnerLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/owner-dashboard");
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 relative">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-6xl w-full bg-surface rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-surface-container-high">
        
        {/* Left Side - Branding & Testimonial */}
        <div className="lg:w-[45%] bg-primary p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <Link to="/">
              <Logo variant="light" />
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-20"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                The Empathetic <br/> Guardian for your <br/> best friend.
              </h1>
              <p className="text-white/70 text-lg max-w-sm leading-relaxed">
                Join a community of dedicated pet parents prioritizing health, happiness, and peace of mind through sophisticated digital care.
              </p>
            </motion.div>
          </div>

          {/* Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 mt-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://picsum.photos/seed/sarah/100/100" 
                alt="Sarah Jenkins" 
                className="w-12 h-12 rounded-full border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-white font-bold">Sarah Jenkins</p>
                <p className="text-white/60 text-xs">Guardian to 'Mochi'</p>
              </div>
            </div>
            <p className="text-white/90 italic text-sm leading-relaxed">
              "PetWell changed how I track Mochi's health. It feels like having a vet's expertise right in my pocket."
            </p>
          </motion.div>

          {/* Decorative background elements */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-20 w-48 h-48 bg-surface-tint/10 rounded-full blur-2xl" />
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-[55%] p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            
            {/* Toggle LogIn / SignUp */}
            <div className="flex bg-surface-container-low p-1 rounded-2xl mb-12 w-fit mx-auto lg:mx-0">
              <button 
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all bg-white shadow-sm text-primary"
              >
                Log In
              </button>
              <Link 
                to="/owner-signup"
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all text-secondary"
              >
                Sign Up
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-2">Welcome Back</h2>
            <p className="text-secondary mb-10">Access your pet's personalized health dashboard.</p>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-4 h-4" />
                Apple ID
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container-high"></div>
              </div>
              <span className="relative px-4 bg-surface text-[10px] font-bold text-secondary uppercase tracking-widest">or email</span>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-primary font-medium" 
                    placeholder="guardian@example.com" 
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Password</label>
                  <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-12 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-primary font-medium" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-5 h-5 rounded border-surface-container-high text-primary focus:ring-primary/20" />
                <label htmlFor="remember" className="text-sm text-secondary font-medium">Keep Mochi's records logged in</label>
              </div>

              <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/10">
                Enter Dashboard
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-secondary">
              New to PetWell? <Link to="/owner-signup" className="text-primary font-bold hover:underline">Create a Guardian Account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-6 w-full flex justify-between px-12 text-[10px] font-bold text-secondary uppercase tracking-widest">
        <p>© 2024 PETWELL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <button className="hover:text-primary transition-colors">Privacy Policy</button>
          <button className="hover:text-primary transition-colors">Terms of Service</button>
          <button className="hover:text-primary transition-colors">Accessibility</button>
        </div>
      </div>
    </div>
  );
}
