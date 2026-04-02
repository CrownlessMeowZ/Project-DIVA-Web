/* FullWeb.js — Particles · Nav · Gallery · Flip Cards · Patch Notes */

/* ================================================================
   CANVAS PARTICLE SYSTEM — floating music notes
   ================================================================ */
(function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const NOTES  = ['♩','♪','♫','♬','✦','·'];
    const COLORS = ['#00d4ff','#ff66cc','#ffe566','rgba(0,212,255,0.4)','rgba(255,102,204,0.4)'];
    let particles = [], animId;

    function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }

    function newParticle(spreadY) {
        return {
            x: Math.random() * canvas.width,
            y: spreadY !== undefined ? Math.random() * canvas.height : canvas.height + 20,
            size: Math.random() * 18 + 8,
            vx: (Math.random() - 0.5) * 0.55,
            vy: -(Math.random() * 0.65 + 0.25),
            opacity: Math.random() * 0.45 + 0.08,
            decay: Math.random() * 0.0018 + 0.0008,
            char: NOTES[Math.floor(Math.random() * NOTES.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
    }

    function init() {
        for (let i = 0; i < 45; i++) particles.push(newParticle(true));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy; p.opacity -= p.decay;
            if (p.y < -30 || p.opacity <= 0) { particles[i] = newParticle(); continue; }
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.font = `${p.size}px serif`;
            ctx.fillText(p.char, p.x, p.y);
            ctx.restore();
        }
        animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    init(); draw();
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(animId); else draw();
    });
})();

/* ================================================================
   GALLERY PREVIEW
   ================================================================ */
const defaultCaption = 'Hover over an image below to preview it here.';

function upDate(img) {
    const box = document.getElementById('image');
    const cap = document.getElementById('image-caption');
    if (!box || !cap) return;
    box.style.backgroundImage = `url('${img.src}')`;
    box.classList.add('active');
    cap.textContent = img.alt;
}
function undo() {
    const box = document.getElementById('image');
    const cap = document.getElementById('image-caption');
    if (!box || !cap) return;
    box.style.backgroundImage = '';
    box.classList.remove('active');
    cap.textContent = defaultCaption;
}

/* ================================================================
   PATCH NOTES TOGGLE
   ================================================================ */
function togglePatch(hdr) {
    const entry = hdr.parentElement;
    const body  = entry.querySelector('.patch-body');
    const isOpen = entry.classList.contains('open');

    document.querySelectorAll('.patch-entry').forEach(e => {
        e.classList.remove('open');
        const b = e.querySelector('.patch-body');
        if (b) b.style.maxHeight = '0';
    });

    if (!isOpen) {
        entry.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
    }
}

/* ================================================================
   DOM CONTENT LOADED — all event bindings
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

    /* ---- Gallery: mouse + keyboard ---- */
    document.querySelectorAll('nav.links img').forEach((img, i) => {
        img.setAttribute('tabindex', i + 1);
        img.addEventListener('mouseover',  () => upDate(img));
        img.addEventListener('mouseleave', () => undo());
        img.addEventListener('focus',      () => upDate(img));
        img.addEventListener('blur',       () => undo());
    });

    /* ---- Hamburger menu ---- */
    const hamburger = document.querySelector('.hamburger');
    const nav       = document.querySelector('.topbar-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const open = hamburger.classList.toggle('open');
            nav.classList.toggle('open', open);
            hamburger.setAttribute('aria-expanded', open);
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        document.addEventListener('click', e => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ---- Active nav link (auto-detect current page) ---- */
    const page = window.location.pathname.split('/').pop() || 'Introduce.html';
    document.querySelectorAll('.topbar-nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });

    /* ---- Hero quick bar: active + per-page accent ---- */
    document.querySelectorAll('.hero-quick-bar .hql').forEach(a => {
        if (a.getAttribute('href') === page) {
            a.classList.add('active');
            a.style.color = getComputedStyle(a).getPropertyValue('color');
        }
    });

    /* ---- Flip card: touch / click toggle for mobile ---- */
    document.querySelectorAll('.char-flip').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });

    /* ---- Desktop card 3D tilt ---- */
    if (window.matchMedia('(min-width: 998px)').matches) {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width  - 0.5;
                const y = (e.clientY - r.top)  / r.height - 0.5;
                card.style.transform = `translateY(-8px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;
            });
            card.addEventListener('mouseleave', () => { card.style.transform = ''; });
        });
    }

    /* ---- Patch notes: open first entry by default ---- */
    const firstPatch = document.querySelector('.patch-entry .patch-hdr');
    if (firstPatch) togglePatch(firstPatch);
});