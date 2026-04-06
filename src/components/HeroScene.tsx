import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 2.5;

const usePrimaryColor = () => {
  const [color, setColor] = useState("#2563EB");
  useEffect(() => {
    const update = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      if (raw) setColor(`hsl(${raw})`);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return color;
};

const PulseRing = ({ primaryColor }: { primaryColor: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const stateRef = useRef({ active: false, progress: 0, x: 0, y: 0, z: 0, nextAt: 3 });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const s = stateRef.current;

    if (!s.active && time > s.nextAt) {
      s.active = true;
      s.progress = 0;
      s.x = (Math.random() - 0.5) * 6;
      s.y = (Math.random() - 0.5) * 6;
      s.z = (Math.random() - 0.5) * 4;
    }

    if (s.active && meshRef.current) {
      s.progress += 0.018;
      const scale = s.progress * 6;
      const opacity = Math.max(0, 0.5 - s.progress * 0.5);
      meshRef.current.scale.setScalar(scale);
      meshRef.current.position.set(s.x, s.y, s.z);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;

      if (s.progress >= 1) {
        s.active = false;
        s.nextAt = time + 2.5 + Math.random() * 2;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <ringGeometry args={[0.4, 0.44, 48]} />
      <meshBasicMaterial color={primaryColor} transparent opacity={0} side={THREE.DoubleSide} />
    </mesh>
  );
};

const NeuralNetwork = ({ primaryColor }: { primaryColor: string }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const vel = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return { positions: pos, velocities: vel };
  }, []);

  const linePositions = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);
  const lineColors = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Move nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] += velocities[i * 3] + Math.sin(time * 0.3 + i) * 0.002;
      positions[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(time * 0.2 + i) * 0.002;
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      for (let d = 0; d < 3; d++) {
        if (Math.abs(positions[i * 3 + d]) > 5) {
          velocities[i * 3 + d] *= -1;
        }
      }
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Update connections
    let lineIdx = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          linePositions[lineIdx * 6] = positions[i * 3];
          linePositions[lineIdx * 6 + 1] = positions[i * 3 + 1];
          linePositions[lineIdx * 6 + 2] = positions[i * 3 + 2];
          linePositions[lineIdx * 6 + 3] = positions[j * 3];
          linePositions[lineIdx * 6 + 4] = positions[j * 3 + 1];
          linePositions[lineIdx * 6 + 5] = positions[j * 3 + 2];

          // Blue accent tint (#2563EB)
          const r = 0.15, g = 0.39, b = 0.92;
          lineColors[lineIdx * 6] = r;
          lineColors[lineIdx * 6 + 1] = g;
          lineColors[lineIdx * 6 + 2] = b * alpha;
          lineColors[lineIdx * 6 + 3] = r;
          lineColors[lineIdx * 6 + 4] = g;
          lineColors[lineIdx * 6 + 5] = b * alpha;

          lineIdx++;
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <PulseRing primaryColor={primaryColor} />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={NODE_COUNT}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color={primaryColor} transparent opacity={0.8} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={NODE_COUNT * NODE_COUNT * 2}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
            count={NODE_COUNT * NODE_COUNT * 2}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

const HeroScene = () => {
  const primaryColor = usePrimaryColor();
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <NeuralNetwork primaryColor={primaryColor} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
