import { Shop } from "../types/Shop";

type  ShopTileProps ={
  shop :Shop
  setSelectedShopId:(id: number|null) => void;
} 

const ShopTile = ({shop,setSelectedShopId}:ShopTileProps) => {
  return (
    <>
      <li
        className="p-5 bg-white rounded shadow hover:bg-blue-100 cursor-pointer text-xl text-center "
        onClick={()=>{setSelectedShopId(shop.id)}}
      >
        {shop.name}
      </li>
    </>
  );
};

export default ShopTile;
