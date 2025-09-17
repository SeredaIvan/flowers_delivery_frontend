"use client";
import { useCart } from "@/context/CartContext";
import FlowersCartTiles from "@/components/FLowersCartTiles";

export default function ShoppingCart() {
  const { flowers } = useCart();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Кошик</h1>
      {flowers.length > 0 ? (
        <>
          <FlowersCartTiles />
          <div className="mt-4 text-xl font-semibold">
            Загалом:{" "}
            {flowers.reduce((sum, f) => sum + f.cost * f.quantity, 0)} грн
          </div>
        </>
      ) : (
        <p>Кошик порожній</p>
      )}
    </div>
  );
}
