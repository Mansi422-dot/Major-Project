document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

const fields = ['fullName', 'email', 'phone', 'password', 'confirmPassword'];

fields.forEach(field => {
    document.getElementById(field).addEventListener('change', validateForm);
});

function validateForm() {
    let isValid = true;

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Full Name Validation
    if (fullName.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
        isValid = false;
    }

    // Email Validation
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "The email id is missing an '@'.";
        isValid = false;
    }

    // Phone Number Validation
    if (phone.length !== 10 || phone === "1234567890") {
        document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number and not 1234567890.";
        isValid = false;
    }

    // Password Validation
    if (password === "password" || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, cannot be 'password', and cannot be the user's full name.";
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords does not match.";
        isValid = false;
    }

    // Submit form if valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById('registrationForm').submit();
    }
}
    // Clear form fields on clicking the OnChange button
    document.getElementById('OnChange').addEventListener('click', function() {
    fields.forEach(field => {
        document.getElementById(field).value = '';
    });
    validateForm();
});