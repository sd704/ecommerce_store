// Storing regex for checks
let emailCheck = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
let lowerCaseCheck = new RegExp("(.*[a-z].*)");
let upperCaseCheck = new RegExp("(.*[A-Z].*)");
let digitCheck = new RegExp(/\d/);

// Validation on click on submit button
document.getElementById("submitButton").addEventListener("click", (event) => {

    // Preventing default form submission
    event.preventDefault()

    // Input Elements
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value

    // Error message <p> tags
    let emailError = document.getElementById('email_error')
    let passwordError = document.getElementById('password_error')

    // To store error message
    let error = ""

    // Email Check
    if (email === "") { emailError.innerText = "Please enter your email!" }
    else if (!emailCheck.test(email)) { emailError.innerText = "Check you email!" }
    else { emailError.innerText = "" }

    // Password Checks
    if (pass.length < 8) { error += ", at least 8 characters" }
    if (!lowerCaseCheck.test(pass)) { error += ", lowercase characters" }
    if (!upperCaseCheck.test(pass)) { error += ", uppercase characters" }
    if (!digitCheck.test(pass)) { error += ", digits" }
    if (error.length > 0) { passwordError.innerHTML = "Password should have" + error }
    else { passwordError.innerHTML = "" }

    // Redirects to home if everything validates
    if (emailError.innerText === "" && error === "") {
        // window.location.href = 'home.html';
        const form = document.getElementById('login_form')
        // const csrfToken = form.querySelector('meta[name="csrf-token"]').getAttribute('content')
        // const formData = new FormData(form);
        // formData.append("authenticity_token", csrfToken); // Including the CSRF token in the form data
        form.submit()
    }
});

// Redirect to register page 
document.getElementById("redirect_to_register").addEventListener("click", () => {
    window.location.href = 'register.html';
})