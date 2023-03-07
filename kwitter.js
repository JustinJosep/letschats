

var firebaseConfig = {

    apiKey: "AIzaSyBMPdVxEV9ZLh0ymkZUFCN2BO67DRgZa3Q",
  
    authDomain: "kwiitter-70ae1.firebaseapp.com",
  
    databaseURL: "https://kwiitter-70ae1-default-rtdb.firebaseio.com",
  
    projectId: "kwiitter-70ae1",
  
    storageBucket: "kwiitter-70ae1.appspot.com",
  
    messagingSenderId: "631081138437",
  
    appId: "1:631081138437:web:257fe4b0265441f6cadf6c",
  
    measurementId: "G-5TR0NCVWRT"
  
  };
  
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
  

//ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}