/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Home,
  PawPrint, 
  Calendar, 
  ShoppingBag,
  Truck,
  MessageSquare,
  Settings, 
  LogOut, 
  ChevronLeft,
  Save,
  Clock,
  User,
  Dog
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

import React, { useState } from "react";
import AdminModal from "../components/AdminModal";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

export default function AdminAddBookingPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#001B3D] flex flex-col fixed h-full z-20">
        <div className="p-8">
          <Link to="/">
            <Logo variant="light" />
          </Link>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Empathetic Guardian</p>
        </div>

        <nav className="flex-1 mt-8">
          <SidebarItem icon={Home} label="Dashboard" onClick={() => navigate("/admin-dashboard")} />
          <SidebarItem icon={PawPrint} label="Pet Profiles" onClick={() => navigate("/admin-pet-profiles")} />
          <SidebarItem icon={Calendar} label="Bookings" active onClick={() => navigate("/admin-bookings")} />
          <SidebarItem icon={ShoppingBag} label="Store" onClick={() => navigate("/admin-store")} />
          <SidebarItem icon={Truck} label="Delivery Tracking" onClick={() => navigate("/admin-delivery")} />
          <SidebarItem icon={MessageSquare} label="Feedback" onClick={() => navigate("/admin-feedback")} />
        </nav>

        <div className="mt-auto">
          <div className="px-6 py-4">
            <div className="h-px bg-white/10 w-full mb-4" />
            <div className="space-y-1">
              <SidebarItem icon={Settings} label="Settings" />
              <SidebarItem icon={LogOut} label="Logout" onClick={() => navigate("/")} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/admin-bookings")}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">New Booking</h1>
              <p className="text-slate-500 font-medium">Schedule a new appointment for a pet.</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Pet Name</label>
                  <div className="relative">
                    <Dog className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search or enter pet name"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Owner Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Owner will be auto-filled"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Type</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>General Checkup</option>
                    <option>Vaccination</option>
                    <option>Grooming</option>
                    <option>Surgery</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Appointment Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Time Slot</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                      <option>09:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 12:00 PM</option>
                      <option>02:00 PM - 03:00 PM</option>
                      <option>03:00 PM - 04:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assigned Doctor</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>Dr. Sarah Jenkins</option>
                    <option>Dr. Michael Chen</option>
                    <option>Dr. Emily Rodriguez</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Reason for Visit</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the symptoms or reason for the appointment..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => navigate("/admin-bookings")}
                  className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <AdminModal 
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate("/admin-bookings");
        }}
        type="success"
        title="Booking Successful"
        message="The new appointment has been scheduled successfully."
      />
    </div>
  );
}
