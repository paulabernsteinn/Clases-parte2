import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCamaIGOLG_xKKMxPOdd8PD-zr7RfRyrM",
  authDomain: "fir-5d1e6.firebaseapp.com",
  projectId: "fir-5d1e6",
  storageBucket: "fir-5d1e6.firebasestorage.app",
  messagingSenderId: "137876500132",
  appId: "1:137876500132:web:c29c0e1a267a3452e80031"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
