// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRsvJLxi194OfQJJT-IlB_z8CWgObCAr8",
    authDomain: "react-disney-app-11280.firebaseapp.com",
    projectId: "react-disney-app-11280",
    storageBucket: "react-disney-app-11280.appspot.com",
    messagingSenderId: "907959685831",
    appId: "1:907959685831:web:1a58d0e5930c7e7e3ee4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app