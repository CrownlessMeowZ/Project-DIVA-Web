import { useApp } from '../hooks/useApp';
import { CONCERTS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

export default function Concerts() {
  const { t } = useApp();

  return (
    <>
      <PageHero title={t('concerts_title')} sub={t('concerts_sub')} />

      <h2 className="section-title center-title">{t('concerts_timeline_title')}</h2>

      <nav className="links version-timeline concerts-timeline" aria-label="Concerts and live events timeline">
        <ol className="timeline-list">
          {CONCERTS.map((c, idx) => (
            <li className="timeline-item concert-item" key={idx}>
              <span className="timeline-year">{c.year}</span>
              <div className="timeline-body">
                <h3>{c.title}</h3>
                <p className="concert-meta">
                  {c.date} · {c.location}
                </p>
                <p>{t(c.descKey)}</p>
                {c.highlightKey && <p className="concert-highlight">{t(c.highlightKey)}</p>}

                {c.img && (
                  <figure className="concert-figure">
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.title} — official reference`}
                      >
                        <img
                          src={c.img}
                          alt={c.title}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={c.img}
                        alt={c.title}
                        loading="lazy"
                      />
                    )}
                    <figcaption>{c.title} — {c.location}</figcaption>
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <Footer extra={
        <span style={{ color: 'var(--muted)', fontSize: '12px' }}>
          {t('footer_concerts_src')}
        </span>
      } />
    </>
  );
}
