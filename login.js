
function login() {
    // Dummy customer data for demonstration
    var tempCustomerId = "123456";
    var tempPassword = "Password@1234";

    // Fetch user input
    var enteredId = document.getElementById("customerId").value;
    var enteredPassword = document.getElementById("password").value;

    // Check if the entered ID and password match the dummy data
    if(enteredId == ''){
        alert("Please Enter Customer ID");
    }
    else if (enteredPassword == ''){
        alert("Please Enter Password");
    }
    else if (enteredId === tempCustomerId && enteredPassword === tempPassword) {
        // Successful login, redirect to Home Page
        window.location.href = "home_page.html"; // Replace with your actual Home Page URL
    } else if (enteredId !== tempCustomerId && enteredPassword !== tempPassword) {
        document.getElementById("loginMessage").innerText = "ID/password not valid.";
    } else if (enteredId !== tempCustomerId) {
        document.getElementById("loginMessage").innerText = "ID not valid.";
    } else if (enteredPassword !== tempPassword) {
        document.getElementById("loginMessage").innerText = "Password not valid.";
    }
}