
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import MainHome from "./Pages/HomePage/MainHomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import Register from "./Pages/RegisterPage/Register.jsx";
import { lazy, Suspense } from "react";

const ShopPage = lazy(() => import("./Pages/ShopPage/ShopPage.jsx"));
const SingleProductPage = lazy(() =>
  import("./Pages/ProductDetails/SingleProductPage.jsx")
);
const CartPage = lazy(() => import("./Pages/CartPage/CartPage.jsx"));
const Checkout = lazy(() => import("./Pages/CheckoutPage/Checkout.jsx"));
const OrderSuccess = lazy(() => import("./Pages/CheckoutPage/OrderSuccess.jsx"));
const ComparisonPage = lazy(() => import("./Pages/Comparison/ComparisonPage.jsx"));
const ContactUsPage = lazy(() => import("./Pages/ContactUs/ContactUsPage.jsx"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage.jsx"));
const Profile = lazy(() => import("./Pages/UserProfile/Profile.jsx"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-lg font-medium">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/productDetails/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/orderSuccess" element={<OrderSuccess />} />
          <Route path="/comparisonPage" element={<ComparisonPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>

      <Features />
      <Footer />
    </BrowserRouter>
  );
}

export default App;






















// import "./App.css";
// import NavBar from "./components/NavBar.jsx";
// import MainHome from "./Pages/HomePage/MainHomePage.jsx";
// import { BrowserRouter, Route, Routes } from "react-router";
// import Footer from "./components/Footer.jsx";
// import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
// import SingleProductPage from "./Pages/ProductDetails/SingleProductPage.jsx";
// import CartPage from "./Pages/CartPage/CartPage.jsx";
// import Checkout from "./Pages/CheckoutPage/Checkout.jsx";
// import OrderSuccess from "./Pages/CheckoutPage/OrderSuccess.jsx";
// import Features from "./components/Features.jsx";
// import ComparisonPage from "./Pages/Comparison/ComparisonPage.jsx";
// import ContactUsPage from "./Pages/ContactUs/ContactUsPage.jsx";
// import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
// import Login from "./Pages/LoginPage/Login.jsx";
// import Profile from "./Pages/UserProfile/Profile.jsx";
// import Register from "./Pages/RegisterPage/Register.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import AuthLayout from "./components/AuthLayout.jsx";
// import { lazy, Suspense } from "react";
// const LazyShopPage = lazy(() => import("./Pages/ShopPage/ShopPage.jsx"));

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<MainHome />} />
//         <Route path="/shop" element={<ShopPage />} />
//         <Route path="/productDetails/:id" element={<SingleProductPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={
//          <ProtectedRoute>
//            <Checkout />
//           </ProtectedRoute>
//           } />
//         <Route path="/orderSuccess" element={<OrderSuccess />} />
//         <Route path="/comparisonPage" element={<ComparisonPage />} />
//         <Route path="/contactUs" element={<ContactUsPage/>}/>
//         <Route path="/about" element={<AboutPage/>}/>
//         <Route path="/profile" element={<Profile/>}/>
//         <Route element={<AuthLayout/>}>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>

//         </Route>
//       </Routes>
//       <Features />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
