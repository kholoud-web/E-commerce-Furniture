import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      const fullUser = {
        ...foundUser,
        cart: foundUser.cart || [],
        orders: foundUser.orders || [],
      };

      setUser(fullUser);
      localStorage.setItem("currentUser", JSON.stringify(fullUser));
      return true;
    }

    return false;
  };

  const registerUser = (data) => {
    //     const existingUser = users.find((u) => u.email === data.email);
    //     if (existingUser) {
    //   alert("Email already exists");
    //   return;
    // }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      cart: [],
      orders: [],
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const updateUserCart = (newCart) => {
    if (!user) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, cart: newCart } : u,
    );

    const updatedCurrentUser = updatedUsers.find((u) => u.email === user.email);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    setUser(updatedCurrentUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        registerUser,
        logout,
        updateUserCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
