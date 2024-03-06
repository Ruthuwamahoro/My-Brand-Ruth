//authentication to this page
let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}