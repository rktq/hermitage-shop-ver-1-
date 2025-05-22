import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <SiteFooter />
    </Router>
  );
}
