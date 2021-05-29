document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("hamburguesa").addEventListener("click", () => {
        let navbar = document.querySelector(".navbar")
        navbar.classList.toggle("dropdown");
        navbar.classList.toggle("navbar-visible");
    })

});
