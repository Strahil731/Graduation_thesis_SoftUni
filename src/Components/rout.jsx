import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Shop from "./Shop";

export default function Rout({ setUserDetails, setAuth }) {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home
                        setUserDetails={setUserDetails}
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
                    element={<Shop />}
                />
            </Routes>
        </>
    );
}