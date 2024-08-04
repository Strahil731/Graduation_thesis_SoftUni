import { BrowserRouter } from "react-router-dom";
import Rout from "./Components/rout";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { db } from "./Components/firebase";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

function App() {

    // Storing user details in useState hooks
    const [userDetails, setUserDetails] = useState();
    const [auth, setAuth] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    const cartdbref = collection(db, "cartData");

    async function addToCart(data) {
        if (auth === false) {
            alert("Please Log in");
        }
        else {
            const fetchcartdata = await getDocs(cartdbref);
            const cartsnap = fetchcartdata.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const findcartdata = cartsnap.find((x) => {
                return userDetails.id === x.userId && data.id === x.CartId;
            });

            if (findcartdata) {
                const cartdataref = doc(cartdbref, findcartdata.id);
                await updateDoc(cartdataref, { Qty: findcartdata.Qty + 1 });
                alert("This product is already in cart");
            }
            else {
                const addCartData = await addDoc(cartdbref, {
                    userId: userDetails.id,
                    Title: data.Name,
                    CartId: data.id,
                    img: data.img,
                    Des: data.des,
                    Cat: data.cat,
                    Price: data.price,
                    Type: data.type,
                    Qty: 1
                });
                alert("Product added successfully");
            }
        }
    }

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
                    addToCart={addToCart}
                    cart={cart}
                    setCart={setCart}
                    userDetails={userDetails}
                />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
