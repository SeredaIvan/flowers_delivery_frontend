import React from "react";
import { Flower } from "../types/Flower";

type FlowerCardProps = {
  flower: Flower;
  onAddToCart?: (flower: Flower) => void;
};

const FlowerCard = ({ flower, onAddToCart }: FlowerCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={flower.urlImage || "/img/card-top.jpg"}
        alt={flower.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{flower.title}</div>
        <p className="text-gray-700 text-base">Ціна: {flower.cost} грн</p>
      </div>
      <div className="px-6 pt-2 pb-4 flex flex-wrap gap-2">
        <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold shadow-sm">
          Магазин #{flower.shopId}
        </span>
        <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold shadow-sm">
          {flower.cost} грн
        </span>
      </div>

      <div className="px-6 pb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Додати до кошика
        </button>
      </div>
    </div>
  );
};
{
  /**onClick={() => onAddToCart(flower)|} */
}
export default FlowerCard;
