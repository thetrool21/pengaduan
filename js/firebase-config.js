import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyCAJ0o17guqJiRsn7xkZrqdoyQkjb0gTeg",

    authDomain:
        "lapor-pak-4a3a3.firebaseapp.com",

    projectId:
        "lapor-pak-4a3a3",

    storageBucket:
        "lapor-pak-4a3a3.firebasestorage.app",

    messagingSenderId:
        "642811097246",

    appId:
        "1:642811097246:web:ae315b877082098d1dcb8f",

    measurementId:
        "G-PKCWHF5CC7"
};


const app =
    initializeApp(firebaseConfig);


export const db =
    getFirestore(app);