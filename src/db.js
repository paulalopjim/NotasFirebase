const firebaseConfig = {
    apiKey: "AIzaSyAAjagQyqghARMdWyxP4WaQsCuhDNQEkOU",
    authDomain: "vuefirebase-48b98.firebaseapp.com",
    databaseURL: "https://vuefirebase-48b98.firebaseio.com",
    projectId: "vuefirebase-48b98",
    storageBucket: "vuefirebase-48b98.appspot.com",
    messagingSenderId: "432722744415",
    appId: "1:432722744415:web:7bade890b1159369c677ea"
  };
  import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })