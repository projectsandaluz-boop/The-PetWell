/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  PlusCircle, 
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

interface OwnerSidebarProps {
  activePage: string;
}

export default function OwnerSidebar({ activePage }: OwnerSidebarProps) {
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
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activePage === 'dashboard'} onClick={() => navigate("/owner-dashboard")} />
          <SidebarItem icon={Users} label="Pet Profiles" active={activePage === 'pets'} onClick={() => navigate("/owner-pet-profiles")} />
          <SidebarItem icon={FileText} label="Health Records" active={activePage === 'health'} />
          <SidebarItem icon={Calendar} label="Appointments" active={activePage === 'appointments'} onClick={() => navigate("/owner-booking")} />
          <SidebarItem icon={MessageSquare} label="Messages" active={activePage === 'messages'} />
        </nav>

        <div className="p-6 space-y-4">
          <button 
            onClick={() => navigate("/owner-booking")}
            className="w-full bg-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
          >
            <PlusCircle className="w-5 h-5" />
            Book Appointment
          </button>
          <div className="pt-6 border-t border-white/10 space-y-2">
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={LogOut} label="Logout" onClick={() => setShowLogoutConfirm(true)} />
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
