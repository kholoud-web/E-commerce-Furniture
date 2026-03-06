import img1 from "/images/home/FuniroFurniture/Rectangle 36.svg";
import img2 from "../../../public/images/home/FuniroFurniture/Rectangle 37.svg";
import img3 from "../../../public/images/home/FuniroFurniture/Rectangle 38.svg";
import img4 from "../../../public/images/home/FuniroFurniture/Rectangle 39.svg";
import img5 from "../../../public/images/home/FuniroFurniture/Rectangle 40.svg";
import img6 from "../../../public/images/home/FuniroFurniture/Rectangle 41.svg";
import img7 from "../../../public/images/home/FuniroFurniture/Rectangle 43.svg";
import img8 from "../../../public/images/home/FuniroFurniture/Rectangle 44.svg";
import img9 from "../../../public/images/home/FuniroFurniture/Rectangle 45.svg";
import Masonry from "react-masonry-css";

export default function FuniroFurniture() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const breakpoints = {
    default: 5,
    1024: 4,
    768: 3,
    // 480: 1,
  };

  return (
    <section className=" w-full h-fit border-b-[#000000] py-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-semibold text-center ">Share Your Setup With</h3>
        <h2 className="text-3xl font-bold text-center mb-10 mt-4">
          #FuniroFurniture
        </h2>

        <div className="px-6 py-16">
         <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={src}
                alt=" furniture image"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110 max-h-80 "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center ">
                <span className="text-white text-lg font-semibold">
                  FuniroFurniture
                </span>
              </div>
            </div>
          ))}
        </Masonry>
        </div>
      </div>
    </section>
  );
}
