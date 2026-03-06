import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";

export default function ShopFilter() {
  return (
    <section className="bg-[#F9F1E7] py-4 px-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-[#333]">

          <button className="flex items-center gap-2 font-medium">
            <SlidersHorizontal size={20} />
            Filter
          </button>

          <LayoutGrid size={20} className="cursor-pointer" />
          <List size={20} className="cursor-pointer" />

          <span className="h-6 w-[1px] bg-gray-400 mx-2"></span>

          <p className="text-sm">
            Showing 1–16 of 32 results
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Show */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <input
              type="number"
              defaultValue="16"
              className="w-14 bg-white px-2 py-1 text-center "
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by</span>
            <select className="bg-white px-3 py-1 ">
              <option>Default</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
}






// export default function FilterBar({ view, setView, sort, setSort, show, setShow }) {
//   return (
//     <section className="bg-[#F9F1E7] py-4">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//         {/* Left */}
//         <div className="flex items-center gap-4">

//           <button className="flex items-center gap-2 font-medium">
//             <SlidersHorizontal size={20}/>
//             Filter
//           </button>

//           <LayoutGrid
//             size={20}
//             className={`cursor-pointer ${view === "grid" ? "text-black" : "text-gray-400"}`}
//             onClick={() => setView("grid")}
//           />

//           <List
//             size={20}
//             className={`cursor-pointer ${view === "list" ? "text-black" : "text-gray-400"}`}
//             onClick={() => setView("list")}
//           />

//           <span className="h-6 w-[1px] bg-gray-400"></span>

//           <p className="text-sm">Showing {show} products</p>

//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-6">

//           <div className="flex items-center gap-2">
//             <span>Show</span>
//             <input
//               type="number"
//               value={show}
//               onChange={(e)=>setShow(e.target.value)}
//               className="w-14 bg-white border text-center"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <span>Sort by</span>
//             <select
//               value={sort}
//               onChange={(e)=>setSort(e.target.value)}
//               className="bg-white border px-2"
//             >
//               <option value="default">Default</option>
//               <option value="price">Price</option>
//               <option value="name">Name</option>
//             </select>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }