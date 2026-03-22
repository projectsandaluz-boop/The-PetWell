/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Plus, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  ChevronRight,
  Heart,
  Smartphone,
  ShieldCheck,
  Clock,
  Package,
  Stethoscope,
  PlusCircle,
  Pill,
  ShoppingBag,
  CheckCircle2
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import OwnerSidebar from "../../components/OwnerSidebar";
import { useState } from "react";
import AdminModal from "../../components/AdminModal";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const QuickAction = ({ icon: Icon, label, color }: any) => (
  <button className="flex flex-col items-center gap-4 group">
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-all group-active:scale-95`}>
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <span className="text-xs font-bold text-primary tracking-tight">{label}</span>
  </button>
);

const PetCard = ({ name, breed, age, status, tags, image }: any) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-surface-container-high flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all">
    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container-low">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
        <h4 className="text-xl font-bold text-primary">{name}</h4>
        <div className={`w-2 h-2 rounded-full ${status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </div>
      <p className="text-xs text-secondary font-medium mb-3">{breed} • {age}</p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="px-3 py-1 rounded-full bg-sky-100 text-primary text-[10px] font-bold uppercase tracking-widest">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default function OwnerDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      <OwnerSidebar activePage="dashboard" />

      {/* Main Content */}
      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 ml-72 p-12 pb-24"
      >
        
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-black text-[#001B3D] mb-2 tracking-tight">Hello, Sarah</h1>
            <p className="text-slate-500 font-medium text-lg">Your guardians are healthy and happy today.</p>
          </div>
          <div className="flex items-center gap-8">
            <button className="w-14 h-14 rounded-[24px] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 relative group">
              <Bell className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <div className="absolute top-4 right-4 w-3 h-3 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
            </button>
            <div className="flex items-center gap-5 pl-8 border-l border-slate-200">
              <div className="text-right">
                <p className="font-black text-[#001B3D] text-base">Sarah Jenkins</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pet Guardian</p>
              </div>
              <div className="w-14 h-14 rounded-[24px] overflow-hidden border-2 border-white shadow-lg ring-4 ring-[#001B3D]/5">
                <img 
                  src="https://picsum.photos/seed/sarah/200/200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 max-w-5xl">
          <button onClick={() => navigate("/owner-booking")} className="flex flex-col items-center gap-5 group">
            <div className={`w-20 h-20 rounded-[2rem] bg-blue-50 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all group-active:scale-95`}>
              <Stethoscope className="w-10 h-10 text-[#001B3D]" />
            </div>
            <span className="text-sm font-black text-[#001B3D] tracking-tight">Book Appointment</span>
          </button>
          <button onClick={() => navigate("/add-pet")} className="flex flex-col items-center gap-5 group">
            <div className={`w-20 h-20 rounded-[2rem] bg-amber-50 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all group-active:scale-95`}>
              <PlusCircle className="w-10 h-10 text-[#001B3D]" />
            </div>
            <span className="text-sm font-black text-[#001B3D] tracking-tight">Add Pet Profile</span>
          </button>
          <button onClick={() => navigate("/owner-store")} className="flex flex-col items-center gap-5 group">
            <div className={`w-20 h-20 rounded-[2rem] bg-indigo-50 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all group-active:scale-95`}>
              <ShoppingBag className="w-10 h-10 text-[#001B3D]" />
            </div>
            <span className="text-sm font-black text-[#001B3D] tracking-tight">Order Supplies</span>
          </button>
          <button className="flex flex-col items-center gap-5 group">
            <div className={`w-20 h-20 rounded-[2rem] bg-emerald-50 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all group-active:scale-95`}>
              <FileText className="w-10 h-10 text-[#001B3D]" />
            </div>
            <span className="text-sm font-black text-[#001B3D] tracking-tight">Health Records</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Your Guardians */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black text-[#001B3D] tracking-tight">Your Guardians</h3>
              <button onClick={() => navigate("/owner-pet-profiles")} className="text-sm font-black text-[#001B3D] hover:underline flex items-center gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PetCard 
                name="Cooper" 
                breed="Beagle" 
                age="4 years" 
                status="Healthy" 
                tags={['Healthy', 'Vaccinated']} 
                image="https://picsum.photos/seed/beagle/400/400"
              />
              <PetCard 
                name="Luna" 
                breed="Russian Blue" 
                age="2 years" 
                status="Check-up Due" 
                tags={['Check-up Due']} 
                image="https://picsum.photos/seed/cat/400/400"
              />
            </div>

            {/* Upcoming Appointments */}
            <div className="pt-12">
              <h3 className="text-3xl font-black text-[#001B3D] mb-10 tracking-tight">Upcoming Appointments</h3>
              <motion.div 
                whileHover={{ x: 10 }}
                onClick={() => navigate("/owner-appointments")}
                className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 flex items-center gap-10 group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="w-24 h-28 rounded-[2rem] bg-[#001B3D] flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-900/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Oct</p>
                  <p className="text-4xl font-black">24</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-2xl font-black text-[#001B3D]">Annual Vaccination</h4>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest">Confirmed</span>
                  </div>
                  <p className="text-lg text-slate-500 font-medium mb-4">PetWell Central Clinic • 10:30 AM</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img src="https://picsum.photos/seed/doc/100/100" alt="Vet" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-sm text-slate-400 font-bold">For <span className="text-[#001B3D]">Cooper</span></p>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#001B3D] group-hover:text-white transition-all">
                  <ChevronRight className="w-7 h-7" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            
            {/* Delivery Tracking */}
            <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-[#001B3D] tracking-tight">Delivery</h3>
                <button onClick={() => navigate("/owner-delivery")} className="text-slate-400 hover:text-[#001B3D] transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-10 relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100" />
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#001B3D] flex items-center justify-center z-10 shadow-lg shadow-blue-900/20">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-black text-[#001B3D] mb-1">Order Shipped</p>
                    <p className="text-xs text-slate-400 font-bold mb-4">Oct 20 • 09:15 AM</p>
                    <div className="bg-slate-50 p-4 rounded-2xl text-xs font-bold text-slate-500 border border-slate-100">
                      Royal Canin Adult 12kg x 2
                    </div>
                  </div>
                </div>

                <div className="relative pl-12 opacity-40">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10" />
                  <div>
                    <p className="text-base font-black text-[#001B3D] mb-1">Out for Delivery</p>
                    <p className="text-xs text-slate-400 font-bold">Estimated: Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PetWell Plus */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#001B3D] p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-900/40"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-8">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 leading-tight">PetWell Plus</h3>
                <p className="text-base text-white/60 mb-10 leading-relaxed font-medium">Unlimited tele-consultations and 15% off at our store.</p>
                <button className="w-full bg-white text-[#001B3D] font-black py-5 rounded-[24px] hover:bg-white/90 transition-all active:scale-95 shadow-lg">
                  Upgrade Now
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
              <CheckCircle2 className="absolute bottom-6 right-6 w-24 h-24 text-white/5" />
            </motion.div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-2xl font-black text-[#001B3D] mb-8 tracking-tight">Recent Activity</h3>
              <div className="space-y-5">
                {[
                  { icon: FileText, label: 'Grooming Receipt', time: '2 hours ago', color: 'bg-indigo-50' },
                  { icon: PlusCircle, label: 'Lab Results Added', time: 'Yesterday', color: 'bg-rose-50' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-[#001B3D]" />
                    </div>
                    <div>
                      <p className="text-base font-black text-[#001B3D]">{item.label}</p>
                      <p className="text-xs text-slate-400 font-bold">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
