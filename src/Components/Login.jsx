import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/auth.css";
import { db, app } from "./firebase";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Login({ setUserDetails, setAuth }) {
    // Storing the input value using useState hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Creating database reference to store user information
    const dbRef = collection(db, 'Users');

    // Creating User Account on Firebase
    async function authentication(e) {

        if (email.length === 0 || password.length === 0) {
            alert("Please fill in all fields!");
        }
        else {
            try {
                e.preventDefault();

                // Creating New User Account
                const createAccount = await app.auth().signInWithEmailAndPassword(email, password);

                if (createAccount) {
                    const getData = await getDocs(dbRef);
                    const data = getData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    const userData = data.find((info) => {
                        return info.Email === email;
                    });

                    setUserDetails(userData);
                    setAuth(true);
                    navigate("/");
                    alert("Login Successfully");

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
                            type="email"
                            placeholder="Enter email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <button onClick={authentication}>Login</button>
                    <p>Don't have an account? <Link to="/">Register</Link></p>
                </div>
            </div>
        </div>
    );
}