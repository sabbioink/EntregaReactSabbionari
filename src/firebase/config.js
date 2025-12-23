import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIQJgqAvfYEbhDMReXzWjGMXJHTR7EABQ",
    authDomain: "tecnostore-react-bdfc2.firebaseapp.com",
    projectId: "tecnostore-react-bdfc2",
    storageBucket: "tecnostore-react-bdfc2.firebasestorage.app",
    messagingSenderId: "843549435766",
    appId: "1:843549435766:web:ea9b1affc55a8f4c93bc57",
    measurementId: "G-KBK7DSLYEX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);