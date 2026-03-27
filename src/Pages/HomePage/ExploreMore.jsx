
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

const SLIDE_WIDTH = 80;  // % of container each slide takes
const GAP = 4;           // gap in % between slides

export default function ExploreMore() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    // ✅ fixed: px-8 mobile, px-16 desktop (was inverted)
    <section className="py-12 px-8 lg:px-16 bg-[#FCF8F3]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

        {/* Left Text */}
        <div className="md:col-span-4">
          <h3 className="font-bold text-2xl text-[#3A3A3A]">
            50+ Beautiful rooms <br /> inspiration
          </h3>
          <p className="text-[#616161] font-medium py-4">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you
          </p>
          <MainButton>Explore More</MainButton>
        </div>

        {/* Right Carousel */}
        <div className="md:col-span-8">

          {/* ✅ Arrows sit OUTSIDE the overflow-hidden div so they're always visible */}
          <div className="relative">

            {/* Track */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  // ✅ correct math: each step moves exactly one slide+gap width
                  transform: `translateX(-${current * (SLIDE_WIDTH + GAP)}%)`,
                  gap: `${GAP}%`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex-shrink-0 relative"
                    style={{ width: `${SLIDE_WIDTH}%` }} // ✅ inline keeps math consistent
                  >
                    {/* ✅ responsive height: shorter on mobile */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-52 sm:h-72 md:h-80 lg:h-[420px] object-cover rounded-2xl transition-all duration-500 ${
                        index === current ? "opacity-100 scale-100" : "opacity-60 scale-95"
                      }`}
                      loading="lazy"
                    />

                    {/* Slide label */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow">
                      <p className="text-xs text-gray-400">{slide.category}</p>
                      <p className="font-semibold text-sm text-gray-800">{slide.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Arrows outside overflow-hidden, won't get clipped */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition z-10"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition z-10"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-yellow-600 w-6"   // ✅ active dot expands width
                    : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}