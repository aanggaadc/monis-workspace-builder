"use client";

import { useState } from "react";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";

export default function SummaryPanel() {
  const { desk, chair, accessories, monitor, reset } = useWorkspaceStore();
  const [isOpen, setIsOpen] = useState(false);

  const items = [desk, chair, monitor, ...accessories].filter(Boolean);
  const total = items.reduce((acc, item) => acc + item!.price, 0);

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        md:static md:min-w-65
      "
    >
      <div
        className="
          p-4 rounded-t-xl md:rounded-xl
          bg-black/40 backdrop-blur-md
          border border-white/20
          shadow-lg text-white
          flex flex-col
        "
      >
        <div
          className="flex justify-between items-center cursor-pointer md:cursor-default"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h2 className="text-lg font-semibold">Your Setup</h2>

          <div className="md:hidden">
            <svg
              className={`
              w-5 h-5 transition-transform duration-300 opacity-80
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div
          className={`
            transition-all duration-300 overflow-hidden
            ${isOpen ? "max-h-[70vh] mt-4" : "max-h-0"}
            md:max-h-[70vh] md:mt-4
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[40vh]">
              {items.length === 0 && (
                <p className="text-sm text-white">No items selected</p>
              )}

              {items.map((item) => (
                <div key={item!.id} className="flex justify-between text-sm">
                  <span>{item!.name}</span>
                  <span>${item!.price}</span>
                </div>
              ))}
            </div>

            {/* FOOTER (sticky) */}
            <div className="sticky bottom-0 pt-4 mt-4 border-t border-white/20">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button
                className="w-full mt-4 bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition disabled:opacity-50"
                disabled={items.length === 0}
                onClick={() => {
                  alert("Setup rented! 🚀");
                  reset();
                  setIsOpen(false);
                }}
              >
                Rent Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
