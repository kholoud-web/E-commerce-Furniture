import "./App.css";
import NavBar from "./components/NavBar.jsx";
import MainHome from "./Pages/HomePage/MainHomePage.jsx";
import { BrowserRouter , Route , Routes } from "react-router";




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
