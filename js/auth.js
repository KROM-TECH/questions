

firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in.
    if (user.emailVerified) {
      document.getElementById('usermail').innerHTML = user.email
      document.getElementById('usermail2').innerHTML = user.email
    }
    else {
      window.locatio = './verify.html'
    }
    document.getElementById('usermail').innerHTML = user.email

  } else {
    window.location = './login.html'
  }
});


document.getElementById('signout').addEventListener('click', function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    window.location = './login.html'
  }).catch(function (error) {
    // An error happened.
  });
})

document.getElementById('signout2').addEventListener('click', function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    window.location = './login.html'
  }).catch(function (error) {
    // An error happened.
  });
})





