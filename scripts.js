// Menu toggle para dispositivos móviles
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.querySelector('.navbar__menu');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    navbarMenu.classList.toggle('active');
});

// Smooth Scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de texto dinámico en la sección hero
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const ctaButton = document.querySelector('.btn--primary');

    heroTitle.innerHTML = heroTitle.textContent
        .split('')
        .map((letter, i) => `<span style="animation-delay: ${i * 50}ms">${letter}</span>`)
        .join('');

    heroTitle.querySelectorAll('span').forEach(span => {
        span.style.opacity = 1;
    });

    setTimeout(() => {
        heroDescription.style.opacity = 1;
        ctaButton.style.opacity = 1;
    }, 1000);
});

// Cambiar el color del menú al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
});


// Validación simple del formulario
const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', (event) => {
    const inputs = contactForm.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '1px solid #ccc';
        }
    });

    if (!valid) {
        event.preventDefault();
        alert('Por favor completa todos los campos.');
    }
});

// Animación de Texto Hero
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const ctaButton = document.querySelector('.btn--primary');

    // Aplicar una animación gradual al cargar
    setTimeout(() => {
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroDescription.style.opacity = 1;
        heroDescription.style.transform = 'translateY(0)';
    }, 600);

    setTimeout(() => {
        ctaButton.style.opacity = 1;
        ctaButton.style.transform = 'translateY(0)';
    }, 1000);
});

// Fondo Dinámico con Partículas
const createParticles = () => {
    const heroSection = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.opacity = Math.random();
        heroSection.appendChild(particle);
    }
};

// Llamada a la función para generar partículas
createParticles();

// Animación al Desplazarse
const handleScroll = () => {
    const heroContent = document.querySelector('.hero__content');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        heroContent.style.transform = `translateY(${scrollPosition / 10}px)`;
    } else {
        heroContent.style.transform = 'translateY(0)';
    }
};

// Agregar el evento de desplazamiento
window.addEventListener('scroll', handleScroll);


