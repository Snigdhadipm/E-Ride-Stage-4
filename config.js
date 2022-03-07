import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCY5t4oC3-m8p1K9OEBy9zn5XAJNjeMl2o",
  authDomain: "e-ride-stage-4-fa3ab.firebaseapp.com",
  projectId: "e-ride-stage-4-fa3ab",
  storageBucket: "e-ride-stage-4-fa3ab.appspot.com",
  messagingSenderId: "716877284376",
  appId: "1:716877284376:web:9bc8d1bae5328e2e832f6d"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
