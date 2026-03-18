import Hero from "../../components/Hero";
import CheckoutSteps from "./CheckoutSteps";

export default function Checkout(){
    return(
        <>
      <Hero title="Checkout" currentPage="Checkout"/>
      <CheckoutSteps/>
       
      </>
    )
}