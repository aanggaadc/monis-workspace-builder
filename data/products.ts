import { Product } from "@/types/workspace";

export const desks: Product[] = [
  {
    id: "desk-1",
    name: "Minimal Desk",
    type: "desk",
    image: "/desk-regular-test.png",
    price: 100,
  },
  {
    id: "desk-2",
    name: "Gaming Desk",
    type: "desk",
    image: "/gaming-desk.png",
    price: 200,
  },
];

export const chairs: Product[] = [
  {
    id: "chair-1",
    name: "Ergo Chair",
    type: "chair",
    image: "/regular-chair.png",
    price: 80,
    size: 130,
  },
  {
    id: "chair-2",
    name: "Gaming Chair",
    type: "chair",
    image: "/chair-gaming.png",
    price: 120,
    size: 120,
  },
];

export const monitors: Product[] = [
  {
    id: "monitor-1",
    name: "Regular Monitor",
    type: "monitor",
    image: "/monitor-1.png",
    size: 150,
    price: 200,
    position: { top: -80, left: 170 },
  },
  {
    id: "monitor-2",
    name: "Gaming Monitor",
    type: "monitor",
    image: "/monitor-2.png",
    size: 290,
    price: 400,
    position: { top: -80, left: 120 },
  },
];

export const accessories: Product[] = [
  {
    id: "lamp-1",
    name: "Lamp",
    type: "accessory",
    image: "/lamp.png",
    price: 50,
    size: 80,
    position: { top: -120, right: -10 },
  },
  {
    id: "plant-1",
    name: "Plant",
    type: "accessory",
    image: "/plant.png",
    price: 10,
    size: 40,
    position: { top: -85, left: 40, zIndex: 2 },
  },
];
