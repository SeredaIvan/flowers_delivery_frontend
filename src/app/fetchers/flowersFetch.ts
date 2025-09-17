import { PaginatedResponse } from "../types/Fetchers";

export const fetchPaginatedFlowers = async (limit = 10, offset = 0): Promise<PaginatedResponse> => {
  const res = await fetch(`http://127.0.0.1:3001/api/v1.0/flowers/getPaginated?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Fetch error");
  return res.json();
};
