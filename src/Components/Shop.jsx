import { useEffect, useState } from "react";
import "../Styles/shop.css";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";

export default function Shop({ addToCart }) {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function showProduct() {
            const response = await fetch("https://myshop-a6615-default-rtdb.europe-west1.firebasedatabase.app/.json", {
                method: "GET"
            });
            const data = await response.json();

            setProduct(data);
        }

        showProduct();
    }, []);

    return (
        <>
            <div className="shop">
                <h4>Home / Shop</h4>
                <div className="shop_container">
                    <div className="left_box">
                        <div className="contant">
                            <h3><span>Product</span> Categories</h3>
                            <ul>
                                <li>Laptop</li>
                                <li>Computer</li>
                                <li>Smart Watch</li>
                                <li>Phone</li>
                                <li>Television</li>
                                <li>Audio System</li>
                                <li>Game</li>
                                <li>Navigation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="contant">
                            <div className="top_banner">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/004/299/818/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                                    alt="banner"
                                />
                            </div>
                            <h2>Shop Now</h2>
                            <div className="product_container">
                                {
                                    product.map((currentEl) => {
                                        return (
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={currentEl.img} alt="image" />
                                                    </div>
                                                    <div className="detail">
                                                        <div className="icons">
                                                            <div className="icon">
                                                                <CiHeart />
                                                            </div>
                                                            <div className="icon">
                                                                <TfiReload />
                                                            </div>
                                                            <div className="icon">
                                                                <CiSearch />
                                                            </div>
                                                        </div>
                                                        <h3>{currentEl.Name}</h3>
                                                        <h4>${currentEl.price}</h4>
                                                        <button onClick={() => addToCart(currentEl)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}