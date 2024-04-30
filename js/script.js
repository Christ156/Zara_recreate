var pos = 0;

function carouselBack(){
    var carouselImages = document.getElementById("carouselImages");
    
    pos += 100;
    carouselImages.style.marginLeft = pos+"%";
    
    if(pos == -200){
        document.getElementById("navCarouselPrev").style.display = "block";
        document.getElementById("navCarouselNext").style.display = "none";
    }else if(pos == 0){
        document.getElementById("navCarouselPrev").style.display = "none";
        document.getElementById("navCarouselNext").style.display = "block";
    }else{
        document.getElementById("navCarouselNext").style.display = "block";
        document.getElementById("navCarouselPrev").style.display = "block";
    }
}

function carouselAuto(){
    var carouselImages = document.getElementById("carouselImages");

    if(pos == -300){
        pos = 0
    }

    if(pos == -200){
        document.getElementById("navCarouselPrev").style.display = "block";
        document.getElementById("navCarouselNext").style.display = "none";
    }else if(pos == 0){
        document.getElementById("navCarouselPrev").style.display = "none";
        document.getElementById("navCarouselNext").style.display = "block";
    }else{
        document.getElementById("navCarouselNext").style.display = "block";
        document.getElementById("navCarouselPrev").style.display = "block";
    }
    
    carouselImages.style.marginLeft = pos+"%";
    pos -= 100;
}

function previewProduct(imageNum) {
    var currPreview = document.getElementById("curr-preview");
    var targetImg = document.getElementById("next-preview"+imageNum);

    //Mengubah gambar preview sesuai gambar yang diclick di bawah
    currPreview.src = targetImg.src;

    //Inisialisasi style default
    for(var i = 1; i <= 5; i++){
        document.getElementById("next-preview"+i).style.border = "none";
    }

    //style sesuai gambar yang di click
    targetImg.style.border = "3px solid black";
}

function sizeOpt(size){
    var sizeCurr = document.getElementById("sizeCurr");
    var buttonSize = document.getElementsByClassName("size-opt");
    var addCartButton = document.getElementById("addCartButton");

    //Inisialisasi style default
    for(var i = 0; i < buttonSize.length; i++){
        buttonSize[i].style.background = "transparent";
        buttonSize[i].style.color = "black";
        buttonSize[i].style.border = "1px solid var(--secondary)";
    }

    //Style sesuai option yang di click
    if(size == 1){
        sizeCurr.innerText = "M";
        buttonSize[0].style.color = "white";
        buttonSize[0].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 2){
        sizeCurr.innerText = "L";
        buttonSize[1].style.color = "white";
        buttonSize[1].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 3){
        sizeCurr.innerText = "XL";
        buttonSize[2].style.color = "white";
        buttonSize[2].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 4){
        sizeCurr.innerText = "XXL";
        buttonSize[3].style.color = "white";
        buttonSize[3].style.background = "black";
        addCartButton.className = "cart";
    }
}

var voucherModalState = 0;

function voucherModal(){

    var voucher = document.getElementById("voucher");

    if(voucherModalState == 0){
        voucherModalState = 1;

        voucher.style.display = "flex";
    }else{
        voucherModalState = 0;

        voucher.style.display = "none";
    }
}

var loginState = 0;

function loginAction(){
    const beforeLog = document.getElementById('beforeLogin');
    const afterLog = document.getElementById('afterLogin');

    if(loginState == 0){
        loginState = 1;

        beforeLog.style.display = "none";
        afterLog.style.display = "dispay";
    }else{
        loginState = 0;

        beforeLog.style.display = "display";
        afterLog.style.display = "none";
    }
}

function selectAll(source){
    for(var i = 1; i <= 2; i++){
        document.getElementById("selectItem"+i).checked = source.checked;
    }
}

var voucherState = false;

function useVoucher(){
    var voucherButton = document.getElementById("voucherButton");
    var voucherUsed = document.getElementById("voucherUsed");

    if(voucherState == false){
        voucherState = true;

        voucherButton.style.display = "none";
        voucherUsed.style.display = "block";
    }else{
        voucherState = false;

        voucherButton.style.display = "block";
        voucherUsed.style.display = "none";
    }
}

// // Login Function

// var formLogin = document.getElementById('formLogin');
// var emailInput = document.getElementById('emailInput');
// var passwordInput = document.getElementById('passwordInput');

// formLogin.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });

// function validateInputs() {
//     var emailVal = emailInput.value.trim();
//     var passwordVal = passwordInput.value.trim();

//     // Validate Email
//     if (emailVal === '') {
//         setError(emailInput, 'Email is required');
//     } else if (!isValidEmailAddress(emailVal)) {
//         setError(emailInput, 'Invalid email address format');
//     } else {
//         setSuccess(emailInput);
//     }

//     // Validate Password
//     if (passwordVal === '') {
//         setError(passwordInput, 'Password is required');
//     } else {
//         setSuccess(passwordInput);
//     }

//     // Check if both email and password are valid
//     if (isValidEmailAddress(emailVal) && passwordVal !== '') {
//         // Redirect to index.html
//         window.location.href = "index.html";
//     }
// }

// function setError(input, message) {
//     var inputControl = input.parentElement;
//     var errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// function setSuccess(input) {
//     var inputControl = input.parentElement;
//     var errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// function isValidEmailAddress(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// // Register Function

// var formRegis = document.getElementById('formRegis');
// var nameInput = document.getElementById('name');
// var genderInput = document.getElementById('gender');
// var emailInput = document.getElementById('email');
// var passwordInput = document.getElementById('password');
// var passwordError = document.getElementById('password-error');

// formRegis.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });

// function validateInputs() {
//     var nameVal = nameInput.value.trim();
//     var genderVal = genderInput.value.trim();
//     var emailVal = emailInput.value.trim();
//     var passwordVal = passwordInput.value.trim();

//     // Validate Name
//     if (nameVal === '') {
//         setError(nameInput, 'Name is required');
//     } else {
//         setSuccess(nameInput);
//     }

//     // Validate Gender
//     if (genderVal === '') {
//         setError(genderInput, 'Gender is required');
//     } else {
//         setSuccess(genderInput);
//     }

//     // Validate Email
//     if (emailVal === '') {
//         setError(emailInput, 'Email is required');
//     } else if (!isValidEmailAddress(emailVal)) {
//         setError(emailInput, 'Invalid email address format');
//     } else {
//         setSuccess(emailInput);
//     }

//     // Validate Password
//     if (passwordVal === '') {
//         setError(passwordInput, 'Password is required');
//     } else if (passwordVal.length < 8) {
//         setError(passwordInput, 'Password must be at least 8 characters long');
//     } else if (!containsNumber(passwordVal)) {
//         setError(passwordInput, 'Password must contain at least one number');
//     } else if (!containsUpperCase(passwordVal)) {
//         setError(passwordInput, 'Password must contain at least one uppercase letter');
//     } else if (!containsUniqueCharacters(passwordVal)) {
//         setError(passwordInput, 'Password must contain at least one special character (*&^%$#@!)');
//     } else {
//         setSuccess(passwordInput);
//     }
// }

// function setError(input, message) {
//     var inputControl = input.parentElement;
//     var errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// function setSuccess(input) {
//     var inputControl = input.parentElement;
//     var errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// function isValidEmailAddress(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function containsNumber(str) {
//     return /\d/.test(str);
// }

// function containsUpperCase(str) {
//     return /[A-Z]/.test(str);
// }

// function containsUniqueCharacters(str) {
//     var uniqueCharsRegex = /^.*(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
//     return uniqueCharsRegex.test(str);
// }

// // Payment function

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector('form');
//     var paymentMethods = document.querySelectorAll('input[name="payment"]');
//     var errorMessage = document.createElement('p');
//     errorMessage.textContent = "Please select a payment method.";
//     errorMessage.classList.add('error-message');
//     errorMessage.classList.add('error-text'); // Add class for styling error text

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         let paymentSelected = false;

//         paymentMethods.forEach(function(paymentMethod) {
//             if (paymentMethod.checked) {
//                 paymentSelected = true;
//             }
//         });

//         if (paymentSelected) {
//             window.location.href = "payment-selected.html";
//         } else {
//             var container = document.querySelector('.payment-container');
//             container.appendChild(errorMessage);
//         }
//     });

//     paymentMethods.forEach(function(paymentMethod) {
//         paymentMethod.addEventListener('click', function() {
//             errorMessage.remove(); // Remove error message when a payment method is selected
//         });
//     });
// });
