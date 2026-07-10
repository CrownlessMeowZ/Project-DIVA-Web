import { useCallback, useState } from 'react';
import { PV_PRESET_IDS } from '../data/pvPresets';

export function usePvDirector() {
  const [preset, setPreset] = useState('wide');

  const setPresetSafe = useCallback((next) => {
    if (PV_PRESET_IDS.includes(next)) setPreset(next);
  }, []);

  return {
    preset,
    setPreset: setPresetSafe,
    frameClass: `pv-frame pv-frame--${preset}`,
  };
}