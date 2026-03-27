import { createContext , useContext , useState } from "react";

const compareContext = createContext();

export function CompareProvider({children}){
  const [compareList , setCompareList] = useState([]);

  const addToCompare = (product)=>{
    setCompareList((prev)=>{
        if(prev.find((p)=>p.id === product.id)){
         alert("Product is already in compare list.");
            return prev;
        }

        if(prev.length >= 2){
            alert("You can only compare 2 products");
            return prev ; 

        }
        return [...prev , product];
    })
  }

const removeFromCompare = (id)=>{
    setCompareList((prev)=> prev.filter((p)=> p.id !== id));
}

const clearCompare =()=> setCompareList([]);
const isInCompare = (id) => compareList.some((p) => p.id === id); 

return (
    <compareContext.Provider value={{compareContext , addToCompare , removeFromCompare , clearCompare , isInCompare}}>

   {children}

    </compareContext.Provider>
)

}

export const useCompare = ()=> useContext(compareContext);
