import { Products } from "../../Products";
import PageDirection from "./PageDirection";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";

import { useParams } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  const product = Products.find((p) => p.id === Number(id));
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section>
      <PageDirection product={product} />
      <ProductDetails  product={product}/>
      <ProductDescription />
    </section>
  );
}
