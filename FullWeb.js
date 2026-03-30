/* ============================================================
   FullWeb.js — Gallery Preview + Keyboard Nav + Hamburger Menu
   ============================================================ */

const defaultText = "Hover over an image below to preview it here.";

/* ============================================================
   upDate — render hovered image in the preview box
   ============================================================ */
function upDate(previewPic) {
    const box     = document.getElementById("image");
    const caption = document.getElementById("image-caption");
    if (!box || !caption) return;
    box.style.backgroundImage = `url('${previewPic.src}')`;
    box.classList.add("active");
    caption.textContent = previewPic.alt;
}

/* ============================================================
   undo — reset the preview box to its empty default state
   ============================================================ */
function undo() {
    const box     = document.getElementById("image");
    const caption = document.getElementById("image-caption");
    if (!box || !caption) return;
    box.style.backgroundImage = "";
    box.classList.remove("active");
    caption.textContent = defaultText;
}

/* ============================================================
   addTabIndex — keyboard navigation for nav.links images
   ============================================================ */
function addTabIndex() {
    document.querySelectorAll("nav.links img").forEach((img, i) => {
        img.setAttribute("tabindex", i + 1);
    });
}

window.onload = addTabIndex;

/* ============================================================
   DOMContentLoaded — attach all events
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {

    /* ---- Gallery events (mouse + keyboard) ---- */
    document.querySelectorAll("nav.links img").forEach(function (img) {
        img.addEventListener("mouseover",  () => upDate(img));
        img.addEventListener("mouseleave", () => undo());
        img.addEventListener("focus",      () => upDate(img));
        img.addEventListener("blur",       () => undo());
    });

    /* ---- Hamburger menu toggle ---- */
    const hamburger = document.querySelector(".hamburger");
    const menu      = document.querySelector(".menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("open");
            menu.classList.toggle("open");

            /* Accessibility: update aria-expanded */
            const expanded = hamburger.classList.contains("open");
            hamburger.setAttribute("aria-expanded", expanded);
        });

        /* Close menu when a nav link is clicked (mobile UX) */
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("open");
                menu.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        /* Close menu on outside click */
        document.addEventListener("click", function (e) {
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                hamburger.classList.remove("open");
                menu.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* ---- Active nav link highlight ---- */
    const currentPage = window.location.pathname.split("/").pop() || "Introduce.html";
    document.querySelectorAll(".menu a").forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    /* ---- Card 3D mouse tilt (desktop only) ---- */
    if (window.matchMedia("(min-width: 998px)").matches) {
        document.querySelectorAll(".card").forEach(function (card) {
            card.addEventListener("mousemove", function (e) {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width  - 0.5;
                const y = (e.clientY - rect.top)  / rect.height - 0.5;
                card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
            });
            card.addEventListener("mouseleave", function () {
                card.style.transform = "";
            });
        });
    }
});