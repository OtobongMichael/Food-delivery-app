// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_TNDbo4HTtexqVmI5Pe2aLHb0zLqIdWk",
  authDomain: "mcfestinesproject.firebaseapp.com",
  projectId: "mcfestinesproject",
  storageBucket: "mcfestinesproject.appspot.com",
  messagingSenderId: "438744316827",
  appId: "1:438744316827:web:0303cddd5f563f24d9ff3e",
  measurementId: "G-KDYLZB61VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);