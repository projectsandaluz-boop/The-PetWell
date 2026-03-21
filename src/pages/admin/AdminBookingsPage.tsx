/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  Filter,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  PawPrint
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import AdminModal from "../../components/AdminModal";

const bookingsData = [
  {
    id: "B-1023",
    pet: "Bruno",
    owner: "Kamal",
    date: "2025-11-01",
    status: "Confirmed"
  },
  {
    id: "B-1024",
    pet: "Mimi",
    owner: "Nirosha",
    date: "2025-11-03",
    status: "Pending"
  },
  {
    id: "B-1025",
    pet: "Rex",
    owner: "Saman",
    date: "2025-11-05",
    status: "Confirmed"
  },
  {
    id: "B-1026",
    pet: "Luna",
    owner: "Priya",
    date: "2025-11-07",
    status: "Cancelled"
  }
];

export default function AdminBookingsPage() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(bookingsData);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState<string | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Pending":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Cancelled":
        return "bg-rose-50 text-rose-600 border-rose-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <CheckCircle className="w-3 h-3" />;
      case "Pending":
        return <Clock className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const handleDeleteClick = (id: string) => {
    setBookingToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (bookingToDelete) {
      setBookings(bookings.filter(b => b.id !== bookingToDelete));
      setShowDeleteConfirm(false);
      setBookingToDelete(null);
      setShowDeleteSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      
      <AdminSidebar activePage="bookings" />

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-2 tracking-tight">Bookings</h1>
            <p className="text-slate-500 font-medium">Manage and track all pet service appointments.</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/admin-add-booking")}
              className="flex items-center gap-2 bg-[#001B3D] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20"
            >
              <Plus className="w-5 h-5" />
              New Booking
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
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              className="bg-white border-none rounded-2xl pl-12 pr-6 py-3 text-sm font-medium w-96 shadow-sm focus:ring-2 focus:ring-[#001B3D]/10 transition-all" 
              placeholder="Search bookings by ID, pet or owner..." 
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-slate-50">
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Booking ID</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Pet</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Owner</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {bookings.map((booking) => (
                <tr key={booking.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6">
                    <span className="font-mono text-sm font-bold text-[#001B3D]">{booking.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <PawPrint className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-bold text-[#001B3D] text-sm">{booking.pet}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-slate-600 font-medium text-sm">{booking.owner}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-slate-500 font-medium text-sm">{booking.date}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${getStatusStyles(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => navigate(`/admin-edit-booking/${booking.id}`)}
                        className="p-2 rounded-xl text-slate-400 hover:text-[#001B3D] hover:bg-white transition-all"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(booking.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-xl text-slate-400 hover:text-[#001B3D] hover:bg-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination Placeholder */}
          <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/30">
            <p className="text-xs text-slate-400 font-medium">Showing {bookings.length} of 24 bookings</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all disabled:opacity-50">Previous</button>
              <button className="px-4 py-2 rounded-xl bg-[#001B3D] text-white text-xs font-bold hover:bg-[#002b61] transition-all shadow-sm">Next</button>
            </div>
          </div>
        </div>
      </main>

      <AdminModal 
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={confirmDelete}
        type="delete"
        title="Delete Booking"
        message="Are you sure you want to delete this booking? This action cannot be undone."
      />

      <AdminModal 
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
        type="success"
        title="Deleted Successfully"
        message="The booking has been deleted successfully."
      />
    </div>
  );
}
