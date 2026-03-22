import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Search, 
  Bell, 
  Plus, 
  MoreVertical, 
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import OwnerSidebar from '../../components/OwnerSidebar';
import { useNavigate } from 'react-router-dom';

const AppointmentCard = ({ petName, service, date, time, status, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden bg-slate-100 flex-shrink-0">
      <img src={image} alt={petName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="text-xl font-black text-[#001B3D]">{service}</h4>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-slate-500 font-bold flex items-center gap-2">
        For <span className="text-[#001B3D]">{petName}</span>
      </p>
      
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
          <Clock className="w-4 h-4" />
          {time}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <button className="px-6 py-3 rounded-2xl bg-slate-50 text-slate-600 font-black text-sm hover:bg-slate-100 transition-all">
        Reschedule
      </button>
      <button className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

export default function OwnerAppointmentsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <OwnerSidebar activePage="appointments" />

      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 ml-72 p-12 pb-24"
      >
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-black text-[#001B3D] mb-2 tracking-tight">Appointments</h1>
            <p className="text-slate-500 font-medium text-lg">Manage your pet's health sessions and bookings.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[#001B3D] transition-colors" />
              <input 
                type="text" 
                placeholder="Search appointments..."
                className="bg-white border-none rounded-[24px] pl-14 pr-8 py-5 text-base font-bold shadow-sm focus:ring-4 focus:ring-[#001B3D]/5 transition-all w-80 placeholder:text-slate-300"
              />
            </div>
            <button className="w-14 h-14 rounded-[24px] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#001B3D] transition-all relative group">
              <Bell className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <div className="absolute top-4 right-4 w-3 h-3 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: Booking CTA */}
          <div className="col-span-12 lg:col-span-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/owner-booking')}
              className="bg-[#001B3D] rounded-[3.5rem] p-10 text-white cursor-pointer shadow-2xl shadow-blue-900/40 relative overflow-hidden group h-full flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Plus className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-4 leading-tight">Book New Appointment</h3>
                <p className="text-white/60 font-medium text-lg leading-relaxed">Schedule a session with our expert veterinarians in just a few clicks.</p>
              </div>
              
              <div className="mt-12 flex items-center gap-3 font-black text-xl group-hover:gap-5 transition-all relative z-10">
                Start Booking
                <ChevronRight className="w-6 h-6" />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px]" />
            </motion.div>
          </div>

          {/* Right Column: Appointment List */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {['Upcoming', 'Past', 'Cancelled'].map((tab, i) => (
                  <button 
                    key={i}
                    className={`px-8 py-4 rounded-[20px] text-sm font-black transition-all ${
                      i === 0 
                        ? 'bg-white text-[#001B3D] shadow-sm border border-slate-100' 
                        : 'text-slate-400 hover:text-[#001B3D]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-slate-400 font-black hover:text-[#001B3D] transition-colors">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </div>

            <div className="space-y-6">
              <AppointmentCard 
                petName="Max" 
                service="General Checkup" 
                date="Oct 24, 2023" 
                time="10:00 AM" 
                status="Confirmed" 
                image="https://picsum.photos/seed/dog1/200/200"
              />
              <AppointmentCard 
                petName="Luna" 
                service="Vaccination" 
                date="Nov 02, 2023" 
                time="02:30 PM" 
                status="Pending" 
                image="https://picsum.photos/seed/cat1/200/200"
              />
              <AppointmentCard 
                petName="Charlie" 
                service="Dental Cleaning" 
                date="Nov 15, 2023" 
                time="11:15 AM" 
                status="Confirmed" 
                image="https://picsum.photos/seed/dog2/200/200"
              />
            </div>

            {/* Empty State / More Info */}
            <div className="mt-12 p-10 rounded-[3rem] bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-slate-300" />
              </div>
              <h4 className="text-xl font-black text-[#001B3D] mb-2">Need help with your bookings?</h4>
              <p className="text-slate-500 font-medium max-w-md">Our support team is available 24/7 to assist you with any scheduling issues or questions.</p>
              <button className="mt-8 text-[#001B3D] font-black hover:underline">Contact Support</button>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
