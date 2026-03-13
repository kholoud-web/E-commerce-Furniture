import { useState } from "react";
import logo from "../../public/images/Meubel House_Logos-05.svg";
import { Import, User } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import {useCart} from "../Context/CartContext";
import {useUser} from "../Context/UserContext";
import SearchModal from "./SearchModal";
import {Products} from "../Products";
import CartDrawer from "./CartDrawer";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/contact" },
    { name: "Contact", path: "/contact" },
  ];

  const {cartCount} = useCart();
  const [searchOpen , setSearchOpen] = useState(false);
    const {user} = useUser();
  const [cartOpen , setCartOpen] = useState(false);


  return (
    <>
    <nav className="bg-[#FFFFFF] px-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center">
          {/* Left - Logo */}
          <div className="flex flex-1 justify-start">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-[#000000] font-bold text-2xl">Furniro</span>
          </div>

          {/* Center - Desktop Menu */}
          <div className="hidden sm:flex flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-[#000000] hover:text-indigo-600 px-4"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right - Profile + Mobile Button */}
          <div className="flex flex-1 justify-end items-center gap-4">
            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-gray-700 "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {/* Profile */}

            <button  aria-label="User" className="cursor-pointer">
              <Link to={user ? "/profile" : "/login"}>
              <User />
              </Link>
            </button>
            <button onClick={()=>setSearchOpen(true)}
             aria-label="Search Products" className="cursor-pointer">
              <Search />              
            </button>
            <button onClick={()=>setCartOpen(true)}
            aria-label="Shopping Cart" className="relative cursor-pointer">
              <ShoppingCart />
              {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                    {cartCount}
                  </span>
                )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 transition-all duration-300">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-sm font-medium text-gray-700 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
    <SearchModal
     isOpen={searchOpen}
     onClose={()=>setSearchOpen(false)}
     products={Products}
    />
    <CartDrawer
     isOpen={cartOpen}
     onClose={()=>setCartOpen(false)}    
    />
    </>
  );
}
