import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxAlEsMsky5pUs4rnWxbN4SaDRBPcIanY",
  authDomain: "react-web-app-7640a.firebaseapp.com",
  projectId: "react-web-app-7640a",
  storageBucket: "react-web-app-7640a.firebasestorage.app",
  messagingSenderId: "6396996708",
  appId: "1:6396996708:web:4a219024d04c2176220371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };