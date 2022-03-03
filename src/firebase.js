import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuw2NzRWeKkDH7DU2Kf3k3SWHM_RIqcrU",
  authDomain: "clone-2161b.firebaseapp.com",
  projectId: "clone-2161b",
  storageBucket: "clone-2161b.appspot.com",
  messagingSenderId: "6050816230",
  appId: "1:6050816230:web:da6f7931c572c71cfcdb27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
