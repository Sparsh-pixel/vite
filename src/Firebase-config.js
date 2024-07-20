import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEC0kEtqFJnzICzSf_Hv5s8IYP5luJw2w",
  authDomain: "blogproject-e5450.firebaseapp.com",
  projectId: "blogproject-e5450",
  storageBucket: "blogproject-e5450.appspot.com",
  messagingSenderId: "937887405414",
  appId: "1:937887405414:web:0a9f073766beba964924a7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
