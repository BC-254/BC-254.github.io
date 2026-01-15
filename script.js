// Scroll animations and effects
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card, .project-card');
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Section fade effect
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollTop > sectionBottom - windowHeight * 0.3) {
            section.classList.add('scrolled-past');
        } else {
            section.classList.remove('scrolled-past');
        }
    });
    
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
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroOffset = scrollTop * 0.5;
        hero.style.transform = `translateY(${heroOffset}px)`;
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth reveal on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});