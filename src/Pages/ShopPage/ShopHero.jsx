import hero from "/images/shopPge/Rectangle 1.svg";
import { Link } from "react-router";

export default function ShopHero() {
  return (
    <section
      className=" bg-cover bg-center py-40 "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-medium text-[#000000] text-4xl">Shop</h2>
        <p className="text-[#000000] font-light py-3">
          <Link to="/">Home</Link> &gt; Shop
        </p>
      </div>
    </section>
  );
}
