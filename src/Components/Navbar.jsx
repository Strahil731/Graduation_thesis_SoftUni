import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar({ auth, setAuth }) {

    function logout(e) {
        e.preventDefault();
        setAuth(false);
    }
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="top_bar">
                        <p className="thisP">Get free shipping - Free 30 day money back guarantee</p>

                        {
                            auth ?
                                <>
                                    <p>
                                        <Link
                                            to="/login"
                                            className="link"
                                            onClick={logout}
                                        >
                                            Logout
                                        </Link>
                                    </p>
                                </> :
                                <p>
                                    <Link
                                        to="/login"
                                        className="link"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        className="link"
                                    >
                                        Register
                                    </Link>
                                </p>
                        }

                    </div>
                    <div className="mid_bar">
                        <div className="contant">
                            <div className="logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Square_One_Shopping_Centre_Logo.png" alt="logo" />
                            </div>
                            <div className="search_bar">
                                <input type="text" placeholder="Search..." />
                                <button>Search</button>
                            </div>
                            <div className="icons">
                                <div className="icon">
                                    <FaShoppingCart />
                                </div>
                                <div className="icon">
                                    <FaRegHeart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}