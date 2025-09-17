'use client'
import { shopFetch } from "./fetchers/shopFetch";
import { useEffect ,useState } from "react";
import Header from "./components/Header";
import { Shop } from "./types/Shop";
import ShopsList from "./components/ShopsList";

export default function Home() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await shopFetch();
        setShops(data);
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
      <Header />
      <div className="grid grid-cols-[30%_70%] min-h-screen">
        <aside className="bg-gray-100 p-4 border-r border-gray-300">
          <ShopsList shops={shops} loading={loading}/>
        </aside>

        <main className="p-4">

        </main>
      </div>
    </>
  );
}
