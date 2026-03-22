/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronLeft,
  Upload,
  Save,
  Tag,
  DollarSign
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import AdminModal from "../../components/AdminModal";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminAddStorePage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      {/* Sidebar */}
      <AdminSidebar activePage="store" />

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/admin-store")}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight">Add Product</h1>
              <p className="text-slate-500 font-medium">Add a new item to your clinic's store.</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Image Upload Section */}
              <div className="flex items-center gap-10">
                <div className="w-32 h-32 rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-[#001B3D] hover:text-[#001B3D] transition-all cursor-pointer">
                  <Upload className="w-6 h-6 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#001B3D] mb-1">Product Image</h3>
                  <p className="text-sm text-slate-400 font-medium">Upload a clear photo of the product. Max 5MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Premium Dog Food"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all appearance-none cursor-pointer">
                      <option>Food & Nutrition</option>
                      <option>Toys & Entertainment</option>
                      <option>Health & Grooming</option>
                      <option>Accessories</option>
                      <option>Medicine</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Price (rs.)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="number" 
                      placeholder="e.g. 1500"
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Stock Quantity</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 50"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brand</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Pedigree"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Weight / Size</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2kg or Medium"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Product Description</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the product features, benefits and ingredients..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#001B3D]/10 transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => navigate("/admin-store")}
                  className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Product
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
          navigate("/admin-store");
        }}
        type="success"
        title="Product Added"
        message="The new product has been added to the store successfully."
      />
    </div>
  );
}
