import { useApp } from '../hooks/useApp';
import { PRODUCERS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

function ProducerCard({ p }) {
  const { t } = useApp();
  return (
    <div className="card producer-card" style={{ '--accent-c': '#00d4ff' }}>
      <div className="producer-avatar-wrap">
        <a href={p.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} YouTube channel`}>
          <img
            className="producer-avatar"
            src={p.avatar}
            alt={`${p.name} avatar`}
            loading="lazy"
          />
        </a>
      </div>
      <h3 className="producer-name">{p.name}</h3>
      <div className="producer-meta">
        <span className="producer-genre">{p.genre}</span>
      </div>
      <p className="producer-desc">{t(p.descKey)}</p>

      <div className="producer-famous">
        <span className="producer-label">{t('lbl_iconic_diva')}</span>
        <strong>{p.famousSong}</strong>
      </div>

      <ul className="producer-songs">
        {p.songs.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Producers() {
  const { t } = useApp();

  return (
    <>
      <PageHero title={t('producers_title')} sub={t('producers_sub')} />

      <p className="sub-text" style={{ maxWidth: 720, margin: '0 auto 16px', textAlign: 'center' }}>
        {t('producers_hint')}
      </p>

      <main id="main">
        <div className="grid producers-grid">
          {PRODUCERS.map((p) => (
            <ProducerCard key={p.id} p={p} />
          ))}
        </div>
      </main>

      <Footer extra={
        <span style={{ color: 'var(--muted)', fontSize: '12px' }}>
          Producer data compiled from official track credits &amp; community archives
        </span>
      } />
    </>
  );
}
