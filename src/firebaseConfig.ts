import firebase from "firebase/compat/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDomcPzljUwH8F9iKEpLXvSDv-pNxTqCyg",
  authDomain: "cursoreactucs-55c1d.firebaseapp.com",
  projectId: "cursoreactucs-55c1d",
  storageBucket: "cursoreactucs-55c1d.appspot.com",
  messagingSenderId: "311605820349",
  appId: "1:311605820349:web:42ebba2ea10479a771b0d4",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth;
export const db = getFirestore(app);

export default app;
