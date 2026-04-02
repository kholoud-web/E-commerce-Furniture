import { X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const {cart, decreaseCart, addToCart, removeFromCart, totalPrice } =
    useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex justify-end"
      onClick={onClose}
    >
      {/* Drawer */}
      <div
        className={`bg-white w-full max-w-md max-h-9/12 shadow-lg p-6 flex flex-col
transition-transform duration-300 rounded-xl
${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((product) => (
            <div key={product.id} className="flex gap-4 items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => decreaseCart(product.id)}
                  className="border px-2 py-1 rounded hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium">{product.quantity}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="border px-2 py-1 rounded hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* subtotal */}
        <div className="flex items-center justify-between px-4 border-b pb-3 mb-4">
          <p>Subtotal</p>
          <p>{totalPrice}</p>
        </div>
        {/* Footer */}
        {cart.length > 0 && (
          <div className="flex items-center justify-around">
            <Link
              to="/cart"
              onClick={onClose}
              className="mt-4  text-black text-center py-1 px-4 rounded-2xl border"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={onClose}
              className="mt-4  text-black text-center py-1 px-4 rounded-2xl border"
            >
              Checkout
            </Link>
            <Link
              to="/comparisonPage"
              onClick={onClose}
              className="mt-4  text-black text-center py-1 px-4 rounded-2xl border"
            >
              Comparison
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
