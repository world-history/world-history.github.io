import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-5GCZJqpLGST96uqmBx6nsOli2vN5DvU",
  authDomain: "world-history-8a1c3.firebaseapp.com",
  projectId: "world-history-8a1c3",
  storageBucket: "world-history-8a1c3.appspot.com",
  messagingSenderId: "1088820132918",
  appId: "1:1088820132918:web:7929c84087184a793a6c97",
  measurementId: "G-G1CDQ9KHCP"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
