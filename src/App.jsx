import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import Products from "./pages/Procucts";
import ProductView from "./pages/ProductView";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ProfilePage from "./pages/ProfilePage";






export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">

        
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        


        <Footer />
      </div>
    </BrowserRouter>
  );
}



