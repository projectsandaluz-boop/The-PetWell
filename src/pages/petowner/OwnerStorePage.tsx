/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Plus, 
  Heart,
  Star,
  ChevronRight,
  ShoppingCart
} from "lucide-react";
import OwnerSidebar from "../../components/OwnerSidebar";

const ProductCard = ({ name, category, price, rating, image, isNew = false }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer" 
      />
      <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all shadow-sm">
        <Heart className="w-5 h-5" />
      </button>
      {isNew && (
        <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#001B3D] text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
          New Arrival
        </div>
      )}
    </div>
    
    <div className="flex-1">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{category}</span>
        <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-lg">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span className="text-xs font-black text-amber-700">{rating}</span>
        </div>
      </div>
      <h4 className="text-xl font-black text-[#001B3D] mb-6 group-hover:text-blue-600 transition-colors leading-tight">{name}</h4>
    </div>

    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
      <p className="text-2xl font-black text-[#001B3D] tracking-tight">${price}</p>
      <button className="w-12 h-12 rounded-2xl bg-[#001B3D] text-white flex items-center justify-center hover:bg-blue-900 transition-all active:scale-90 shadow-lg shadow-blue-900/20">
        <Plus className="w-7 h-7" />
      </button>
    </div>
  </motion.div>
);

export default function OwnerStorePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <OwnerSidebar activePage="store" />

      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 ml-72 p-12 pb-24"
      >
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-black text-[#001B3D] mb-2 tracking-tight">PetWell Store</h1>
            <p className="text-slate-500 font-medium text-lg">Premium supplies for your beloved guardians.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[#001B3D] transition-colors" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="bg-white border-none rounded-[24px] pl-14 pr-8 py-5 text-base font-bold shadow-sm focus:ring-4 focus:ring-[#001B3D]/5 transition-all w-80 placeholder:text-slate-300"
              />
            </div>
            <button className="w-14 h-14 rounded-[24px] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#001B3D] transition-all relative group">
              <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <div className="absolute top-4 right-4 w-3 h-3 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
            </button>
          </div>
        </header>

        {/* Categories */}
        <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-6 no-scrollbar">
          {['All Products', 'Food & Nutrition', 'Toys', 'Health & Care', 'Accessories', 'Grooming'].map((cat, i) => (
            <button 
              key={i}
              className={`px-8 py-4 rounded-[20px] text-sm font-black whitespace-nowrap transition-all duration-300 ${
                i === 0 
                  ? 'bg-[#001B3D] text-white shadow-2xl shadow-blue-900/30 -translate-y-0.5' 
                  : 'bg-white text-slate-400 hover:bg-slate-50 hover:text-[#001B3D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <ProductCard 
            name="Royal Canin Adult Dog" 
            category="Food" 
            price="84.99" 
            rating="4.9" 
            image="https://picsum.photos/seed/dogfood/600/600"
            isNew={true}
          />
          <ProductCard 
            name="Interactive Cat Laser" 
            category="Toys" 
            price="24.50" 
            rating="4.7" 
            image="https://picsum.photos/seed/cattoy/600/600"
          />
          <ProductCard 
            name="Orthopedic Pet Bed" 
            category="Accessories" 
            price="120.00" 
            rating="5.0" 
            image="https://picsum.photos/seed/petbed/600/600"
          />
          <ProductCard 
            name="Premium Grooming Kit" 
            category="Grooming" 
            price="45.99" 
            rating="4.8" 
            image="https://picsum.photos/seed/groom/600/600"
          />
        </div>

        {/* Promo Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#001B3D] rounded-[4rem] p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-blue-900/40"
        >
          <div className="relative z-10 max-w-xl">
            <h3 className="text-5xl font-black mb-6 leading-tight tracking-tight">Get 20% Off Your First Subscription</h3>
            <p className="text-white/70 font-medium text-xl mb-10 leading-relaxed">Never run out of supplies. Subscribe to your favorite products and save more every month.</p>
            <button className="bg-white text-[#001B3D] font-black text-lg px-12 py-5 rounded-[24px] hover:bg-white/90 transition-all flex items-center gap-3 group active:scale-95">
              Explore Subscriptions
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative z-10 w-80 h-80 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/10">
            <ShoppingBag className="w-40 h-40 text-white/20" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        </motion.div>
      </motion.main>
    </div>
  );
}
