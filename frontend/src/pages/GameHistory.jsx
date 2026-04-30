import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HISTORY } from '../data/content';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

function PatchEntry({ entry, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);

  const tagClass = { initial: 'tag-initial', content: 'tag-content', platform: 'tag-platform', fix: 'tag-fix' };

  return (
    <div className={`patch-entry${open ? ' open' : ''}`}>
      <div className="patch-hdr" onClick={() => setOpen(o => !o)}>
        <span className="patch-version">{entry.year}</span>
        <span className="patch-date">{entry.date}</span>
        <div className="patch-tags-g">
          {entry.tags.map(tag => (
            <span key={tag.label} className={`tag ${tagClass[tag.type] || 'tag-content'}`}>{tag.label}</span>
          ))}
        </div>
        <span className="patch-arrow">▼</span>
      </div>
      <div className="patch-body" style={{ maxHeight: open ? '2000px' : '0' }}>
        <div className="patch-body-inner">
          <div className="patch-section">
            <p className="patch-section-title">{entry.title}</p>
            <ul className="patch-list">
              {entry.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          </div>
          <p className="patch-note">{entry.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function GameHistory() {
  const { t } = useApp();
  return (
    <>
      <PageHero title={t('gh_title')} sub={t('gh_sub')} />
      <main id="main">
        <div className="patch-timeline">
          {HISTORY.map((entry, i) => (
            <PatchEntry key={entry.year} entry={entry} defaultOpen={i === 0} />
          ))}
        </div>
      </main>
      <Footer extra={<span style={{ color: 'var(--muted)', fontSize: '12px' }}>Series history compiled from official SEGA releases</span>} />
    </>
  );
}
