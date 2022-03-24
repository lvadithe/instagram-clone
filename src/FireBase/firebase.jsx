import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTCaSs2Yi8TzFxkHwPH3HVL69qMLD7D80",
    authDomain: "instagram--clone-6b5da.firebaseapp.com",
    projectId: "instagram--clone-6b5da",
    storageBucket: "instagram--clone-6b5da.appspot.com",
    messagingSenderId: "233243659264",
    appId: "1:233243659264:web:81eb28e624cdde99a9dce5",
    measurementId: "G-N7NSHFTVPR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
/* export default db; */