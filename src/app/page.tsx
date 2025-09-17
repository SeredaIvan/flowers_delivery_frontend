"use client";
import { fetchAllShops } from "@/fetchers/shopFetch";
import { useEffect, useState } from "react";
import { SortProvider } from "@/context/SortContext";
import { Shop } from "@/types/Shop";
import ShopsList from "@/components/ShopsList";
import FlowersList from "@/components/FlowersList";

export default function Home() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await fetchAllShops();
        setShops(data);
        setLoading(false)
      } catch (err) {
        console.error("Помилка завантаження магазинів:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  return (
    <>
      <div className="grid grid-cols-[30%_70%]">
        <aside
          className="bg-gray-200 p-7 border-r border-gray-300 overflow-y-auto"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <ShopsList
            shops={shops}
            loading={loading}
            setSelectedShopId={setSelectedShopId}
          />
        </aside>
        <main
          className="p-4 overflow-y-auto"
          style={{ height: "calc(100vh - 100px)" }}
        >
            <FlowersList
              shopId={selectedShopId}
            />
        </main>
      </div>
    </>
  );
}
