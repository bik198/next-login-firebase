import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqvAQzFpuVe6aZJ4JymVW8zSlqqvI7Ix8",
    authDomain: "next-firebase-ionic.firebaseapp.com",
    projectId: "next-firebase-ionic",
    storageBucket: "next-firebase-ionic.appspot.com",
    messagingSenderId: "304085977413",
    appId: "1:304085977413:web:c85acf04418d857185962c",
    measurementId: "G-F4ZGDLEFVT"
  };

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}