// verification logic


document.getElementById('verify').addEventListener('click', function () {

  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    document.getElementById('verifymsg').innerHTML = 'verification sent, check your email to verify'
  }).catch(function (error) {
    // An error happened.
    document.getElementById('verifymsg').innerHTML = error.message
  });


})