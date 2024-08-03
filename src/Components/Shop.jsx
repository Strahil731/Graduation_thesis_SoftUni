import "../Styles/shop.css";

export default function Shop() {
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}