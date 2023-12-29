document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar las credenciales (esto debería hacerse en el servidor en un entorno real)
        if (username === 'user' && password === 'password') {
            // Almacenar el estado de inicio de sesión en localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);

            // Redireccionar después del inicio de sesión
            window.location.href = "./pages/calculadora.html";
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});