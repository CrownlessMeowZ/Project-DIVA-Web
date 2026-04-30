import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HISTORY } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const TAG_CLASS = { initial: 'tag-initial', content: 'tag-content', platform: 'tag-platform', fix: 'tag-fix' };

function PatchEntry({ entry, open, onToggle }) {
  return (
    <div className={`patch-entry${open ? ' open' : ''}`}>
      <div className="patch-hdr" onClick={onToggle}>
        <span className="patch-version">{entry.year}</span>
        <span className="patch-date">{entry.date}</span>
        <div className="patch-tags-g">
          {entry.tags.map(tag => (
            <span key={tag.label} className={`tag ${TAG_CLASS[tag.type] || 'tag-content'}`}>
              {tag.label}
            </span>
          ))}
        </div>
        <span className="patch-arrow">▼</span>
      </div>
      <div className="patch-body" style={{ maxHeight: open ? '3000px' : '0' }}>
        <div className="patch-body-inner">
          <div className="patch-section">
            <p className="patch-section-title">{entry.title}</p>
            <ul className="patch-list">
              {entry.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          {entry.section2 && (
            <div className="patch-section">
              <p className="patch-section-title">{entry.section2.title}</p>
              <ul className="patch-list">
                {entry.section2.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}
          <p className="patch-note">{entry.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function GameHistory() {
  const { t } = useApp();
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <>
      <PageHero title={t('gh_title')} sub={t('gh_sub')} />
      <main id="main">
        <div className="patch-timeline">
          {HISTORY.map((entry, i) => (
            <PatchEntry
              key={entry.year}
              entry={entry}
              open={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </main>
      <Footer extra={
        <span style={{ color: 'var(--muted)', fontSize: '12px' }}>
          Series history compiled from official SEGA releases
        </span>
      } />
    </>
  );
}
