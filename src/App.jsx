import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductView />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
