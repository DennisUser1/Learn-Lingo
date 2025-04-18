import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
import { FIREBASE_CONFIG } from "../constants/constants";


const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getDatabase(app); 

export { app, auth, db };