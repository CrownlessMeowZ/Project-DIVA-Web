import { useCallback, useState } from 'react';

const PRESETS = ['wide', 'close', 'dynamic'];

export function usePvDirector() {
  const [preset, setPreset] = useState('wide');

  const setPresetSafe = useCallback((next) => {
    if (PRESETS.includes(next)) setPreset(next);
  }, []);

  return {
    preset,
    setPreset: setPresetSafe,
    frameClass: `pv-frame pv-frame--${preset}`,
  };
}