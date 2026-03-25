export default function Orders() {
  const orders = [
    { id: "#1234", status: "Delivered", total: "$120" },
    { id: "#1235", status: "Processing", total: "$80" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Orders</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between"
        >
          <div>
            <p className="font-semibold">{order.id}</p>
            <p className="text-gray-500">{order.status}</p>
          </div>

          <p className="font-bold">{order.total}</p>
        </div>
      ))}
    </div>
  );
}