function logout() {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.setItem('authenticatedUser',null);
    window.location.href = "login.html";
}

function updateMenu() {
    let loginMenuItem = document.getElementById("loginMenuItem");
    if (loginMenuItem) {
        if (localStorage.getItem('isAuthenticated') === 'true') {
            let user = JSON.parse(localStorage.getItem('authenticatedUser'));
            if (user && user.role === 'administrador') {
                let escritorio = document.getElementById("escritorio");
                escritorio.classList.remove('oculto');
                escritorio.classList.add('visible');
            }
                loginMenuItem.innerHTML = '<a href="javascript:logout()" class="btn-login-logout">Logout <img src="img/logout.png"></a>';
        } else {
            loginMenuItem.innerHTML = '<a href="login.html" class="btn-login-logout">Login <img src="img/login.png"></a>';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page = path.split("/").pop(); // obtiene el nombre de la página actual
    var link = document.querySelector('a[href="' + page + '"]');
    if (link) {
        link.parentElement.classList.add('active');
    }
    updateMenu();
});