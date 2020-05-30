

  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDG38NSzlGnLbhWGXYbfgmatIpJh2dYgng",
    authDomain: "questions-3b352.firebaseapp.com",
    databaseURL: "https://questions-3b352.firebaseio.com",
    projectId: "questions-3b352",
    storageBucket: "questions-3b352.appspot.com",
    messagingSenderId: "612556277926",
    appId: "1:612556277926:web:d41bd2af8c40cb05518c67",
    measurementId: "G-5YG3T45PTH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  db = firebase.firestore()