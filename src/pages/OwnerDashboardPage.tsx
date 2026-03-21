/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Plus, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  ChevronRight,
  Heart,
  Smartphone,
  ShieldCheck,
  Clock,
  Package,
  Stethoscope,
  PlusCircle,
  Pill,
  ShoppingBag,
  CheckCircle2
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const QuickAction = ({ icon: Icon, label, color }: any) => (
  <button className="flex flex-col items-center gap-4 group">
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-all group-active:scale-95`}>
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <span className="text-xs font-bold text-primary tracking-tight">{label}</span>
  </button>
);

const PetCard = ({ name, breed, age, status, tags, image }: any) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-surface-container-high flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all">
    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container-low">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
        <h4 className="text-xl font-bold text-primary">{name}</h4>
        <div className={`w-2 h-2 rounded-full ${status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </div>
      <p className="text-xs text-secondary font-medium mb-3">{breed} • {age}</p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="px-3 py-1 rounded-full bg-sky-100 text-primary text-[10px] font-bold uppercase tracking-widest">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default function OwnerDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#001B3D] flex flex-col fixed h-full z-20">
        <div className="p-8">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-[#001B3D] rounded-sm" />
            </div>
            PetWell
          </Link>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Empathetic Guardian</p>
        </div>

        <nav className="flex-1 mt-8">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Users} label="Pet Profiles" />
          <SidebarItem icon={FileText} label="Health Records" />
          <SidebarItem icon={Calendar} label="Appointments" />
          <SidebarItem icon={MessageSquare} label="Messages" />
        </nav>

        <div className="p-6 space-y-4">
          <button className="w-full bg-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            <PlusCircle className="w-5 h-5" />
            Book Appointment
          </button>
          <div className="pt-6 border-t border-white/10 space-y-2">
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={LogOut} label="Logout" onClick={() => navigate("/")} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">Hello, Sarah</h1>
            <p className="text-secondary font-medium">Your guardians are healthy and happy today.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-surface-container-high flex items-center justify-center text-secondary relative">
              <Bell className="w-6 h-6" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-surface-container-high">
              <div className="text-right">
                <p className="font-bold text-primary text-sm">Sarah Jenkins</p>
                <p className="text-secondary text-xs">Pet Guardian</p>
              </div>
              <img 
                src="https://picsum.photos/seed/sarah/100/100" 
                alt="Profile" 
                className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl">
          <QuickAction icon={Stethoscope} label="Book Appointment" color="bg-sky-100" />
          <QuickAction icon={PlusCircle} label="Add Pet Profile" color="bg-amber-100" />
          <QuickAction icon={Pill} label="Record Medication" color="bg-indigo-100" />
          <QuickAction icon={ShoppingBag} label="Order Supplies" color="bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Your Guardians */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary">Your Guardians</h3>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PetCard 
                name="Cooper" 
                breed="Beagle" 
                age="4 years" 
                status="Healthy" 
                tags={['Healthy', 'Vaccinated']} 
                image="https://picsum.photos/seed/beagle/200/200"
              />
              <PetCard 
                name="Luna" 
                breed="Russian Blue" 
                age="2 years" 
                status="Check-up Due" 
                tags={['Check-up Due']} 
                image="https://picsum.photos/seed/cat/200/200"
              />
            </div>

            {/* Upcoming Appointments */}
            <div className="pt-10">
              <h3 className="text-2xl font-bold text-primary mb-8">Upcoming Appointments</h3>
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-surface-container-high flex items-center gap-8 group cursor-pointer hover:shadow-md transition-all">
                <div className="w-20 h-24 rounded-2xl bg-surface-container-low flex flex-col items-center justify-center text-primary">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">Oct</p>
                  <p className="text-3xl font-extrabold">24</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-1">Annual Vaccination</h4>
                  <p className="text-sm text-secondary font-medium mb-3">PetWell Central Clinic • 10:30 AM</p>
                  <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/seed/doc/100/100" alt="Vet" className="w-6 h-6 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <p className="text-xs text-secondary font-bold">For Cooper</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            
            {/* Delivery Tracking */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-surface-container-high">
              <h3 className="text-xl font-bold text-primary mb-8">Delivery Tracking</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-surface-container-high" />
                
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">Order Shipped</p>
                    <p className="text-[10px] text-secondary font-medium mb-3">October 20, 2024 • 09:15 AM</p>
                    <div className="bg-surface-container-low p-3 rounded-xl text-[10px] font-bold text-secondary">
                      Royal Canin Adult 12kg x 2
                    </div>
                  </div>
                </div>

                <div className="relative pl-10 opacity-40">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center z-10" />
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">Out for Delivery</p>
                    <p className="text-[10px] text-secondary font-medium">Estimated: Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PetWell Plus */}
            <div className="bg-[#001B3D] p-8 rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">PetWell Plus</h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed">Unlimited tele-consultations and 15% off at our store.</p>
                <button className="w-full bg-white text-[#001B3D] font-bold py-4 rounded-2xl hover:bg-white/90 transition-all active:scale-95">
                  Upgrade Now
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <CheckCircle2 className="absolute bottom-4 right-4 w-20 h-20 text-white/5" />
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { icon: FileText, label: 'Grooming Receipt', time: '2 hours ago', color: 'bg-indigo-100' },
                  { icon: PlusCircle, label: 'Lab Results Added', time: 'Yesterday', color: 'bg-rose-100' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-surface-container-high shadow-sm">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{item.label}</p>
                      <p className="text-[10px] text-secondary font-medium">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-72 right-0 bg-white border-t border-surface-container-high py-6 px-10 flex justify-between items-center z-10">
        <div className="flex flex-col">
          <span className="font-headline font-bold text-sm text-primary mb-1">PetWell</span>
          <p className="text-[10px] text-secondary">© 2024 PetWell. The Empathetic Guardian. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-[10px] font-bold text-secondary uppercase tracking-widest">
          <button className="hover:text-primary transition-colors">Privacy Policy</button>
          <button className="hover:text-primary transition-colors">Terms of Service</button>
          <button className="hover:text-primary transition-colors">Cookie Settings</button>
          <button className="hover:text-primary transition-colors">Accessibility</button>
        </div>
      </footer>
    </div>
  );
}
