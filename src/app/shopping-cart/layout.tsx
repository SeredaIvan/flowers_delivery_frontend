"use client";
import Header from "@/components/Header";
import { CartProvider, useCart } from "@/context/CartContext";

export default function ShoppingCartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <LayoutContent>{children}</LayoutContent>
        </CartProvider>
      </body>
    </html>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { flowers } = useCart();
  return (
    <>
      <Header selectedFlowers={flowers} />
      {children}
    </>
  );
}
