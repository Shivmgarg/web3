// Scroll to specific sections on click
document.querySelectorAll('.nav a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    };
});

// Implementing a simple animation when the user scrolls to a section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.opacity = 1;
        } else {
            section.style.opacity = 1;
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.water-title h1');

    // Example: Change title on click
    title.addEventListener('click', () => {
        title.style.backgroundSize = '250% 100%';
    });
});

