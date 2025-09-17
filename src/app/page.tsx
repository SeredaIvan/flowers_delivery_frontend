'use client'

import { useEffect } from "react";
import Header from "./components/Header";
export default function Home() {
  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-[30%_70%] min-h-screen">
        <aside className="bg-gray-100 p-4 border-r border-gray-300">

        </aside>

        <main className="p-4">

        </main>
      </div>
    </>
  );
}
