import { useApp } from '../context/AppContext';
import { GALLERY_LINKS, SONGS, SKIN_SPOTLIGHTS } from '../data/content';
import PageHero from '../components/PageHero';
import GalleryPreview from '../components/GalleryPreview';
import SkinSpotlight from '../components/SkinSpotlight';
import Footer from '../components/Footer';

export default function SkinAndSong() {
  const { t } = useApp();
  return (
    <>
      <PageHero title={t('skin_title')} sub={t('skin_sub')} />

      {/* ── SPOTLIGHT SKINS ── */}
      <h2 className="section-title center-title">Spotlight Skins</h2>
      <p className="sub-text">Iconic modules from Hatsune Miku: Project DIVA MegaMix+</p>
      <SkinSpotlight data={SKIN_SPOTLIGHTS} />

      <div className="spotlight-gallery-cta">
        <a href="#gallery" className="spotlight-gallery-link">
          Want to explore all modules? Browse the full gallery ↓
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
              <p>By <em>{s.artist}</em> — {s.desc}</p>
              <figure>
                <video controls aria-label={`${s.title} music video`}>
                  <source src={s.video} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                <figcaption>{s.title} — {s.artist}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
