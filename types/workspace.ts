export type ItemType = "desk" | "chair" | "monitor" | "accessory";

export interface Product {
  id: string;
  name: string;
  type: ItemType;
  image: string;
  price: number;
  size?: number;
}

export interface WorkspaceState {
  desk: Product | null;
  chair: Product | null;
  monitor: Product | null;
  accessories: Product[];
}

export interface Position {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
}

export interface Product {
  id: string;
  name: string;
  type: ItemType;
  image: string;
  price: number;
  position?: Position;
}
