import { useApp } from '../context/AppContext';
import { GALLERY_LINKS, SONGS } from '../data/content';
import PageHero from '../components/PageHero';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';

export default function SkinAndSong() {
  const { t } = useApp();
  return (
    <>
      <PageHero title={t('skin_title')} sub={t('skin_sub')} />

      <h2 className="section-title center-title">{t('gallery_title')}</h2>
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
