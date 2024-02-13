// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from 'dotenv'

config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "spmemo-41165.firebaseapp.com",
  projectId: "spmemo-41165",
  storageBucket: "spmemo-41165.appspot.com",
  messagingSenderId: "220697747164",
  appId: "1:220697747164:web:729ac521402391b092de19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }