// Storing regex for checks
let emailCheck = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
let lowerCaseCheck = new RegExp("(.*[a-z].*)");
let upperCaseCheck = new RegExp("(.*[A-Z].*)");
let digitCheck = new RegExp(/\d/);
let phoneCheck = new RegExp(/^\d{10}$/);

// Validation on click on submit button
document.getElementById("submitButton").addEventListener("click", (event) => {

    // Preventing default form submission
    event.preventDefault()

    // Input Elements
    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    // let dob = document.getElementById("dob").value
    let pass = document.getElementById("password").value
    let cPass = document.getElementById("confirm_password").value

    // Error message <p> tags
    let firstnameError = document.getElementById('firstname_error')
    let lastnameError = document.getElementById('lastname_error')
    let emailError = document.getElementById('email_error')
    let phoneError = document.getElementById('phone_error')
    // let dobError = document.getElementById('dob_error')
    let passwordError = document.getElementById('password_error')
    let confirmPasswordError = document.getElementById('confirm_password_error')

    // To store error message
    let error = ""

    // Name Check
    if (firstname === "") { firstnameError.innerText = "Please enter your firstname!" }
    else if (digitCheck.test(firstname)) { firstnameError.innerText = "Name should not contain digits!" }
    else { firstnameError.innerText = "" }
    if (lastname === "") { lastnameError.innerText = "Please enter your lastname!" }
    else if (digitCheck.test(lastname)) { lastnameError.innerText = "Name should not contain digits!" }
    else { lastnameError.innerText = "" }

    // Email Check
    if (email === "") { emailError.innerText = "Please enter your email!" }
    else if (!emailCheck.test(email)) { emailError.innerText = "Check you email!" }
    else { emailError.innerText = "" }

    // Phone number check
    if (phone === "") { phoneError.innerText = "Please enter your phone number!" }
    else if (!phoneCheck.test(phone)) { phoneError.innerText = "Please check your phone number!" }
    else { phoneError.innerText = "" }

    // Password Checks
    if (pass.length < 8) { error += ", at least 8 characters" }
    if (!lowerCaseCheck.test(pass)) { error += ", lowercase characters" }
    if (!upperCaseCheck.test(pass)) { error += ", uppercase characters" }
    if (!digitCheck.test(pass)) { error += ", digits" }
    if (error.length > 0) { passwordError.innerHTML = "Password should have" + error }
    else { passwordError.innerHTML = "" }
    if (pass != cPass) { confirmPasswordError.innerText = "Password doesn't match!" }
    else { confirmPasswordError.innerText = "" }

    // Redirects to home if everything validates
    if (
        firstnameError.innerText === "" &&
        lastnameError.innerText === "" &&
        emailError.innerText === "" &&
        phoneError.innerText === "" &&
        passwordError.innerText === "" &&
        confirmPasswordError.innerText === ""
    ) {
        // window.location.href = 'home.html';
        const form = document.getElementById('register_form')
        form.submit()
    }
});

// Redirect to login page 
document.getElementById("redirect_to_login").addEventListener("click", () => {
    window.location.href = 'login.html';
})