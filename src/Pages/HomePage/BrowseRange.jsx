// import img1 from "../../../public/images/home/image 100.svg";
// import img2 from "../../../public/images/home/image 101.svg";
// import img3 from "../../../public/images/home/image 106.svg";

// export default function BrowseRange() {
//   const categories = [
//     {
//       id: 1,
//       image: img1,
//       text: "Living",
//     },
//     {
//       id: 2,
//       image: img2,
//       text: "Bedroom",
//     },
//     {
//       id: 3,
//       image: img3,
//       text: "Dining",
//     },
//   ];
//   return (
//     <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
//       <div className="text-center">
//         <h2 className="text-[#333333] font-bold text-3xl sm:text-2xl ">
//           Browse The Range
//         </h2>
//         <p className="text-[#666666] font-normal max-w-xl mx-auto mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {categories.map((category) => (
//           <div key={category.id} className="overflow-hidden ">
//             <img
//               src={category.image}
//               alt={category.text}
//               className="w-full h-72  object-cover  rounded-xl shadow-md"
//             />
//             <p className="text-[#333333] font-semibold text-center mt-6">
//               {category.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import img1 from "../../../public/images/home/image 100.svg";
import img2 from "../../../public/images/home/image 101.svg";
import img3 from "../../../public/images/home/image 106.svg";

const categories = [
  { id: 1, image: img1, text: "Living",  route: "/shop?category=living"  },
  { id: 2, image: img2, text: "Bedroom", route: "/shop?category=bedroom" },
  { id: 3, image: img3, text: "Dining",  route: "/shop?category=dining"  },
];

export default function BrowseRange() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[#333333] font-bold text-3xl">
          Browse The Range
        </h2>
        <p className="text-[#666666] font-normal max-w-xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, i) => (
          <div
            key={category.id}
            onClick={() => navigate(category.route)}
            className="group cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                <span className="bg-white text-[#333] text-sm font-semibold px-5 py-2 rounded-full shadow">
                  Shop Now
                </span>
              </div>
            </div>

            {/* Label */}
            <p className="text-[#333333] font-semibold text-center mt-4 text-lg group-hover:text-yellow-600 transition-colors duration-300">
              {category.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}