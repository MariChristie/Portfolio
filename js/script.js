document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const header = document.querySelector('.hero-section');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerButton && header && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (header.classList.contains('nav-open')) {
                    header.classList.remove('nav-open');
                }
            });
        });
    }

    if (mainNav) {
        const stickyPoint = 50;
        window.addEventListener('scroll', function() {
            if (window.innerWidth > 992) {
                if (window.scrollY > stickyPoint) {
                    mainNav.classList.add('sticky');
                } else {
                    mainNav.classList.remove('sticky');
                }
            } else {
                mainNav.classList.remove('sticky');
            }
        });
    }

    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    function highlightNavLink() {
        let currentActive = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentActive = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentActive) {
                link.classList.add('active');
            }
        });
    }

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', highlightNavLink);
        window.addEventListener('load', highlightNavLink);
    }

    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const textToType = "Mary Christie";
        const typingSpeed = 150;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textToType.length) {
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        type();
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach((el) => observer.observe(el));
});

const swiper = new Swiper('.project-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
        }
    }
});

document.getElementById('contact-btn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
