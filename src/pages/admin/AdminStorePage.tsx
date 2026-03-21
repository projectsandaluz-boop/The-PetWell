/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { 
  Bell, 
  Search, 
  Filter,
  ChevronRight,
  Plus,
  Edit2,
  Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminModal from "../../components/AdminModal";

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

const productsData = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71-08N-vP-L._SL1500_.jpg",
    title: "Dog Food",
    subtitle: "Premium Blend",
    price: "1000"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61K7Y8v69rL._SL1500_.jpg",
    title: "Cat Toy",
    subtitle: "Interactive Mouse",
    price: "1200"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61-89z-m9DL._SL1500_.jpg",
    title: "Pet Shampoo",
    subtitle: "Organic Aloe",
    price: "850"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71-08N-vP-L._SL1500_.jpg",
    title: "Puppy Nutrition",
    subtitle: "Drools Special",
    price: "1500"
  }
];

export default function AdminStorePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleDeleteClick = (id: number) => {
    setProductToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter(p => p.id !== productToDelete));
      setShowDeleteConfirm(false);
      setProductToDelete(null);
      setShowDeleteSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      <AdminSidebar activePage="store" />

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
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all relative">
              <div className="aspect-square bg-slate-50 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/admin-edit-store/${product.id}`);
                    }}
                    className="p-2 bg-white rounded-xl shadow-lg text-slate-400 hover:text-[#001B3D] transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(product.id);
                    }}
                    className="p-2 bg-white rounded-xl shadow-lg text-slate-400 hover:text-rose-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001B3D] mb-1">{product.title}</h3>
                <p className="text-xs text-slate-400 font-medium">
                  {product.subtitle} — <span className="text-slate-500">rs.{product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AdminModal 
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={confirmDelete}
        type="delete"
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />

      <AdminModal 
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
        type="success"
        title="Deleted Successfully"
        message="The product has been deleted successfully."
      />
    </div>
  );
}
