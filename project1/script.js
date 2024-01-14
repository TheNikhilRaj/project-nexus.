document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your login logic here
    alert('Login button clicked!');
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your signup logic here

    // Basic form validation
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showError('Passwords do not match');
    } else {
        // Proceed with signup logic
        alert('Signup button clicked!');
    }
});

function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;

    const signupForm = document.getElementById('signupForm');
    signupForm.appendChild(errorMessage);
}
