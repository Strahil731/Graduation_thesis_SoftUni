import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ShopPage from "./pages/Shop/ShopPage";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ContactPage from "./pages/Contact/Contact";
import AboutPage from "./pages/About/AboutPage";
import { useEffect, useState } from "react";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            }
            else {
                setUserName("");
            }
        })
    });

    return (
        <>
            <div>
                <Navbar userName={userName} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App;