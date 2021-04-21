import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBhK1lKJe1A0Usz2xOVkHpPUUCXYRsNRgc",
  authDomain: "plasma-donation-app-82934.firebaseapp.com",
  databaseURL: "https://plasma-donation-app-82934-default-rtdb.firebaseio.com",
  projectId: "plasma-donation-app-82934",
  storageBucket: "plasma-donation-app-82934.appspot.com",
  messagingSenderId: "742043163532",
  appId: "1:742043163532:web:e141e405d55a1401d694a9"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();