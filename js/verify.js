// verification logic


document.getElementById('verify').addEventListener('click', function () {

  var user = firebase.auth().currentUser.email;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log(profile)
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

  user.sendEmailVerification().then(function () {
    // Email sent.
    document.getElementById('verifymsg').innerHTML = 'verification sent, check your email to verify'
  }).catch(function (error) {
    // An error happened.
    document.getElementById('verifymsg').innerHTML = 'Something went wrong'
  });


})

