import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ShopPage from "./pages/Shop/ShopPage";
import LoginPage from "./pages/Login/Login";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </>
    )
}

export default App;