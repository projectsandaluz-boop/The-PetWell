/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronLeft,
  Save,
  User,
  Dog,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import AdminModal from "../../components/AdminModal";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminAddDeliveryPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      {/* Sidebar */}
      <AdminSidebar activePage="delivery" />

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/admin-delivery")}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">New Delivery</h1>
              <p className="text-slate-500 font-medium">Assign a new delivery agent to a customer order.</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Delivery Agent</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>Tharindu</option>
                    <option>Minuri</option>
                    <option>Ravi</option>
                    <option>Sahan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Customer Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. Kamal Perera"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Pet Name</label>
                  <div className="relative">
                    <Dog className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. Bruno"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Delivery Status</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>Pending</option>
                    <option>On the Way</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Estimated Time (ETA)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 15 mins"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Delivery Priority</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                    <option>Standard</option>
                    <option>Express</option>
                    <option>Urgent (Medicine)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Delivery Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                  <textarea 
                    rows={3}
                    placeholder="Enter full delivery address..."
                    className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => navigate("/admin-delivery")}
                  className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Assign Delivery
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
          navigate("/admin-delivery");
        }}
        type="success"
        title="Delivery Assigned"
        message="The new delivery has been assigned successfully."
      />
    </div>
  );
}
