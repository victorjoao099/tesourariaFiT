import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRjjc_3WarruBjPAwwyDspdgljjpqRdyg",
  authDomain: "tesourariafit-fe60b.firebaseapp.com",
  projectId: "tesourariafit-fe60b",
  storageBucket: "tesourariafit-fe60b.firebasestorage.app",
  messagingSenderId: "850440623022",
  appId: "1:850440623022:web:2144f209eaa5fd9db5ee3f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);