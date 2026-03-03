import img1 from "../../../public/images/home/image 100.svg";
import img2 from "../../../public/images/home/image 101.svg";
import img3 from "../../../public/images/home/image 106.svg";

export default function BrowseRange() {
  const categories = [
    {
      id: 1,
      image: img1,
      text: "Living",
    },
    {
      id: 2,
      image: img2,
      text: "Bedroom",
    },
    {
      id: 3,
      image: img3,
      text: "Dining",
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-[#333333] font-bold text-3xl sm:text-2xl ">
          Browse The Range
        </h2>
        <p className="text-[#666666] font-normal max-w-xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {categories.map((category) => (
          <div key={category.id} className="overflow-hidden ">
            <img
              src={category.image}
              alt={category.text}
              className="w-full h-72  object-cover  rounded-xl shadow-md"
            />
            <p className="text-[#333333] font-semibold text-center mt-6">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
