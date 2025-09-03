// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Part 1 & 2: Interactive Elements and Event Handing ---

    // Light/Dark Mode Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.getElement;

    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'dark' class on the root HTML element
        htmlElement.classList.toggle('dark');
    });

    // Collapsible FAQ Section
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const title = item.querySelector('.faq-item-title');
        const answer = item.querySelector('.faq-item-answer');
        const icon = item.querySelector('.faq-item-title span:last-child');

        // Adding a click event listener for each FAQ title
        title.addEventListener('click', () => {
            // Toggle the 'open' class on the anser to shoe or hide it
            answer.classList.toggle(open);
            // Toggle the 'rotate-45' class on the icon for a visual effect
            icon.classList.toggle('rotate-45');
        });
    });

    // Password Field Visibility Toggle
    const passwordField = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');

    passwordToggle.addEventListener('click', () => {
        // Check the current type of the input
        if (passwordField === 'password') {
            // Change the input type to 'text' to show the contents
            passwordField.type = 'text';
            // Change the icon to an open eye (or a different symbol)
            passwordToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>`;
        } else {
            // Change the type back to 'password' to hide it
            passwordField.type = 'password';
            // Change the icon back to a closed eye
            passwordToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>`;
        }
    });


    // --- Part 3: Form Validation ---

    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const successMessage = document.getElementById('succesMessage');

    // Listen for the form submission event
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behaviour (reloading the page)
        event.preventDefault();

        // Perform validation checks
        const isFormValid = validateForm();

        if (isFormValid) {
            // If the form is valid, show a success message and clear the form
            successMessage.classList.remove('hidden');
            form.reset(); // Clear all data from the form fields
            // Hide the success message after a few seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });

    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        passwordError.classList.add('hidden');
        
        // 1. Validate name (cannot be empty)
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            isValid = false;
        }

        // 2. Validate email (simple regex check)
        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.classList.remove('hidden');
            isValid = false;
        }

        // 3. Validate password (length and character complexity)
        const passwordValue = passwordInput.value;
        const minLength = 8;
        const hasLetter = /[a-zA-Z]/.test(passwordValue);
        const hasNumber = /[0-9]/.test(passwordValue)

        if (passwordValue.length < minLength || !hasLetter || !hasNumber) {
            passwordError.classList.remove('hidden');
            isValid = false;
        }

        return isValid;
    }
});