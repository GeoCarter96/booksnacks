// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFfgTVzsO91S_9WFry3LCMnvkj4u8UIfA",
  authDomain: "booksnacks-3e12d.firebaseapp.com",
  projectId: "booksnacks-3e12d",
  storageBucket: "booksnacks-3e12d.firebasestorage.app",
  messagingSenderId: "225588680042",
  appId: "1:225588680042:web:b79b73b0bf01019c4bc113"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (email, password) => {
 try{
await createUserWithEmailAndPassword(auth, email, password)
 }
catch(error){

}}