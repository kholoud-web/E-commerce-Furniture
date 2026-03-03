import { Products } from "../../Products";
import { useState } from "react";

export default function OurProducts() {
    const [visibleCount , setVisibleCount] = useState(4);
    const handleSeeMoreBtn = ()=>{
         setVisibleCount((prev)=> prev + 4)
    }
  return (
    <section className="py-10 px-4 sm:px-16 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-[#3A3A3A] font-bold text-center text-3xl mb-8">
        Our Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Products.slice(0, visibleCount ).map((product) => {
          const finalPrice =
            product.discountPercentage > 0
              ? product.price -
                (product.price * product.discountPercentage) / 100
              : product.price;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden 
              transform hover:scale-105 hover:shadow-xl transition duration-300 relative"
            >
              {/* Discount Badge */}
              {product.discountPercentage > 0 && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{product.discountPercentage}%
                </span>
              )}

              {/* New Badge */}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}

              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
              />

              <div className="p-5 bg-[#F4F5F7]">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {product.des}
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg">
                    ${finalPrice}
                  </p>

                  {product.discountPercentage > 0 && (
                    <p className="text-gray-400 line-through text-sm">
                      ${product.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {visibleCount< Products.length&& (
      <div className="text-center mt-8">
        <button onClick={handleSeeMoreBtn}
         className="bg-white text-[#B88E2F] border border-[#B88E2F] py-2 px-6 hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
      )}
    </section>
  );
}