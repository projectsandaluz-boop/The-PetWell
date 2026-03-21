/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft,
  Upload,
  Save
} from "lucide-react";
import AdminModal from "../../components/AdminModal";

export default function AdminAddPetPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col p-8 md:p-12">
      {/* Header */}
      <header className="max-w-5xl mx-auto w-full flex items-center gap-6 mb-12">
        <button 
          onClick={() => navigate("/admin-pet-profiles")}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-slate-50 transition-all border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6 text-[#001B3D]" />
        </button>
        <div>
          <h1 className="text-4xl font-black text-[#001B3D] tracking-tight">Add New Pet</h1>
          <p className="text-slate-500 font-medium">Register a new pet profile in the system.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8 md:p-16">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Image Upload Section */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 rounded-[2.5rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-[#001B3D] hover:text-[#001B3D] transition-all cursor-pointer">
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black text-[#001B3D] mb-1">Pet Photo</h3>
                <p className="text-slate-400 font-medium">Upload a clear photo of the pet. Max 5MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Pet Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bruno"
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-6 text-lg font-bold text-[#001B3D] placeholder:text-slate-300 focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Species / Breed</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dog (Golden Retriever)"
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-6 text-lg font-bold text-[#001B3D] placeholder:text-slate-300 focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Owner Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Kamal Perera"
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-6 text-lg font-bold text-[#001B3D] placeholder:text-slate-300 focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Age</label>
                <input 
                  type="text" 
                  placeholder="e.g. 3 Years"
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-6 text-lg font-bold text-[#001B3D] placeholder:text-slate-300 focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Medical Notes (Optional)</label>
              <textarea 
                rows={5}
                placeholder="Any allergies, previous surgeries or specific conditions..."
                className="w-full bg-slate-50 border-none rounded-2xl px-8 py-6 text-lg font-bold text-[#001B3D] placeholder:text-slate-300 focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 pt-8">
              <button 
                type="button"
                onClick={() => navigate("/admin-pet-profiles")}
                className="flex-1 bg-slate-50 text-slate-600 font-black py-6 rounded-[2rem] hover:bg-slate-100 transition-all text-lg"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-[2] bg-[#001B3D] text-white font-black py-6 rounded-[2rem] hover:bg-[#002b61] transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 text-lg"
              >
                <Save className="w-6 h-6" />
                Save Pet Profile
              </button>
            </div>
          </form>
        </div>
      </main>

      <AdminModal 
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate("/admin-pet-profiles");
        }}
        type="success"
        title="Registration Successful"
        message="The new pet profile has been registered successfully."
      />
    </div>
  );
}
