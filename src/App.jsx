import "./App.css";
import NavBar from "./components/NavBar.jsx";
import MainHome from "./Pages/HomePage/MainHomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import SingleProductPage from "./Pages/ProductDetails/SingleProductPage.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import Checkout from "./Pages/CheckoutPage/Checkout.jsx";
import OrderSuccess from "./Pages/CheckoutPage/OrderSuccess.jsx";
import Features from "./components/Features.jsx";
import ComparisonPage from "./Pages/Comparison/ComparisonPage.jsx";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productDetails/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route path="/comparisonPage" element={<ComparisonPage />} />
        <Route path="/contactUs" element={<ContactUsPage/>}/>
      </Routes>
      <Features />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
