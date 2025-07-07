// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwwDfNhczyTc46Fz5VbpuONE5ud0k6e9Q",
    authDomain: "coffee-store-bcf92.firebaseapp.com",
    projectId: "coffee-store-bcf92",
    storageBucket: "coffee-store-bcf92.firebasestorage.app",
    messagingSenderId: "374885486587",
    appId: "1:374885486587:web:a313d2f92b9d9d4801455e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);