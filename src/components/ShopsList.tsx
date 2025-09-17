import { Shop } from "../types/Shop";
import ShopTile from "./ShopTile";
import ShopsListSkeleton from "./ShopListSkeleton";
import React from "react";

type ShopsListProps = {
  shops: Shop[];
  loading: boolean;
  setSelectedShopId: (id: number | null) => void;
};

const ShopsList = ({ shops, loading, setSelectedShopId }: ShopsListProps) => {
  if (loading) {
    return <ShopsListSkeleton />;
  }
  return (
    <ul className="space-y-2">
      {shops && shops.length > 0 ? (
        <>
          {shops.map((shop) => (
            <ShopTile
              shop={shop}
              setSelectedShopId={setSelectedShopId}
              key={shop.id}
            />
          ))}
          <li
            className="p-5 bg-gray-100 rounded shadow hover:bg-blue-100 cursor-pointer text-xl text-center border-black"
            onClick={() => setSelectedShopId(null)}
          >
            Всі магазини
          </li>
        </>
      ) : (
        <li className="text-gray-500 italic">Магазини відсутні</li>
      )}
    </ul>
  );
};

export default React.memo(ShopsList);
