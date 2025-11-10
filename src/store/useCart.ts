import { Cart, Product } from "../types/Product.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: Cart[];
  add: (p: Product, qty: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, qty) => {
        const item = get().items.find((i) => i._id === p._id);
        if (item) {
          set({
            items: get().items.map((i) =>
              i._id === p._id ? { ...i, qty: i.qty + qty } : i
            ),
          });
        } else {
          set({
            items: [...get().items, { ...p, qty }],
          });
        }
      },
    }),
    {
      name: "cart-storage", // 👈 Tên key lưu trong localStorage
    }
  )
);
