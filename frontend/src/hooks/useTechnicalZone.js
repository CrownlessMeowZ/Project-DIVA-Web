import { useEffect, useState } from 'react';

/** @param {React.RefObject<HTMLVideoElement> | { videoRef: React.RefObject<HTMLVideoElement> } | null | undefined} refInput */
export function resolveVideoRef(refInput) {
  if (!refInput) return null;
  if (typeof refInput === 'object' && 'current' in refInput) return refInput;
  if (refInput.videoRef) return refInput.videoRef;
  return null;
}

function bindVideoListeners(video, setProgress) {
  const update = () => {
    const duration = video.duration;
    if (duration && Number.isFinite(duration)) {
      setProgress(Math.min(1, video.currentTime / duration));
    } else {
      setProgress(0);
    }
  };

  const onEnded = () => setProgress(1);

  video.addEventListener('timeupdate', update);
  video.addEventListener('loadedmetadata', update);
  video.addEventListener('ended', onEnded);
  update();

  return () => {
    video.removeEventListener('timeupdate', update);
    video.removeEventListener('loadedmetadata', update);
    video.removeEventListener('ended', onEnded);
  };
}

/** @param {React.RefObject<HTMLVideoElement> | { videoRef: React.RefObject<HTMLVideoElement> } | null | undefined} refInput */
export function useTechnicalZone(refInput) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoRef = resolveVideoRef(refInput);
    if (!videoRef) return;

    let cleanup = () => {};

    const tryBind = () => {
      cleanup();
      const video = videoRef.current;
      if (!video) return;
      cleanup = bindVideoListeners(video, setProgress);
    };

    tryBind();

    const frameId = requestAnimationFrame(tryBind);

    return () => {
      cancelAnimationFrame(frameId);
      cleanup();
      setProgress(0);
    };
  }, [refInput]);

  return progress;
}