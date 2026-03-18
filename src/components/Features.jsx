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
    <section className=" py-16 px-6 md:px-10 bg-[#FAF3EA]">
      <div className="flex items-center justify-evenly gap-6">
        {Features.map((feature) => {
          return (
            <div className="flex gap-2" key={feature.title}>
              <img src={feature.image} alt={feature.title} />
              <div>
                <h4 className="text-[#242424] font-semibold">
                  {feature.title}
                </h4>
                <p className="text-[#898989] font-medium">
                  {feature.describtion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
