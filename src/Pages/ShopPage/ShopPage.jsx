import ShopFilter from "./ShopFilter";
import ShopHero from "./ShopHero";
import ShopProducts from "./Products";
import { useState } from "react";
import { Products } from "../../Products";

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("default");
  const [showCount, setShowCount] = useState(4);
  const [view, setView] = useState("grid");


  const filteredProducts = [...Products].sort((a, b) => {
    if (sortBy === "priceLow") {
    return a.price - b.price;
  }

  if (sortBy === "priceHigh") {
    return b.price - a.price;
  }
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;                  
  });

  return (
    <>
      <ShopHero />
      <ShopFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        showCount={showCount}
        setShowCount={setShowCount}
        totalProducts={Products.length}
        view={view}
        setView={setView}
      />
      <ShopProducts products={filteredProducts}  view={view} showCount={showCount}/>
    </>
  );
}
