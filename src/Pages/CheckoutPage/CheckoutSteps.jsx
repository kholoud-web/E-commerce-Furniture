import { useForm } from "react-hook-form";
import { useCart } from "../../Context/CartContext";
import { checkoutSchema } from "./checkourSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { json } from "zod";
import { useUser } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

export default function CheckoutSteps() {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();
  const {user} = useUser();
  
  if(!user) {
    return <Navigate to="/login"/>
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const paymentMethod = watch("payment");

  const onSubmit = (data) => {
    const order = {
      customer: data,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };
    console.log(order);

    const existingOrders = json.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = [...existingOrders, order];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    clearCart();
    navigate("/orderSuccess");
  };
  return (
    <section className="max-w-7xl mx-auto md:py-14 sm:py-12 px-20 grid md:grid-cols-2 gap-16">
      {/* LEFT SIDE - BILLING FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>

          <label className="font-medium ">Full Name</label>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <input
                placeholder="First Name"
                className="border p-3 rounded w-full"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <input
                placeholder="Last Name"
                className="border p-3 rounded w-full"
                {...register("lastName")}
              />
            </div>
          </div>

          <label className="font-medium ">Company Name (optional)</label>
          <input
            placeholder="Company Name (Optional)"
            className="border p-3 rounded w-full mt-4"
            {...register("company")}
          />

          <label className="font-medium">Country / Region</label>
          <select
            className="border p-3 rounded w-full mt-4"
            {...register("country")}
          >
            <option>Egypt</option>
            <option>Saudi Arabia</option>
            <option>UAE</option>
          </select>

          <label className="font-medium">Address</label>
          <input
            placeholder="Street address"
            className="border p-3 rounded w-full mt-4"
            {...register("address")}
          />

          <label className="font-medium">Town / City</label>
          <input
            placeholder="Town / City"
            className="border p-3 rounded w-full mt-4"
            {...register("city")}
          />

          <label className="font-medium">Zip Code</label>
          <input
            placeholder="ZIP code"
            className="border p-3 rounded w-full mt-4"
            {...register("zip")}
          />

          <label className="font-medium">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            className="border p-3 rounded w-full mt-4"
            {...register("phone")}
          />

          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="Email address"
            className="border p-3 rounded w-full mt-4"
            {...register("email")}
          />

          <textarea
            placeholder="Additional information"
            className="border p-3 rounded w-full"
            {...register("notes")}
          />
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}

        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-4 mt-8">Product</h3>

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2 text-[#B88E2F]">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          {/* PAYMENT METHODS */}

          <div className="space-y-3">
            <label className="flex gap-2">
              <input
                type="radio"
                value="bank"
                {...register("payment")}
                defaultChecked
              />
              Direct Bank Transfer
            </label>

            <label className="flex gap-2">
              <input type="radio" value="card" {...register("payment")} />
              Visa / Credit Card
            </label>

            <label className="flex gap-2">
              <input type="radio" value="cod" {...register("payment")} />
              Cash On Delivery
            </label>
          </div>
          {/* card method */}
          {paymentMethod === "card" && (
            <div className="space-y-3 mt-4">
              <input
                placeholder="Card Number"
                className="border p-3 rounded w-full"
                {...register("cardNumber")}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">
                  {errors.cardNumber.message}
                </p>
              )}

              <div className="flex gap-3">
                <input
                  placeholder="MM/YY"
                  className="border p-3 rounded w-full"
                  {...register("expiry")}
                />

                <input
                  placeholder="CVV"
                  className="border p-3 rounded w-full"
                  {...register("cvv")}
                />
              </div>
            </div>
          )}
          {/* PLACE ORDER BUTTON */}

          <button
            type="submit"
            disabled={cart.length === 0}
            className="border border-black px-10 py-3 rounded-lg hover:bg-black hover:text-white transition mb-4 cursor-pointer"
          >
            Place order
          </button>
        </div>
      </form>
    </section>
  );
}
