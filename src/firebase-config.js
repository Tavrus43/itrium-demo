// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase project configuration
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
