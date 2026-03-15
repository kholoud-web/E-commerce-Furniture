import { Trash2 } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router";

export default function CartContainer() {
  const {
    cart,
    totalPrice,
    quantity,
    removeFromCart,
    addToCart,
    decreaseCart,
  } = useCart();
  return (
    <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-10">
      {cart.length === 0 && <p>Your cart is empty</p>}

      {/* LEFT SIDE */}
      <div className="col-span-2">
        {/* Table Header */}
        <div className="grid grid-cols-5 bg-[#F9F1E7] p-4 text-center font-medium">
          <p className="col-span-2">Product</p>
          <p>{totalPrice}</p>
          <p>{quantity}</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Items */}
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 items-center py-8 border-b"
          >
            {/* Product */}
            <div className="flex items-center gap-5 col-span-2">
              <img
                src={item.image}
                className="w-20 h-20 bg-[#F9F1E7] rounded-md p-2"
              />
              <p className="text-gray-500">{item.name}</p>
            </div>

            {/* Price */}
            <p className="text-gray-400 text-center">
              Rs. {item.price.toLocaleString()}
            </p>

            {/* Quantity */}

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseCart(item.id)}
                className="border px-3 py-1"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addToCart(item)}
                className="border px-3 py-1"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>

              <Trash2
                onClick={() => removeFromCart(item.id)}
                className="text-yellow-600 cursor-pointer"
                size={18}
              />
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#F9F1E7] p-10 h-fit">
        <h2 className="text-2xl font-semibold text-center mb-8">Cart Totals</h2>

        <div className="flex justify-between mb-4">
          <p className="font-medium">Subtotal</p>
          <p className="text-gray-400">Rs. {totalPrice.toLocaleString()}</p>
        </div>

        <div className="flex justify-between mb-8">
          <p className="font-medium">Total</p>
          <p className="text-yellow-700 font-semibold">
            Rs. {totalPrice.toLocaleString()}
          </p>
        </div>

        <Link to="/checkout">
        <button className="w-full border border-black py-3 rounded-xl hover:bg-black hover:text-white transition cursor-pointer">
          Check Out
          </button>
        </Link>
      </div>
    </section>
  );
}
