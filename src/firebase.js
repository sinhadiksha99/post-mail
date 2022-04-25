import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSg1SR2lF9vNSiRGd1-xMEAHPNawF7cfI",
    authDomain: "post-mail-1223c.firebaseapp.com",
    projectId: "post-mail-1223c",
    storageBucket: "post-mail-1223c.appspot.com",
    messagingSenderId: "70762340929",
    appId: "1:70762340929:web:eb68301de8ef6e68f9dcc0",
    measurementId: "G-4JWD728RE0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, provider };