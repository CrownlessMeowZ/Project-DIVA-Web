import { useApp } from '../hooks/useApp';
import { GALLERY_LINKS, SONGS, SKIN_SPOTLIGHTS } from '../data/content';
import PageHero from '../components/PageHero';
import GalleryPreview from '../components/GalleryPreview';
import SkinSpotlight from '../components/SkinSpotlight';
import Footer from '../components/Footer';

export default function SkinAndSong() {
  const { t, lang } = useApp();
  return (
    <>
      <PageHero title={t('skin_title')} sub={t('skin_sub')} />

      {/* ── SPOTLIGHT SKINS ── */}
      <h2 className="section-title center-title">{t('skin_spotlight_title')}</h2>
      <p className="sub-text">{t('skin_spotlight_sub')}</p>
      <SkinSpotlight data={SKIN_SPOTLIGHTS} />

      <div className="spotlight-gallery-cta">
        <a href="#gallery" className="spotlight-gallery-link">
          {t('skin_gallery_cta')}
        </a>
      </div>

      <h2 id="gallery" className="section-title center-title">{t('gallery_title')}</h2>
      <p className="sub-text">{t('gallery_sub')}</p>
      <GalleryPreview links={GALLERY_LINKS} />

      <h2 className="section-title center-title">{t('songs_title')}</h2>
      <p className="sub-text">{t('songs_sub')}</p>

      <main id="main">
        <div className="flex">
          {SONGS.map(s => (
            <div className="card" key={s.title}>
              <h3 className="song-title">{s.title}</h3>
              <p>{t('song_by')} <em>{t(s.artistKey)}</em> — {t(s.descKey)}</p>
              <figure>
                <video controls aria-label={t('aria_song_video', { title: s.title })}>
                  <source src={s.video} type="video/mp4" />
                  <track kind="captions" label={t('video_captions_label')} srcLang={lang} />
                  {t('video_no_support')}
                </video>
                <figcaption>{s.title} — {t(s.artistKey)}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
