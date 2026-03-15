import "./App.css";
import NavBar from "./components/NavBar.jsx";
import MainHome from "./Pages/HomePage/MainHomePage.jsx";
import { BrowserRouter , Route , Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import SingleProductPage from "./Pages/ProductDetails/SingleProductPage.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/productDetails/:id" element={<SingleProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
