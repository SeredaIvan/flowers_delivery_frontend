import { Shop } from "../types/Shop";
type ShopsListProps = {
  shops: Shop[];
};
const ShopsList = ({ shops }: ShopsListProps) => {
  return (
    <>
      <ul className="space-y-2">
        {shops && shops.length > 0 ? (
          shops.map((shop) => (
            <li
              key={shop.id}
              className="p-2 bg-white rounded shadow hover:bg-blue-100 cursor-pointer"
            >
              {shop.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500 italic">Магазини відсутні</li>
        )}
      </ul>
    </>
  );
};
