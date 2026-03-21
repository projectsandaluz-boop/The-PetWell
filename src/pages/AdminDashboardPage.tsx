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
  ArrowLeft,
  Bell, 
  Search, 
  Filter,
  ChevronRight,
  Clock,
  TrendingUp,
  DollarSign,
  UserCheck,
  ShieldCheck,
  Plus
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const data = [
  { name: 'Mon', activity: 400 },
  { name: 'Tue', activity: 300 },
  { name: 'Wed', activity: 600 },
  { name: 'Thu', activity: 800 },
  { name: 'Fri', activity: 500 },
  { name: 'Sat', activity: 900 },
  { name: 'Sun', activity: 700 },
];

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high flex items-center justify-between">
    <div>
      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{title}</p>
      <h3 className="text-3xl font-extrabold text-primary mb-2">{value}</h3>
      <div className={`flex items-center gap-1 text-xs font-bold ${change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
        <TrendingUp className="w-3 h-3" />
        {change} from last month
      </div>
    </div>
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-primary" />
    </div>
  </div>
);

export default function AdminDashboardPage() {
  const navigate = useNavigate();

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
          <SidebarItem icon={Truck} label="Delivery Tracking" onClick={() => navigate("/admin-delivery")} />
          <SidebarItem icon={MessageSquare} label="Feedback" />
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
            <h1 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">Overview</h1>
            <p className="text-secondary font-medium">Welcome back, Administrator. Here's your daily clinic summary.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-surface-container-high flex items-center justify-center text-secondary relative">
              <Bell className="w-6 h-6" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-surface-container-high">
              <div className="text-right">
                <p className="font-bold text-primary text-sm">Dr. Sarah Jenkins</p>
                <p className="text-secondary text-xs">Senior Veterinarian</p>
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Patients" value="1,284" change="+12%" icon={PawPrint} color="bg-sky-100" />
          <StatCard title="Appointments" value="42" change="8 pending" icon={Calendar} color="bg-indigo-100" />
          <StatCard title="Revenue (MTD)" value="$18.4k" change="+5.4%" icon={DollarSign} color="bg-amber-100" />
          <StatCard title="Staff Online" value="12" change="Across 2 locations" icon={UserCheck} color="bg-slate-100" />
        </div>

        {/* Charts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          {/* Patient Activity Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-surface-container-high">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Patient Activity</h3>
                <p className="text-xs text-secondary font-medium">Weekly engagement analysis</p>
              </div>
              <select className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-xs font-bold text-primary">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#001B3D" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#001B3D" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#64748B'}} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 700, color: '#001B3D' }}
                  />
                  <Area type="monotone" dataKey="activity" stroke="#001B3D" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Today */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-surface-container-high">
            <h3 className="text-xl font-bold text-primary mb-8">Upcoming Today</h3>
            <div className="space-y-6">
              {[
                { time: '09:00 AM', pet: 'Luna (Golden Retriever)', type: 'Vaccination Follow-up' },
                { time: '10:30 AM', pet: 'Milo (Siamese Cat)', type: 'Dental Cleaning' },
                { time: '01:15 PM', pet: 'Oliver (Bulldog)', type: 'Annual Checkup' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-pointer">
                  <div className="text-center min-w-[70px]">
                    <p className="text-[10px] font-extrabold text-primary uppercase tracking-tighter">{item.time.split(' ')[0]}</p>
                    <p className="text-[10px] font-extrabold text-secondary uppercase tracking-tighter">{item.time.split(' ')[1]}</p>
                  </div>
                  <div className="flex-1 pb-6 border-b border-surface-container-high">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-primary text-sm mb-1 group-hover:text-surface-tint transition-colors">{item.pet}</p>
                      <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs text-secondary font-medium">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-4 rounded-2xl bg-surface-container-low text-primary font-bold text-sm hover:bg-surface-container-high transition-all">
              View Full Schedule
            </button>
          </div>
        </div>

        {/* Recent Registrations Table */}
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-surface-container-high">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">Recent Registrations</h3>
              <p className="text-xs text-secondary font-medium">Monitor new pet owners joining the platform</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-xs font-medium w-64" placeholder="Search users..." />
              </div>
              <button className="p-2.5 rounded-xl bg-surface-container-low text-secondary hover:text-primary transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-surface-container-high">
                <th className="pb-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Owner Name</th>
                <th className="pb-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Primary Pet</th>
                <th className="pb-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Location</th>
                <th className="pb-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Joined Date</th>
                <th className="pb-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {[
                { name: 'Michael Adams', email: 'm.adams@email.com', pet: 'Bella (Husky)', loc: 'San Francisco, CA', date: 'Oct 14, 2024', status: 'Active' },
                { name: 'Sophia Lee', email: 'slee_pet@provider.com', pet: 'Felix (Main Coon)', loc: 'Palo Alto, CA', date: 'Oct 12, 2024', status: 'Active' },
                { name: 'Robert Jonson', email: 'robert.j@workmail.com', pet: 'Duke (Boxer)', loc: 'Oakland, CA', date: 'Oct 11, 2024', status: 'Pending Verify' }
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-surface-container-low transition-all">
                  <td className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary font-bold text-xs">
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm">{row.name}</p>
                        <p className="text-[10px] text-secondary font-medium">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-primary text-[10px] font-bold">{row.pet}</span>
                  </td>
                  <td className="py-6 text-sm text-secondary font-medium">{row.loc}</td>
                  <td className="py-6 text-sm text-secondary font-medium">{row.date}</td>
                  <td className="py-6">
                    <span className={`text-[10px] font-bold ${row.status === 'Active' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-72 right-0 bg-white border-t border-surface-container-high py-6 px-10 flex justify-between items-center z-10">
        <div className="flex flex-col">
          <Logo className="mb-1" />
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
