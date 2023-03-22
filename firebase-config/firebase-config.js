import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWjSOVNFA3o_f-px700M5VPeM_T4S9X3Y",
  authDomain: "ctse-assignment-72820.firebaseapp.com",
  projectId: "ctse-assignment-72820",
  storageBucket: "ctse-assignment-72820.appspot.com",
  messagingSenderId: "150332195494",
  appId: "1:150332195494:web:518a8f3bcf89f0e631aa67"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
