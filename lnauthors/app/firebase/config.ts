// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRYW9f7Oiva2MdedXZTCs7wIjWEeLdzo",
  authDomain: "authorspro-138de.firebaseapp.com",
  databaseURL: "https://authorspro-138de-default-rtdb.firebaseio.com",
  projectId: "authorspro-138de",
  storageBucket: "authorspro-138de.appspot.com",
  messagingSenderId: "866715909373",
  appId: "1:866715909373:web:74a7a6b18b63869947d294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
