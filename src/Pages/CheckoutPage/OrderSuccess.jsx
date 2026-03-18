import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">

      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-600">
        Thank you for your purchase.
      </p>

      <Link
        to="/shop"
        className="mt-6 bg-black text-white px-6 py-3 rounded"
      >
        Continue Shopping
      </Link>

    </div>
  );
}