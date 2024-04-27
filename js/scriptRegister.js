const form = document.querySelector('.register-form');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const nameVal = nameInput.value.trim();
    const genderVal = genderInput.value.trim();
    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value.trim();

    // Validate Name
    if (nameVal === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }

    // Validate Gender
    if (genderVal === '') {
        setError(genderInput, 'Gender is required');
    } else {
        setSuccess(genderInput);
    }

    // Validate Email
    if (emailVal === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmailAddress(emailVal)) {
        setError(emailInput, 'Invalid email address format');
    } else {
        setSuccess(emailInput);
    }

    // Validate Password
    if (passwordVal === '') {
        setError(passwordInput, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(passwordInput, 'Password must be at least 8 characters long');
    } else if (!containsNumber(passwordVal)) {
        setError(passwordInput, 'Password must contain at least one number');
    } else if (!containsUpperCase(passwordVal)) {
        setError(passwordInput, 'Password must contain at least one uppercase letter');
    } else if (!containsUniqueCharacters(passwordVal)) {
        setError(passwordInput, 'Password must contain at least one special character (*&^%$#@!)');
    } else {
        setSuccess(passwordInput);
    }
}

function setError(input, message) {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(input) {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmailAddress(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function containsNumber(str) {
    return /\d/.test(str);
}

function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}

function containsUniqueCharacters(str) {
    const uniqueCharsRegex = /^.*(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
    return uniqueCharsRegex.test(str);
}
