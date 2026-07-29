import { useEffect, useRef, useState, useMemo } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useThemeStore } from '../../store/themeStore';

function useStarField(count = 3000, isDarkMode: boolean) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.pow(Math.random(), 2) * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      if (isDarkMode) {
        const hue = 0.6 + (positions[i * 3 + 1] / radius) * 0.2;
        color.setHSL(hue, 0.8, 0.5 + Math.random() * 0.3);
      } else {
        const hue = 0.1 + Math.random() * 0.05;
        color.setHSL(hue, 0.9, 0.6 + Math.random() * 0.2);
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, [count, isDarkMode]);
}

function StarField({ mouse }: { mouse: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const { isDarkMode } = useThemeStore();
  const { positions, colors } = useStarField(3000, isDarkMode);
  
  const positionsAttribute = useMemo(() => (
    new THREE.BufferAttribute(positions, 3)
  ), [positions]);
  
  const colorsAttribute = useMemo(() => (
    new THREE.BufferAttribute(colors, 3)
  ), [colors]);

  useFrame((state) => {
    const isMobile = window.innerWidth < 768;
    const t = state.clock.getElapsedTime();
    
    if (pointsRef.current) {
      // Reduced rotation speed on mobile
      const rotationSpeed = isMobile ? 0.02 : 0.05;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        t * rotationSpeed + mouse.y * 0.2,
        0.02
      );
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(
        pointsRef.current.rotation.y,
        t * rotationSpeed + mouse.x * 0.2,
        0.02
      );
    }

    if (materialRef.current) {
      // Reduced animation intensity on mobile
      const sizeVariation = isMobile ? 0.005 : 0.01;
      if (isDarkMode) {
        materialRef.current.size = 0.03 + Math.sin(t * 2) * sizeVariation;
      } else {
        materialRef.current.size = 0.04 + Math.sin(t * 1.5) * sizeVariation;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...positionsAttribute} />
        <bufferAttribute attach="attributes-color" {...colorsAttribute} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        vertexColors
        size={isDarkMode ? 0.03 : 0.04}
        sizeAttenuation
        transparent
        alphaTest={0.01}
        opacity={1}
        blending={isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  );
}

export default function ThreeBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas 
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]} // Optimize for mobile
      >
        <StarField mouse={mouse} />
      </Canvas>
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-dark-900/30 via-dark-800/50 to-dark-700/70'
          : 'bg-gradient-to-b from-white/50 via-blue-50/70 to-white/90'
      }`} />
    </div>
  );
}