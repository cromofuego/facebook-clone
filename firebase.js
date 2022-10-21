// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6VV1fgYGwBcDX1yZOTep83kZND_W3Zvk",
    authDomain: "facebookclone-d04f5.firebaseapp.com",
    projectId: "facebookclone-d04f5",
    storageBucket: "facebookclone-d04f5.appspot.com",
    messagingSenderId: "42091273711",
    appId: "1:42091273711:web:a82db46a33c6be4d5caa1a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };