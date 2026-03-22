/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Upload,
  Save,
  ChevronLeft,
  PawPrint,
  Shapes,
  Cake,
  User,
  MapPin,
  Phone,
  AlertTriangle
} from "lucide-react";

const InputWithIcon = ({ icon: Icon, label, placeholder, type = "text" }: any) => (
  <div className="space-y-3">
    <label className="text-[15px] font-bold text-[#001B3D] tracking-tight ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#001B3D] transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-[#F8FAFC] border-none rounded-2xl pl-16 pr-6 py-5 text-sm font-semibold text-[#001B3D] focus:ring-2 focus:ring-[#001B3D]/10 transition-all placeholder:text-slate-300"
      />
    </div>
  </div>
);

export default function AddPetPage() {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/owner-pet-profiles");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-12 px-6">
      <main className="w-full max-w-4xl">
        {/* Header */}
        <header className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => navigate("/owner-pet-profiles")}
            className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">Add New Pet</h1>
            <p className="text-slate-500 font-medium">Register a new pet profile in the system.</p>
          </div>
        </header>

        {/* Form Card */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Image Upload Section */}
            <div className="flex items-center gap-10">
              <div className="w-32 h-32 rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-[#001B3D] hover:text-[#001B3D] transition-all cursor-pointer">
                <Upload className="w-6 h-6 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001B3D] mb-1">Pet Photo</h3>
                <p className="text-sm text-slate-400 font-medium">Upload a clear photo of the pet. Max 5MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <InputWithIcon icon={PawPrint} label="Pet Name *" placeholder="e.g. Bruno" />
              <InputWithIcon icon={Shapes} label="Breed" placeholder="e.g. Labrador" />
              <InputWithIcon icon={Cake} label="Age (years)" placeholder="e.g. 3" />
              <InputWithIcon icon={User} label="Owner Name" placeholder="e.g. Kamal Perera" />
              <InputWithIcon icon={MapPin} label="Address" placeholder="e.g. 12 Palm St" />
              <InputWithIcon icon={Phone} label="Contact Number" placeholder="e.g. 0771234567" />
              <InputWithIcon icon={AlertTriangle} label="Allergies" placeholder="e.g. Pollen, None" />
            </div>

            <div className="space-y-3">
              <label className="text-[15px] font-bold text-[#001B3D] tracking-tight ml-1">Medical History / Special Concerns</label>
              <textarea 
                rows={4}
                placeholder="Any allergies, previous surgeries or specific conditions..."
                className="w-full bg-[#F8FAFC] border-none rounded-2xl px-8 py-6 text-sm font-semibold text-[#001B3D] focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none placeholder:text-slate-300"
              />
            </div>

            <div className="flex gap-4 pt-6">
              <button 
                type="button"
                onClick={() => navigate("/owner-pet-profiles")}
                className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Pet Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
