// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuDwbsJ-y0mgrcyTpgg4ySMe-quhCrElk",
  authDomain: "mylearningapp-ffbf2.firebaseapp.com",
  projectId: "mylearningapp-ffbf2",
  storageBucket: "mylearningapp-ffbf2.firebasestorage.app",
  messagingSenderId: "952126200842",
  appId: "1:952126200842:web:93b25092067ba6a2a913f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };