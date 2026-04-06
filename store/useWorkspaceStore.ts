import { create } from "zustand";
import { Product, WorkspaceState } from "@/types/workspace";

interface Actions {
  setDesk: (desk: Product) => void;
  setChair: (chair: Product) => void;
  setMonitor: (monitor: Product) => void;
  toggleAccessory: (item: Product) => void;
  removeAccessory: (id: string) => void;
  reset: () => void;
}

export const useWorkspaceStore = create<WorkspaceState & Actions>((set) => ({
  desk: null,
  chair: null,
  monitor: null, // ✅ NEW
  accessories: [],

  setDesk: (desk) => set({ desk }),
  setChair: (chair) => set({ chair }),
  setMonitor: (monitor) => set({ monitor }),

  toggleAccessory: (item: Product) =>
    set((state) => {
      const exists = state.accessories.find((a) => a.id === item.id);

      if (exists) {
        return {
          accessories: state.accessories.filter((a) => a.id !== item.id),
        };
      }

      return {
        accessories: [...state.accessories, item],
      };
    }),

  removeAccessory: (id) =>
    set((state) => ({
      accessories: state.accessories.filter((a) => a.id !== id),
    })),

  reset: () =>
    set({
      desk: null,
      chair: null,
      monitor: null,
      accessories: [],
    }),
}));
