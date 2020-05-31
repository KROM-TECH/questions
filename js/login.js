// login authentication logic
document.getElementById('login').addEventListener('click', function () {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      var user = firebase.auth().currentUser;
      if (user.emailVerified) {
        window.location = './home.html'
      }
      else {
        window.location = './verify.html'
      }

    })
    .catch((err) => {
      document.getElementById('signinError').innerHTML = err.message
    })
})

// google login logic

document.getElementById('googlein').addEventListener('click', function(){

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    document.getElementById('signinError').innerHTML = error.message;
    // The email of the user's account used.
    document.getElementById('signinError').innerHTML = error.email;
    // The firebase.auth.AuthCredential type that was used.
    document.getElementById('signinError').innerHTML = error.credential;
  });
})


// facebook login logic

document.getElementById('facebookin').addEventListener('click', function () {

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    document.getElementById('signinError').innerHTML = error.message;
    // The email of the user's account used.
    document.getElementById('signinError').innerHTML = error.email;
    // The firebase.auth.AuthCredential type that was used.
    document.getElementById('signinError').innerHTML = error.credential;
  });
})


// twitter login logic

document.getElementById('twitterin').addEventListener('click', function () {

  var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    document.getElementById('signinError').innerHTML = error.message;
    // The email of the user's account used.
    document.getElementById('signinError').innerHTML = error.email;
    // The firebase.auth.AuthCredential type that was used.
    document.getElementById('signinError').innerHTML = error.credential;
  });
})
