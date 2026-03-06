import ShopFilter from "./ShopFilter"
import ShopHero from "./ShopHero"
import Products from "./Products"
import OurProducts from "../HomePage/OurProducts"

export default function ShopPage(){
    return(
        <>
         <ShopHero/>
         <ShopFilter/>
         <OurProducts/>
        </>
    )
}