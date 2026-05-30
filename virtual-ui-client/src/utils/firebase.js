
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtualui-55874.firebaseapp.com",
  projectId: "virtualui-55874",
  storageBucket: "virtualui-55874.firebasestorage.app",
  messagingSenderId: "34902075475",
  appId: "1:34902075475:web:4b826a3a0cac530c517ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}