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

  if (!compareList || compareList.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Nothing to Compare</h2>
          <p className="text-gray-400 mb-6">Add products from the shop to start comparing.</p>
          <Link
            to="/shop"
            className="inline-block bg-[#B88E2F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#a07828] transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const sections = compareList[0]?.sections ?? [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Comparison</h1>
          <p className="text-gray-400 text-sm mt-1">Compare up to 2 products side by side</p>
        </div>
        <button
          onClick={clearCompare}
          className="self-start sm:self-auto text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition"
        >
          ✕ Clear All
        </button>
      </div>

      {/* Product Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

        {/* Info slot */}
        <div className="flex flex-col justify-center bg-[#FFF9F0] rounded-2xl p-6 border border-[#F0E0C0]">
          <p className="text-gray-700 font-semibold text-base leading-snug">
            Go to Product page for more Products
          </p>
          <Link
            to="/shop"
            className="underline text-[#B88E2F] mt-3 text-sm font-medium hover:text-[#a07828] transition"
          >
            View More →
          </Link>
        </div>

        {/* Product Cards */}
        {compareList.map((product) => {
          const finalPrice =
            product.discountPercentage > 0
              ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
              : product.price.toFixed(2);

          return (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
            >
              {/* Remove btn */}
              <button
                onClick={() => removeFromCompare(product.id)}
                className="absolute top-3 right-3 z-10 bg-white text-red-400 border border-red-200 text-xs px-2 py-1 rounded-lg hover:bg-red-50 transition shadow-sm"
              >
                ✕ Remove
              </button>

              {/* Image */}
              <div className="bg-[#F9F1E7] h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 text-base mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#B88E2F] font-bold text-lg">${finalPrice}</span>
                  {product.discountPercentage > 0 && (
                    <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(product.rating ?? 0))}
                  {"☆".repeat(5 - Math.floor(product.rating ?? 0))}
                  <span className="text-gray-400 ml-1 text-xs">({product.reviews?.length || 0})</span>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-[#B88E2F] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#a07828] transition"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}

        {/* Add Product Slot */}
        {compareList.length < 2 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-[#E0CFA0] p-5 flex flex-col">
            <p className="font-semibold text-gray-800 mb-3">+ Add a Product</p>
            <div className="space-y-2 overflow-y-auto max-h-64 pr-1">
              {Products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => addToCompare(p)}
                  disabled={isInCompare(p.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg border transition ${
                    isInCompare(p.id)
                      ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-200"
                      : "hover:bg-[#FFF9F0] border-gray-200 hover:border-[#B88E2F] cursor-pointer"
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
      {sections.length > 0 && (
        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {sections.map((section, index) => {
            const fields = Object.keys(section).filter((key) => key !== "title");
            return (
              <div key={index}>
                {/* Section Header */}
                <div className="bg-[#F9F1E7] px-5 py-3 font-bold text-gray-800 text-sm uppercase tracking-wide border-b border-gray-200">
                  {section.title}
                </div>

                {fields.map((fieldKey, fIdx) => (
                  <div
                    key={fieldKey}
                    className={`grid border-b border-gray-100 ${fIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    style={{
                      gridTemplateColumns: `1fr repeat(${compareList.length}, 1fr)`,
                    }}
                  >
                    {/* Field Label */}
                    <div className="p-4 text-sm font-semibold text-gray-600 capitalize border-r border-gray-100">
                      {fieldKey.replace(/([A-Z])/g, " $1")}
                    </div>

                    {/* Values */}
                    {compareList.map((product) => {
                      const productSection = product.sections?.[index];
                      return (
                        <div key={product.id} className="p-4 text-sm text-gray-700 border-r border-gray-100 last:border-r-0">
                          {productSection?.[fieldKey] ?? (
                            <span className="text-gray-300">—</span>
                          )}
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
    </div>
  );
}
