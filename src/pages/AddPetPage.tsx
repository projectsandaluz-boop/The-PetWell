/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Camera,
  Check,
  Info,
  Heart,
  Calendar,
  Activity
} from "lucide-react";

export default function AddPetPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    type: "Dog",
    breed: "",
    age: "",
    gender: "Male",
    weight: "",
    about: ""
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => step > 1 ? setStep(step - 1) : navigate(-1);

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex flex-col">
      {/* Header */}
      <header className="bg-[#001B3D] text-white px-12 py-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <button 
            onClick={handleBack} 
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-3xl font-extrabold tracking-tighter text-white">PetWell</span>
        </div>
        <div className="text-sm font-bold text-white/60 uppercase tracking-[0.2em]">Add New Guardian</div>
      </header>

      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full space-y-12 pb-32">
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4 max-w-md mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 h-2 rounded-full bg-white overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: step >= s ? '100%' : '0%' }}
                className="h-full bg-[#001B3D]"
              />
            </div>
          ))}
        </div>

        {/* Form Section */}
        <section className="bg-white p-12 rounded-[4rem] shadow-xl shadow-blue-900/5 border border-surface-container-high">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="text-center space-y-2">
                  <h2 className="text-4xl font-black text-[#001B3D] tracking-tight">Basic Information</h2>
                  <p className="text-[#8E9299] font-medium">Let's start with the basics of your pet.</p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="w-40 h-40 rounded-[2.5rem] bg-[#F0F4FF] border-4 border-dashed border-[#001B3D]/10 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white hover:border-[#001B3D]/20 transition-all">
                    <Camera className="w-10 h-10 text-[#001B3D] opacity-40 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#001B3D] opacity-40">Upload Photo</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Pet Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Cooper"
                      className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Pet Type</label>
                    <select 
                      className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all appearance-none"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleNext}
                  className="w-full bg-[#001B3D] text-white font-black py-6 rounded-[2rem] hover:opacity-95 transition-all active:scale-95 shadow-2xl shadow-blue-900/20 text-xl"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="text-center space-y-2">
                  <h2 className="text-4xl font-black text-[#001B3D] tracking-tight">Physical Details</h2>
                  <p className="text-[#8E9299] font-medium">Tell us more about their appearance and age.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Breed</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Beagle"
                      className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                      value={formData.breed}
                      onChange={(e) => setFormData({...formData, breed: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Age</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 4 years"
                      className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Gender</label>
                    <div className="flex gap-4">
                      {['Male', 'Female'].map((g) => (
                        <button
                          key={g}
                          onClick={() => setFormData({...formData, gender: g})}
                          className={`flex-1 py-5 rounded-2xl font-bold border-2 transition-all ${
                            formData.gender === g 
                              ? 'bg-[#001B3D] text-white border-[#001B3D]' 
                              : 'bg-white text-[#001B3D] border-[#F0F4FF]'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">Weight (kg)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 12"
                      className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleBack}
                    className="flex-1 bg-[#F0F4FF] text-[#001B3D] font-black py-6 rounded-[2rem] hover:bg-[#E5E7EB] transition-all active:scale-95 text-xl"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex-[2] bg-[#001B3D] text-white font-black py-6 rounded-[2rem] hover:opacity-95 transition-all active:scale-95 shadow-2xl shadow-blue-900/20 text-xl"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="text-center space-y-2">
                  <h2 className="text-4xl font-black text-[#001B3D] tracking-tight">Final Touches</h2>
                  <p className="text-[#8E9299] font-medium">Anything else we should know about your guardian?</p>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-[#8E9299] uppercase tracking-widest">About / Special Notes</label>
                  <textarea 
                    rows={6}
                    placeholder="e.g. Loves belly rubs, allergic to chicken..."
                    className="w-full bg-[#F0F4FF] border-none rounded-2xl px-6 py-5 text-[#001B3D] font-bold focus:ring-2 focus:ring-[#001B3D]/20 transition-all resize-none"
                    value={formData.about}
                    onChange={(e) => setFormData({...formData, about: e.target.value})}
                  />
                </div>

                <div className="bg-[#F0F4FF] p-8 rounded-3xl flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-[#001B3D]" />
                  </div>
                  <p className="text-sm text-[#001B3D] font-medium leading-relaxed">
                    By adding this pet, you'll be able to track their health records, book specialized appointments, and receive personalized care tips.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleBack}
                    className="flex-1 bg-[#F0F4FF] text-[#001B3D] font-black py-6 rounded-[2rem] hover:bg-[#E5E7EB] transition-all active:scale-95 text-xl"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => navigate("/owner-pet-profiles")}
                    className="flex-[2] bg-[#001B3D] text-white font-black py-6 rounded-[2rem] hover:opacity-95 transition-all active:scale-95 shadow-2xl shadow-blue-900/20 text-xl flex items-center justify-center gap-3"
                  >
                    <Check className="w-6 h-6 stroke-[3px]" />
                    Complete Profile
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
