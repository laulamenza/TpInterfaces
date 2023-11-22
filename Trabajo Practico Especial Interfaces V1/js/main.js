let isAuthenticated = false; // Estado de inicio de sesión

const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const authenticatedUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (authenticatedUser) {
        isAuthenticated = true;
        sessionStorage.setItem('isAuthenticated', 'true'); // Almacenar en sessionStorage
        updateMenu();
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    isAuthenticated = false;
    sessionStorage.setItem('isAuthenticated', 'false'); // Almacenar en sessionStorage
    updateMenu();
    window.location.href = "login.html";
}

function updateMenu() {
    const loginMenuItem = document.getElementById("loginMenuItem");
    if (loginMenuItem) {
        if (isAuthenticated) {
            loginMenuItem.innerHTML = '<a href="javascript:logout()" class="btn-login-logout">Logout <img src="img/logout.png"></a>';
        } else {
            loginMenuItem.innerHTML = '<a href="login.html" class="btn-login-logout">Login<img src="img/login.png"></a>';
        }
    }
}

// Llamar a updateMenu al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true'; // Recuperar del sessionStorage
    updateMenu();
});
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page = path.split("/").pop(); // obtiene el nombre de la página actual
    var link = document.querySelector('a[href="' + page + '"]');
    if (link) {
        link.parentElement.classList.add('active');
    }
});