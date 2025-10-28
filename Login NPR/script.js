const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");

// Seleciona os links e botão
const showLoginLink = document.getElementById("show-login");
const showRegisterLink = document.getElementById("show-register");
const btnLogar = document.getElementById("btn-logar");

// Função para mostrar login
function mostrarLogin() {
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
}

// Função para mostrar registro
function mostrarRegistro() {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
}

// Ao clicar em “Logar” (link)
showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarLogin();
});

// Ao clicar em “Cadastre-se”
showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarRegistro();
});

// Ao clicar no botão “Logar” da tela de registro
btnLogar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarLogin();
});