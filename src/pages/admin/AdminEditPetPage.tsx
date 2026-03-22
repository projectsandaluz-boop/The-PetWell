/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronLeft,
  Upload,
  Save
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import AdminModal from "../../components/AdminModal";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminEditPetPage() {
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
      <AdminSidebar activePage="pet-profiles" />

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/admin-pet-profiles")}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">Edit Pet Profile</h1>
              <p className="text-slate-500 font-medium">Update the details for pet ID: {id}</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
            <form onSubmit={handleUpdate} className="space-y-10">
              
              {/* Image Upload Section */}
              <div className="flex items-center gap-10">
                <div className="w-32 h-32 rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-[#001B3D] hover:text-[#001B3D] transition-all cursor-pointer overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200&h=200&auto=format&fit=crop" alt="Pet" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#001B3D] mb-1">Pet Photo</h3>
                  <p className="text-sm text-slate-400 font-medium">Click to change the photo. Max 5MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Pet Name</label>
                  <input 
                    type="text" 
                    defaultValue="Bruno"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Species / Breed</label>
                  <input 
                    type="text" 
                    defaultValue="Dog (Golden Retriever)"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Owner Name</label>
                  <input 
                    type="text" 
                    defaultValue="Kamal Perera"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Age</label>
                  <input 
                    type="text" 
                    defaultValue="3 Years"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Medical Notes</label>
                <textarea 
                  rows={4}
                  defaultValue="Allergic to certain types of dry food. Up to date with vaccinations."
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => navigate("/admin-pet-profiles")}
                  className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Update Pet Profile
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
          navigate("/admin-pet-profiles");
        }}
        type="success"
        title="Update Successful"
        message="The pet profile has been updated successfully."
      />
    </div>
  );
}
