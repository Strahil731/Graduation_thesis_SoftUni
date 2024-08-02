import { BrowserRouter } from "react-router-dom";
import Rout from "./Components/rout";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {

    // Storing user details in useState hooks
    const [userDetails, setUserDetails] = useState();
    const [auth, setAuth] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Navbar auth={auth} setAuth={setAuth} userDetails={userDetails} />
                <Rout
                    setUserDetails={setUserDetails}
                    setAuth={setAuth}
                    auth={auth}
                />
            </BrowserRouter>
        </>
    )
}

export default App
