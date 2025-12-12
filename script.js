// Animación fade-in al hacer scroll
const elements = document.querySelectorAll(".fade-in");

function handleScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll();