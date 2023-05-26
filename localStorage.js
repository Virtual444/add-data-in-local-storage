document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Create an object to hold the user data
    var userData = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time
    };

    // Retrieve existing user data from local storage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Add the new user data to the existing array
    existingData.push(userData);

    // Store the updated user data in local storage
    localStorage.setItem("userData", JSON.stringify(existingData));

    // Clear the form inputs
    document.getElementById("myForm").reset();

    // Redirect to the home page
    window.location.href = "home.html";
  });