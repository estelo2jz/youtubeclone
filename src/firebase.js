import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6oAeYwGDo1D38167dmP2c50JUADGiQjg",
  authDomain: "clone-db68a.firebaseapp.com",
  databaseURL: "https://clone-db68a.firebaseio.com",
  projectId: "clone-db68a",
  storageBucket: "clone-db68a.appspot.com",
  messagingSenderId: "1023423844939",
  appId: "1:1023423844939:web:7aefa110b3a65a6985b3ce",
  measurementId: "G-QGGRDWVZ75"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the database instance
const db = firebaseApp.firestore();

export default db;