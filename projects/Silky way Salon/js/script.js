
    fetch('js/services.js')
        .then(response => response.json())
        .then(services => {
            const container = document.getElementById('services-container');
            services.forEach(service => {
                container.innerHTML += `
                    <div class="service-card">
                        <img src="${service.image}" alt="${service.name}">
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <span class="price">${service.price}</span>
                        <button class="book-button">To schedule</button>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Erro ao carregar serviços:', error));

    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn")
    let nextBtn = document.getElementById("nextBtn")

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";

    });

    nextBtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });

    backBtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    });