document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting


        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("remember-me").checked;

        
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
        } else {
            // Simulate a successful login (you can replace this with your actual login logic)
            alert(`Login successful\nUsername: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
            
            // Clear the form fields after successful login (optional)
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
    });
});
