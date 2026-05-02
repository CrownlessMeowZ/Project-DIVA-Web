import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Topbar() {
  const { t, theme, setTheme, lang, setLang } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const links = [
    { to: '/',                 label: t('nav_home')    },
    { to: '/characters',       label: t('nav_chars')   },
    { to: '/skin-and-song',    label: t('nav_skin')    },
    { to: '/version-gameplay', label: t('nav_ver')     },
    { to: '/game-history',     label: t('nav_history') },
  ];

  return (
    <div className="topbar">
      {/* LEFT: logo */}
      <NavLink to="/" className="topbar-logo">Project DIVA</NavLink>

      {/* CENTER→RIGHT: nav links — margin-left:auto pushes to right */}
      <nav className={`topbar-nav${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <MobileSettings onClose={() => setMenuOpen(false)} />
      </nav>

      {/* RIGHT: settings pill — flex-shrink:0, no margin needed */}
      <div className="topbar-controls" ref={dropRef}>
        <button
          className="topbar-avatar-btn"
          onClick={() => setDropOpen(o => !o)}
          aria-label="Open settings"
          aria-expanded={dropOpen}
        >
          <span className="topbar-avatar-icon">
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
          <span className="topbar-avatar-label">Settings</span>
        </button>

        <div className={`topbar-dropdown${dropOpen ? ' open' : ''}`}>
          <div className="topbar-dropdown-group">
            <p className="topbar-dropdown-label">{t('settings_theme')}</p>
            <div className="topbar-dropdown-row">
              {['dark', 'light'].map(th => (
                <button key={th}
                  className={`topbar-dropdown-opt${theme === th ? ' active' : ''}`}
                  onClick={() => setTheme(th)}
                >
                  {th === 'dark' ? '🌙 Dark' : '☀️ Light'}
                </button>
              ))}
            </div>
          </div>
          <div className="topbar-dropdown-divider" />
          <div className="topbar-dropdown-group">
            <p className="topbar-dropdown-label">{t('settings_lang')}</p>
            <div className="topbar-dropdown-row">
              {[{ code: 'en', label: 'ENG' }, { code: 'vi', label: 'VIE' }].map(l => (
                <button key={l.code}
                  className={`topbar-dropdown-opt${lang === l.code ? ' active' : ''}`}
                  onClick={() => setLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger — mobile only */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span/><span/><span/>
      </button>
    </div>
  );
}

function MobileSettings({ onClose }) {
  const { theme, setTheme, lang, setLang, t } = useApp();
  return (
    <div className="topbar-nav-settings">
      <div className="nav-settings-row">
        <span>{t('settings_theme')}</span>
        <div className="nav-settings-btns">
          {['dark', 'light'].map(th => (
            <button key={th}
              className={`nav-settings-opt${theme === th ? ' active' : ''}`}
              onClick={() => { setTheme(th); onClose(); }}
            >
              {t(`settings_${th}`)}
            </button>
          ))}
        </div>
      </div>
      <div className="nav-settings-row">
        <span>{t('settings_lang')}</span>
        <div className="nav-settings-btns">
          {['en', 'vi'].map(l => (
            <button key={l}
              className={`nav-settings-opt${lang === l ? ' active' : ''}`}
              onClick={() => { setLang(l); onClose(); }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
