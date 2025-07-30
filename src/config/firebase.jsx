
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdlo_lGx4zpz1S0gHdzoF9pBkVkZltG1s",
  authDomain: "anonymous-25b6d.firebaseapp.com",
  projectId: "anonymous-25b6d",
  storageBucket: "anonymous-25b6d.firebasestorage.app",
  messagingSenderId: "416240841047",
  appId: "1:416240841047:web:374ef2ad2be095d18d4e12",
  measurementId: "G-W9MHJHZ5VG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);