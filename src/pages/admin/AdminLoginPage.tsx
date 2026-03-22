/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight,
  Shield,
  Briefcase,
  Key
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ThemeToggle from "../../components/ThemeToggle";

export default function AdminLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 relative pb-28">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-6xl w-full bg-surface rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-surface-container-high">
        
        {/* Left Side - Branding & Admin Message */}
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
                The <br/> Administrative <br/> Guardian <br/> Console.
              </h1>
              <p className="text-white/70 text-lg max-w-sm leading-relaxed">
                Securely manage providers, oversight clinics, and optimize the empathetic care standards for our pet community.
              </p>
            </motion.div>
          </div>

          {/* Security Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="z-10 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 mt-12 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Enterprise Security</p>
              <p className="text-white/60 text-xs">SOC2 Compliant Admin Access</p>
            </div>
          </motion.div>

          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            <div className="grid grid-cols-10 gap-4 p-4">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full opacity-20" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Admin Form */}
        <div className="lg:w-[55%] p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            
            {/* Toggle Admin Login / Register Agency */}
            <div className="flex bg-surface-container-low p-1 rounded-2xl mb-12 w-fit mx-auto lg:mx-0">
              <button 
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all bg-white shadow-sm text-primary"
              >
                Admin Login
              </button>
              <Link 
                to="/admin-signup"
                className="px-8 py-2.5 rounded-xl font-bold text-sm transition-all text-secondary"
              >
                Register Agency
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-2">Welcome Back</h2>
            <p className="text-secondary mb-10">Enter your administrative credentials to access the PetWell HQ.</p>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Institutional Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-primary font-medium" 
                    placeholder="name@petwell.admin" 
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Admin Password</label>
                  <button type="button" className="text-xs font-bold text-primary hover:underline">Reset Credentials</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-primary font-medium" 
                    placeholder="••••••••••••" 
                    type="password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-5 h-5 rounded border-surface-container-high text-primary focus:ring-primary/20" />
                <label htmlFor="remember" className="text-sm text-secondary font-medium">Keep session active for 8 hours (Secure Device)</label>
              </div>

              <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/10 flex items-center justify-center gap-3">
                Authenticate Access <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="relative flex items-center justify-center my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container-high"></div>
              </div>
              <span className="relative px-4 bg-surface text-[10px] font-bold text-secondary uppercase tracking-widest">Federated Access</span>
            </div>

            {/* Federated Access */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => navigate("/admin-dashboard")}
                className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary"
              >
                <Briefcase className="w-4 h-4 text-secondary" />
                Google Workspace
              </button>
              <button 
                type="button"
                onClick={() => navigate("/admin-dashboard")}
                className="flex items-center justify-center gap-3 py-3 px-4 border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-all font-bold text-sm text-primary"
              >
                <Key className="w-4 h-4 text-secondary" />
                SSO / SAML
              </button>
            </div>

            <p className="mt-12 text-center text-sm text-secondary">
              Not an administrator? <Link to="/owner-login" className="text-primary font-bold hover:underline">Go to Pet Owner Portal</Link>
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
