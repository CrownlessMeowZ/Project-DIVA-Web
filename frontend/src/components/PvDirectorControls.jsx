import { useApp } from '../hooks/useApp';

const PRESETS = [
  { id: 'wide', labelKey: 'pv_wide' },
  { id: 'close', labelKey: 'pv_close' },
  { id: 'dynamic', labelKey: 'pv_dynamic' },
];

export default function PvDirectorControls({ preset, onPresetChange }) {
  const { t } = useApp();

  return (
    <div className="pv-director-controls" role="group" aria-label={t('pv_director_aria')}>
      {PRESETS.map((p) => (
        <button
          key={p.id}
          type="button"
          className={`pv-director-btn${preset === p.id ? ' active' : ''}`}
          onClick={() => onPresetChange(p.id)}
          aria-pressed={preset === p.id}
        >
          {t(p.labelKey)}
        </button>
      ))}
    </div>
  );
}