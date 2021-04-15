import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_rVyDAxrtz3WWybZZ7puJYSEFrHW1g5g",
    authDomain: "udemy-vue-firebase-sites-4e39c.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-4e39c",
    storageBucket: "udemy-vue-firebase-sites-4e39c.appspot.com",
    messagingSenderId: "1094375326279",
    appId: "1:1094375326279:web:93d8a14e93c87f81e8a762"
  }


  //init firebase
  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp}