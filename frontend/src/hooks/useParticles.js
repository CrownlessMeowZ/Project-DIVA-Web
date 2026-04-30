import { useEffect, useRef } from 'react';

const NOTES = ['♩','♪','♫','♬','✦','★','◆'];
const COLORS = ['#00d4ff','#ff66cc','#ffe566','#aaaaff','#ffffff'];

export function useParticles(canvasRef) {
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function newParticle(init = false) {
      return {
        x:       Math.random() * canvas.width,
        y:       init ? Math.random() * canvas.height : canvas.height + 20,
        vx:      (Math.random() - 0.5) * 0.6,
        vy:      -(0.4 + Math.random() * 0.8),
        size:    10 + Math.random() * 18,
        opacity: 0.15 + Math.random() * 0.55,
        decay:   0.002 + Math.random() * 0.004,
        color:   COLORS[Math.floor(Math.random() * COLORS.length)],
        char:    NOTES[Math.floor(Math.random() * NOTES.length)],
      };
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.opacity -= p.decay;
        if (p.y < -30 || p.opacity <= 0) { particles[i] = newParticle(); continue; }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle   = p.color;
        ctx.font        = `${p.size}px serif`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }
      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 45; i++) particles.push(newParticle(true));
    draw();

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animRef.current);
      else draw();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [canvasRef]);
}
