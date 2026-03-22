/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import OwnerSidebar from "../../components/OwnerSidebar";

const DeliveryCard = ({ id, status, date, items, address }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-md transition-all cursor-pointer"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
          <Package className="w-8 h-8" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h4 className="text-xl font-bold text-[#001B3D]">Order #{id}</h4>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
              {status}
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium">{date}</p>
        </div>
      </div>
      
      <div className="flex-1 max-w-md">
        <div className="flex items-center gap-2 text-slate-400 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Delivery Address</span>
        </div>
        <p className="text-sm text-[#001B3D] font-medium truncate">{address}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Items</p>
          <p className="text-sm text-[#001B3D] font-bold">{items} Items</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#001B3D] group-hover:text-white transition-all">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function OwnerDeliveryPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <OwnerSidebar activePage="delivery" />

      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 ml-72 p-12 pb-24"
      >
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-black text-[#001B3D] mb-2 tracking-tight">My Deliveries</h1>
            <p className="text-slate-500 font-medium text-lg">Track and manage your supply orders.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[#001B3D] transition-colors" />
              <input 
                type="text" 
                placeholder="Search orders..."
                className="bg-white border-none rounded-[24px] pl-14 pr-8 py-5 text-base font-bold shadow-sm focus:ring-4 focus:ring-[#001B3D]/5 transition-all w-80 placeholder:text-slate-300"
              />
            </div>
            <button className="w-14 h-14 rounded-[24px] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#001B3D] transition-all">
              <Filter className="w-7 h-7" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-[2rem] bg-blue-100 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Truck className="w-8 h-8" />
            </div>
            <p className="text-4xl font-black text-[#001B3D] mb-2">2</p>
            <p className="text-sm text-slate-400 font-black uppercase tracking-widest">In Transit</p>
          </div>
          <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-[2rem] bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <p className="text-4xl font-black text-[#001B3D] mb-2">14</p>
            <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Delivered</p>
          </div>
          <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-[2rem] bg-amber-100 text-amber-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8" />
            </div>
            <p className="text-4xl font-black text-[#001B3D] mb-2">1</p>
            <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Pending</p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-black text-[#001B3D] mb-10">Recent Orders</h3>
          <DeliveryCard 
            id="8821" 
            status="In Transit" 
            date="Expected: Oct 24, 2024" 
            items="3" 
            address="12 Palm St, Colombo 07, Sri Lanka"
          />
          <DeliveryCard 
            id="8794" 
            status="Delivered" 
            date="Delivered: Oct 20, 2024" 
            items="1" 
            address="12 Palm St, Colombo 07, Sri Lanka"
          />
          <DeliveryCard 
            id="8752" 
            status="Delivered" 
            date="Delivered: Oct 15, 2024" 
            items="5" 
            address="12 Palm St, Colombo 07, Sri Lanka"
          />
        </div>
      </motion.main>
    </div>
  );
}
