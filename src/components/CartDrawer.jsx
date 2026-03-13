import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex justify-end"
      onClick={onClose}
    >
      {/* Drawer */}
      <div
        className={`bg-white w-full max-w-md h-full shadow-lg p-6 flex flex-col
transition-transform duration-300
${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button className="cursor-pointer"
           onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <Link
            to="/cart"
            onClick={onClose}
            className="mt-4 bg-black text-white text-center py-3 rounded-md"
          >
            View Cart
          </Link>
        )}
      </div>
    </div>
  );
}