import icon1 from "/images/footer/Group.svg";
import icon2 from "/images/footer/Vector (1).svg";
import icon3 from "/images/footer/Vector (2).svg";
import icon4 from "/images/footer/Vector.svg";

export default function Features() {
  const Features = [
    {
      image: icon1,
      title: "High Quality",
      describtion: "crafted from top materials",
    },
    {
      image: icon2,
      title: "Warranty Protection",
      describtion: "Over 2 years",
    },
    {
      image: icon4,
      title: "Free Shipping",
      describtion: "Order over 150 $",
    },
    {
      image: icon3,
      title: "24 / 7 Support",
      describtion: "Dedicated support",
    },
  ];
  return (
<section className="py-16 px-6 md:px-10 bg-[#FAF3EA]">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
    {Features.map((feature) => (
      <div
        className="flex flex-col items-center text-center gap-3"
        key={feature.title}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-10 h-10 object-contain"
        />
        <div>
          <h4 className="text-[#242424] font-semibold text-sm md:text-base">
            {feature.title}
          </h4>
          <p className="text-[#898989] font-medium text-xs md:text-sm mt-1">
            {feature.describtion}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
