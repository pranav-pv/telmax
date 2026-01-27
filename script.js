// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Sticky Navbar Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // WhatsApp Form Logic
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('admName').value;
            const studentClass = document.getElementById('admClass').value;
            const board = document.getElementById('admBoard').value;
            const parent = document.getElementById('admParent').value;
            const phone = document.getElementById('admPhone').value;
            const email = document.getElementById('admEmail').value || 'N/A';
            const address = document.getElementById('admAddress').value;

            const message = `*New Admission Enquiry*%0A%0A*Student Name:* ${name}%0A*Class:* ${studentClass}%0A*Board:* ${board}%0A*Parent Name:* ${parent}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Address:* ${address}`;

            window.open(`https://wa.me/919446615431?text=${message}`, '_blank');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const phone = contactForm.querySelector('input[placeholder="Your Phone"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const msg = contactForm.querySelector('textarea').value;

            const message = `*New Contact Enquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${msg}`;

            window.open(`https://wa.me/919446615431?text=${message}`, '_blank');
        });
    }
});
