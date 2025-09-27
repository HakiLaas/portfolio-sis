// Hamburger Menu
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");
var links = document.querySelector(".nav-links li");

const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.nav-link');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Button Next dan Home
document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section a");
    const aboutSection = document.getElementById("about");
    const arrowIcon = nextSection.querySelector("i");

    window.addEventListener("scroll", () => {
        const aboutTop = aboutSection.getBoundingClientRect().top;

        if (aboutTop <= 100) {
            arrowIcon.classList.remove("bx-chevron-down");
            arrowIcon.classList.add("bx-chevron-up");
            nextSection.href = "#";
        } else {
            arrowIcon.classList.remove("bx-chevron-up");
            arrowIcon.classList.add("bx-chevron-down");
            nextSection.href = "#about";
        }
    });
});

// Fade
const fade = document.querySelectorAll('.fade');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;
    const triggerTop = window.innerHeight * 0.1;

    fade.forEach(box => {
        const fadeTop = box.getBoundingClientRect().top;
        const fadeBottom = box.getBoundingClientRect().bottom;

        if (fadeTop < triggerBottom && fadeBottom > triggerTop) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Dark Mode Light Mode
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelectorAll("#theme, #sun");
    const body = document.body;

    const Icon = () => {
        themeToggle.forEach(btn => {
            if (body.classList.contains("dark")) {
                btn.classList.remove("bx-sun");
                btn.classList.add("bx-moon");
            } else {
                btn.classList.remove("bx-moon");
                btn.classList.add("bx-sun");
            }
        });
    };

    themeToggle.forEach(toggle => {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark");
            Icon();
        });
    });
    Icon();
});