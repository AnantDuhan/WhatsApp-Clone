import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSzRvUp6nucP2G8C3CT5eXDfrmmwZ8_Ho",
    authDomain: "what-s-app-clone-d0b8e.firebaseapp.com",
    projectId: "what-s-app-clone-d0b8e",
    storageBucket: "what-s-app-clone-d0b8e.appspot.com",
    messagingSenderId: "27260493701",
    appId: "1:27260493701:web:0801974c9cc9c46a806eec",
    measurementId: "G-8P1RV9W4FQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;