import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar({ auth, setAuth, userDetails, setSearch, search }) {

    const [openNav, setOpenNav] = useState(false);

    function logout(e) {
        e.preventDefault();
        setAuth(false);
    }

    function navopen() {
        setOpenNav(true);
    }

    function closenav() {
        setOpenNav(false);
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
                            <div className="navicon">
                                {
                                    openNav ?
                                        <>
                                            <div className="closenav" onClick={closenav}>
                                                <IoMdClose />
                                            </div>
                                        </> :
                                        <>
                                            <div className="navopen" onClick={navopen}>
                                                <FaBars />
                                            </div>
                                        </>
                                }
                            </div>
                            <div className="logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Square_One_Shopping_Centre_Logo.png" alt="logo" />
                            </div>
                            <div className="icons">
                                <div className="icon">
                                    <Link to="/cart"><FaShoppingCart /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bottom_bar ${openNav && 'active'}`}>
                        <div className="user_details">
                            <div className="icon">
                                <FaUser />
                            </div>
                            <div className="details">
                                {
                                    auth ?
                                        <>
                                            <h2>{userDetails.Name}</h2>
                                            <p>{userDetails.Email}</p>
                                        </>
                                        :
                                        <>
                                            <h2>Please, Sign In</h2>
                                        </>
                                }
                            </div>
                        </div>
                        <ul>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/shop" className="link">Shop</Link></li>
                            <li><Link to="/about" className="link">About</Link></li>
                            <li><Link to="/contact" className="link">Contact</Link></li>
                        </ul>
                        <div className="offer">
                            <h2>30% off in summer sale</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}