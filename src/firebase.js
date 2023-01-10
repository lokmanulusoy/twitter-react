import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBl7zXSoudcUWC8OHEhmrsrvOoXM71brkE",
    authDomain: "twitter-clone-56fea.firebaseapp.com",
    projectId: "twitter-clone-56fea",
    storageBucket: "twitter-clone-56fea.appspot.com",
    messagingSenderId: "807699486705",
    appId: "1:807699486705:web:8ab6481f32adbe11ac1650",
    measurementId: "G-N9RBKQ2L9E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;