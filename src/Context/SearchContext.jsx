import { useState , useContext , createContext } from "react";

const searchContext = createContext();

export function SearchProvider({children}){
    const [search , setSearch] = useState("");

    return(
       <searchContext.Provider value={{search, setSearch}}>
        {children}
       </searchContext.Provider>
    )
}

 export const useSearch = ()=>useContext(searchContext);