import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsglCyTN8mTG8Jtk4MO5uLjgEJALmIEEI",
  authDomain: "circlek-ecommerce.firebaseapp.com",
  projectId: "circlek-ecommerce",
  storageBucket: "circlek-ecommerce.appspot.com",
  messagingSenderId: "1022716540375",
  appId: "1:1022716540375:web:de702e9c045512327d8792",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtime = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
