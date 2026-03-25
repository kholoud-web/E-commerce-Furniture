import Hero from "../../components/Hero";
import AboutDetails from "./AboutDetails";


export default function AboutPage(){
    return(
        <>
        <Hero title="About" currentPage="About"/>
        <AboutDetails/>
        </>
    )
}