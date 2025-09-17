import React, { useEffect, useState } from "react";
import { Flower } from "../types/Flower";
import {
  fetchFlowersByShopId,
  fetchPaginatedFlowers,
} from "../fetchers/flowersFetch";
import type { PaginatedResponse } from "../types/Fetchers";
import FlowerCard from "./FlowersCard";
import FlowerCardSkeleton from "./FlowerCardSkeleton";

type FlowersListProps = {
  shopId: number | null;
  sortDirection: boolean | null;
};

const FlowersList = ({ shopId, sortDirection }: FlowersListProps) => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlowers = async () => {
      setLoading(true);
      setError(null);
      try {
        let res: PaginatedResponse;

        if (shopId) {
          res = (await fetchFlowersByShopId(shopId)) as any;
        } else {
          res = await fetchPaginatedFlowers(limit, offset);
        }

        if ("error" in res) {
          setError(res.error);
          setFlowers([]);
        } else {
          setFlowers(res.data);
          setTotal(res.total ?? res.data.length);
        }
      } catch (err) {
        console.error("Помилка при завантаженні квітів:", err);
        setError("Не вдалося завантажити квіти");
        setFlowers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, [shopId, limit, offset]);
  /*переробити на fetch данних в бд api яка видає відразу відсортовані данні*/
  useEffect(() => {
    if (sortDirection !== null) {
      setFlowers((prevFlowers) => {
        const sorted = [...prevFlowers].sort((a, b) => {
          if (sortDirection) {
            return a.cost - b.cost; 
          } else {
            return b.cost - a.cost; 
          }
        });
        return sorted;
      });
    }
  }, [sortDirection]);

  const handleNext = () =>
    setOffset((prev) => (prev + limit < total ? prev + limit : prev));
  const handlePrev = () =>
    setOffset((prev) => (prev - limit >= 0 ? prev - limit : 0));

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={offset === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Попередня
        </button>

        <span>
          Сторінка {currentPage} з {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={offset + limit >= total}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Наступна
        </button>
      </div>

      <div className="overflow-y-auto">
        {loading && (
          <ul className="grid grid-cols-3 gap-4">
            {Array.from({ length: limit }).map((_, i) => (
              <FlowerCardSkeleton key={i} />
            ))}
          </ul>
        )}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <ul className="grid grid-cols-3 gap-4">
            {flowers.map((flower) => (
              <FlowerCard flower={flower} key={flower.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default React.memo(FlowersList);
