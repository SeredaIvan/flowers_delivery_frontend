"use client";
import { useRef } from "react";
import { useCart } from "@/context/CartContext";
import FlowersCartTiles from "@/components/FLowersCartTiles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ux/ui/Button";

export default function ShoppingCart() {
  const { flowers } = useCart();
  const router = useRouter();
  const { clearCart } = useCart();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const orderData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      deliveryAddress: addressRef.current?.value,
      items: flowers.map((f) => ({
        flowerId: f.id,
        quantity: f.quantity,
      })),
    };

    try {
      console.log("Order data:", orderData);

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BACKEND_URL + "/api/v1.0/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Помилка створення замовлення:", errorData.error);
        return;
      }

      const data = await response.json();
      clearCart();
      console.log("must redirect")
      router.push(`/orders/${data.order.id}`);
    } catch (error) {
      console.error("Помилка при запиті до сервера:", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Кошик</h1>
      {flowers.length > 0 ? (
        <>
          <div className="grid grid-cols-[30%_70%] gap-6 p-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Ваша інформація</h2>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  ref={nameRef}
                  placeholder="Ім'я"
                  className="p-2 border rounded"
                />
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  className="p-2 border rounded"
                />
                <input
                  type="tel"
                  ref={phoneRef}
                  placeholder="Телефон"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  ref={addressRef}
                  placeholder="Адреса"
                  className="p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <FlowersCartTiles />
              <div className="mt-4 text-xl font-semibold">
                Загалом:{" "}
                {flowers.reduce((sum, f) => sum + f.cost * f.quantity, 0)} грн
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <Button onClick={handleSubmit}>Замовити</Button>
          </div>
        </>
      ) : (
        <p>Кошик порожній</p>
      )}
    </div>
  );
}
