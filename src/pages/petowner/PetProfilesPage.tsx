/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Plus, 
  Search, 
  Filter,
  ChevronRight,
  Heart,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PetCard = ({ name, breed, age, owner, status, tags, image, onClick }: any) => (
  <button 
    onClick={onClick}
    className="bg-white p-6 rounded-[2rem] shadow-sm border border-surface-container-high flex flex-col items-center text-center gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
  >
    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container-low relative">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white flex items-center justify-center shadow-sm">
        <div className={`w-1.5 h-1.5 rounded-full ${status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </div>
    </div>
    <div className="space-y-1">
      <h4 className="text-xl font-black text-[#001B3D] tracking-tight">{name}</h4>
      <p className="text-xs text-[#8E9299] font-bold uppercase tracking-widest">{breed} • {age}</p>
      <p className="text-[9px] font-black text-[#001B3D]/40 uppercase tracking-[0.2em]">{owner}</p>
    </div>
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag: string, i: number) => (
        <span key={i} className="px-3 py-1 rounded-full bg-[#F0F4FF] text-[#001B3D] text-[9px] font-black uppercase tracking-widest border border-[#001B3D]/5">{tag}</span>
      ))}
    </div>
    <div className="pt-4 w-full border-t border-surface-container-high flex items-center justify-between text-[#001B3D] font-bold text-xs">
      <span>View Profile</span>
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </button>
);

export default function PetProfilesPage() {
  const navigate = useNavigate();

  const pets = [
    { 
      id: 'cooper',
      name: "Cooper", 
      breed: "Beagle", 
      age: "4 years", 
      owner: "Kamal Perera",
      status: "Healthy", 
      tags: ['Healthy', 'Vaccinated'], 
      image: "https://picsum.photos/seed/beagle/400/400"
    },
    { 
      id: 'luna',
      name: "Luna", 
      breed: "Russian Blue", 
      age: "2 years", 
      owner: "Kamal Perera",
      status: "Check-up Due", 
      tags: ['Check-up Due'], 
      image: "https://picsum.photos/seed/cat/400/400"
    },
    { 
      id: 'buddy',
      name: "Buddy", 
      breed: "Labrador", 
      age: "2 years", 
      owner: "Kamal Perera",
      status: "Healthy", 
      tags: ['Healthy', 'Active'], 
      image: "https://picsum.photos/seed/labrador/400/400"
    },
    { 
      id: 'max',
      name: "Max", 
      breed: "Golden Retriever", 
      age: "1 year", 
      owner: "Kamal Perera",
      status: "Healthy", 
      tags: ['Healthy', 'Active'], 
      image: "https://picsum.photos/seed/dog/400/400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex flex-col">
      {/* Header */}
      <header className="bg-[#001B3D] text-white px-12 py-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => navigate("/owner-dashboard")} 
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-3xl font-extrabold tracking-tighter text-white">PetWell</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search guardians..." 
              className="bg-white/10 border-none rounded-2xl pl-12 pr-6 py-3 text-sm font-bold placeholder:text-white/40 focus:ring-2 focus:ring-white/20 w-64 transition-all"
            />
          </div>
          <button className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 py-16 px-12 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-[#001B3D] tracking-tighter">Your Guardians</h1>
            <p className="text-[#8E9299] text-base font-medium">Manage and view profiles of your beloved pets.</p>
          </div>
          <button 
            onClick={() => navigate("/add-pet")}
            className="bg-[#001B3D] text-white font-black px-6 py-3 rounded-2xl flex items-center gap-3 hover:opacity-95 transition-all active:scale-95 shadow-2xl shadow-blue-900/20 text-sm"
          >
            <Plus className="w-5 h-5 stroke-[3px]" />
            Add New Pet
          </button>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pets.map((pet) => (
            <PetCard 
              key={pet.id} 
              {...pet} 
              onClick={() => navigate(`/pet-details/${pet.id}`)}
            />
          ))}
          
          {/* Add Empty State / Placeholder */}
          <button 
            onClick={() => navigate("/add-pet")}
            className="bg-white/50 border-4 border-dashed border-[#001B3D]/10 rounded-[2rem] flex flex-col items-center justify-center gap-4 p-8 hover:bg-white hover:border-[#001B3D]/20 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-[#001B3D]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8 text-[#001B3D] opacity-40" />
            </div>
            <span className="text-base font-black text-[#001B3D] opacity-40">Add Another Pet</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-container-high py-12 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-extrabold tracking-tighter text-[#001B3D] mb-2">PetWell</span>
            <p className="text-xs text-[#8E9299]">© 2024 PetWell. The Empathetic Guardian. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-[#8E9299] uppercase tracking-widest">
            <button className="hover:text-[#001B3D] transition-colors">Privacy Policy</button>
            <button className="hover:text-[#001B3D] transition-colors">Terms of Service</button>
            <button className="hover:text-[#001B3D] transition-colors">Cookie Settings</button>
            <button className="hover:text-[#001B3D] transition-colors">Accessibility</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
