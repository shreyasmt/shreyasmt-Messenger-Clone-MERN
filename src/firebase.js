import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtYu-PnJKlQZf96z7zUSfrHJJ1L_PIIZg",
    authDomain: "facebook-messenger-3a1f4.firebaseapp.com",
    databaseURL: "https://facebook-messenger-3a1f4.firebaseio.com",
    projectId: "facebook-messenger-3a1f4",
    storageBucket: "facebook-messenger-3a1f4.appspot.com",
    messagingSenderId: "903841409860",
    appId: "1:903841409860:web:9f0bac8bccf5d8d4ff0511",
    measurementId: "G-CDLJ5LT0X1"
});

const db = firebaseApp.firestore();

export default db;