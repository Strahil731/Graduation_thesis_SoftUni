import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/auth.css";
import { db, app } from "./firebase";
import { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function Register({ setUserDetails, setAuth }) {

    // Storing the input value using useState hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Creating database reference to store user information
    const dbRef = collection(db, 'Users');

    // Creating User Account on Firebase
    async function authentication(e) {

        if (name.length === 0 || email.length === 0 || phone.length === 0 || password.length === 0) {
            alert("Please fill in all fields!");
        }
        else {
            try {
                e.preventDefault();

                // Creating New User Account
                const createAccount = await app.auth().createUserWithEmailAndPassword(email, password);

                if (createAccount) {
                    // Storing the user data
                    const userInfo = await addDoc(dbRef, {
                        Name: name,
                        Email: email,
                        Phone: phone
                    });

                    if (userInfo) {
                        // Fetching the userData from database
                        const getData = await getDocs(dbRef);
                        const data = getData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                        const userData = data.find((info) => {
                            return info.Email === email;
                        });

                        setUserDetails(userData);
                        setAuth(true);
                        navigate("/");
                        alert("Register Successfully");
                    }
                }
                else {
                    alert("Error!!!");
                }
            } catch (error) {
                alert(error);
            }
        }
    }

    return (
        <div className="auth">
            <div className="container">
                <h2>Squareone</h2>
                <div className="icon">
                    <FaShoppingCart />
                </div>
                <div className="form">

                    <div className="box">
                        <input
                            type="text"
                            placeholder="Enter name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="box">
                        <input
                            type="email"
                            placeholder="Enter email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="box">
                        <input
                            type="text"
                            placeholder="Enter phone number..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="box">
                        <input
                            type="password"
                            placeholder="Enter password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={authentication}>Register</button>
                    <p>Have an existing account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}