import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Contact from "./Contact";

export default function Rout({ setUserDetails, setAuth, addToCart, cart, setCart, userDetails, auth }) {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home
                        setUserDetails={setUserDetails}
                        addToCart={addToCart}
                    />}
                />
                <Route
                    path="/register"
                    element={<Register
                        setUserDetails={setUserDetails}
                        setAuth={setAuth}
                    />}
                />

                <Route
                    path="/login"
                    element={<Login
                        setUserDetails={setUserDetails}
                        setAuth={setAuth}
                    />}
                />

                <Route
                    path="/shop"
                    element={<Shop
                        addToCart={addToCart}
                    />}
                />

                <Route
                    path="/cart"
                    element={<Cart
                        setCart={setCart}
                        cart={cart}
                        userDetails={userDetails}
                        auth={auth}
                    />}
                />

                <Route
                    path="/contact"
                    element={<Contact auth={auth}/>}
                />
            </Routes>
        </>
    );
}