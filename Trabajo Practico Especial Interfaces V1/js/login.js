const users = [
    { username: "user1", password: "pass1", role: "administrador" },
    { username: "user2", password: "pass2", role: "normal" }
];

function login() {
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    authenticatedUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (authenticatedUser) {
        localStorage.setItem('isAuthenticated', 'true');
        // Almacena la información del usuario autenticado en localStorage
        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));

        if(authenticatedUser.role === "administrador"){
            window.location.href = "escritorio.html";
        } else {
            window.location.href = "index.html";
            updateMenu();
        }
    } else {
        let error = document.getElementById("error");
        error.classList.remove('oculto');
        error.classList.add('visible');
    }
}