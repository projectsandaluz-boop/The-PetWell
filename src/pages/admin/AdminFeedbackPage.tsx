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
  Search, 
  Filter,
  MoreVertical,
  CheckCircle,
  Trash2,
  User,
  Star
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { useState } from "react";
import AdminModal from "../../components/AdminModal";

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${active ? 'bg-white/10 text-white border-r-4 border-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const feedbackData = [
  {
    id: 1,
    user: "Kamal Perera",
    rating: 5,
    comment: "Excellent service! My dog Bruno was very happy with the care he received.",
    date: "2024-10-15",
    status: "New"
  },
  {
    id: 2,
    user: "Nirosha Silva",
    rating: 4,
    comment: "The store has a great variety of products. Delivery was a bit slow but acceptable.",
    date: "2024-10-14",
    status: "Resolved"
  },
  {
    id: 3,
    user: "Sam Gunawardena",
    rating: 5,
    comment: "Highly recommend PetWell. The staff is very professional and empathetic.",
    date: "2024-10-12",
    status: "New"
  }
];

export default function AdminFeedbackPage() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState<number | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleDeleteClick = (id: number) => {
    setFeedbackToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (feedbackToDelete) {
      setFeedbacks(feedbacks.filter(f => f.id !== feedbackToDelete));
      setShowDeleteConfirm(false);
      setFeedbackToDelete(null);
      setShowDeleteSuccess(true);
    }
  };

  const markAsResolved = (id: number) => {
    setFeedbacks(feedbacks.map(f => f.id === id ? { ...f, status: "Resolved" } : f));
  };

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
          <SidebarItem icon={MessageSquare} label="Feedback" active onClick={() => navigate("/admin-feedback")} />
        </nav>

        <div className="mt-auto">
          <div className="px-6 py-4">
            <div className="h-px bg-white/10 w-full mb-4" />
            <div className="space-y-1">
              <SidebarItem icon={Settings} label="Settings" />
              <SidebarItem icon={LogOut} label="Logout" onClick={() => navigate("/")} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-2 tracking-tight">Customer Feedback</h1>
            <p className="text-slate-500 font-medium">Review and manage feedback from pet owners.</p>
          </div>
          <div className="flex items-center gap-6">
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
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              className="bg-white border-none rounded-2xl pl-12 pr-6 py-3 text-sm font-medium w-96 shadow-sm focus:ring-2 focus:ring-[#001B3D]/10 transition-all" 
              placeholder="Search feedback..." 
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" />
              Rating
            </button>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex items-start justify-between group hover:shadow-md transition-all">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg">
                  {feedback.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#001B3D] text-lg">{feedback.user}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${feedback.status === 'New' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {feedback.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < feedback.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                    ))}
                    <span className="text-xs text-slate-400 font-bold ml-2">{feedback.date}</span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed max-w-2xl">
                    "{feedback.comment}"
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {feedback.status === 'New' && (
                  <button 
                    onClick={() => markAsResolved(feedback.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs hover:bg-emerald-100 transition-all"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Resolve
                  </button>
                )}
                <button 
                  onClick={() => handleDeleteClick(feedback.id)}
                  className="p-3 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
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
        title="Delete Feedback"
        message="Are you sure you want to delete this feedback? This action cannot be undone."
      />

      <AdminModal 
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
        type="success"
        title="Deleted Successfully"
        message="The feedback has been deleted successfully."
      />
    </div>
  );
}
