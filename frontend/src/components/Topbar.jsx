import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import SettingsPanel from './SettingsPanel';

export default function Topbar() {
  const { t, theme, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen]     = useState(false);
  const [settingsOpen, setSettings] = useState(false);

  const links = [
    { to: '/',                label: t('nav_home')    },
    { to: '/characters',      label: t('nav_chars')   },
    { to: '/skin-and-song',   label: t('nav_skin')    },
    { to: '/version-gameplay',label: t('nav_ver')     },
    { to: '/game-history',    label: t('nav_history') },
  ];

  return (
    <>
      <div className="topbar">
        <NavLink to="/" className="topbar-logo">Project DIVA</NavLink>

        {/* Desktop controls */}
        <div className="topbar-controls">
          <button className="topbar-icon-btn" id="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
          </button>
          <button className="topbar-icon-btn" id="settings-open-btn" onClick={() => setSettings(true)} aria-label="Open settings">
            ⚙️
          </button>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>

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

          {/* Mobile settings row */}
          <MobileSettings onClose={() => setMenuOpen(false)} />
        </nav>
      </div>

      <SettingsPanel open={settingsOpen} onClose={() => setSettings(false)} />
    </>
  );
}

function MobileSettings({ onClose }) {
  const { theme, setTheme, lang, setLang, t } = useApp();
  return (
    <div className="topbar-nav-settings">
      <div className="nav-settings-row">
        <span>{t('settings_theme')}</span>
        <div className="nav-settings-btns">
          {['dark','light'].map(th => (
            <button key={th}
              className={`nav-settings-opt${theme === th ? ' active' : ''}`}
              data-theme={th}
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
          {['en','vi'].map(l => (
            <button key={l}
              className={`nav-settings-opt${lang === l ? ' active' : ''}`}
              data-lang={l}
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
