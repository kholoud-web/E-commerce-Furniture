import { useEffect , useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";


export default function SearchModal({ isOpen, onClose , products}) {
   const[query , setQuery] = useState("");

    useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  const filteredProducts =  query.trim() === ""
    ? []
    : products?.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
) || [];

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start overflow-y-auto p-6 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-0 right-1 text-gray-500 text-md"
        >
          ✕
        </button>

        {/* Search Input */}
        <div className="flex items-center border rounded-md px-3 py-2">
          <Search className="text-gray-400 mr-2" />
          <input
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="w-full outline-none"
            autoFocus
          />
        </div>
       

        {/* Results */}
        <div className="mt-4 max-h-80 overflow-y-auto">
          {query && filteredProducts.length === 0 && (
            <p className="text-gray-500">No products found</p>
          )}

          {filteredProducts.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />

              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}