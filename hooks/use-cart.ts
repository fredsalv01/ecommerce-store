import { create } from "zustand";

import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const isItemExist = currentItems.find((item) => item.id === data.id);

        if (isItemExist) {
          return toast("Producto ya en el carrito.");
        }

        set({ items: [...currentItems, data] });
        toast.success("Producto agregado al carrito.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Producto eliminado del carrito.");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Carrito Limpio.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
