// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJwyvKT8dhqV5MweIu92LwCv_fwQVooEs",
  authDomain: "artit-cfa5d.firebaseapp.com",
  projectId: "artit-cfa5d",
  storageBucket: "artit-cfa5d.appspot.com",
  messagingSenderId: "945164324066",
  appId: "1:945164324066:web:24f74260d69c9bb83922bb",
  measurementId: "G-B8NW81J2JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
