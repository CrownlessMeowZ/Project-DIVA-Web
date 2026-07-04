import { useCallback, useEffect, useRef } from 'react';

export function useCanvasParticles(canvasRef, options = {}) {
  const {
    mode = 'ambient',
    colors = ['#00d4ff', '#ff66cc', '#ffe566', '#aaaaff', '#ffffff'],
    chars = ['♩', '♪', '♫', '♬', '✦', '★', '◆'],
    ambientCount = 45,
  } = options;

  const animRef = useRef(null);
  const burstsRef = useRef([]);

  const triggerBurst = useCallback((x, y, color, count = 22) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pick = color || colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 2.8;
      burstsRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        size: 3 + Math.random() * 7,
        opacity: 0.55 + Math.random() * 0.45,
        decay: 0.012 + Math.random() * 0.01,
        color: pick,
      });
    }
  }, [canvasRef, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let ambient = [];

    function resize() {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    }

    function newAmbient(init = false) {
      return {
        x: Math.random() * canvas.width,
        y: init ? Math.random() * canvas.height : canvas.height + 20,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(0.4 + Math.random() * 0.8),
        size: 10 + Math.random() * 18,
        opacity: 0.15 + Math.random() * 0.55,
        decay: 0.002 + Math.random() * 0.004,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: chars[Math.floor(Math.random() * chars.length)],
      };
    }

    function drawAmbient() {
      for (let i = 0; i < ambient.length; i++) {
        const p = ambient[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= p.decay;
        if (p.y < -30 || p.opacity <= 0) {
          ambient[i] = newAmbient();
          continue;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px serif`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }
    }

    function drawBursts() {
      const next = [];
      for (const p of burstsRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.opacity -= p.decay;
        if (p.opacity <= 0) continue;
        next.push(p);
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      burstsRef.current = next;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mode === 'ambient' || mode === 'both') drawAmbient();
      if (mode === 'burst' || mode === 'both') drawBursts();
      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    if (mode === 'ambient' || mode === 'both') {
      for (let i = 0; i < ambientCount; i++) ambient.push(newAmbient(true));
    }

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
      burstsRef.current = [];
      ambient = [];
    };
  }, [canvasRef, mode, colors, chars, ambientCount]);

  return { triggerBurst };
}