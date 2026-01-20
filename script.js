// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show-menu');
}

// Generate floating particles for futuristic effect
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 1}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
}

// Scroll reveal effect
const reveals = document.querySelectorAll('.hero, .section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(reveal => {
    observer.observe(reveal);
});
