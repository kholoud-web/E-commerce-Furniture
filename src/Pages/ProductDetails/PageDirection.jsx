import { Link } from "react-router"

export default function PageDirection({product}){
    return(
        <div className="bg-[#F9F1E7] w-full p-4 ">
        <span className="text-[#9F9F9F] font-light p-3">
          <Link to="/">Home</Link><span className="text-[#000000] font-normal px-4"> &gt; </span>
        </span>
         <span className="text-[#9F9F9F] font-light p-3">
          <Link to="/">Shop</Link><span className="text-[#000000] font-normal px-4"> &gt; </span>
        </span>

         <span className="text-[#000000] font-normal p-3">
                   {product.name}
        </span>
        </div>
    )
}