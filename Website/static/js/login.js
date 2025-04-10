function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values of username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform basic input validation
    if (!username || !password) {
        // Display an error message near the form fields
        const errorElement = document.getElementById('error-message');
        errorElement.innerText = 'Please enter both username and password.';
        return;
    }

    // Simulate server-side validation (replace this with actual server-side validation)
    if (username === 'admin' && password === 'zuscan') {
        // If credentials are correct, redirect to home.html
        window.location.href = '/home.html';
    } else {
        // If credentials are incorrect, display an error message
        const errorElement = document.getElementById('error-message');
        errorElement.innerText = 'Invalid username or password.';
    }
}

// Attach an event listener to the form submission event
document.getElementById('login-form').addEventListener('submit', validateForm);
