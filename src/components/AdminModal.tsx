/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, AlertCircle, Trash2 } from "lucide-react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "delete" | "error" | "logout";
  title: string;
  message: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function AdminModal({
  isOpen,
  onClose,
  type,
  title,
  message,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel"
}: AdminModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#001B3D]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-10 text-center">
              <div className="flex justify-center mb-6">
                {type === "success" && (
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                )}
                {type === "delete" && (
                  <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                    <Trash2 className="w-10 h-10" />
                  </div>
                )}
                {type === "logout" && (
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <LogOut className="w-10 h-10" />
                  </div>
                )}
                {type === "error" && (
                  <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-extrabold text-[#001B3D] mb-3 tracking-tight">{title}</h3>
              <p className="text-slate-500 font-medium mb-10">{message}</p>

              <div className="flex gap-4">
                {(type === "delete" || type === "logout") ? (
                  <>
                    <button
                      onClick={onClose}
                      className="flex-1 bg-slate-50 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
                    >
                      {cancelText}
                    </button>
                    <button
                      onClick={onConfirm}
                      className={`flex-1 text-white font-bold py-4 rounded-2xl transition-all shadow-lg ${type === 'logout' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20' : 'bg-rose-600 hover:bg-rose-700 shadow-rose-900/20'}`}
                    >
                      {confirmText}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onClose}
                    className="w-full bg-[#001B3D] text-white font-bold py-4 rounded-2xl hover:bg-[#002b61] transition-all shadow-lg shadow-blue-900/20"
                  >
                    Got it
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-300 hover:text-slate-500 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
