const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//https onCall function to create admin users
exports.addAdminRole = functions.https.onCall((data, context)=>{
  //get user and add custom claim
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    })
  }).then(()=>{

    return{
      message: `success ${data.email} has been made an admin`
    }
  }).catch(err=>{
    return err
  })
})

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
  // for background triggers you must return a value/promise
  return admin.firestore().collection('users').doc(user.uid).set({
    id: user.uid,
    email: user.email,
    phone: '',
    
  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  const doc = admin.firestore().collection('users').doc(user.uid);
  return doc.delete();
});