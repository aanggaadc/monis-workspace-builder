"use client";

import { useState } from "react";
import { desks, chairs, accessories, monitors } from "@/data/products";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";
import Image from "next/image";
import clsx from "clsx";

import { Product } from "@/types/workspace";

type Tab = "desk" | "chair" | "monitor" | "accessory";

export default function ItemSelector() {
  const [activeTab, setActiveTab] = useState<Tab>("desk");

  const {
    setDesk,
    setChair,
    setMonitor,
    toggleAccessory,
    desk,
    chair,
    monitor,
    accessories: accessoriesState,
  } = useWorkspaceStore();

  const selectedMap = {
    desk,
    chair,
    monitor,
  };

  const isSelected = (item: Product) => {
    if (item.type === "accessory") {
      return accessoriesState.some((a) => a.id === item.id);
    }

    return selectedMap[item.type]?.id === item.id;
  };

  const getItems = () => {
    switch (activeTab) {
      case "desk":
        return desks;
      case "chair":
        return chairs;
      case "monitor":
        return monitors;
      case "accessory":
        return accessories;
    }
  };

  const handleSelect = (item: Product) => {
    if ((item.type === "monitor" || item.type === "accessory") && !desk) return;

    if (item.type === "desk") setDesk(item);
    if (item.type === "chair") setChair(item);
    if (item.type === "monitor") setMonitor(item);
    if (item.type === "accessory") toggleAccessory(item);
  };

  return (
    <div
      className="p-4 rounded-xl 
    bg-black/25 backdrop-blur-md 
    border border-white/20 
    shadow-lg text-white"
    >
      <div className="flex gap-2 mb-4">
        {(["desk", "chair", "monitor", "accessory"] as Tab[]).map((tab) => {
          const isDisabled =
            (tab === "monitor" || tab === "accessory") && !desk;

          return (
            <>
              <button
                key={tab}
                onClick={() => !isDisabled && setActiveTab(tab)}
                disabled={isDisabled}
                className={clsx(
                  "px-3 py-1 rounded-md text-sm transition cursor-pointer capitalize",
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-white/20 hover:bg-white/30",
                  isDisabled && "opacity-40 cursor-not-allowed",
                )}
              >
                {tab}
              </button>
            </>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {getItems().map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className={clsx(
              "border border-white/40 rounded cursor-pointer hover:shadow flex flex-col justify-between items-center p-2",
              isSelected(item) && "bg-white/30 border-white",
            )}
          >
            <div>
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-center mt-2">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
