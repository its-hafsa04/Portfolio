let menuIcon = document.querySelector('.bx-menu');  // Ensure correct icon class
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150; // Adjust offset as needed
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
       
    // Close mobile menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-section h1, .skills-container, .portfolio-box', { origin: 'top' });
ScrollReveal().reveal('.home-section p, .input-form, textarea', { origin: 'bottom' });
ScrollReveal().reveal('.home-section h3, .social-media', { origin: 'left' });
ScrollReveal().reveal('.home-section .btn', { origin: 'right' });

// Typed.js effect
var typed = new Typed('.typed-text', {
    strings: ['MERN Stack Developer!', 'Tech Enthusiast!'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
