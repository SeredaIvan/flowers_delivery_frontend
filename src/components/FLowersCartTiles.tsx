"use client";
import { useCart } from "@/context/CartContext";

export default function FlowersCartTiles() {
  const { flowers, updateQuantity, removeFlower } = useCart();

  return (
    <div className="space-y-4">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flex items-center justify-between border p-3 rounded-lg shadow-sm"
        >
          <div>
            <h2 className="text-lg font-semibold">{flower.title}</h2>
            <p className="text-gray-600">{flower.cost} грн</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(flower.id, flower.quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              value={flower.quantity}
              onChange={(e) => updateQuantity(flower.id, Number(e.target.value))}
              className="w-12 text-center border rounded"
            />
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(flower.id, flower.quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFlower(flower.id)}
            className="text-red-500 hover:underline"
          >
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
}
