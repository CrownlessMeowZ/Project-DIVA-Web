import { useState } from 'react';

function SkinFlipCard({ skin, accent }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`skin-flip${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped(f => !f)}
      style={{ '--accent-c': accent }}
      role="button"
      aria-label={`${skin.name} skin card`}
    >
      <div className="skin-flip-inner">
        {/* FRONT */}
        <div className="skin-flip-front">
          <img src={skin.img} alt={skin.name} />
          <div className="skin-name-overlay">{skin.name}</div>
        </div>

        {/* BACK */}
        <div className="skin-flip-back">
          <p className="skin-back-name" style={{ color: accent }}>{skin.name}</p>

          <div className="skin-stat-row">
            <span className="skin-stat-label">Producer</span>
            <span className="skin-stat-val">{skin.producer}</span>
          </div>
          <div className="skin-stat-row">
            <span className="skin-stat-label">Origin Song</span>
            <span className="skin-stat-val">{skin.song}</span>
          </div>

          <p className="skin-desc">{skin.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function SkinSpotlight({ data }) {
  return (
    <section className="skin-spotlight">
      {data.map(group => (
        <div key={group.charId} className="skin-group">
          {/* Section label giống Characters page */}
          <div
            className="chars-section-label"
            style={{ '--accent-c': group.accent }}
          >
            <span style={{ color: group.accent }}>{group.charName}</span>
          </div>

          <div className="skin-grid">
            {group.skins.map(skin => (
              <SkinFlipCard key={skin.id} skin={skin} accent={group.accent} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
