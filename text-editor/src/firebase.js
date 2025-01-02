// firebase.js or firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpprJ--0-I200DgpLmdwnOvn7rPqUCnNs",
    authDomain: "text-editor-7f6e6.firebaseapp.com",
    projectId: "text-editor-7f6e6",
    storageBucket: "text-editor-7f6e6.firebasestorage.app",
    messagingSenderId: "176626224656",
    appId: "1:176626224656:web:7b655d45fe3737f2e20495",
    measurementId: "G-57JP669DXK"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db }; // Export the Firestore instance

