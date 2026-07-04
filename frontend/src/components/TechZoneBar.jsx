import { useRef } from 'react';
import { useApp } from '../hooks/useApp';
import { useTechnicalZone } from '../hooks/useTechnicalZone';

export default function TechZoneBar({ videoRef }) {
  const { t } = useApp();
  const fallbackRef = useRef(null);
  const ref = videoRef ?? fallbackRef;
  const progress = useTechnicalZone(ref);
  const pct = Math.round(progress * 100);

  return (
    <div className="tech-zone-bar" aria-label={t('tech_zone_aria')}>
      <span className="tech-zone-label">{t('tech_zone_label')}</span>
      <div className="tech-zone-track">
        <div
          className="tech-zone-fill"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <span className="tech-zone-pct">{pct}%</span>
    </div>
  );
}