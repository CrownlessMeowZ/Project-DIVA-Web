import { useApp } from '../hooks/useApp';
import { VERSIONS, GAMEPLAY_VIDEOS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

export default function VersionAndGameplay() {
  const { t, lang } = useApp();
  return (
    <>
      <PageHero title={t('ver_title')} sub={t('ver_sub')} />

      <h2 className="section-title center-title">{t('ver_timeline_title')}</h2>

      <nav className="links version-timeline" aria-label="Version history timeline">
        <ol className="timeline-list">
          {VERSIONS.map(v => (
            <li className="timeline-item" key={v.year}>
              <span className="timeline-year">{v.year}</span>
              <div className="timeline-body">
                <h3>{t(v.titleKey)}</h3>
                <p>{t(v.bodyKey)}</p>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <h2 className="section-title center-title">{t('gameplay_title')}</h2>
      <p className="sub-text">{t('gameplay_sub')}</p>

      <main id="main">
        <div className="flex">
          {GAMEPLAY_VIDEOS.map(v => (
            <div className="card" key={v.titleKey}>
              <h3 className="song-title">{t(v.titleKey)}</h3>
              <p>{t(v.descKey)}</p>
              <figure>
                <video controls aria-label={t('aria_gameplay_video', { title: t(v.titleKey) })}>
                  <source src={v.video} type="video/mp4" />
                  <track kind="captions" label={t('video_captions_label')} srcLang={lang} />
                  {t('video_no_support')}
                </video>
                <figcaption>{t(v.captionKey)}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
