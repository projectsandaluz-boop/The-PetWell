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
  User,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

export default function OwnerSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    navigate("/owner-dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Left Side - Branding & Testimonial */}
        <div className="lg:w-[45%] bg-[#001B3D] p-12 flex flex-col justify-between relative overflow-hidden">
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
                Start your <br/> journey as a <br/> Pet Guardian.
              </h1>
              <p className="text-white/70 text-lg max-w-sm leading-relaxed">
                Join thousands of pet parents who trust PetWell for their companion's lifelong health and happiness.
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
                src="https://picsum.photos/seed/mark/100/100" 
                alt="Mark Stevens" 
                className="w-12 h-12 rounded-full border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-white font-bold">Mark Stevens</p>
                <p className="text-white/60 text-xs">Guardian to 'Luna'</p>
              </div>
            </div>
            <p className="text-white/90 italic text-sm leading-relaxed">
              "The onboarding was so simple. Within minutes, I had Luna's entire medical history organized and ready."
            </p>
          </motion.div>

          {/* Decorative background elements */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-20 w-48 h-48 bg-surface-tint/10 rounded-full blur-2xl" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="lg:w-[55%] p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            
            {/* Toggle LogIn / SignUp */}
            <div className="flex bg-surface-container-low p-1 rounded-2xl mb-12 w-fit mx-auto lg:mx-0">
              <Link 
                to="/owner-login"
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all text-secondary"
              >
                Log In
              </Link>
              <button 
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all bg-white shadow-sm text-primary"
              >
                Sign Up
              </button>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-2">Create Account</h2>
            <p className="text-secondary mb-10">Begin your pet's sophisticated digital care journey.</p>

            <form className="space-y-5" onSubmit={handleSignup}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-primary font-medium" 
                    placeholder="John Doe" 
                    type="text"
                    required
                  />
                </div>
              </div>

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
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Password</label>
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

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded border-surface-container-high text-primary focus:ring-primary/20" required />
                <label htmlFor="terms" className="text-xs text-secondary font-medium leading-relaxed">
                  I agree to the <button type="button" className="text-primary font-bold hover:underline">Terms of Service</button> and <button type="button" className="text-primary font-bold hover:underline">Privacy Policy</button>, including data processing for pet health insights.
                </label>
              </div>

              <button className="w-full bg-[#001B3D] text-white font-bold py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/10 flex items-center justify-center gap-3">
                Create Guardian Account <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="relative flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container-high"></div>
              </div>
              <span className="relative px-4 bg-white text-[10px] font-bold text-secondary uppercase tracking-widest">or join with</span>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-4 h-4" />
                Apple ID
              </button>
            </div>
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
