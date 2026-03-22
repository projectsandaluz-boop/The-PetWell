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
  User,
  Mail,
  MapPin,
  Shield
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../../components/Logo";
import React, { useState } from "react";
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

export default function AdminEditUserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
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
          <SidebarItem icon={Home} label="Dashboard" active onClick={() => navigate("/admin-dashboard")} />
          <SidebarItem icon={PawPrint} label="Pet Profiles" onClick={() => navigate("/admin-pet-profiles")} />
          <SidebarItem icon={Calendar} label="Bookings" onClick={() => navigate("/admin-bookings")} />
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
      <main className="flex-1 ml-72 p-10 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/admin-dashboard")}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">Edit User</h1>
              <p className="text-slate-500 font-medium">Update account details for user ID: {id}</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
            <form onSubmit={handleUpdate} className="space-y-10">
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      defaultValue="Michael Adams"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      defaultValue="m.adams@email.com"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Primary Pet</label>
                  <div className="relative">
                    <PawPrint className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      defaultValue="Bella (Husky)"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Status</label>
                  <select defaultValue="Active" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>Active</option>
                    <option>Pending Verify</option>
                    <option>Suspended</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      defaultValue="San Francisco, CA"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Role</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select defaultValue="Pet Owner" className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                      <option>Pet Owner</option>
                      <option>Admin</option>
                      <option>Staff</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => navigate("/admin-dashboard")}
                  className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Update User
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
          navigate("/admin-dashboard");
        }}
        type="success"
        title="Update Successful"
        message="The user account has been updated successfully."
      />
    </div>
  );
}
