import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ab7a2.firebaseapp.com",
  projectId: "reactchat-ab7a2",
  storageBucket: "reactchat-ab7a2.appspot.com",
  messagingSenderId: "883619270176",
  appId: "1:883619270176:web:44ee87aa037a7f38cbb645"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage=getStorage()