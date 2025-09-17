import { Shop } from "../types/Shop";
import ShopTile from "./ShopTile";
import ShopsListSkeleton from "./ShopListSkeleton";
import React from "react";

type ShopsListProps = {
  shops: Shop[];
  loading:boolean
};
const ShopsList = ({ shops, loading }: ShopsListProps) => {
  if (loading) {
    return <ShopsListSkeleton />;
  }
  return (
    <>
      <ul className="space-y-2">
        {shops && shops.length > 0 ? (
          shops.map((shop) => (
            <ShopTile shop={shop}/>
          ))
        ) : (
          <li className="text-gray-500 italic">Магазини відсутні</li>
        )}
      </ul>
    </>
  );
};

export default React.memo(ShopsList)