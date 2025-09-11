class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.body = document.body;

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation 
                ? "" 
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    }

    handleClick() {
        const isOpening = !this.navList.classList.contains(this.activeClass);
        
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        
        if (isOpening) {
            this.body.classList.add('menu-open');
        } else {
            this.body.classList.remove('menu-open');
        }
        
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navList.classList.remove(this.activeClass);
                this.mobileMenu.classList.remove(this.activeClass);
                this.body.classList.remove('menu-open');
                this.navLinks.forEach(l => l.style.animation = "");
            });
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();