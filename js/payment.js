firebase.auth().onAuthStateChanged(function (user) {
  console.log(user)
  if (user) {
    // User is signed in

    document.getElementById("fullName").value = user.displayName;
    document.getElementById("email").value = user.email;

  }
});



//var hashedValue = "08455e419ee915d5e215a53830e2fae29b4d5a0c5f7a4a5ec491bb8c4f8bc369"; // this is a variable to hold the hashed value
var txRef = "MG-149840860099"; // this is variable to hold the uniqeue transaction reference
// $.ajax({
//   url: "/integrity", // this is an endpoint that sends the hashed values and transaction reference to the client.
//   headers: { contentType: "application/json" },
//   dataType: "json",
//   type: "POST",
//   cache: false,
//   success: function(response) {
//     console.log(response);
//     hashedValue = response.hash;
//     txRef = response.txref;
//   },
//   error: function(err) {
//     console.log(err);
//   }
// });

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("payment").addEventListener("click", function (e) {
    var PBFKey = "FLWPUBK-02ebd0340229d2832bad4104252100bf-X";
    var plan = document.getElementById('plan').value;
    var email = document.getElementById('email').value;
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phoneNum').value;
    if(plan == "" || email == "" || fullName == "" || phone == ""){
      alert('you need to fill all fields before you proceed')
    }
else{
    // getpaidSetup is Rave's inline script function. it holds the payment data to pass to Rave.
    getpaidSetup({
      PBFPubKey: PBFKey,
      customer_email: email,
      customer_firstname: fullName,
      amount: plan,
      customer_phone: phone,
      payment_method: "card,account,ussd",
      country: "NG",
      currency: "NGN",
      txref: txRef, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
      //integrity_hash: hashedValue, // pass the sha256 hashed value here.
      onclose: function () { },
      callback: function (response) {
        flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a 					server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (response.tx.chargeResponse == '00' || response.tx.chargeResponse == '0') {
          // redirect to a success page
        } else {
          // redirect to a failure page.
        }
      }
    });
  }//end of the else statement
  });

});