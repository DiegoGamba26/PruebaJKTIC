document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "index.html";
    } else {
        document.getElementById("welcomeMessage").textContent = `Bienvenido, ${user}`;
    }

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "index.html";
    });
});
