import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../hooks/useApp';
import SettingsPanel from './SettingsPanel';

export default function Topbar() {
  const { t, theme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const links = [
    { to: '/',                 label: t('nav_home')    },
    { to: '/characters',       label: t('nav_chars')   },
    { to: '/skin-and-song',    label: t('nav_skin')    },
    { to: '/version-gameplay', label: t('nav_ver')     },
    { to: '/game-history',     label: t('nav_history') },
    { to: '/producers',        label: t('nav_producers') },
    { to: '/concerts',         label: t('nav_concerts') },
  ];

  return (
    <>
      <div className="topbar">
        <NavLink to="/" className="topbar-logo">Project DIVA</NavLink>

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
        </nav>

        <div className="topbar-controls">
          <button
            className="topbar-avatar-btn"
            onClick={() => setSettingsOpen(true)}
            aria-label={t('settings_title')}
            aria-expanded={settingsOpen}
          >
            <span className="topbar-avatar-icon">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
            <span className="topbar-avatar-label">{t('settings_title')}</span>
          </button>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={t('nav_toggle')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>
      </div>

      <SettingsPanel
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
}