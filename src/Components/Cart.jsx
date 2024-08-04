import { useEffect } from "react";
import { db } from "./firebase";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../Styles/cart.css";

export default function CartId({ setCart, cart, userDetails, auth }) {

    const cartdbref = collection(db, "cartData");

    useEffect(() => {
        fetchCartData();
    }, []);

    async function fetchCartData() {
        const cartdata = await getDocs(cartdbref);
        const cartsnap = cartdata.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        const findcartdata = cartsnap.filter((x) => {
            return userDetails.id === x.userId;
        });

        setCart(findcartdata);
    }

    const cartLength = (cart || []).length === 0;

    async function increment(data) {
        const cartdataref = doc(cartdbref, data.id);
        await updateDoc(cartdataref, {
            Qty: data.Qty + 1
        });
        fetchCartData();
    }

    async function decrement(data) {

        if (data.Qty <= 1) {
            const cartdataref = doc(cartdbref, data.id);
            await deleteDoc(cartdataref);
            fetchCartData();
        }
        else {
            const cartdataref = doc(cartdbref, data.id);
            await updateDoc(cartdataref, {
                Qty: data.Qty - 1
            });
            fetchCartData();
        }
    }

    async function removeItem(data) {
        const cartdataref = doc(cartdbref, data.id);
        await deleteDoc(cartdataref);
        fetchCartData();
    }

    const totalPrice = cart.reduce((price, item) => price + item.Qty * item.Price, 0);

    return (
        <>
            <div className="cart">
                <h2>Cart:</h2>
                {
                    auth ?
                        <>
                            {
                                cartLength ?
                                    <>
                                        <div className="empty_cart">
                                            <h2>Cart is empty!</h2>
                                            <Link to="/shop"><button>Shop Now</button></Link>
                                        </div>
                                    </> :
                                    <>
                                        <div className="cart_product">
                                            {
                                                cart.map((currentEl) => {
                                                    return (
                                                        <>
                                                            <div className="box">
                                                                <div className="img_box">
                                                                    <img src={currentEl.img} alt="image" />
                                                                </div>
                                                                <div className="detail">
                                                                    <h3>{currentEl.Title}</h3>
                                                                    <p>Price: ${currentEl.Price}</p>
                                                                    <div className="qty">
                                                                        <button onClick={() => increment(currentEl)}>+</button>
                                                                        <input type="number" value={currentEl.Qty} readOnly />
                                                                        <button onClick={() => decrement(currentEl)}>-</button>
                                                                    </div>
                                                                    <h3 className="total_price">Total: ${currentEl.Qty * currentEl.Price}</h3>
                                                                    <button className="removeBtn" onClick={() => removeItem(currentEl)}>Remove</button>
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className="totalPrice">
                                            <h3>SubTotal: ${totalPrice}</h3>
                                        </div>
                                        <div className="checkout">
                                            <button>Checkout</button>
                                        </div>
                                    </>
                            }
                        </> :
                        <>
                            <div className="user_login">
                                <h2>Please Log in</h2>
                                <Link to="/login"><button>Login Now</button></Link>
                            </div>
                        </>
                }
            </div>
        </>
    );
}