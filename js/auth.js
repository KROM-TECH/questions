const user = auth.currentUser;

// login authentication logic
document.getElementById('login').addEventListener('click', function(){
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
  .then(()=>{
    if (user.emailVerified){
      window.location = './home.html'
    }
    else{
      window.location = './verify.html'
    }

  })
  .catch((err)=>{
    document.getElementById('signinError').innerHTML = err.message
  })
})


// Sign Up authentication logic

document.getElementById('signup').addEventListener('click', function () {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location = './verify.html'
    })
    .catch((err) => {
      document.getElementById('signupError').innerHTML = err.message
    })
})

document.getElementById('verify').addEventListener('click', function(){
  user.sendEmailVerification().then(function () {
    document.getElementById('verifymsg').innerHTML = 'verification sent, check your email to verify'
  }).catch(function (error) {
    document.getElementById('verifymsg').innerHTML = error.message
  });
})

