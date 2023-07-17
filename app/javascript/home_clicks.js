document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("search").addEventListener("click", () => {
        window.location.href = 'search.html';
    });

    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = 'cart.html';
    });

    document.getElementById("account").addEventListener("click", () => {
        window.location.href = 'profile.html';
    });

    const loginButton = document.getElementById("login");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = 'login.html';
        });
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            window.location.href = '/logout';
        });
    }

});


