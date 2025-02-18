// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD6eflmu_z8tFwJJoVt23tyfx1b-FvQig",
  authDomain: "lms-auth-55fda.firebaseapp.com",
  projectId: "lms-auth-55fda",
  storageBucket: "lms-auth-55fda.firebasestorage.app",
  messagingSenderId: "367039917124",
  appId: "1:367039917124:web:ebd689fbc9ffa9e71de011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const  auth= getAuth();
export const  db =getFirestore(app);


export default app;