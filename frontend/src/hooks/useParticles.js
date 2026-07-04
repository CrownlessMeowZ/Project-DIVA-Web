import { useCanvasParticles } from './useCanvasParticles';

const HOME_COLORS = ['#00d4ff', '#ff66cc', '#ffe566', '#aaaaff', '#ffffff'];
const HOME_CHARS = ['♩', '♪', '♫', '♬', '✦', '★', '◆'];

export function useParticles(canvasRef) {
  useCanvasParticles(canvasRef, {
    mode: 'ambient',
    colors: HOME_COLORS,
    chars: HOME_CHARS,
    ambientCount: 45,
  });
}