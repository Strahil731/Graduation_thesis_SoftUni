import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    function ShowMenuHandler() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false);
    }

    return (
        <>
            <div>
                <header className="bg-white border-b border-gray-200 relative">
                    <div className="container mx-auto flex justify-between p-5 items-center">
                        <div>
                            <h3 className="font-bold text-2xl">
                                My<span className="text-[yellowgreen]">Shop</span>
                            </h3>
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex items-center text-lg justify-center font-semibold">
                                <Link to="/">
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                                </Link>
                                <Link to="/shop">
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">Shop</li>
                                </Link>
                                <li className="mr-5 hover:text-gray-900 cursor-pointer">About</li>
                                <li className="mr-5 hover:text-gray-900 cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        {isOpen
                            ? <div>
                                <ul className="flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold">
                                    <Link to="/">
                                        <li className="mt-5 hover:text-gray-900 cursor-pointer">Home</li>
                                    </Link>
                                    <Link to="/shop">
                                        <li className="mr-5 hover:text-gray-900 cursor-pointer">Shop</li>
                                    </Link>
                                    <li className="mt-5 hover:text-gray-900 cursor-pointer">About</li>
                                    <li className="mt-5 hover:text-gray-900 cursor-pointer">Contact</li>
                                </ul>
                                <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursot-pointer">
                                    <ImCross size={30} onClick={ShowMenuHandler} />
                                </button>
                            </div>
                            : ""}


                        <div className="flex justify-center items-center gap-3">
                            <Link to="/cart">
                                <button><FaShoppingCart size={25} /></button>
                            </Link>
                            <Link to="/login">
                                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
                                    Log in
                                </button>
                            </Link>
                            {isOpen
                                ? ""
                                : <button className="md:hidden" onClick={ShowMenuHandler}>
                                    <RxHamburgerMenu size={25} />
                                </button>
                            }
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}