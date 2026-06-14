import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useParticles } from '../hooks/useParticles';
import { CHARACTERS, GALLERY_LINKS } from '../data/content';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useApp();
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  // 3D tilt on desktop
  useEffect(() => {
    if (window.matchMedia('(min-width: 998px)').matches) {
      const cards = document.querySelectorAll('.card');
      const handlers = [];
      cards.forEach(card => {
        const mm = e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width  - 0.5;
          const y = (e.clientY - r.top)  / r.height - 0.5;
          card.style.transform = `translateY(-8px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;
        };
        const ml = () => { card.style.transform = ''; };
        card.addEventListener('mousemove', mm);
        card.addEventListener('mouseleave', ml);
        handlers.push({ card, mm, ml });
      });
      return () => handlers.forEach(({ card, mm, ml }) => {
        card.removeEventListener('mousemove', mm);
        card.removeEventListener('mouseleave', ml);
      });
    }
  }, []);

  const quickLinks = [
    { to: '/',                 label: t('nav_home'),    cls: 'hql-home'  },
    { to: '/characters',       label: t('nav_chars'),   cls: 'hql-chars' },
    { to: '/skin-and-song',    label: t('nav_skin'),    cls: 'hql-skin'  },
    { to: '/version-gameplay', label: t('nav_ver'),     cls: 'hql-ver'   },
    { to: '/game-history',     label: t('nav_history'), cls: 'hql-patch' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <canvas id="hero-canvas" ref={canvasRef} />
        <div className="hero-content">
          <p className="hero-eyebrow">{t('hero_eyebrow')}</p>
          <h1 className="hero-title">Project DIVA</h1>
          <p className="hero-sub">{t('hero_sub')}</p>

          <nav className="hero-quick-bar" aria-label="Quick navigation">
            {quickLinks.map((l, i) => (
              <span key={l.to}>
                {i > 0 && <span className="hql-sep" />}
                <NavLink to={l.to} className={({ isActive }) => `hql ${l.cls}${isActive ? ' active' : ''}`}>
                  {l.label}
                </NavLink>
              </span>
            ))}
          </nav>

          <div className="hero-cta">
            <Link to="/characters" className="btn-primary">{t('btn_explore')}</Link>
            <Link to="/game-history" className="btn-ghost">{t('btn_history')}</Link>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <h2 className="section-title center-title">{t('about_title')}</h2>
        <p className="about-text">{t('about_text')}</p>

        <GalleryPreview links={[
          {
            caption: 'Project DIVA Official Wiki',
            href: 'https://project-diva.fandom.com/wiki/Project_DIVA_Wiki',
            img: 'https://projectdiva.wiki/w/images/thumb/7/74/PjDWikiHome.png/1200px-PjDWikiHome.png',
            alt: 'Project DIVA official Fandom Wiki homepage',
          },
          {
            caption: 'MegaMix+ Official Site',
            href: 'https://miku.sega.com/megamixplus/index.html',
            img: 'https://miku.sega.com/megamixplus/img/og_img.jpg',
            alt: 'Hatsune Miku Project DIVA Mega Mix Plus official key visual',
          },
        ]} />
      </section>

      {/* CHARACTERS GRID */}
      <h2 className="section-title center-title">{t('chars_title')}</h2>
      <p className="sub-text">
        {t('chars_sub').replace(/<[^>]*>/g, '')} <Link to="/characters" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Characters page</Link>
      </p>

      <main id="main">
        <div className="grid">
          {CHARACTERS.map((c, i) => (
            <div className="card" key={c.id} style={{ '--accent-c': c.accent }}>
              <h3 id={`Vocaloid${i + 1}`} className="char-name">{c.name}</h3>
              <p>{t(c.descKey)}</p>
              <figure>
                <a target="_blank" rel="noopener noreferrer" href={c.wikiUrl}>
                  <img src={c.homeImg || c.img} alt={c.alt} />
                </a>
                <figcaption>{c.name} — {c.code}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </main>

      <Footer extra={
        <details className="char-list">
          <summary>{t('footer_jump')}</summary>
          <nav>
            {CHARACTERS.map((c, i) => (
              <a key={c.id} href={`#Vocaloid${i + 1}`}>{c.name}</a>
            ))}
          </nav>
        </details>
      } />
    </>
  );
}
