/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Video, Play } from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";

const cctvFeeds = [
  { id: "play-area", title: "Play Area" },
  { id: "sleeping-room", title: "Sleeping Room" },
  { id: "entrance", title: "Entrance" },
];

export default function AdminCCTVPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <AdminSidebar activePage="cctv" />

      <motion.main 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 ml-72 p-10 pb-24"
      >
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#001B3D] mb-1 tracking-tight flex items-center gap-3">
              <Video className="w-8 h-8 text-[#001B3D]" />
              CCTV
            </h1>
            <p className="text-slate-500 font-medium">Live monitoring of all pet care areas</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cctvFeeds.map((feed) => (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6"
            >
              <h2 className="text-xl font-bold text-[#001B3D] mb-4">{feed.title}</h2>
              <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/50" />
                </div>
                <div className="absolute bottom-4 left-4 text-white/80 font-mono text-sm">
                  0:00
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}
