import Hero from "../../components/Hero"
import CartContainer from "./CartContainer"


export default function CartPage(){
    return(
        <>      
       <Hero title="Cart" currentPage="Cart"/>
       <CartContainer />
        </>
    )
}