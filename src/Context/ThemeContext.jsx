// import { createContext ,useContext , useState } from "react";

// const ThemeContext = createContext();

// export default function ThemeProvider({children}){
//     const [theme , setTheme] = useState("light")
//    const themes = {
//     light:{
//     primary :"" ,
//     secondary:"",
//     background:"",
//     text:"",
//     }
//    }

// return (
//     <ThemeContext.Provider value={{colors : themes[theme]}} >

//     {children}
//     </ThemeContext.Provider>
// )

// }

// export const useTheme = () => useContext(ThemeContext);