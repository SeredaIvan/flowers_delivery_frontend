import { headers } from "next/headers";

type OrderItem = {
  flowerId: number;
  title: string;
  quantity: number;
  cost: number;
};

type Order = {
  id: number;
  totalPrice: number;
  deliveryAddress: string;
  orderDate: string;
  items: OrderItem[];
};

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: OrderPageProps) {
  const resolwedParams = await params
  const orderId = resolwedParams.id
  let order: Order | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/api/v1.0/orders/${orderId}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Помилка при завантаженні замовлення");
    }

    order = await res.json();
  } catch (err: any) {
    error = err.message;
  }

  if (error) return <p className="text-red-500">Помилка: {error}</p>;
  if (!order) return <p>Замовлення не знайдено</p>;

  const localDate = new Date(order.orderDate).toLocaleString();

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Деталі замовлення #{order.id}</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Інформація про замовлення</h2>
        <p>
          <strong>Дата та час:</strong> {localDate}
        </p>
        <p>
          <strong>Адреса доставки:</strong> {order.deliveryAddress}
        </p>
        <p>
          <strong>Загальна сума:</strong> {order.totalPrice} грн
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Продукти</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Назва</th>
              <th className="border p-2 text-center">Кількість</th>
              <th className="border p-2 text-right">Ціна за одиницю</th>
              <th className="border p-2 text-right">Сума</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.flowerId}>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">{item.cost} грн</td>
                <td className="border p-2 text-right">{item.quantity * item.cost} грн</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
