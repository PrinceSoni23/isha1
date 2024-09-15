// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLU6Se1s40tZiToZVDQf0BhkB_mLLlqAg",
  authDomain: "trip-planner-f5c10.firebaseapp.com",
  projectId: "trip-planner-f5c10",
  storageBucket: "trip-planner-f5c10.appspot.com",
  messagingSenderId: "987699313221",
  appId: "1:987699313221:web:c83765f7ec3710d7cc412c",
  measurementId: "G-NCZFTD049R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);