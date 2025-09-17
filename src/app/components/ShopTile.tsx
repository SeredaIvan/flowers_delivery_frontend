import { Shop } from "../types/Shop";

type  ShopTileProps ={
  shop :Shop
} 

const ShopTile = ({shop}:ShopTileProps) => {
  return (
    <>
      <li
        key={shop.id}
        className="p-5 bg-white rounded shadow hover:bg-blue-100 cursor-pointer text-xl text-center "
      >
        {shop.name}
      </li>
    </>
  );
};

export default ShopTile;
