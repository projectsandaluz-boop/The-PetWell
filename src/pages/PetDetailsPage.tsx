/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Edit3, 
  Trash2, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Clock,
  ChevronRight,
  Plus,
  FileText,
  Stethoscope,
  Heart,
  Info
} from "lucide-react";

export default function PetDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the selected pet
  const pet = {
    id: id,
    name: id === 'cooper' ? "Cooper" : id === 'luna' ? "Luna" : "Max",
    breed: id === 'cooper' ? "Beagle" : id === 'luna' ? "Russian Blue" : "Golden Retriever",
    age: id === 'cooper' ? "4 years" : id === 'luna' ? "2 years" : "1 year",
    gender: "Male",
    weight: "12 kg",
    status: id === 'luna' ? "Check-up Due" : "Healthy",
    image: id === 'cooper' ? "https://picsum.photos/seed/beagle/800/800" : id === 'luna' ? "https://picsum.photos/seed/cat/800/800" : "https://picsum.photos/seed/dog/800/800",
    about: "A very energetic and friendly companion. Loves long walks and playing fetch. Allergic to chicken-based treats.",
    healthRecords: [
      { date: "Oct 12, 2024", type: "Vaccination", doctor: "Dr. Smith", status: "Completed" },
      { date: "Aug 05, 2024", type: "General Checkup", doctor: "Dr. Sarah", status: "Completed" },
      { date: "May 20, 2024", type: "Dental Cleaning", doctor: "Dr. Mike", status: "Completed" }
    ],
    upcomingAppointments: [
      { date: "Oct 24, 2024", type: "Annual Vaccination", time: "10:30 AM", location: "PetWell Central Clinic" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex flex-col">
      {/* Header */}
      <header className="bg-[#001B3D] text-white px-12 py-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => navigate("/owner-pet-profiles")} 
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-3xl font-extrabold tracking-tighter text-white">PetWell</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
            <Edit3 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center hover:bg-rose-500/30 transition-all text-rose-500">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full space-y-12 pb-32">
        
        {/* Profile Hero */}
        <section className="bg-white p-12 rounded-[4rem] shadow-xl shadow-blue-900/5 border border-surface-container-high flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="w-64 h-64 rounded-[3rem] overflow-hidden bg-surface-container-low shadow-2xl shadow-blue-900/10">
            <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <h1 className="text-6xl font-black text-[#001B3D] tracking-tighter">{pet.name}</h1>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${pet.status === 'Healthy' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                  {pet.status}
                </div>
              </div>
              <p className="text-xl text-[#8E9299] font-bold uppercase tracking-[0.2em]">{pet.breed} • {pet.age}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Gender', value: pet.gender, icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
                { label: 'Weight', value: pet.weight, icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-50' },
                { label: 'ID Number', value: 'PW-8291', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                { label: 'Last Checkup', value: '12 Oct', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' }
              ].map((stat, i) => (
                <div key={i} className="bg-[#F0F4FF] p-6 rounded-3xl space-y-2 border border-[#001B3D]/5">
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#8E9299] uppercase tracking-widest">{stat.label}</p>
                    <p className="text-lg font-black text-[#001B3D]">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#001B3D] flex items-center gap-2">
                <Info className="w-5 h-5" />
                About {pet.name}
              </h3>
              <p className="text-[#8E9299] font-medium leading-relaxed text-lg max-w-2xl">
                {pet.about}
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Health Records */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black text-[#001B3D] tracking-tight">Health Records</h3>
              <button className="bg-[#001B3D] text-white font-black px-6 py-3 rounded-2xl flex items-center gap-2 hover:opacity-95 transition-all text-sm">
                <Plus className="w-4 h-4" />
                Add Record
              </button>
            </div>
            <div className="space-y-4">
              {pet.healthRecords.map((record, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-surface-container-high flex items-center gap-8 group hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-[#F0F4FF] flex items-center justify-center text-[#001B3D]">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xl font-black text-[#001B3D]">{record.type}</h4>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">{record.status}</span>
                    </div>
                    <p className="text-sm text-[#8E9299] font-bold uppercase tracking-widest">{record.date} • {record.doctor}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-12">
            {/* Upcoming Appointments */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-[#001B3D] tracking-tight">Upcoming</h3>
              {pet.upcomingAppointments.map((app, i) => (
                <div key={i} className="bg-[#001B3D] p-8 rounded-[3rem] text-white space-y-6 shadow-2xl shadow-blue-900/20">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{app.date}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{app.type}</h4>
                    <p className="text-sm text-white/60 font-medium">{app.location} • {app.time}</p>
                  </div>
                  <button 
                    onClick={() => navigate("/owner-booking")}
                    className="w-full bg-white text-[#001B3D] font-black py-4 rounded-2xl hover:bg-white/90 transition-all active:scale-95"
                  >
                    Reschedule
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-surface-container-high space-y-6">
              <h3 className="text-xl font-black text-[#001B3D]">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { icon: Stethoscope, label: 'Book Vet Checkup', color: 'bg-rose-100', text: 'text-rose-600' },
                  { icon: Activity, label: 'Update Weight', color: 'bg-indigo-100', text: 'text-indigo-600' },
                  { icon: FileText, label: 'Export Medical History', color: 'bg-slate-100', text: 'text-slate-600' }
                ].map((action, i) => (
                  <button key={i} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-[#F0F4FF] transition-all group">
                    <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className={`w-5 h-5 ${action.text}`} />
                    </div>
                    <span className="text-sm font-bold text-[#001B3D]">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
