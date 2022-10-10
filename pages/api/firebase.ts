import firebase from 'firebase/compat/app';
import {getAuth} from "firebase/auth";
import 'firebase/compat/auth';
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDOMQDkNbyjdsQW0K8B6tM4I4Cx7Pjh44",
  authDomain: "setsuyaku-app.firebaseapp.com",
  projectId: "setsuyaku-app",
  storageBucket: "setsuyaku-app.appspot.com",
  messagingSenderId: "870636688840",
  appId: "1:870636688840:web:be3ff7f71b315dab779cfd",
  measurementId: "G-MX8BPBXG6R"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
const authState = getAuth(firebaseApp);

export { db, auth, authState };