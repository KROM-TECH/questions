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