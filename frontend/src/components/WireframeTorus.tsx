import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WireframeTorus = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = 300;
      canvas.height = 300;
    };
    resize();

    const R = 80; // Major radius
    const r = 30; // Minor radius
    const segments = 24;
    const tubes = 16;

    const project = (x: number, y: number, z: number) => {
      const scale = 200 / (200 + z);
      return {
        x: x * scale + canvas.width / 2,
        y: y * scale + canvas.height / 2,
        scale,
      };
    };

    const rotateX = (y: number, z: number, angle: number) => ({
      y: y * Math.cos(angle) - z * Math.sin(angle),
      z: y * Math.sin(angle) + z * Math.cos(angle),
    });

    const rotateY = (x: number, z: number, angle: number) => ({
      x: x * Math.cos(angle) - z * Math.sin(angle),
      z: x * Math.sin(angle) + z * Math.cos(angle),
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotationRef.current.x += 0.008;
      rotationRef.current.y += 0.012;

      const points: { x: number; y: number; z: number }[][] = [];

      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const ring: { x: number; y: number; z: number }[] = [];

        for (let j = 0; j <= tubes; j++) {
          const phi = (j / tubes) * Math.PI * 2;

          let x = (R + r * Math.cos(phi)) * Math.cos(theta);
          let y = (R + r * Math.cos(phi)) * Math.sin(theta);
          let z = r * Math.sin(phi);

          const rotX = rotateX(y, z, rotationRef.current.x);
          y = rotX.y;
          z = rotX.z;

          const rotY = rotateY(x, z, rotationRef.current.y);
          x = rotY.x;
          z = rotY.z;

          ring.push({ x, y, z });
        }
        points.push(ring);
      }

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 0.5;

      // Draw longitude lines
      for (let i = 0; i < points.length - 1; i++) {
        for (let j = 0; j < points[i].length - 1; j++) {
          const p1 = project(points[i][j].x, points[i][j].y, points[i][j].z);
          const p2 = project(points[i][j + 1].x, points[i][j + 1].y, points[i][j + 1].z);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Draw latitude lines
      for (let j = 0; j < tubes; j++) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = project(points[i][j].x, points[i][j].y, points[i][j].z);
          const p2 = project(points[i + 1][j].x, points[i + 1][j].y, points[i + 1][j].z);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-40"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 0.4, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <canvas ref={canvasRef} className="w-[300px] h-[300px]" />
    </motion.div>
  );
};

export default WireframeTorus;
