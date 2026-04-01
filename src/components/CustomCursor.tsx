import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let fx = 0, fy = 0;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    const animate = () => {
      fx += (pos.x - fx) * 0.12;
      fy += (pos.y - fy) * 0.12;
      setFollower({ x: fx, y: fy });
      requestAnimationFrame(animate);
    };
    // We need a ref-based approach for the animation loop
    let raf: number;
    let cx = 0, cy = 0;
    const loop = () => {
      cx += (pos.x - cx) * 0.12;
      cy += (pos.y - cy) * 0.12;
      setFollower({ x: cx, y: cy });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(loop);

    // Detect hoverable elements
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('button, a, [role="button"], input, textarea, select')) setHovering(true);
    };
    const out = () => setHovering(false);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100"
        style={{
          left: pos.x - 4, top: pos.y - 4,
          width: hovering ? 12 : 8, height: hovering ? 12 : 8,
          backgroundColor: '#fac107',
          mixBlendMode: 'difference',
          opacity: visible ? 1 : 0,
          transform: hovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border-2 transition-all duration-150"
        style={{
          left: follower.x - (hovering ? 24 : 18),
          top: follower.y - (hovering ? 24 : 18),
          width: hovering ? 48 : 36, height: hovering ? 48 : 36,
          borderColor: '#fac107',
          mixBlendMode: 'difference',
          opacity: visible ? 0.7 : 0,
        }}
      />
    </>
  );
}
