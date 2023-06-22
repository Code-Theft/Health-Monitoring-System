// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    snapshotEqual,
    onSnapshot,
} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxhN0JcRHVWzDk3ZPAQ2Clg1pBzVk0jBQ",
    authDomain: "healthms-1b955.firebaseapp.com",
    projectId: "healthms-1b955",
    storageBucket: "healthms-1b955.appspot.com",
    messagingSenderId: "11079301207",
    appId: "1:11079301207:web:c1d808386f0dc5f65b8b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();

// const logInWithEmailAndPassword = async (email, password) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//         //   const q = query(collection(db, "users"), where("email", "==", email));
//         //   const docs = await getDocs(q);
//         //   return docs.docs[0].data().isAdmin;
//     } catch (err) {
//         alert(err.message);
//     }
// };


export { auth, db, database,  }
