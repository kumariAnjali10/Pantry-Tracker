// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_CQX9eD73oM8PNfTrlyuEodilkVtYb_8",
  authDomain: "pantry-management-6fd11.firebaseapp.com",
  projectId: "pantry-management-6fd11",
  storageBucket: "pantry-management-6fd11.appspot.com",
  messagingSenderId: "295162085201",
  appId: "1:295162085201:web:62b05ad90435641f251d70",
  measurementId: "G-BGE2L4WK9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore}
