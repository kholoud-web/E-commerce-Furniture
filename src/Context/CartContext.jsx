import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user, updateUserCart } = useUser();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      setCart(user.cart || []);
    } else {
      setCart([]);
    }
  }, [user]);

  const addToCart = (product) => {
    if (!user) return;

    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    updateUserCart(updatedCart);
  };

  const decreaseCart = (productId) => {
    if (!user) return;

    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    updateUserCart(updatedCart);
  };

  const removeFromCart = (id) => {
    if (!user) return;

    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateUserCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    if (user) updateUserCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseCart,
        removeFromCart,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);











// import { useContext, useState, createContext, useEffect } from "react";

// const cartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState(()=>{
//     try{
//       const storedCart = localStorage.getItem("cart");
//       return storedCart ? JSON.parse(storedCart) : [];
//     }catch{
//       return [];
//     }
//   });
  
//   useEffect(()=>{
//     localStorage.setItem("cart" , JSON.stringify(cart))
//   },[cart]);
  
//   const addToCart = (product) => {
//   setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);

//       if (existing) {
//         const newQuantity = (existing.quantity || 1) + (product.quantity || 1);
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });  };
  
//       // Decrease quantity or remove
//   const decreaseCart = (productId) => {
//     setCart((prev) => {
//       return prev
//         .map((p) =>
//           p.id === productId ? { ...p, quantity: (p.quantity || 1) - 1 } : p
//         )
//         .filter((p) => p.quantity > 0); // remove if quantity <= 0
//     });
//   };


//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const cartCount = cart.reduce((acc , item )=> acc + (item.quantatity || 1) ,0);
//     const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * (item.quantity || 1),
//     0
//   );
//   const clearCart = ()=>{
//     setCart([]);
//   }

//   return (
//     <cartContext.Provider
//       value={{ cart, addToCart, removeFromCart, cartCount ,decreaseCart , totalPrice , clearCart }}
//     >
//       {children}
//     </cartContext.Provider>
//   );
// }

// export const useCart = () => useContext(cartContext);
