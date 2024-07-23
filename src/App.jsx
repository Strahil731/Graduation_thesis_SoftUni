import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ShopPage from "./pages/Shop/ShopPage";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ContactPage from "./pages/Contact/Contact";
import AboutPage from "./pages/About/AboutPage";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </>
    )
}

export default App;