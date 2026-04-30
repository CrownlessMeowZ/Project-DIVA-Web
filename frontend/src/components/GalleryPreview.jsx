import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function GalleryPreview({ links }) {
  const { t } = useApp();
  const [preview, setPreview] = useState(null);

  return (
    <nav className="links" aria-label="Module reference links">
      <div className="preview-wrapper">
        <div
          id="image"
          className={`preview-box${preview ? ' active' : ''}`}
          role="img"
          aria-label="Image preview area"
          style={preview ? { backgroundImage: `url('${preview.src}')` } : {}}
        />
        <p id="image-caption" className="preview-caption">
          {preview ? preview.alt : t('preview_hint')}
        </p>
      </div>
      <button className="undo-btn" onClick={() => setPreview(null)}>
        {t('btn_reset')}
      </button>
      <ul>
        {links.map((l, i) => (
          <li key={i}>
            <figcaption>{l.caption}</figcaption>
            <a target="_blank" rel="noopener noreferrer" href={l.href}>
              <img
                src={l.img}
                alt={l.alt}
                tabIndex={i + 1}
                onMouseOver={() => setPreview({ src: l.img, alt: l.alt })}
                onMouseLeave={() => setPreview(null)}
                onFocus={() => setPreview({ src: l.img, alt: l.alt })}
                onBlur={() => setPreview(null)}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
