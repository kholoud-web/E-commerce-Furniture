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
    const fullUser={
      ...userData,
      cart:[],
      orders:[],
    }
    setUser(fullUser);
    localStorage.setItem("user", JSON.stringify(fullUser))
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addToCart = (product)=>{
    const updatedUser = {
      ...user,
      cart :[...user.cart , product]
    }
    setUser(updatedUser);
    localStorage.setItem("user" ,JSON.stringify(updatedUser));
  }

  const placeOrder =()=>{
      const updatedUser={
        ...user,
        orders:[...user.orders, user.cart],
          cart:[],
      }
      setUser(updatedUser);
      localStorage.setItem("user" , JSON.stringify(updatedUser))
  }
  
  return (
    <userContext.Provider value={{ user, login, logout , addToCart , placeOrder}}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => useContext(userContext);
