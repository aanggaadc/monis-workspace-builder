"use client";

import { useState } from "react";
import Canvas from "@/components/Canvas";
import ItemSelector from "@/components/ItemSelector";
import SummaryPanel from "@/components/SummaryPanel";

export default function BuilderPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`w-full relative h-screen overflow-hidden bg-cover bg-position-[center_bottom] transition-all duration-500 ${
        isDark ? "bg-[url('/base-bg-dark.png')]" : "bg-[url('/base-bg.png')]"
      }`}
    >
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="cursor-pointer absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-black/25 backdrop-blur-md  text-white border border-white/20 hover:bg-white/20 transition"
      >
        {isDark ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div className="absolute top-6 left-6 z-50">
        <ItemSelector />
      </div>

      <div className="absolute bottom-55 2xl:bottom-65 left-1/2 -translate-x-1/2">
        <Canvas isDark={isDark} />
      </div>

      <div className="absolute bottom-6 right-6 z-50">
        <SummaryPanel />
      </div>
    </div>
  );
}
