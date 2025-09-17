'use client'
import { fetchAllShops } from "./fetchers/shopFetch";
import { useEffect ,useState } from "react";
import Header from "./components/Header";
import { Shop } from "./types/Shop";
import ShopsList from "./components/ShopsList";

export default function Home() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedShopId,setSelectedShopId] = useState<number>(0)

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await fetchAllShops();
        setShops(data);
      } catch (err) {
        console.error("Помилка завантаження магазинів:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  useEffect(()=>{

  },[selectedShopId])

  return (
    <>
      <Header />
      <div className="grid grid-cols-[30%_70%] min-h-screen">
        <aside className="bg-gray-100 p-7 border-r border-gray-300">
          <ShopsList shops={shops} loading={loading} setSelectedShopId={setSelectedShopId}/>
        </aside>
        <main className="p-4">
          
        </main>
      </div>
    </>
  );
}
