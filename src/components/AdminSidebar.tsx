/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Home,
  PawPrint, 
  Calendar, 
  ShoppingBag,
  Truck,
  MessageSquare,
  Settings, 
  LogOut
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import AdminModal from "./AdminModal";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

interface AdminSidebarProps {
  activePage: string;
}

export default function AdminSidebar({ activePage }: AdminSidebarProps) {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <>
      <aside className="w-72 bg-[#001B3D] flex flex-col fixed h-full z-20">
        <div className="p-8">
          <Link to="/">
            <Logo variant="light" />
          </Link>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Empathetic Guardian</p>
        </div>

        <nav className="flex-1 mt-8">
          <SidebarItem icon={Home} label="Dashboard" active={activePage === 'dashboard'} onClick={() => navigate("/admin-dashboard")} />
          <SidebarItem icon={PawPrint} label="Pet Profiles" active={activePage === 'pets'} onClick={() => navigate("/admin-pet-profiles")} />
          <SidebarItem icon={Calendar} label="Bookings" active={activePage === 'bookings'} onClick={() => navigate("/admin-bookings")} />
          <SidebarItem icon={ShoppingBag} label="Store" active={activePage === 'store'} onClick={() => navigate("/admin-store")} />
          <SidebarItem icon={Truck} label="Delivery Tracking" active={activePage === 'delivery'} onClick={() => navigate("/admin-delivery")} />
          <SidebarItem icon={MessageSquare} label="Feedback" active={activePage === 'feedback'} onClick={() => navigate("/admin-feedback")} />
        </nav>

        <div className="mt-auto">
          <div className="px-6 py-4">
            <div className="h-px bg-white/10 w-full mb-4" />
            <div className="space-y-1">
              <SidebarItem icon={Settings} label="Settings" />
              <SidebarItem icon={LogOut} label="Logout" onClick={() => setShowLogoutConfirm(true)} />
            </div>
          </div>
          <div className="px-6 pb-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-full bg-white/5 text-white/40 font-bold py-2 px-4 rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              back to previous
            </button>
          </div>
        </div>
      </aside>

      <AdminModal 
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={() => navigate("/")}
        type="logout"
        title="Logout Confirmation"
        message="Are you sure you want to logout from your account?"
        confirmText="Logout"
        cancelText="Stay"
      />
    </>
  );
}
