import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBqvzoGMxguVekozdTKob9hfLud5G9Zq3g",
    authDomain: "chatapp-aaff0.firebaseapp.com",
    projectId: "chatapp-aaff0",
    storageBucket: "chatapp-aaff0.appspot.com",
    messagingSenderId: "467126776530",
    appId: "1:467126776530:web:84db55c7d836cd67fff30b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const googleauth = new firebase.auth.GoogleAuthProvider();

  export {auth, googleauth};
  export default db;
