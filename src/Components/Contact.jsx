import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Styles/contact.css";
import { useState } from "react";
import { db } from "../Components/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Contact({ auth }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const dbref = collection(db, "Message");

    async function sendMessage() {
        if (auth === false) {
            alert("Please Login");
        }
        else {
            if ((name || []).length === 0 || (email || []).length === 0 || (subject || []).length === 0 || (message || []).length === 0) {
                alert("Please fill in all fields");
            }
            else {
                await addDoc(dbref, {
                    Name: name,
                    Email: email,
                    Subject: subject,
                    Message: message
                });

                alert("Message send success!");
            }
        }
    }

    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="address">
                        <div className="address_container">
                            <h3>Contact Us</h3>
                            <div className="box">
                                <div className="title">
                                    <div className="icon">
                                        <IoHome />
                                    </div>
                                    <h4>Address</h4>
                                </div>
                                <div className="detail">
                                    <p>Nesebar, Bulgaria</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="title">
                                    <div className="icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <h4>Phone</h4>
                                </div>
                                <div className="detail">
                                    <p>1234567890 / 0987654321</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="title">
                                    <div className="icon">
                                        <MdEmail />
                                    </div>
                                    <h4>Email address</h4>
                                </div>
                                <div className="detail">
                                    <p>strahil888@abv.bg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <div className="message_container">
                            <h3>Tell Us Your Message</h3>
                            <div className="input_box">
                                <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Subject..." value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <textarea placeholder="Message!" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}