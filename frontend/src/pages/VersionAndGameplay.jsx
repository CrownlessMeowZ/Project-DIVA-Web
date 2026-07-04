import { useRef } from 'react';
import { useApp } from '../hooks/useApp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePvDirector } from '../hooks/usePvDirector';
import { VERSIONS, GAMEPLAY_VIDEOS } from '../data/content';
import PageHero from '../components/PageHero';
import PvDirectorControls from '../components/PvDirectorControls';
import TechZoneBar from '../components/TechZoneBar';
import Footer from '../components/Footer';

function GameplayVideoCard({ v, t, lang }) {
  const { preset, setPreset, frameClass } = usePvDirector();
  const videoRef = useRef(null);

  return (
    <div className="card">
      <h3 className="song-title">{t(v.titleKey)}</h3>
      <p>{t(v.descKey)}</p>
      <PvDirectorControls preset={preset} onPresetChange={setPreset} />
      <figure className="pv-director-figure">
        <div className={frameClass}>
          <video
            ref={videoRef}
            controls
            aria-label={t('aria_gameplay_video', { title: t(v.titleKey) })}
          >
            <source src={v.video} type="video/mp4" />
            <track kind="captions" label={t('video_captions_label')} srcLang={lang} />
            {t('video_no_support')}
          </video>
        </div>
        <TechZoneBar videoRef={videoRef} />
        <figcaption>{t(v.captionKey)}</figcaption>
      </figure>
    </div>
  );
}

export default function VersionAndGameplay() {
  const { t, lang } = useApp();
  const revealRef = useScrollReveal();
  return (
    <>
      <PageHero title={t('ver_title')} sub={t('ver_sub')} />

      <h2 className="section-title center-title">{t('ver_timeline_title')}</h2>

      <nav className="links version-timeline version-timeline--reveal" aria-label="Version history timeline">
        <ol className="timeline-list">
          {VERSIONS.map(v => (
            <li ref={revealRef} className="timeline-item" key={v.year}>
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
            <GameplayVideoCard key={v.titleKey} v={v} t={t} lang={lang} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}