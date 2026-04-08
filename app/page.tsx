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
        className="
        absolute top-3 sm:top-6 right-3 md:top-6 md:right-6 z-99
        flex items-center justify-center
        w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2
        rounded-full
        bg-black/25 backdrop-blur-md
        text-white border border-white/20
        hover:bg-white/20 transition
        active:scale-90
      "
      >
        <span className="text-lg md:hidden">{isDark ? "🌙" : "☀️"}</span>

        <span className="hidden md:block">
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </span>
      </button>

      <div className="absolute top-9 sm:top-6 left-6 z-50">
        <ItemSelector />
      </div>

      <div className="absolute bottom-42 md:bottom-55 2xl:bottom-65 left-1/2 -translate-x-1/2">
        <Canvas isDark={isDark} />
      </div>

      <div className="absolute w-[85%] bottom-6 right-1/2 translate-x-1/2 md:translate-none md:w-fit md:right-6 z-50">
        <SummaryPanel />
      </div>
    </div>
  );
}
