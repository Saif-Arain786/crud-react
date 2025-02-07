

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBUkh6jZpJ3xrxwddqymOEo2OG1t3a_ITI",
    authDomain: "react-crud-40c6c.firebaseapp.com",
    projectId: "react-crud-40c6c",
    storageBucket: "react-crud-40c6c.firebasestorage.app",
    messagingSenderId: "626677941911",
    appId: "1:626677941911:web:9783e04a8cf928def00bd2",
    measurementId: "G-5KNM2HVQHE",
    databaseURL: "https://react-crud-40c6c-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
