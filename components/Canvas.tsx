"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";

export default function Canvas({ isDark }: { isDark: boolean }) {
  const { desk, chair, monitor, accessories } = useWorkspaceStore();

  return (
    <div
      className={`relative w-120 h-100 overflow-hidden transition-all duration-500 ${
        isDark ? "brightness-75 contrast-110 saturate-75" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        {desk && (
          <motion.div
            key={desk.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="relative">
              <Image
                src={desk.image}
                alt={desk.name}
                width={600}
                height={400}
                className="relative z-1"
              />

              <AnimatePresence mode="wait">
                {monitor && (
                  <motion.div
                    key={monitor.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-2"
                    style={{
                      top: monitor.position?.top,
                      left: monitor.position?.left,
                    }}
                  >
                    <Image
                      src={monitor.image}
                      alt={monitor.name}
                      width={monitor.size}
                      height={monitor.size}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {accessories.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="absolute"
                    style={{
                      top: item.position?.top,
                      left: item.position?.left,
                      right: item.position?.right,
                      zIndex: item.position?.zIndex,
                    }}
                  >
                    {isDark && item.id === "lamp-1" && (
                      <div
                        className="absolute pointer-events-none blur-2xl"
                        style={{
                          width: item.size,
                          height: item.size,
                          background:
                            "radial-gradient(circle, rgba(255, 220, 120, 0.8) 0%, rgba(255, 180, 80, 0.4) 40%, transparent 70%)",
                          transform: "scale(1.8)",
                          zIndex: -1,
                        }}
                      />
                    )}
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={item.size || 100}
                      height={item.size || 100}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {chair && (
          <motion.div
            key={chair.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          >
            <Image
              src={chair.image}
              alt={chair.name}
              width={chair.size}
              height={chair.size}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
