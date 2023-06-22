import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAg5YsCT1OHLe5qmmdL4IowocYsX6v_KbE",
    authDomain: "login-bc67e.firebaseapp.com",
    projectId: "login-bc67e",
    storageBucket: "login-bc67e.appspot.com",
    messagingSenderId: "603262865700",
    appId: "1:603262865700:web:f68ed0b8d50e64f043e3b1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebase 
