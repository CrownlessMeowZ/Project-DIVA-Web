/* ================================================================
   PROJECT DIVA — FullWeb.js
   Particles · Nav · Gallery · Flip · Accordion
   Dark/Light Mode · EN/VI i18n · Settings Panel
   ================================================================ */

/* ================================================================
   i18n STRING TABLE
   ================================================================ */
const STRINGS = {
    en: {
        nav_home:'Home', nav_chars:'Characters', nav_skin:'Skin & Song',
        nav_ver:'Version & Gameplay', nav_history:'Game History',
        settings_title:'Settings', settings_theme:'Theme',
        settings_dark:'Dark', settings_light:'Light', settings_lang:'Language',
        hero_eyebrow:'SEGA × Crypton Future Media',
        hero_sub:'The definitive Vocaloid rhythm game experience — where music, motion, and Miku collide.',
        btn_explore:'Explore Characters', btn_history:'Game History',
        about_title:'About Project DIVA',
        about_text:'Project DIVA is a critically acclaimed rhythm game series co-developed by SEGA and Crypton Future Media. Players tap, hold, and swipe notes in perfect sync with iconic Vocaloid tracks, unlocking hundreds of costumes and experiencing richly animated music videos. From its 2009 PSP debut to the 2022 PC release of MegaMix+, Project DIVA has defined a generation of music games.',
        chars_title:'Vocaloid Characters',
        chars_sub:'Hover over a card to learn more — or visit the <a href="Characters.html" style="color:var(--cyan);text-decoration:none;">Characters page</a> for full profiles.',
        preview_hint:'Hover over an image below to preview it here.',
        btn_reset:'↩ Reset Preview',
        footer_jump:'Jump to Character',
        footer_copy:'© 2009–2024 SEGA & Crypton Future Media',
        chars_page_title:'Vocaloid Characters',
        chars_page_sub:"Six voices. Infinite songs. Hover a card to reveal each character's full profile — or tap to flip on mobile.",
        skin_title:'Skins & Songs',
        skin_sub:'Hundreds of unlockable costumes and five legendary tracks that define the Project DIVA experience.',
        gallery_title:'Module Galleries',
        gallery_sub:'Hover over a cover to preview — click to visit the full module list for that version.',
        songs_title:'Iconic Songs',
        songs_sub:'Five legendary tracks that shaped the Project DIVA series — and Vocaloid music as a whole.',
        ver_title:'Versions & Gameplay',
        ver_sub:'From a humble PSP debut to a Nintendo Switch global release — 15 years of rhythm game evolution across five major titles.',
        ver_timeline_title:'Version Timeline',
        gameplay_title:'Gameplay Showcase',
        gameplay_sub:'Three iconic songs — three levels of challenge. See how the chart design evolves from beginner-friendly to brutally expert.',
        gh_title:'Game History',
        gh_sub:'Fifteen years of rhythm. From a 2009 PSP experiment to a global PC phenomenon — every title in the Project DIVA series, documented.',
        /* Character descriptions */
        miku_desc:'CV01 — The world\'s most iconic virtual singer. Miku\'s teal twin-tails and optimistic soprano voice have defined Vocaloid music since her 2007 debut.',
        rin_desc:'CV02 — Energetic and fierce, Rin\'s bright soprano cuts through any genre. From ballads to metal, her versatility has made her a fan favourite since 2007.',
        len_desc:'CV02 — Rin\'s twin brother with a warmer, lighter tenor. Len\'s songs span dramatic epics and comedic storytelling, always delivered with unmistakable flair.',
        luka_desc:'CV03 — Bilingual, mature, and effortlessly cool. Luka\'s deep mezzo-soprano is the voice of sophisticated Vocaloid music, equally at home in jazz and EDM.',
        kaito_desc:'The first Japanese male Vocaloid — KAITO\'s warm, resonant baritone and signature blue scarf have made him an enduring symbol of the entire Vocaloid movement since 2006.',
        meiko_desc:'The first Japanese female Vocaloid — MEIKO\'s bold, expressive alto voice and red design set the foundation for all of Crypton\'s future creations, debuting in 2004.',
    },
    vi: {
        nav_home:'Trang chủ', nav_chars:'Nhân vật', nav_skin:'Trang phục & Bài hát',
        nav_ver:'Phiên bản & Gameplay', nav_history:'Lịch sử game',
        settings_title:'Cài đặt', settings_theme:'Giao diện',
        settings_dark:'Tối', settings_light:'Sáng', settings_lang:'Ngôn ngữ',
        hero_eyebrow:'SEGA × Crypton Future Media',
        hero_sub:'Trải nghiệm game nhịp điệu Vocaloid đỉnh cao — nơi âm nhạc, chuyển động và Miku hội tụ.',
        btn_explore:'Khám phá nhân vật', btn_history:'Lịch sử game',
        about_title:'Giới thiệu Project DIVA',
        about_text:'Project DIVA là series game nhịp điệu được phát triển bởi SEGA và Crypton Future Media. Người chơi chạm, giữ và vuốt các nốt nhạc theo nhịp với những bản nhạc Vocaloid nổi tiếng, mở khóa hàng trăm trang phục và thưởng thức các video âm nhạc sống động. Từ lần ra mắt trên PSP năm 2009 đến phiên bản PC MegaMix+ năm 2022, Project DIVA đã định hình cả một thế hệ game âm nhạc.',
        chars_title:'Nhân vật Vocaloid',
        chars_sub:'Di chuột lên thẻ để xem thêm — hoặc truy cập <a href="Characters.html" style="color:var(--cyan);text-decoration:none;">trang Nhân vật</a> để xem hồ sơ đầy đủ.',
        preview_hint:'Di chuột lên ảnh bên dưới để xem trước tại đây.',
        btn_reset:'↩ Đặt lại xem trước',
        footer_jump:'Chuyển đến nhân vật',
        footer_copy:'© 2009–2024 SEGA & Crypton Future Media',
        chars_page_title:'Nhân vật Vocaloid',
        chars_page_sub:'Sáu giọng hát. Vô vàn bài nhạc. Di chuột vào thẻ để khám phá hồ sơ — hoặc chạm để lật trên thiết bị di động.',
        skin_title:'Trang phục & Bài hát',
        skin_sub:'Hàng trăm trang phục có thể mở khóa và năm bản nhạc huyền thoại định hình trải nghiệm Project DIVA.',
        gallery_title:'Bộ sưu tập trang phục',
        gallery_sub:'Di chuột lên ảnh bìa để xem trước — nhấp để xem toàn bộ danh sách module của phiên bản đó.',
        songs_title:'Bài hát biểu tượng',
        songs_sub:'Năm bản nhạc huyền thoại đã định hình series Project DIVA — và cả nền nhạc Vocaloid.',
        ver_title:'Phiên bản & Gameplay',
        ver_sub:'Từ màn ra mắt khiêm tốn trên PSP đến phát hành toàn cầu trên Nintendo Switch — 15 năm tiến hóa của game nhịp điệu.',
        ver_timeline_title:'Dòng thời gian phiên bản',
        gameplay_title:'Trình diễn gameplay',
        gameplay_sub:'Ba bài hát biểu tượng — ba cấp độ thử thách. Xem cách thiết kế chart tiến hóa từ thân thiện với người mới đến cực kỳ khắc nghiệt.',
        gh_title:'Lịch sử game',
        gh_sub:'Mười lăm năm nhịp điệu. Từ thử nghiệm PSP năm 2009 đến hiện tượng PC toàn cầu — mọi tựa game trong series Project DIVA.',
        /* Character descriptions */
        miku_desc:'CV01 — Ca sĩ ảo biểu tượng nhất thế giới. Đôi đuôi ngựa xanh ngọc và giọng soprano lạc quan của Miku đã định hình nền nhạc Vocaloid từ năm 2007.',
        rin_desc:'CV02 — Năng động và mạnh mẽ, giọng soprano sáng của Rin có thể xuyên qua mọi thể loại. Từ ballad đến metal, sự đa dạng của cô đã làm mưa làm gió từ năm 2007.',
        len_desc:'CV02 — Người anh song sinh của Rin với giọng tenor ấm áp hơn. Các bài hát của Len trải dài từ những thiên sử thi kịch tính đến những câu chuyện hài hước.',
        luka_desc:'CV03 — Song ngữ, trưởng thành và đầy phong cách. Giọng mezzo-soprano trầm ấm của Luka là tiếng nói của dòng nhạc Vocaloid tinh tế, phù hợp với cả jazz lẫn EDM.',
        kaito_desc:'Vocaloid nam đầu tiên của Nhật — Giọng baritone ấm áp và chiếc khăn quàng xanh đặc trưng của KAITO đã làm nên biểu tượng của phong trào Vocaloid từ năm 2006.',
        meiko_desc:'Vocaloid nữ đầu tiên của Nhật — Giọng alto mạnh mẽ và thiết kế màu đỏ của MEIKO đã đặt nền móng cho mọi sáng tạo sau này của Crypton, ra mắt năm 2004.',
    }
};

/* ================================================================
   THEME MANAGER
   ================================================================ */
const ThemeManager = (() => {
    const KEY = 'diva-theme';
    let current = localStorage.getItem(KEY) || 'dark';

    function apply(theme) {
        current = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(KEY, theme);
        // FIX: dark = 🌙 (click để chuyển sang sáng), light = ☀️ (click để chuyển sang tối)
        const icon = theme === 'dark' ? '🌙' : '☀️';
        document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
        // Sync tất cả theme buttons
        document.querySelectorAll('.settings-theme-opt, .nav-theme-opt').forEach(el => {
            el.classList.toggle('active', el.dataset.theme === theme);
        });
    }

    function toggle() { apply(current === 'dark' ? 'light' : 'dark'); }
    function init()   { apply(current); }
    return { init, toggle, apply, get: () => current };
})();

/* ================================================================
   i18n MANAGER
   ================================================================ */
const I18n = (() => {
    const KEY = 'diva-lang';
    let lang = localStorage.getItem(KEY) || 'en';

    function apply(l) {
        lang = l;
        localStorage.setItem(KEY, l);
        document.documentElement.lang = l;
        const s = STRINGS[l];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (!s[key]) return;
            if (el.dataset.i18nHtml === 'true') el.innerHTML = s[key];
            else el.textContent = s[key];
        });
        // Sync lang buttons
        document.querySelectorAll('.lang-opt, .nav-lang-opt').forEach(el => {
            el.classList.toggle('active', el.dataset.lang === l);
        });
    }

    function init() { apply(lang); }
    return { init, apply, get: () => lang };
})();

/* ================================================================
   SETTINGS PANEL — desktop only
   ================================================================ */
function buildSettingsPanel() {
    const panel = document.createElement('div');
    panel.id = 'settings-panel';
    panel.innerHTML = `
        <div class="settings-backdrop" id="settings-backdrop"></div>
        <aside class="settings-drawer" role="dialog" aria-label="Settings">
            <div class="settings-header">
                <span data-i18n="settings_title">Settings</span>
                <button class="settings-close" id="settings-close" aria-label="Close">✕</button>
            </div>
            <div class="settings-body">
                <div class="settings-group">
                    <p class="settings-label" data-i18n="settings_theme">Theme</p>
                    <div class="settings-row">
                        <button class="settings-theme-opt" data-theme="dark" data-i18n="settings_dark">Dark</button>
                        <button class="settings-theme-opt" data-theme="light" data-i18n="settings_light">Light</button>
                    </div>
                </div>
                <div class="settings-group">
                    <p class="settings-label" data-i18n="settings_lang">Language</p>
                    <div class="settings-row">
                        <button class="lang-opt" data-lang="en">EN</button>
                        <button class="lang-opt" data-lang="vi">VI</button>
                    </div>
                </div>
            </div>
        </aside>`;
    document.body.appendChild(panel);

    document.getElementById('settings-backdrop').addEventListener('click', closeSettings);
    document.getElementById('settings-close').addEventListener('click', closeSettings);
    panel.querySelectorAll('.settings-theme-opt').forEach(btn =>
        btn.addEventListener('click', () => ThemeManager.apply(btn.dataset.theme)));
    panel.querySelectorAll('.lang-opt').forEach(btn =>
        btn.addEventListener('click', () => I18n.apply(btn.dataset.lang)));
}

function openSettings()  { document.getElementById('settings-panel').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSettings() { document.getElementById('settings-panel').classList.remove('open'); document.body.style.overflow = ''; }

/* ================================================================
   TOPBAR CONTROLS — inject vào topbar (desktop + mobile)
   ================================================================ */
function buildTopbarControls() {
    const topbar = document.querySelector('.topbar');
    const hamburger = topbar.querySelector('.hamburger');

    // Desktop: 2 icon buttons trước hamburger
    const controls = document.createElement('div');
    controls.className = 'topbar-controls';
    controls.innerHTML = `
        <button class="topbar-icon-btn" id="theme-toggle-btn" aria-label="Toggle theme" title="Toggle theme">
            <span class="theme-icon">🌙</span>
        </button>
        <button class="topbar-icon-btn" id="settings-open-btn" aria-label="Open settings" title="Settings">⚙️</button>`;
    topbar.insertBefore(controls, hamburger);

    document.getElementById('theme-toggle-btn').addEventListener('click', ThemeManager.toggle);
    document.getElementById('settings-open-btn').addEventListener('click', openSettings);

    // Mobile: thêm theme + lang controls vào cuối topbar-nav dropdown
    const nav = topbar.querySelector('.topbar-nav');
    const mobileSettings = document.createElement('div');
    mobileSettings.className = 'topbar-nav-settings';
    mobileSettings.innerHTML = `
        <div class="nav-settings-row">
            <span data-i18n="settings_theme">Theme</span>
            <div class="nav-settings-btns">
                <button class="nav-settings-opt nav-theme-opt" data-theme="dark" data-i18n="settings_dark">Dark</button>
                <button class="nav-settings-opt nav-theme-opt" data-theme="light" data-i18n="settings_light">Light</button>
            </div>
        </div>
        <div class="nav-settings-row">
            <span data-i18n="settings_lang">Language</span>
            <div class="nav-settings-btns">
                <button class="nav-settings-opt nav-lang-opt" data-lang="en">EN</button>
                <button class="nav-settings-opt nav-lang-opt" data-lang="vi">VI</button>
            </div>
        </div>`;
    nav.appendChild(mobileSettings);

    mobileSettings.querySelectorAll('.nav-theme-opt').forEach(btn =>
        btn.addEventListener('click', () => ThemeManager.apply(btn.dataset.theme)));
    mobileSettings.querySelectorAll('.nav-lang-opt').forEach(btn =>
        btn.addEventListener('click', () => I18n.apply(btn.dataset.lang)));
}

/* ================================================================
   CANVAS PARTICLE SYSTEM
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
    function init() { for (let i = 0; i < 45; i++) particles.push(newParticle(true)); }
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
    cap.textContent = STRINGS[I18n.get()].preview_hint;
}

/* ================================================================
   PATCH / HISTORY ACCORDION
   ================================================================ */
function togglePatch(hdr) {
    const entry  = hdr.parentElement;
    const body   = entry.querySelector('.patch-body');
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
   DOM CONTENT LOADED
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

    /* 1. Build UI controls trước */
    buildTopbarControls();
    buildSettingsPanel();

    /* 2. Init theme — FIX: apply trước khi i18n để active states đúng */
    ThemeManager.init();

    /* 3. Init i18n */
    I18n.init();

    /* Gallery */
    document.querySelectorAll('nav.links img').forEach((img, i) => {
        img.setAttribute('tabindex', i + 1);
        img.addEventListener('mouseover',  () => upDate(img));
        img.addEventListener('mouseleave', () => undo());
        img.addEventListener('focus',      () => upDate(img));
        img.addEventListener('blur',       () => undo());
    });

    /* Hamburger */
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
            if (!hamburger.contains(e.target) && !nav.contains(e.target)
                && !e.target.closest('.topbar-controls')) {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* Active nav */
    const page = window.location.pathname.split('/').pop() || 'Introduce.html';
    document.querySelectorAll('.topbar-nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
    document.querySelectorAll('.hero-quick-bar .hql').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });

    /* Flip cards */
    document.querySelectorAll('.char-flip').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });

    /* Desktop 3D tilt */
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

    /* Open first patch entry */
    const firstPatch = document.querySelector('.patch-entry .patch-hdr');
    if (firstPatch) togglePatch(firstPatch);
});