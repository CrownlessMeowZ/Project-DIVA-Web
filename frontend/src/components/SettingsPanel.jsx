import { useApp } from '../hooks/useApp';

export default function SettingsPanel({ open, onClose }) {
  const { theme, setTheme, lang, setLang, t } = useApp();

  return (
    <div id="settings-panel" className={open ? 'open' : ''}>
      <div className="settings-backdrop" onClick={onClose} />
      <div className="settings-drawer">
        <div className="settings-header">
          <span>{t('settings_title')}</span>
          <button className="settings-close" onClick={onClose}>✕</button>
        </div>
        <div className="settings-body">
          <div className="settings-group">
            <p className="settings-label">{t('settings_theme')}</p>
            <div className="settings-row">
              {['dark','light'].map(th => (
                <button key={th}
                  className={`settings-theme-opt${theme === th ? ' active' : ''}`}
                  data-theme={th}
                  onClick={() => setTheme(th)}
                >
                  {t(`settings_${th}`)}
                </button>
              ))}
            </div>
          </div>
          <div className="settings-group">
            <p className="settings-label">{t('settings_lang')}</p>
            <div className="settings-row">
            <button 
              className={`lang-opt${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              {t('settings_lang_en')}
            </button>
            <button 
              className={`lang-opt${lang === 'vi' ? ' active' : ''}`}
              onClick={() => setLang('vi')}
            >
              {t('settings_lang_vi')}
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
