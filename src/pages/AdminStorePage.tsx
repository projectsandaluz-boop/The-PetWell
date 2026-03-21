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
  Bell, 
  Search, 
  Filter,
  ChevronRight,
  Plus
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const ProductCard = ({ image, title, subtitle, price }: any) => (
  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
    <div className="aspect-square bg-slate-50 relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-[#001B3D] mb-1">{title}</h3>
      <p className="text-xs text-slate-400 font-medium">
        {subtitle} — <span className="text-slate-500">rs.{price}</span>
      </p>
    </div>
  </div>
);

const products = [
  {
    image: "https://m.media-amazon.com/images/I/71-08N-vP-L._SL1500_.jpg",
    title: "Dog Food",
    subtitle: "Premium Blend",
    price: "1000"
  },
  {
    image: "https://m.media-amazon.com/images/I/61K7Y8v69rL._SL1500_.jpg",
    title: "Cat Toy",
    subtitle: "Interactive Mouse",
    price: "1200"
  },
  {
    image: "https://m.media-amazon.com/images/I/61-89z-m9DL._SL1500_.jpg",
    title: "Pet Shampoo",
    subtitle: "Organic Aloe",
    price: "850"
  },
  {
    image: "https://m.media-amazon.com/images/I/71-08N-vP-L._SL1500_.jpg",
    title: "Puppy Nutrition",
    subtitle: "Drools Special",
    price: "1500"
  }
];

export default function AdminStorePage() {
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
          <SidebarItem icon={ShoppingBag} label="Store" active />
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
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-2 tracking-tight">Store</h1>
            <p className="text-slate-500 font-medium">Manage your clinic's inventory and pet products.</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/admin-add-store")}
              className="flex items-center gap-2 bg-[#001B3D] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20"
            >
              <Plus className="w-5 h-5" />
              Add Product
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
        <div className="flex items-center justify-between mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              className="bg-white border-none rounded-2xl pl-12 pr-6 py-3 text-sm font-medium w-96 shadow-sm focus:ring-2 focus:ring-[#001B3D]/10 transition-all" 
              placeholder="Search products..." 
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" />
              Category
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
              Sort By
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
