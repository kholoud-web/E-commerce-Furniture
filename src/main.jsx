import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import { CompareProvider } from "./Context/CompareContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <SearchProvider>
          <CompareProvider>
            <App />
          </CompareProvider>
        </SearchProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>,
);
