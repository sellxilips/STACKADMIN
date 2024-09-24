// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBGPEg_QlRVSmtizelnHW_BdNn9Ws9k3zE",
  authDomain: "stackpham2-62d77.firebaseapp.com",
  projectId: "stackpham2-62d77",
  storageBucket: "stackpham2-62d77.appspot.com",
  messagingSenderId: "29274190201",
  appId: "1:29274190201:web:37fb1c275323dcde17ffa8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
