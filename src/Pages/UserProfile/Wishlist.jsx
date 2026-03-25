export default function Wishlist() {
  const items = [
    { name: "Wooden Chair", price: "$50" },
    { name: "Modern Sofa", price: "$300" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Wishlist</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow">
            <img
              src="https://via.placeholder.com/200"
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}