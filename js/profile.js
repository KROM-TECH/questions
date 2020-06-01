firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in

    document.getElementById("disName").value = user.displayName;
    document.getElementById("pmail").value = user.email;
    document.getElementById("phoneNum").value = user.phoneNumber;

    document.getElementById('userdis').innerHTML = user.displayName;
    document.getElementById('usermail2').innerHTML = user.email;
    document.getElementById('usernum').innerHTML = user.phoneNumber


    if (user.email == null) {

      document.getElementById('userdis').innerHTML = user.displayName;
      document.getElementById('usermail2').innerHTML = user.email;
      document.getElementById('usernum').innerHTML = user.phoneNumber
      document.getElementById("profileImg").src = user.photoURL;
      document.getElementById("profileImg2").src = user.photoURL;


    }
    else if (user.emailVerified) {
      document.getElementById('usermail').innerHTML = user.email
      document.getElementById('usermail2').innerHTML = user.email
    }
    else {
      window.location = './verify.html'
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

document.getElementById('update').addEventListener('click', function (e) {
  e.preventDefault()
  const user = firebase.auth().currentUser;
  const disName = document.getElementById("disName").value
  const email = document.getElementById("pmail").value
  const phoneNum = document.getElementById("phoneNum").value

  console.log(email,  disName, phoneNum)

  

  user.updateProfile({
    displayName: disName,
    phoneNumber:phoneNum,
    
  }).then(function () {
    //Display name Update successful.
    user.updateEmail(`${email}`).then(function () {
      // Email Update successful.
      document.getElementById('updateStat').innerHTML = 'successfully Updated'
      location.reload()
    }).catch(function (error) {
      document.getElementById('updateStat').innerHTML = error.message
    }); 

  }).catch(function (error) {
    document.getElementById('updateStat').innerHTML = `Oops...... <br> an error ocurred`
  }); 
})
