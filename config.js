import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDTdwzvO9O6J83_U7bIZzb3J7uITXSntkQ",
  authDomain: "story-hub-7204e.firebaseapp.com",
  projectId: "story-hub-7204e",
  storageBucket: "story-hub-7204e.appspot.com",
  messagingSenderId: "700659208444",
  appId: "1:700659208444:web:a5127a5e503ffcb1728779"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();