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
  Clock
} from "lucide-react";

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
      <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md w-full flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-[#22C55E] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-100">
            <Check className="w-10 h-10 text-white stroke-[3px]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#001B3D] mb-4">Booking Confirmed!</h2>
          <p className="text-[#8E9299] font-medium text-lg mb-1">
            {selectedService.name} at {selectedTime}
          </p>
          <p className="text-[#22C55E] font-bold text-lg mb-10">
            Paid via {paymentMethod === 'card' ? 'Card' : paymentMethod === 'cash' ? 'Cash' : 'Online Banking'}
          </p>
          
          <button 
            onClick={() => setIsConfirmed(false)}
            className="bg-[#003366] text-white font-bold py-4 px-12 rounded-2xl hover:bg-[#002244] transition-all active:scale-95 shadow-lg shadow-blue-900/20"
          >
            Book Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex flex-col">
      
      {/* Header */}
      <header className="bg-[#001B3D] text-white px-12 py-6 flex items-center justify-between sticky top-0 z-30">
        <button 
          onClick={() => navigate(-1)} 
          className="font-bold text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
        >
          BACK
        </button>
        <span className="text-3xl font-extrabold tracking-tighter text-white">PetWell</span>
        <div className="text-sm font-bold text-white/60 uppercase tracking-[0.2em]">SARAH J.</div>
      </header>

      <main className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full space-y-12 pb-32">
        
        {/* Page Title & Timer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-[#001B3D] tracking-tight">Book Appointment</h1>
            <p className="text-[#8E9299] text-xl font-medium">Pick a service, slot & pay</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-3xl shadow-lg border border-surface-container-high flex items-center gap-4">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Session Expires In</p>
              <p className="text-xl font-black text-[#001B3D] tabular-nums">{formatTime(timeLeft)}</p>
            </div>
          </div>
        </div>

        {/* Select Date Section */}
        <section className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-surface-container-high space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#001B3D]">Select Date</h3>
            <div className="flex items-center gap-2 text-[#8E9299]">
              <CalendarIcon className="w-5 h-5" />
              <span className="font-bold text-sm">March 2026</span>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {dates.map((d) => (
              <button
                key={d.full}
                onClick={() => setSelectedDate(d.full)}
                className={`flex-shrink-0 w-24 py-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-1 ${
                  selectedDate === d.full 
                    ? 'border-[#001B3D] bg-[#001B3D] text-white shadow-lg shadow-blue-900/20' 
                    : 'border-surface-container-high bg-white text-primary hover:border-[#001B3D]/20'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${selectedDate === d.full ? 'text-white/60' : 'text-secondary'}`}>{d.day}</span>
                <span className="text-2xl font-black">{d.date}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedDate === d.full ? 'text-white/60' : 'text-secondary'}`}>{d.month}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Select Service Card */}
        <section className="bg-white p-12 rounded-[4rem] shadow-xl shadow-blue-900/5 border border-surface-container-high space-y-10">
          <h3 className="text-2xl font-bold text-[#001B3D]">Select Service</h3>
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => setSelectedService(service)}
                className={`w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                  selectedService.name === service.name 
                    ? 'border-[#001B3D] bg-[#F0F4FF]' 
                    : 'border-surface-container-high bg-white hover:border-[#001B3D]/20'
                }`}
              >
                <div className="flex items-center gap-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedService.name === service.name ? 'bg-white' : 'bg-surface-container-low'}`}>
                    <service.icon className={`w-8 h-8 ${selectedService.name === service.name ? service.color : 'text-secondary'}`} />
                  </div>
                  <span className={`font-bold text-xl ${selectedService.name === service.name ? 'text-[#001B3D]' : 'text-primary'}`}>
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`font-bold text-xl ${selectedService.name === service.name ? 'text-[#001B3D]' : 'text-secondary'}`}>
                    Rs. {service.price}
                  </span>
                  {selectedService.name === service.name && (
                    <div className="w-7 h-7 bg-[#001B3D] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white stroke-[3px]" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Available Time Slots */}
          <section className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-surface-container-high">
            <h3 className="text-xl font-bold text-[#001B3D] mb-8">
              Available Time Slots
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {timeSlots.map((slot, i) => (
                <button
                  key={i}
                  disabled={slot.disabled}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`py-5 px-4 rounded-[1.5rem] font-bold text-base transition-all border-2 ${
                    selectedTime === slot.time 
                      ? 'bg-[#001B3D] text-white border-[#001B3D] shadow-lg shadow-blue-900/20' 
                      : slot.disabled 
                        ? 'bg-[#F5F5F5] text-[#8E9299]/40 border-transparent cursor-not-allowed' 
                        : 'bg-white text-[#001B3D] border-[#E5E7EB] hover:border-[#001B3D]/20'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-surface-container-high space-y-8">
            <h3 className="text-xl font-bold text-[#001B3D]">
              Payment Method
            </h3>
            
            <div className="space-y-4">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full flex items-center gap-6 p-5 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-[#001B3D] bg-[#F0F4FF]' 
                    : 'border-surface-container-high bg-white hover:border-[#001B3D]/20'
                }`}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#001B3D] bg-[#001B3D]' : 'border-surface-container-high'}`}>
                  {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
                <span className="font-bold text-base text-[#001B3D]">Credit / Debit Card</span>
              </button>
              <button
                onClick={() => setPaymentMethod('cash')}
                className={`w-full flex items-center gap-6 p-5 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'cash' 
                    ? 'border-[#001B3D] bg-[#F0F4FF]' 
                    : 'border-surface-container-high bg-white hover:border-[#001B3D]/20'
                }`}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-[#001B3D] bg-[#001B3D]' : 'border-surface-container-high'}`}>
                  {paymentMethod === 'cash' && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
                <span className="font-bold text-base text-[#001B3D]">Cash on Arrival</span>
              </button>
            </div>

            {paymentMethod === 'card' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6 pt-6 border-t border-surface-container-high"
              >
                <div className="space-y-3">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-5 text-primary font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest">Expiry MM/YY</label>
                    <input 
                      type="text" 
                      placeholder="MM / YY" 
                      className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-5 text-primary font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest">CVV</label>
                    <input 
                      type="text" 
                      placeholder="000" 
                      className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-5 text-primary font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </section>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleConfirm}
          className="w-full bg-[#001B3D] text-white font-bold py-6 rounded-[2rem] hover:opacity-95 transition-all active:scale-[0.99] shadow-2xl shadow-blue-900/20 text-xl"
        >
          Pay & Confirm
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-container-high py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-extrabold tracking-tighter text-primary mb-2">PetWell</span>
            <p className="text-xs text-secondary">© 2024 PetWell. The Empathetic Guardian. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-secondary uppercase tracking-widest">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Cookie Settings</button>
            <button className="hover:text-primary transition-colors">Accessibility</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
