import bg from "../../../public/images/home/scandinavian-interior-mockup-wall-decal-background 1.svg"
import MainButton from "../../components/MainButton"

export default function Home(){
    return(
        <section  className="h-screen bg-cover bg-center py-40 "
      style={{ backgroundImage: `url(${bg})` }} >
          <div className="flex items-center ">
            <div className="min-w-1/2"></div>
            <div className=" min-w-1/2  ">
               <div className="flex items-center justify-center flex-col p-6  bg-[#FFF3E3] w-fit items-start">
                 <h4 className="font-semibold ">New Arrival</h4>
                <h1 className="text-[#B88E2F] font-bold text-4xl">Discover Our <br/> New Collection</h1>
                <p className="py-4 text-[#333333] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
                 <div>
                   <MainButton >Click Me</MainButton>
                 </div>
               </div>
            </div>
          </div>
        </section>
    )
}