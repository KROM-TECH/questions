

firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in.
    if (user.emailVerified) {
    }
    else {
      window.location = './verify.html'
    }
    document.getElementById('usermail').innerHTML = user.email

  } else {
    window.location = './login.html'
  }
});




