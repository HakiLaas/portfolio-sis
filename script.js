// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Header Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})


// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll(
        '.about-img, .about-text, .skill-category, .timeline-item, .portfolio-item, .contact-info, .contact-form'
    );

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const inView = elementTop < window.innerHeight - 200 && elementBottom > 0;

        if (inView) {
            element.classList.add('animated');    // fade in
        } else {
            element.classList.remove('animated'); // fade out (auto by CSS transition)
        }
    });
}

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Portfolio Filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                // Re-trigger animation
                setTimeout(() => {
                    item.classList.add('animated');
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Initialize animations on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add pulse animation to CTA button periodically
setInterval(() => {
    const ctaBtn = document.querySelector('.hero .btn');
    ctaBtn.classList.add('pulse');
    setTimeout(() => {
        ctaBtn.classList.remove('pulse');
    }, 2000);
}, 4000);

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