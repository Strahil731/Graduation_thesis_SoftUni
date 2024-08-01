import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCk9xLELunFFehwNN_ddmYWe5dz3rFg4Us",
    authDomain: "myshop-a6615.firebaseapp.com",
    projectId: "myshop-a6615",
    storageBucket: "myshop-a6615.appspot.com",
    messagingSenderId: "148120680438",
    appId: "1:148120680438:web:1ba8af5858fd2b6f6cb9d7"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();