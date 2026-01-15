// Scroll fade effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if section is being scrolled past
        if (scrollTop > sectionBottom - windowHeight * 0.3) {
            section.classList.add('scrolled-past');
        } else {
            section.classList.remove('scrolled-past');
        }
    });
});