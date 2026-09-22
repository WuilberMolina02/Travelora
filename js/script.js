/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Cerrar menú al seleccionar */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   ACTIVE NAV
========================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SEARCH TABS
========================= */

const tabs = document.querySelectorAll(".search-tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const type = tab.dataset.tab;

        if (type === "flights") {
            showToast("Buscador de vuelos activado ✈️");
        }

        if (type === "combos") {
            showToast("Buscador de combos activado 👥");
        }

        if (type === "hotels") {
            showToast("Buscador de hoteles activado 🏨");
        }

    });

});


/* =========================
   SWAP ORIGIN / DESTINATION
========================= */

const swapBtn = document.getElementById("swapBtn");

swapBtn.addEventListener("click", () => {

    const from = document.getElementById("from");
    const to = document.getElementById("to");

    const temporary = from.value;

    from.value = to.value;
    to.value = temporary;

    swapBtn.style.transform = "rotate(180deg)";

    setTimeout(() => {
        swapBtn.style.transform = "rotate(0)";
    }, 400);

});


/* =========================
   SEARCH FLIGHTS
========================= */

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!from || !to) {

        showToast("Completa tu origen y destino ✈️");

        return;
    }

    showToast(
        `Buscando vuelos de ${from} a ${to}...`
    );

});


/* =========================
   TOAST
========================= */

let toastTimeout;

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email) {

        showToast(
            "¡Gracias! Te enviaremos las mejores ofertas ✈️"
        );

        newsletterForm.reset();

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const animatedElements = document.querySelectorAll(
    ".destination-card, .combo-card, .hotel-card, .benefit"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   BUTTONS
========================= */

document.querySelectorAll(
    ".combo-card button, .offer-content button"
).forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            "Esta sección estará disponible próximamente 🚀"
        );

    });

});