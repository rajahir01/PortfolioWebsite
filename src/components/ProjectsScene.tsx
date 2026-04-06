import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null!);

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const spd = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      spd[i] = 0.2 + Math.random() * 0.8;
    }
    return { positions: pos, speeds: spd };
  }, []);

  const colorAttr = useMemo(() => {
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = Math.random();
      // Blue to indigo gradient
      colors[i * 3] = 0.29 + t * 0.2;
      colors[i * 3 + 1] = 0.55 - t * 0.2;
      colors[i * 3 + 2] = 0.96;
    }
    return colors;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      const speed = speeds[i];
      posArr[ix] = positions[ix] + Math.sin(time * speed + i) * 0.3;
      posArr[ix + 1] = positions[ix + 1] + Math.cos(time * speed * 0.7 + i) * 0.3;
      posArr[ix + 2] = positions[ix + 2] + Math.sin(time * speed * 0.5 + i * 0.5) * 0.2;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.slice(), 3]} count={PARTICLE_COUNT} />
        <bufferAttribute attach="attributes-color" args={[colorAttr, 3]} count={PARTICLE_COUNT} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const DataFlowRings = () => {
  const ringsRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      ringsRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={ringsRef}>
      {[1.2, 2, 2.8].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, 0, i * 0.5]}>
          <torusGeometry args={[radius, 0.005, 8, 100]} />
          <meshBasicMaterial color="#33e6d9" transparent opacity={0.15 - i * 0.03} />
        </mesh>
      ))}
    </group>
  );
};

const ProjectsScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <DataFlowRings />
      </Canvas>
    </div>
  );
};

export default ProjectsScene;
