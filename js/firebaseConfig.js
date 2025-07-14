// js/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMmNLxAedeJjI4m4S91s7wuXTbq9it7yc",
  authDomain: "gym-management-8fc51.firebaseapp.com",
  projectId: "gym-management-8fc51",
  storageBucket: "gym-management-8fc51.firebasestorage.app",
  messagingSenderId: "517790798743",
  appId: "1:517790798743:web:3c9d29f959ccfe08926ad2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);