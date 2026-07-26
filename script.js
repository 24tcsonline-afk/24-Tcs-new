/* ==========================================
   24 The Complete Solution
   script.js
========================================== */

// Mobile Navigation Toggle

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Close Mobile Menu on Link Click

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav) {
            nav.classList.remove("active");
        }
    });
});

// Scroll To Top Button

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

// Scroll To Top Action

if (scrollBtn) {

    scrollBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// Reveal Animation

const revealElements = document.querySelectorAll(".card,.stat,.timeline-item");

function reveal() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = 150;

        if (top < window.innerHeight - visible) {

            item.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// Contact Form

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}

// Current Year in Footer

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// Simple Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (question) {

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});

// Active Navigation Highlight

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});
