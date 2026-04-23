// script.js

// Function to validate form inputs
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.value === '') {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    if (validateForm(form)) {
        console.log('Form Submitted Successfully!');
        // Add further processing here (e.g., AJAX call)
    } else {
        console.log('Form Validation Failed!');
    }
}

// Function to add dynamic interactions (example: toggle visibility)
function toggleVisibility(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Event listeners setup (example)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleSubmit);
    const toggleButton = document.getElementById('toggleButton');
    const content = document.getElementById('contentToToggle');
    toggleButton.addEventListener('click', () => toggleVisibility(content));
});