import { BrowserRouter } from "react-router-dom";
import Rout from "./Components/rout";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

    // Storing user details in useState hooks
    const [userDetails, setUserDetails] = useState();
    const [auth, setAuth] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <BrowserRouter>
                <Navbar
                    auth={auth}
                    setAuth={setAuth}
                    userDetails={userDetails}
                    setSearch={setSearch}
                    search={search}
                />
                <Rout
                    setUserDetails={setUserDetails}
                    setAuth={setAuth}
                    auth={auth}
                />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
