// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_Uq_GAGQ99RJiB6qm51mCSYwCcY4wfX8",
  authDomain: "stackpham3-ec8fb.firebaseapp.com",
  projectId: "stackpham3-ec8fb",
  storageBucket: "stackpham3-ec8fb.appspot.com",
  messagingSenderId: "540333957863",
  appId: "1:540333957863:web:9f41864b1eaf2d81d6f842"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
