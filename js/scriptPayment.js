document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Please select a payment method.";
    errorMessage.classList.add('error-message');
    errorMessage.classList.add('error-text'); // Add class for styling error text

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let paymentSelected = false;

        paymentMethods.forEach(function(paymentMethod) {
            if (paymentMethod.checked) {
                paymentSelected = true;
            }
        });

        if (paymentSelected) {
            window.location.href = "payment-selected.html";
        } else {
            const container = document.querySelector('.payment-container');
            container.appendChild(errorMessage);
        }
    });

    paymentMethods.forEach(function(paymentMethod) {
        paymentMethod.addEventListener('click', function() {
            errorMessage.remove(); // Remove error message when a payment method is selected
        });
    });
});
