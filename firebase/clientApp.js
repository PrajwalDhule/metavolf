// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBpo9Pzp3GGhucGa7hizWGZzYTHX97KnX8",
    authDomain: "x-business-solutions.firebaseapp.com",
    projectId: "x-business-solutions",
    storageBucket: "x-business-solutions.appspot.com",
    messagingSenderId: "986731663859",
    appId: "1:986731663859:web:e085bdac8a1ee3cb438286",
    measurementId: "G-2TQ5N18TZQ"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export {db,auth}