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

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Code snippets to display
    const codeSnippets = [
      '<div>', '</div>', 'const', 'let', 'function', 'return', 'import',
      'export', 'class', 'interface', 'type', 'useState', 'useEffect',
      '{}', '[]', '=>', '&&', '||', '===', '!==', '.map()', '.filter()',
      'async', 'await', 'try', 'catch', 'Promise', 'null', 'undefined'
    ];

    // Create drops
    const drops: number[] = Array(Math.floor(canvas.width / 20)).fill(0);
    const fontSize = 14;

    // Animation
    function draw() {
      // Set transparency for trail effect
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(248, 249, 250, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color
      ctx.fillStyle = theme === 'dark'
        ? 'rgba(75, 0, 130, 0.3)' // Indigo with opacity
        : 'rgba(75, 0, 130, 0.15)'; // Lighter indigo for light theme
      ctx.font = `${fontSize}px monospace`;

      // Draw code snippets
      drops.forEach((y, i) => {
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const x = i * 20;
        
        ctx.fillText(text, x, y);

        // Reset drop or move it down
        if (y > canvas.height || Math.random() > 0.98) {
          drops[i] = 0;
        } else {
          drops[i] += fontSize;
        }
      });
    }

    // Animation loop
    let animationFrame: number;
    function animate() {
      draw();
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
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