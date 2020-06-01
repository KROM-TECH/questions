firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in.
    if (user.email == null) {
      window.location = './profile.html'
    }
    else if (user.emailVerified) {
      window.location = './home.html'
    }
    else {
    }

  } else {
    window.location = './login.html'
  }
});

// verification logic


document.getElementById('verify').addEventListener('click', function () {

  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    document.getElementById('verifymsg').innerHTML = `verification sent, check your email  (${user.email})   to verify`
  }).catch(function (error) {
    // An error happened.
    document.getElementById('verifymsg').innerHTML = 'Something went wrong'
  });


})



