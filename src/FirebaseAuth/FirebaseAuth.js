import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCx0lHwASYtibbrjjTWPgmsiNV_KyX2CWA",
    authDomain: "userdata-a01df.firebaseapp.com",
    projectId: "userdata-a01df",
    storageBucket: "userdata-a01df.appspot.com",
    messagingSenderId: "770876826522",
    appId: "1:770876826522:web:f503a3e25db1f1809ed023"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }