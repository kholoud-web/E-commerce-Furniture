import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";

export default function ShopFilter({sortBy , setSortBy , showCount , setShowCount , totalProducts , view , setView }) {
  return (
    <section className="bg-[#F9F1E7] py-4 px-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-[#333]">

          <button className="flex items-center gap-2 font-medium">
            <SlidersHorizontal size={20} />
            Filter
          </button>

          <LayoutGrid size={20} className={`cursor-pointer ${view === "grid" ? "text-black" : "text-gray-400"}`}
              onClick={() => setView("grid")}

          />
          <List size={20} className={`cursor-pointer ${view === "list" ? "text-black" : "text-gray-400"}`}
           onClick={() => setView("list")}
          />

          <span className="h-6 w-[1px] bg-gray-400 mx-2"></span>

          <p className="text-sm">
            Showing 1–{Math.min(showCount , totalProducts)} of  {totalProducts} results
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Show */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <input
              type="number"
              value ={showCount}
              min={1}
              max={totalProducts}
              onChange={(e)=> setShowCount(Number(e.target.value))}
              className="w-14 bg-white px-2 py-1 text-center "
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by</span>
            <select
              value={sortBy}
              onChange={(e)=> setSortBy(e.target.value)}
            className="bg-white px-3 py-1 ">
              <option value="default" >Default</option>
              <option value="priceLow">Price : Low to High</option>
              <option value="priceHigh">Price : High to Low</option>
              <option value="name">Name : A-Z</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
}





