document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const header = document.querySelector('.hero-section');
    const mainNav = document.querySelector('.main-nav');
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const typingElement = document.querySelector('.typing-effect');

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
});