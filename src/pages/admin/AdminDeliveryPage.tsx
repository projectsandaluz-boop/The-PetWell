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
  Search, 
  Filter,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  MapPin,
  Clock
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
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

const deliveryData = [
  {
    id: "D-5542",
    agent: "Tharindu",
    customer: "Kamal",
    pet: "Bruno",
    status: "On the Way",
    eta: "12 mins"
  },
  {
    id: "D-5543",
    agent: "Minuri",
    customer: "Nirosha",
    pet: "Mimi",
    status: "Delivered",
    eta: "Completed"
  },
  {
    id: "D-5544",
    agent: "Ravi",
    customer: "Sam",
    pet: "Max",
    status: "Cancelled",
    eta: "-"
  }
];

export default function AdminDeliveryPage() {
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState(deliveryData);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deliveryToDelete, setDeliveryToDelete] = useState<string | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleDeleteClick = (id: string) => {
    setDeliveryToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (deliveryToDelete) {
      setDeliveries(deliveries.filter(d => d.id !== deliveryToDelete));
      setShowDeleteConfirm(false);
      setDeliveryToDelete(null);
      setShowDeleteSuccess(true);
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#4ADE80] text-white";
      case "On the Way":
        return "bg-[#FBBF24] text-white";
      case "Cancelled":
        return "bg-[#F87171] text-white";
      default:
        return "bg-slate-200 text-slate-600";
    }
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
          <SidebarItem icon={Calendar} label="Bookings" onClick={() => navigate("/admin-bookings")} />
          <SidebarItem icon={ShoppingBag} label="Store" onClick={() => navigate("/admin-store")} />
          <SidebarItem icon={Truck} label="Delivery Tracking" active onClick={() => navigate("/admin-delivery")} />
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

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-2 tracking-tight">Delivery Tracking</h1>
            <p className="text-slate-500 font-medium">Monitor real-time pet product deliveries.</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/admin-add-delivery")}
              className="flex items-center gap-2 bg-[#001B3D] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20"
            >
              <Plus className="w-5 h-5" />
              New Delivery
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="font-bold text-[#001B3D] text-sm">Dr. Sarah Jenkins</p>
                <p className="text-slate-400 text-xs">Senior Veterinarian</p>
              </div>
              <img 
                src="https://picsum.photos/seed/doc/100/100" 
                alt="Profile" 
                className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              className="bg-white border-none rounded-2xl pl-12 pr-6 py-3 text-sm font-medium w-96 shadow-sm focus:ring-2 focus:ring-[#001B3D]/10 transition-all" 
              placeholder="Search by ID, agent or customer..." 
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" />
              Status
            </button>
          </div>
        </div>

        {/* Delivery Table */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-slate-50">
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">ID</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Agent</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Pet</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">ETA</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6">
                    <span className="font-mono text-sm font-bold text-[#001B3D]">{delivery.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-bold text-[#001B3D] text-sm">{delivery.agent}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-slate-600 font-medium text-sm">{delivery.customer}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-slate-600 font-medium text-sm">{delivery.pet}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${getStatusStyles(delivery.status)}`}>
                      {delivery.status}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {delivery.eta !== "-" && delivery.eta !== "Completed" && <Clock className="w-3 h-3 text-slate-400" />}
                      <span className="text-slate-500 font-medium text-sm">{delivery.eta}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => navigate(`/admin-edit-delivery/${delivery.id}`)}
                        className="p-2 rounded-xl text-slate-400 hover:text-[#001B3D] hover:bg-white transition-all"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(delivery.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-xl text-slate-400 hover:text-[#001B3D] hover:bg-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <AdminModal 
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={confirmDelete}
        type="delete"
        title="Delete Delivery"
        message="Are you sure you want to delete this delivery record? This action cannot be undone."
      />

      <AdminModal 
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
        type="success"
        title="Deleted Successfully"
        message="The delivery record has been deleted successfully."
      />
    </div>
  );
}
