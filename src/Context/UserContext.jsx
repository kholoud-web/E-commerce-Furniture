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
 const login = (email,password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

 const foundUser = users.find(
  (u) => u.email === email && u.password === password
);
  if (foundUser) {
    setUser(foundUser);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
  } else {
    alert("User not found");
  }
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

 const placeOrder = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((u) => {
    if (u.email === user.email) {
      return {
        ...u,
        orders: [...u.orders, u.cart],
        cart: [],
      };
    }
    return u;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  const updatedUser = updatedUsers.find(
    (u) => u.email === user.email
  );

  setUser(updatedUser);
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
};
  
  return (
    <userContext.Provider value={{ user, login, logout , addToCart , placeOrder}}>
      {children}
    </userContext.Provider>
  );
   };


export const useUser = () => useContext(userContext);
