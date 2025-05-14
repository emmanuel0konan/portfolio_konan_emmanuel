'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Met à jour la taille du canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Liste de snippets de code à afficher
    const codeSnippets: string[] = [
      '<div>', '</div>', 'const', 'let', 'function', 'return', 'import',
      'export', 'class', 'interface', 'type', 'useState', 'useEffect',
      '{}', '[]', '=>', '&&', '||', '===', '!==', '.map()', '.filter()',
      'async', 'await', 'try', 'catch', 'Promise', 'null', 'undefined'
    ];

    const fontSize = 14;
    const columnCount = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columnCount).fill(0);

    // Fonction de dessin
    const draw = () => {
      ctx.fillStyle = theme === 'dark'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(248, 249, 250, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme === 'dark'
        ? 'rgba(75, 0, 130, 0.3)'
        : 'rgba(75, 0, 130, 0.15)';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const x = i * 20;

        ctx.fillText(text, x, y);

        // Redémarre la chute aléatoirement ou lorsqu'elle atteint le bas
        if (y > canvas.height || Math.random() > 0.98) {
          drops[i] = 0;
        } else {
          drops[i] += fontSize;
        }
      });
    };

    // Boucle d'animation
    let animationFrame: number;
    const animate = () => {
      draw();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    // Nettoyage à la désactivation du composant
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}
