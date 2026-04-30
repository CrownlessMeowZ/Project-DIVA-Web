import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CHARACTERS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

function CharFlipCard({ char }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`char-flip ${char.id}-card${flipped ? ' flipped' : ''}`}
      role="button"
      aria-label={`${char.name} profile card`}
      onClick={() => setFlipped(f => !f)}
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
          <div className="char-stat-row"><span className="char-stat-label">Voice by</span><span className="char-stat-val">{char.voiceBy}</span></div>
          <div className="char-stat-row"><span className="char-stat-label">Released</span><span className="char-stat-val">{char.released}</span></div>
          <div className="char-stat-row"><span className="char-stat-label">Height</span><span className="char-stat-val">{char.height}</span></div>
          <div className="char-stat-row"><span className="char-stat-label">Signature</span><span className="char-stat-val">{char.signature}</span></div>
          <p className="char-songs-title">Iconic Songs</p>
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
  return (
    <>
      <PageHero title={t('chars_title')} sub={t('chars_page_sub')} />
      <main id="main">
        <div className="char-grid">
          {CHARACTERS.map(c => <CharFlipCard key={c.id} char={c} />)}
        </div>
      </main>
      <Footer extra={<span style={{ color: 'var(--muted)', fontSize: '12px' }}>Voice data sourced from Vocaloid Wiki</span>} />
    </>
  );
}
