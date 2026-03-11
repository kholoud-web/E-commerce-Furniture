import { useState , useEffect } from "react";
import { Link } from "react-router";

export default function ShopProducts({products =[], view , showCount }) {
  const ProductsPerPage = showCount;
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(()=>{
       setCurrentPage(1);
  },[products , showCount])

  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;
  const paginationProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / ProductsPerPage);

  return (
    <section className="px-4">
      <div className= {`py-6 px-10 gap-6 ${
          view === "list"
            ? "flex flex-col"
            : "grid sm:grid-cols-2 lg:grid-cols-4"
        }`}>
        {paginationProducts.map((product) => {
          const finalPrice =
            product.discountPercentage > 0
              ? product.price -
                (product.price * product.discountPercentage) / 100
              : product.price;

          return (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl shadow-md overflow-hidden 
                transform hover:scale-105 hover:shadow-xl transition duration-300 relative
                ${view === "list" ? "flex flex-row" : ""}`}
              
            >
              {/* Discount Badge */}
              {product.discountPercentage > 0 && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  -{product.discountPercentage}%
                </span>
              )}

              {/* New Badge */}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  New
                </span>
              )}

              {/* Image */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center 
      opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  {/* Add to cart */}
                  <button 
                  className="bg-white text-black px-4 py-2 font-semibold mb-3 hover:bg-gray-200 cursor-pointer rounded-xl">
                    Add to cart
                  </button>

                  {/* actions */}
                  <div className="flex gap-4 text-white text-sm">
                    <button className="hover:underline cursor-pointer">
                      Compare
                    </button>
                    <Link to={`/ProductDetails/${product.id}`}>
                    <button 
                     className="hover:underline cursor-pointer">
                      Details
                    </button>
                    </Link>
                    {/* <button className="hover:underline cursor-pointer">
                      Like
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[#F4F5F7]">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

                <p className="text-gray-500 text-sm mb-3">{product.des}</p>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg">${finalPrice}</p>

                  {product.discountPercentage > 0 && (
                    <p className="text-gray-400 line-through text-sm">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* paginations */}
      <div className="flex justify-center items-center gap-4 my-10">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded cursor-pointer ${
              currentPage === idx + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7]"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 rounded bg-[#F9F1E7] cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
}
