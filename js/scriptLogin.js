const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value.trim();

    // Validate Email
    if (emailVal === '') {
        setError(emailInput, 'Email is required');
        return;
    } else if (!isValidEmailAddress(emailVal)) {
        setError(emailInput, 'Invalid email address format');
        return;
    } else {
        setSuccess(emailInput);
    }

    // Validate Password
    if (passwordVal === '') {
        setError(passwordInput, 'Password is required');
        return;
    } else {
        setSuccess(passwordInput);
    }

    // Redirect to index.html
    window.location.href = "index.html";
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
