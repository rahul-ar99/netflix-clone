// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZc-QCVgtAQihWQNO3Fj7PCHOeIbjhdus",
  authDomain: "netflix-clone-94a07.firebaseapp.com",
  projectId: "netflix-clone-94a07",
  storageBucket: "netflix-clone-94a07.appspot.com",
  messagingSenderId: "1050918643201",
  appId: "1:1050918643201:web:7e65eb90c8b7f3a69d4200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app);

export default function(){<>nothing is here</>}