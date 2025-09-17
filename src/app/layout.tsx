"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Button from "@/components/ux/ui/Button";
import { SortProvider, useSort } from "@/context/SortContext";
import { usePathname } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <SortProvider>
            <HeaderWithSort />
            {children}
          </SortProvider>
        </CartProvider>
      </body>
    </html>
  );
}

function HeaderWithSort() {
  const setSortDirection  = useSort().setSortDirection;
  const pathname = usePathname();

  const showButtons = pathname === "/";

  return (
    <Header showSortButtons={showButtons}>
      <Button onClick={() => setSortDirection(true)}>Sort by price asc</Button>
      <Button onClick={() => setSortDirection(false)}>Sort by price desc</Button>
    </Header>
  );
}
