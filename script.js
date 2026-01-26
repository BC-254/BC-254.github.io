// Scroll animations and effects
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card, .project-card');
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
       
    // Card reveal animations
    cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        
        if (scrollTop + windowHeight > cardTop + cardHeight * 0.2) {
            setTimeout(() => {
                card.classList.add('reveal');
            }, index * 150);
        }
    });
    
   });

// Smooth reveal on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Handle anchor navigation from other pages
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Optional: Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});