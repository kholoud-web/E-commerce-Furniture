import "./App.css";
import NavBar from "./components/NavBar.jsx";
import MainHome from "./Pages/HomePage/MainHomePage.jsx";
import { BrowserRouter , Route , Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/shop" element={<ShopPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
