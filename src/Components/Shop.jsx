import { useEffect, useState } from "react";
import "../Styles/shop.css";

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

    async function filterCat(category) {
        const response = await fetch("https://myshop-a6615-default-rtdb.europe-west1.firebasedatabase.app/.json", {
            method: "GET"
        });
        const data = await response.json();

        const filterData = data.filter((x) => {
            return x.cat === category;
        });

        setProduct(filterData);
    }

    async function allProducts(){
        const response = await fetch("https://myshop-a6615-default-rtdb.europe-west1.firebasedatabase.app/.json", {
            method: "GET"
        });
        const data = await response.json();
        setProduct(data)
    }

    return (
        <>
            <div className="shop">
                <h4>Home / Shop</h4>
                <div className="shop_container">
                    <div className="left_box">
                        <div className="contant">
                            <h3><span>Product</span> Categories</h3>
                            <ul>
                                <li onClick={allProducts}>All Product</li>
                                <li onClick={() => filterCat("Laptop")}>Laptop</li>
                                <li onClick={() => filterCat("Computer")}>Computer</li>
                                <li onClick={() => filterCat("Smart Watch")}>Smart Watch</li>
                                <li onClick={() => filterCat("Phone")}>Phone</li>
                                <li onClick={() => filterCat("Television")}>Television</li>
                                <li onClick={() => filterCat("Audio System")}>Audio System</li>
                                <li onClick={() => filterCat("Game")}>Game</li>
                                <li onClick={() => filterCat("Navigation")}>Navigation</li>
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