import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_BASEURL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/** To sign up using google
* Link for developer documentation (https://firebase.google.com/docs/auth/web/google-signin)
*/
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);