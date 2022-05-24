// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQvQXvyyWQvL37iXXCkYVhQT6vWddIXP4",
  authDomain: "ecommerce-react-villa.firebaseapp.com",
  projectId: "ecommerce-react-villa",
  storageBucket: "ecommerce-react-villa.appspot.com",
  messagingSenderId: "778935505651",
  appId: "1:778935505651:web:82a05f617fb504a9875d86",
  measurementId: "G-0KZCGKPXS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
export default db