document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email === "cliente@gmail.com" && password === "cliente") {
            window.location.href = "cliente.html";
        } else if (email === "doctor@galenos.cl" && password === "doctor") {
            window.location.href = "agendam.html";
        } else if (email === "secretaria@galenos.cl" && password === "secretaria") {
            window.location.href = "agendam.html";
        } else {
            alert("Contraseña incorrecta o dirección de correo no válida");
        }
    });
});
