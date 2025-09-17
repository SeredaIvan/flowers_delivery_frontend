"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SortContextType = {
  sortDirection: boolean | null;
  setSortDirection: (dir: boolean | null) => void;
};

const SortContext = createContext<SortContextType | undefined>(undefined);

export function SortProvider({ children }: { children: ReactNode }) {
  const [sortDirection, setSortDirection] = useState<boolean | null>(null);

  return (
    <SortContext.Provider value={{ sortDirection, setSortDirection }}>
      {children}
    </SortContext.Provider>
  );
}

export function useSort() {
  const context = useContext(SortContext);
  if (!context) throw new Error("useSort must be used within SortProvider");
  return context;
}
