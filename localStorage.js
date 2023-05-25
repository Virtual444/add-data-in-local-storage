function registerUser(){
    // Retrieving data

var name= document.getElementById("name").value;
var email = document.getElementById("email").value; 
var phone = document.getElementById("phone").value;
var date = document.getElementById("date").value;
var time = document.getElementById("time").value;


// Storing data
var userDetails = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time
    
  };
  
  var userDetailsString = JSON.stringify(userDetails);
  var uniqueKey = "userDetails" + Date.now(); // Appending a timestamp to create a unique key
  localStorage.setItem(uniqueKey, userDetailsString);


}