import { useApp } from '../context/AppContext';
import { VERSIONS, GAMEPLAY_VIDEOS } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

export default function VersionAndGameplay() {
  const { t } = useApp();
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
                <h3>{v.title}</h3>
                <p>{v.body}</p>
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
            <div className="card" key={v.title}>
              <h3 className="song-title">{v.title}</h3>
              <p>{v.desc}</p>
              <figure>
                <video controls aria-label={`${v.title} gameplay footage`}>
                  <source src={v.video} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                <figcaption>{v.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
