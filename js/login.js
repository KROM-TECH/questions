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