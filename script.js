document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === 'admin' && password === 'password') {
        alert('Admin Login Successful');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Registration Successful');
        } else {
            alert('Passwords do not match');
        }
    } else {
        alert('Please fill in all fields');
    }
});