import { useState } from "react";
import StarRating from "../../components/StarRating";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSize] = useState(null);
  const [selectedColor, setColor] = useState(null);

  if (!product) {
    return <p className="text-center py-20">product not found</p>;
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-10 grid lg:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <div className="flex gap-6">
        {/* thumbnails */}
        <div className="flex flex-col gap-4">
          {product.detailsImages &&
            Object.values(product.detailsImages)?.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-20 h-20 object-cover rounded-lg bg-[#F9F1E7] cursor-pointer ${mainImage === img ? "border-2 border-[#B88E2F]" : ""}`}
                loading="lazy"
                onClick={() => setMainImage(img)}
              />
            ))}
        </div>

        {/* main image */}
        <div className=" p-6 rounded-xl">
          <img
            src={mainImage}
            alt={product.name}
            className="w-[400px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

        <p className="text-gray-500 text-xl mb-4">${product.price}</p>

        {/* rating */}
        <div className="flex items-center gap-3 mb-6">
          <StarRating rating={product.rating} />
          <span className="text-gray-500 text-sm">
            {product.rate} Customer Reviews
          </span>
        </div>

        {/* description */}
        <p className="text-gray-600 mb-6">{product.details}</p>

        {/* Size */}
        <div className="mb-6">
          <p className="text-gray-500 mb-2">Size</p>

          <div className="flex gap-3">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                onClick={() => setSize(size)}
                className={` px-3 py-1 rounded cursor-pointer transition
               ${selectedSize === size ? "bg-[#B88E2F] text-white" : "bg-gray-200"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <p className="text-gray-500 mb-2">Color</p>

          <div className="flex gap-3">
            {["purple", "yellow", "black"].map((color) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                className={`w-6 h-6 rounded-full cursor-pointer border-2
        ${
          selectedColor === color
            ? "border-[#B88E2F] scale-110"
            : "border-transparent"
        }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      
        {/* cart buttons */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-4 py-2"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2"
            >
              +
            </button>
          </div>

          <button className="border px-6 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white transition cursor-pointer">
            Add To Cart
          </button>

          <button className="border px-6 py-2 rounded-lg cursor-pointer hover:bg-[#B88E2F] hover:text-white transition">+ Compare</button>
        </div>

        {/* product info */}
        <div className="text-gray-500 space-y-2 border-t pt-6">
          <p>SKU : SS001</p>
          <p>Category : Sofas</p>
          <p>Tags : Sofa, Chair, Home, Shop</p>
        </div>
      </div>
    </section>
  );
}
