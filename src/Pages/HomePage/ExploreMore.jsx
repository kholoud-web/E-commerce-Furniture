import MainButton from "../../components/MainButton";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Inner Peace",
    category: "Bed Room",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    title: "Modern Light",
    category: "Living Room",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Clean Space",
    category: "Dining",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Inner Peace",
    category: "Bed Room",
  },
];

export default function ExploreMore() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );  };


  return (
    <section className="py-12 px-16 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-[#FCF8F3]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center ">
        {/* left text */}
        <div className="md:col-span-4">
          <h3 className="font-bold text-2xl text-[#3A3A3A] ">
            50+ Beautiful rooms <br /> inspiration
          </h3>
          <p className="text-[#616161] font-medium py-4">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <MainButton>Explore More</MainButton>
        </div>
        {/* right carasol */}
        <div className="relative md:col-span-8 overflow-hidden max-w-full">
       
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out overflow-hidden"
            style={{
              transform: `translateX(-${current * 75}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-[70%] flex-shrink-0 transition-all duration-500 ${
                  index === current
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-70"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
          >
            →
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-yellow-600 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
