import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "xxx",

    authDomain:
        "lapor-pak-4a3a3.firebaseapp.com",

    projectId:
        "lapor-pak-xxxx",

    storageBucket:
        "lapor-pak-4a3a3.xxxx.app",

    messagingSenderId:
        "642811097246",

    appId:
        "1:642811097246:web:xxxx",

    measurementId:
        "G-xxxx"
};


const app =
    initializeApp(firebaseConfig);


export const db =
    getFirestore(app);