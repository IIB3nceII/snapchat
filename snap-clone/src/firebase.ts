import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjjthNNgM3rmBAnAf__NB51mhlARX-6nA",
  authDomain: "snap-project-d9189.firebaseapp.com",
  projectId: "snap-project-d9189",
  storageBucket: "snap-project-d9189.appspot.com",
  messagingSenderId: "997709543531",
  appId: "1:997709543531:web:12f408b0c694c269f6d92e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
