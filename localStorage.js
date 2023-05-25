function registerUser(){
    // Retrieving data

var name= document.getElementById("name").value;
var email = document.getElementById("email").value; 
var phone = document.getElementById("phone").value;
var date = document.getElementById("date").value;
var time = document.getElementById("time").value;


// Storing data

var userName = localStorage.setItem("name", name); 
var userEmail = localStorage.setItem("email", email);
var userPhone = localStorage.setItem("phone", phone);
var userDate = localStorage.setItem("date", date);
var userTime = localStorage.setItem("time", time);
}