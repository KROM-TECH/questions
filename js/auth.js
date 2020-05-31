

firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in.
    document.getElementById('usermail').innerHTML = user.email

  } else {
    window.location = './login.html'
  }
});

function checkverified() {
  var user = firebase.auth().currentUser;
  if (user.emailVerified) {
    window.location = './home.html'
  }
  else {
    window.location = './verify.html'
  }
}


checkverified()


