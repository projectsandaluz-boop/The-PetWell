import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Camera,
  ChevronRight,
  PawPrint,
  BarChart3,
  Edit2
} from 'lucide-react';
import OwnerSidebar from '../../components/OwnerSidebar';
import { useNavigate } from 'react-router-dom';

export default function OwnerProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <OwnerSidebar activePage="profile" />

      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 ml-72 p-12 pb-24"
      >
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="relative group">
              <div className="w-48 h-48 rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl ring-8 ring-[#001B3D]/5 transition-transform group-hover:scale-105 duration-500">
                <img 
                  src="https://picsum.photos/seed/sarah/400/400" 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="absolute bottom-2 right-2 w-14 h-14 bg-[#001B3D] text-white rounded-[1.5rem] flex items-center justify-center shadow-xl hover:scale-110 transition-all border-4 border-white group-hover:rotate-12">
                <Camera className="w-7 h-7" />
              </button>
            </div>
            <h1 className="text-5xl font-black text-[#001B3D] mt-8 mb-3 tracking-tight">Sarah Jenkins</h1>
            <span className="px-8 py-2.5 rounded-full bg-blue-50 text-[#001B3D] text-sm font-black uppercase tracking-[0.2em] shadow-sm">Pet Guardian</span>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {/* Personal Information */}
            <section className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-[#001B3D] shadow-inner">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-[#001B3D] tracking-tight">Personal Information</h3>
                <button className="ml-auto px-6 py-3 rounded-2xl bg-slate-50 text-slate-400 font-black text-sm hover:text-[#001B3D] hover:bg-white hover:shadow-md transition-all flex items-center gap-2">
                  <Edit2 className="w-4 h-4" />
                  Edit Details
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <InfoItem icon={User} label="Full Name" value="Sarah Jenkins" />
                <InfoItem icon={Calendar} label="Age" value="28 Years" />
                <InfoItem icon={MapPin} label="Address" value="12 Palm Street, Colombo 03" />
                <InfoItem icon={Phone} label="Contact" value="+94 77 123 4567" />
                <InfoItem icon={Mail} label="Email" value="sarah.jenkins@petwell.lk" />
              </div>
            </section>

            {/* My Pets */}
            <section className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-[1.5rem] bg-amber-50 flex items-center justify-center text-[#001B3D] shadow-inner">
                  <PawPrint className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-[#001B3D] tracking-tight">My Pets (2)</h3>
                <button 
                  onClick={() => navigate('/owner-pet-profiles')}
                  className="ml-auto text-sm font-black text-[#001B3D] hover:underline flex items-center gap-2"
                >
                  Manage Pets <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <PetListItem 
                  name="Cooper" 
                  type="Dog" 
                  breed="Beagle" 
                  age="4 yrs" 
                  image="https://picsum.photos/seed/beagle/400/400" 
                />
                <PetListItem 
                  name="Luna" 
                  type="Cat" 
                  breed="Russian Blue" 
                  age="2 yrs" 
                  image="https://picsum.photos/seed/cat/400/400" 
                />
              </div>
            </section>

            {/* Account Stats */}
            <section className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-[1.5rem] bg-emerald-50 flex items-center justify-center text-[#001B3D] shadow-inner">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-[#001B3D] tracking-tight">Account Stats</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatItem label="Total Pets" value="2" color="text-blue-600" bg="bg-blue-50/50" />
                <StatItem label="Appointments" value="5" color="text-amber-600" bg="bg-amber-50/50" />
                <StatItem label="Guardian Rating" value="4.8" color="text-emerald-600" bg="bg-emerald-50/50" />
              </div>
            </section>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

const InfoItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#001B3D] group-hover:text-white transition-all duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-lg font-bold text-[#001B3D]">{value}</p>
    </div>
  </div>
);

const PetListItem = ({ name, type, breed, age, image }: any) => (
  <div className="flex items-center justify-between p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <div className="flex items-center gap-6">
      <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h4 className="text-xl font-black text-[#001B3D] mb-1">{name}</h4>
        <p className="text-sm text-slate-400 font-bold">{type} • {breed} • {age}</p>
      </div>
    </div>
    <span className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
      type === 'Dog' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
    }`}>
      {type}
    </span>
  </div>
);

const StatItem = ({ label, value, color, bg }: any) => (
  <div className={`text-center p-10 rounded-[3rem] ${bg} border border-white shadow-sm hover:shadow-md transition-all duration-300`}>
    <p className={`text-5xl font-black mb-3 tracking-tighter ${color}`}>{value}</p>
    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
  </div>
);
