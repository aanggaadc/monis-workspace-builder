"use client";

import { useWorkspaceStore } from "@/store/useWorkspaceStore";

export default function SummaryPanel() {
  const { desk, chair, accessories, monitor, reset } = useWorkspaceStore();

  const items = [desk, chair, monitor, ...accessories].filter(Boolean);

  const total = items.reduce((acc, item) => acc + item!.price, 0);

  return (
    <div
      className="min-w-65 p-4 rounded-xl 
    bg-black/20 backdrop-blur-md 
      border border-white/20 
      shadow-lg text-white flex flex-col"
    >
      <h2 className="text-lg font-semibold mb-4">Your Setup</h2>

      <div className="flex-1 space-y-2 overflow-auto">
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

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-semibold text-white">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button
          className="w-full mt-4 bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition"
          disabled={items.length === 0}
          onClick={() => {
            alert("Setup rented! 🚀");
            reset();
          }}
        >
          Rent Setup
        </button>
      </div>
    </div>
  );
}
