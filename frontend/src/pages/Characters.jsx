import { useState } from 'react';
import { useApp } from '../hooks/useApp';
import { useDivaAccent } from '../hooks/useDivaAccent';
import { CHARACTERS, EXTRA_CHARACTERS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

function CharFlipCard({ char, onAccentSelect }) {
  const { t } = useApp();
  const [flipped, setFlipped] = useState(false);

  const toggle = () => {
    setFlipped((f) => !f);
    onAccentSelect(char.accent);
  };

  return (
    <div
      className={`char-flip ${char.id}-card${flipped ? ' flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${char.name} profile card`}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      style={{ '--accent-c': char.accent }}
    >
      <div className="char-flip-inner">
        <div className="char-flip-front" style={{ borderColor: char.accent + '66' }}>
          <img src={char.img} alt={char.alt} />
          <div className="char-name-overlay">{char.name}</div>
        </div>
        <div className="char-flip-back">
          <p className="char-back-name" style={{ color: char.accent }}>{char.name}</p>
          <p className="char-code">{char.code} &nbsp;·&nbsp; {char.voice}</p>

          <div className="char-stat-row">
            <span className="char-stat-label">{t('lbl_voice_by')}</span>
            <span className="char-stat-val">{t(char.voiceByKey)}</span>
          </div>
          <div className="char-stat-row">
            <span className="char-stat-label">{t('lbl_released')}</span>
            <span className="char-stat-val">{t(char.releasedKey)}</span>
          </div>
          <div className="char-stat-row">
            <span className="char-stat-label">{t('lbl_height')}</span>
            <span className="char-stat-val">{t(char.heightKey)}</span>
          </div>
          <div className="char-stat-row">
            <span className="char-stat-label">{t('lbl_signature')}</span>
            <span className="char-stat-val">{t(char.signatureKey)}</span>
          </div>
          <p className="char-songs-title">{t('lbl_iconic_songs')}</p>
          <ul className="char-songs-list">
            {char.songs.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Characters() {
  const { t } = useApp();
  const { setAccent } = useDivaAccent();
  return (
    <>
      <PageHero title={t('chars_title')} sub={t('chars_page_sub')} />

      <main id="main">
        {/* ── CRYPTON 6 ── */}
        <div className="chars-section-label">
          <span>{t('tab_main')}</span>
        </div>
        <div className="char-grid">
          {CHARACTERS.map(c => <CharFlipCard key={c.id} char={c} onAccentSelect={setAccent} />)}
        </div>

        {/* ── EXTRA ── */}
        <div className="chars-section-label chars-section-label--extra">
          <span>{t('tab_extra')}</span>
        </div>
        <div className="char-grid char-grid--extra">
          {EXTRA_CHARACTERS.map(c => <CharFlipCard key={c.id} char={c} onAccentSelect={setAccent} />)}
        </div>
      </main>

      <Footer extra={
        <span style={{ color: 'var(--muted)', fontSize: '12px' }}>
          {t('footer_chars_src')}
        </span>
      } />
    </>
  );
}