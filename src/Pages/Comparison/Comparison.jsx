import { useCart } from "../../Context/CartContext";
import { useCompare } from "../../Context/CompareContext";
import { Products } from "../../Products";
import { Link } from "react-router-dom";

export default function Comparison() {
  const { addToCart } = useCart();
  const {
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
  } = useCompare();

  // ✅ ALL guards before any data derivation
  if (!compareList || compareList.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-gray-500 text-lg">No products selected for comparison</p>
        <Link to="/shop" className="underline text-gray-400 mt-2 block my-6">
          Browse Products
        </Link>
      </div>
    );
  }

  // ✅ safe after guard
  const sections = compareList[0]?.sections ?? [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Clear All */}
      <div className="flex justify-end mb-4">
        <button
          onClick={clearCompare}
          className="text-sm text-red-500 border border-red-300 px-4 py-1 rounded-lg hover:bg-red-50"
        >
          Clear All
        </button>
      </div>

      {/* Top Product Cards */}
      <div className="grid gap-6 mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* Label */}
        <div className="flex flex-col justify-center">
          <p className="text-black font-medium">Go to Product page for more Products</p>
          <Link to="/products" className="underline mt-2 block text-gray-400">
            View More
          </Link>
        </div>

        {/* Product Cards */}
        {compareList.map((product) => (
          <div key={product.id} className="text-center relative">
            <button
              onClick={() => removeFromCompare(product.id)}
              className="absolute top-0 right-0 text-xs text-red-400 hover:text-red-600"
            >
              ✕ Remove
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="mx-auto object-contain rounded-xl w-full h-48"
              loading="lazy"
            />
            <h3 className="mt-3 font-semibold">{product.name}</h3>
            <p className="text-gray-500">Rs. {product.price}</p>
            <div className="text-yellow-500 text-sm">
              {"★".repeat(Math.floor(product.rating ?? 0))}
              <span className="text-gray-400 ml-2">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>
          </div>
        ))}

        {/* Add Product Slot */}
        {compareList.length < 2 && (
          <div className="flex flex-col items-center p-4 rounded-lg">
            <p className="font-semibold mb-2">Add A Product</p>
            <div className="space-y-2 max-h-48 overflow-y-auto w-full">
              {Products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => addToCompare(p)}
                  disabled={isInCompare(p.id)}
                  className={`block border px-3 py-1 text-sm w-full ${
                    isInCompare(p.id)
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {sections.length > 0 && ( // ✅ guard: only render table if sections exist
        <div className="border border-gray-200 overflow-hidden">
          {sections.map((section, index) => {
            const fields = Object.keys(section).filter((key) => key !== "title");
            return (
              <div key={index}>
                <div className="px-4 py-3 font-semibold bg-gray-50">
                  {section.title}
                </div>

                {fields.map((fieldKey) => (
                  <div
                    key={fieldKey}
                    className="grid border-t"
                    style={{
                      gridTemplateColumns: `1fr repeat(${compareList.length}, 1fr)`,
                    }}
                  >
                    <div className="p-4 font-medium capitalize">
                      {fieldKey.replace(/([A-Z])/g, " $1")}
                    </div>

                    {compareList.map((product) => {
                      const productSection = product.sections?.[index]; // ✅ safe access
                      return (
                        <div key={product.id} className="p-4 text-gray-600">
                          {productSection?.[fieldKey] ?? "-"}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Add to Cart */}
      <div
        className="grid mt-6"
        style={{
          gridTemplateColumns: `1fr repeat(${compareList.length}, 1fr)`,
        }}
      >
        <div />
        {compareList.map((product) => (
          <button
            key={product.id}
            onClick={() => addToCart(product)}
            className="m-2 bg-yellow-600 text-white py-3 rounded"
          >
            Add To Cart
          </button>
        ))}
      </div>

    </div>
  );
}



























// import { Products } from "../../Products";
// import { useCart } from "../../Context/CartContext";
// import { Link } from "react-router-dom";
// import StarRating from "../../components/StarRating";
// import {useCompare} from "../../Context/CompareContext";

// export default function Comparison() {
//   const { addToCart } = useCart();
//   const { compareList , addToCompare , removeFromCompare , clearCompare , isInCompare} = useCompare();

//  const comparedProducts = compareList;
//  const sections = compareList[0]?.sections || [];
// console.log(compareList)
// if (compareList.length === 0) {
//   return (
//     <div className="text-center mt-20">
//       <p className="text-gray-500 text-lg">
//         No products selected for comparison
//       </p>
//          <Link to="/shop" className="underline text-gray-400 mt-2 block">
//           Browse Products
//         </Link>

//     </div>
//   );
// }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//          {/* Clear Button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={clearCompare} // ✅ clearCompare from context
//           className="text-sm text-red-500 border border-red-300 px-4 py-1 rounded-lg hover:bg-red-50"
//         >
//           Clear All
//         </button>
//       </div>
//       {/*  Top Products */}
//       <div
//         className="grid gap-6 mb-10 
//                 grid-cols-1 
//                 sm:grid-cols-2 
//                 md:grid-cols-3 
//                 lg:grid-cols-4"
//       >
//         {/* First Box */}
//         <div className="flex flex-col justify-center">
//           <p className="text-[#000000] font-medium">
//             Go to Product page for more Products
//           </p>

//           <Link
//             to="/productDetails/id" //
//             className="underline mt-2 block text-[#727272]"
//           >
//             View More
//           </Link>
//         </div>

//         {/* Products */}
//         {comparedProducts.map((product) => (
//           <div key={product.id} className="text-center">
//                   {/* Remove button */}
//             <button
//               onClick={() => removeFromCompare(product.id)} // ✅ removeFromCompare from context
//               className="absolute top-0 right-0 text-xs text-red-400 hover:text-red-600"
//             >
//               ✕ Remove
//             </button>

//             <img
//               src={product.image}
//               alt={product.name}
//               className="mx-auto object-contain rounded-xl w-full h-48"
//               loading="lazy"
//             />

//             <h3 className="mt-3 font-semibold">{product.name}</h3>
//             <p className="text-gray-500">Rs. {product.price}</p>

//             {/* Rating */}
//             <div className="text-yellow-500 text-sm text-center">
//               {"★".repeat(Math.floor(product.rating))}
//               {/* <StarRating rating={product.rate}/> */}
//               <span className="text-gray-400 ml-2">
//                 ({product.reviews?.length || 0} reviews)
//               </span>
//             </div>
//           </div>
//         ))}

//         {/* Add Product */}
//         <div className="flex flex-col justify-center items-center  p-4 rounded-lg font-semibold text-[#000000]">
//           <p>Add A Product</p>
//          <div className="mt-2 space-y-2">
//     {Products.map((p) => (
//       <button
//         key={p.id}
//         onClick={() => addToCompare(p)}
//         className="block border px-3 py-1 text-sm"
//       >
//         {p.name}
//       </button>
//     ))}
//   </div>
//         </div>
//       </div>

//       {/* 🧾 Comparison Table */}
//       <div className="border border-[#E8E8E8]  overflow-hidden">
//         {sections.map((section,index) => {
//             const fields = Object.keys(section).filter(
//       (key) => key !== "title"
//     );
//     return(
//           <div key={index}>
//             {/* Section Title */}
//             <div className=" px-4 py-3 font-semibold">
//               {section.title}
//             </div>

//             {/* Fields */}
//             {fields.map((fieldKey) => (
//               <div key={fieldKey} className="grid grid-cols-3 border-t">
//                 {/* Label */}
//                 <div className="p-4 font-medium"> {fieldKey.replace(/([A-Z])/g, " $1")}</div>

//                 {/* Values */}
//                 {comparedProducts.map((product) => {
//                const productSection = product.sections?.[index];
//                return(
//                   <div key={product.id} className="p-4 text-gray-600">
//                    {productSection?.[fieldKey] || "-"}

//                   </div>
//                 )})}
//               </div>
//             ))}
//           </div>
// )})}
//       </div>

//       {/* 🛒 Add to Cart */}
//       <div className="grid grid-cols-3 gap-6 mt-6">
//         <div></div>
//         {comparedProducts.map((product) => (
//           <button
//             onClick={() => addToCart(product)}
//             key={product.id}
//             className="bg-yellow-600 text-white py-3 rounded"
//           >
//             Add To Cart
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
