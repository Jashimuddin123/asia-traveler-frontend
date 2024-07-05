// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrs8rx18riKipWzasnZIcGkQETP60uazA",
  authDomain: "asian-traveler-website.firebaseapp.com",
  projectId: "asian-traveler-website",
  storageBucket: "asian-traveler-website.appspot.com",
  messagingSenderId: "1081025689071",
  appId: "1:1081025689071:web:ca263df2ec56620612321a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth