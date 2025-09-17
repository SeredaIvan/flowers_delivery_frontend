import { Flower } from "./Flower"; 

export type PaginatedResponse = {
  data: Flower[];
  total: number;
  limit: number;
  offset: number;
} | { error: string };