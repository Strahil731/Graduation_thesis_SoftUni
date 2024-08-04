import { Link } from "react-router-dom";
import "../Styles/home.css";
import { FaShippingFast } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaComments } from "react-icons/lia";
import { useEffect, useState } from "react";

export default function Home({ addToCart }) {

    const [sale, setSale] = useState([]);
    const [newProduct, setNewProduct] = useState([]);

    async function fetchData() {
        const response = await fetch("https://myshop-a6615-default-rtdb.europe-west1.firebasedatabase.app/.json", {
            method: "GET"
        });
        const data = await response.json();

        setSale(data);

        const saleFilter = data.filter((currentEl) => {
            return currentEl.type === 'sale';
        });

        setSale(saleFilter);

        const newproduct = data.filter((currentEl) => {
            return currentEl.type === 'new';
        });

        setNewProduct(newproduct);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <div className="info">
                            <h2>Playstation 5:for best gaming </h2>
                            <p>Get <span>50% off</span> This Week</p>
                            <Link to="/shop"><button>Discover Now</button></Link>
                        </div>
                        <div className="img_box">
                            <img src="https://www.kickgame.com/cdn/shop/products/sony-playstation-ps5-blu-ray-edition-console-uk-plug-white_1.png?v=1665665535&width=1024" alt="acer" />
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="container">

                        <div className="box">
                            <div className="icon">
                                <FaShippingFast />
                            </div>
                            <div className="info">
                                <h3>FREE DELIVERY</h3>
                                <p>For all oders over $100</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <CiCreditCard1 />
                            </div>
                            <div className="info">
                                <h3>SECURE PAYMENT</h3>
                                <p>100% secure payment</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <GiReceiveMoney />
                            </div>
                            <div className="info">
                                <h3>SHOP WITH CONFIDENCE</h3>
                                <p>If goods have problem</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <LiaComments />
                            </div>
                            <div className="info">
                                <h3>HELP CENTER</h3>
                                <p>Dedicated 24/7 support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale_products">
                    <h2>Hot Deal Products</h2>
                    <div className="container">
                        {
                            sale.map((currentEl) => {
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
                <div className="mid_banner">
                    <div className="container">
                        <div className="banner_box">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/003/810/922/small/horizontal-banner-for-black-friday-sale-black-balls-with-shiny-ribbons-golden-letters-vector.jpg"
                                alt="banner"
                            />
                        </div>
                        <div className="banner_box">
                            <img
                                src="https://piktochart.com/wp-content/uploads/2022/11/large-142.jpg"
                                alt="banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}