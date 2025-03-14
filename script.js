document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el usuario ya está logueado
    if (localStorage.getItem("user")) {
        window.location.href = "dashboard.html";
    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");
        const loginBtn = document.getElementById("loginBtn");

        errorMessage.textContent = "";
        loginBtn.innerHTML = "Cargando...";
        loginBtn.disabled = true;

        setTimeout(() => {
            fetch("auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem("user", email);
                    window.location.href = "dashboard.html";
                } else {
                    errorMessage.textContent = data.message;
                    loginBtn.innerHTML = "Iniciar Sesión";
                    loginBtn.disabled = false;
                }
            });
        }, 1000);
    });
});
