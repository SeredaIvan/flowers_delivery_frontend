"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Flower } from "@/types/Flower";

export type CartItem = Flower & { quantity: number };

type CartContextType = {
  flowers: CartItem[];
  addFlower: (flower: Flower) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFlower: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [flowers, setFlowers] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("selectedFlowers");
    if (stored) {
      try {
        setFlowers(JSON.parse(stored));
      } catch (e) {
        console.error("Помилка парсингу кошика:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedFlowers", JSON.stringify(flowers));
  }, [flowers]);

  const addFlower = (flower: Flower) => {
    setFlowers((prev) => {
      const existing = prev.find((f) => f.id === flower.id);
      if (existing) {
        return prev.map((f) =>
          f.id === flower.id ? { ...f, quantity: f.quantity + 1 } : f
        );
      }
      return [...prev, { ...flower, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setFlowers((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, quantity: Math.max(1, quantity) } : f
      )
    );
  };

  const removeFlower = (id: number) => {
    setFlowers((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <CartContext.Provider value={{ flowers, addFlower, updateQuantity, removeFlower }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
