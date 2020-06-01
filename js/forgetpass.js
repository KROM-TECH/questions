var auth = firebase.auth();

document.getElementById('reset').addEventListener('click', function(){
  const email = document.getElementById('email').value

  auth.sendPasswordResetEmail(email).then(function () {
    // Email sent.
    document.getElementById('resetmsg').innerHTML = 'Check your email for the reset link'
  }).catch(function (error) {
    // An error happened.
    document.getElementById('resetmsg').innerHTML = error.message
  });
})