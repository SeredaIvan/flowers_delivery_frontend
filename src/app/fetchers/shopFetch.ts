import { Shop } from "../types/Shop";

export const shopFetch = async (): Promise<Shop[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/api/v1.0/shops/getAll`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", 
      }
    );

    if (!res.ok) {
      throw new Error(`Помилка завантаження магазинів: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data as Shop[];
  } catch (error) {
    console.error("shopFetch error:", error);
    return [];
  }
};