import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBoMsIfT-QAzWVIPhnOK4MN5Jrr1M5Wvio",
    authDomain: "revuva.firebaseapp.com",
    projectId: "revuva",
    storageBucket: "revuva.firebasestorage.app",
    messagingSenderId: "405705023222",
    appId: "1:405705023222:web:f7f9882ffc13f19ee4d6d7",
    measurementId: "G-E62P63M45F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };