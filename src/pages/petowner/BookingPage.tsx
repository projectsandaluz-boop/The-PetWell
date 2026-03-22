/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Scissors, 
  Stethoscope, 
  Target, 
  Home, 
  Bath, 
  Check,
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft
} from "lucide-react";
import OwnerSidebar from "../../components/OwnerSidebar";

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState({ name: "Grooming", price: "1,500" });
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  const services = [
    { name: "Grooming", price: "1,500", icon: Scissors, color: "text-red-500" },
    { name: "Vet Checkup", price: "2,000", icon: Stethoscope, color: "text-blue-500" },
    { name: "Training", price: "1,800", icon: Target, color: "text-blue-400" },
    { name: "Boarding", price: "2,500", icon: Home, color: "text-orange-500" },
    { name: "Pet Spa", price: "3,000", icon: Bath, color: "text-sky-400" },
  ];

  const timeSlots = [
    { time: "9:00 AM", disabled: false },
    { time: "10:00 AM", disabled: false },
    { time: "11:00 AM", disabled: true },
    { time: "1:00 PM", disabled: false },
    { time: "2:00 PM", disabled: true },
    { time: "3:00 PM", disabled: false },
    { time: "4:00 PM", disabled: false },
  ];

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex">
        <OwnerSidebar activePage="appointments" />
        <main className="flex-1 ml-72 flex items-center justify-center p-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-12 rounded-[40px] shadow-sm text-center max-w-md w-full flex flex-col items-center border border-slate-100"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
              <Check className="w-10 h-10 text-emerald-500 stroke-[3px]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#001B3D] mb-4">Booking Confirmed!</h2>
            <p className="text-slate-500 font-medium text-lg mb-1">
              {selectedService.name} at {selectedTime}
            </p>
            <p className="text-emerald-500 font-bold text-lg mb-10">
              Paid via {paymentMethod === 'card' ? 'Card' : paymentMethod === 'cash' ? 'Cash' : 'Online Banking'}
            </p>
            
            <button 
              onClick={() => setIsConfirmed(false)}
              className="bg-[#001B3D] text-white font-bold py-4 px-12 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20"
            >
              Book Another
            </button>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <OwnerSidebar activePage="appointments" />
      
      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 ml-72 p-10 pb-24"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)} 
                className="w-10 h-10 rounded-full bg-white text-slate-400 hover:text-[#001B3D] shadow-sm transition-all flex items-center justify-center border border-slate-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-black text-[#001B3D] mb-0.5 tracking-tight">Book Appointment</h1>
                <p className="text-slate-500 font-medium text-sm">Pick a service, slot & pay</p>
              </div>
            </div>
            
            <div className="bg-white px-6 py-3 rounded-[24px] shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-0.5">Session Expires In</p>
                <p className="text-xl font-black text-[#001B3D] tabular-nums leading-none">{formatTime(timeLeft)}</p>
              </div>
            </div>
          </header>

          <div className="space-y-8">
            {/* Select Date Section */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black text-[#001B3D]">Select Date</h3>
                <div className="flex items-center gap-2 text-slate-500">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="font-bold text-sm">March 2026</span>
                </div>
              </div>
              
              <div className="flex justify-between gap-3">
                {dates.map((d) => (
                  <button
                    key={d.full}
                    onClick={() => setSelectedDate(d.full)}
                    className={`flex-1 max-w-[100px] py-6 rounded-[24px] transition-all flex flex-col items-center justify-center gap-1.5 ${
                      selectedDate === d.full 
                        ? 'bg-[#001B3D] text-white shadow-xl shadow-blue-900/30' 
                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${selectedDate === d.full ? 'text-white/60' : 'text-slate-400'}`}>
                      {d.day}
                    </span>
                    <span className="text-2xl font-black leading-none">
                      {d.date}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${selectedDate === d.full ? 'text-white/60' : 'text-slate-400'}`}>
                      {d.month}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Select Service Section */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
              <h3 className="text-lg font-black text-[#001B3D] mb-8">Select Service</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service)}
                    className={`w-full flex items-center justify-between p-4 rounded-[24px] border-2 transition-all ${
                      selectedService.name === service.name 
                        ? 'border-[#001B3D] bg-slate-50' 
                        : 'border-transparent bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                        <service.icon className={`w-6 h-6 ${selectedService.name === service.name ? service.color : 'text-slate-300'}`} />
                      </div>
                      <span className="font-black text-lg text-[#001B3D]">
                        {service.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-black text-lg text-[#001B3D]">
                        Rs. {service.price}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        selectedService.name === service.name 
                          ? 'bg-[#001B3D]' 
                          : 'bg-slate-200'
                      }`}>
                        {selectedService.name === service.name && (
                          <Check className="w-3 h-3 text-white stroke-[4px]" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Available Time Slots */}
              <section className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                <h3 className="text-lg font-black text-[#001B3D] mb-8">
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot, i) => (
                    <button
                      key={i}
                      disabled={slot.disabled}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`py-3 px-2 rounded-xl font-black text-sm transition-all border-2 ${
                        selectedTime === slot.time 
                          ? 'bg-[#001B3D] text-white border-[#001B3D] shadow-lg shadow-blue-900/20' 
                          : slot.disabled 
                            ? 'bg-slate-50 text-slate-200 border-transparent cursor-not-allowed' 
                            : 'bg-slate-50 text-[#001B3D] border-transparent hover:border-[#001B3D]/20'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                <h3 className="text-lg font-black text-[#001B3D] mb-8">
                  Payment Method
                </h3>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full flex items-center gap-4 p-4 rounded-[24px] border-2 transition-all ${
                      paymentMethod === 'card' 
                        ? 'border-[#001B3D] bg-slate-50' 
                        : 'border-transparent bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#001B3D] bg-[#001B3D]' : 'border-slate-300'}`}>
                      {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="font-black text-sm text-[#001B3D]">Credit / Debit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`w-full flex items-center gap-4 p-4 rounded-[24px] border-2 transition-all ${
                      paymentMethod === 'cash' 
                        ? 'border-[#001B3D] bg-slate-50' 
                        : 'border-transparent bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-[#001B3D] bg-[#001B3D]' : 'border-slate-300'}`}>
                      {paymentMethod === 'cash' && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="font-black text-sm text-[#001B3D]">Cash on Arrival</span>
                  </button>
                </div>

                <AnimatePresence>
                  {paymentMethod === 'card' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-6 mt-6 border-t border-slate-100"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="0000 0000 0000 0000" 
                          className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-base font-bold focus:ring-4 focus:ring-[#001B3D]/5 transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Expiry MM/YY</label>
                          <input 
                            type="text" 
                            placeholder="MM / YY" 
                            className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-base font-bold focus:ring-4 focus:ring-[#001B3D]/5 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">CVV</label>
                          <input 
                            type="text" 
                            placeholder="000" 
                            className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-base font-bold focus:ring-4 focus:ring-[#001B3D]/5 transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </div>

            {/* Action Button */}
            <button 
              onClick={handleConfirm}
              className="w-full bg-[#001B3D] text-white font-black text-lg py-5 rounded-[24px] hover:bg-[#002b61] transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              Pay & Confirm
              <ChevronLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
