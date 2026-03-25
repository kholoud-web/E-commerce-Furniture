import { useState, useContext, createContext , useEffect } from "react";

const userContext = createContext();

export  function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if(storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[]);

  // login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData))
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  
  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => useContext(userContext);
