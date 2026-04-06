import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const techLabels = [
  "LLaMA", "Mistral", "BERT", "RAG", "PyTorch", "LangChain",
  "CrewAI", "MCP", "AWS", "Docker", "WebRTC", "LiveKit",
  "Terraform", "FastAPI", "Wav2Lip", "NestJS", "Redis", "Qdrant",
  "ComfyUI", "LoRA", "Eleven Labs", "Vapi",
];

const SphereNode = ({ position, label }: { position: [number, number, number]; label: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(0.8 + Math.sin(clock.getElapsedTime() * 2 + position[0]) * 0.15);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#4B8BF5" transparent opacity={0.7} />
        </mesh>
        <Text
          position={[0, -0.2, 0]}
          fontSize={0.12}
          color="#7a8ba3"
          anchorX="center"
          anchorY="top"
          font="/fonts/JetBrainsMono-Regular.woff2"
          characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
        >
          {label}
        </Text>
      </group>
    </Float>
  );
};

const Connections = ({ points }: { points: [number, number, number][] }) => {
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, opacities } = useMemo(() => {
    const lines: number[] = [];
    const ops: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = Math.sqrt(
          (points[i][0] - points[j][0]) ** 2 +
          (points[i][1] - points[j][1]) ** 2 +
          (points[i][2] - points[j][2]) ** 2
        );
        if (dist < 3) {
          lines.push(...points[i], ...points[j]);
          ops.push(1 - dist / 3, 1 - dist / 3);
        }
      }
    }
    return {
      positions: new Float32Array(lines),
      opacities: ops,
    };
  }, [points]);

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
      </bufferGeometry>
      <lineBasicMaterial color="#4B8BF5" transparent opacity={0.06} />
    </lineSegments>
  );
};

const RotatingGroup = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const points = useMemo<[number, number, number][]>(() => {
    return techLabels.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / techLabels.length);
      const theta = Math.sqrt(techLabels.length * Math.PI) * phi;
      const r = 2.8;
      return [
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ];
    });
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#4B8BF5" transparent opacity={0.3} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#4B8BF5" transparent opacity={0.05} />
      </mesh>

      <Connections points={points} />

      {techLabels.map((label, i) => (
        <SphereNode key={label} position={points[i]} label={label} />
      ))}
    </group>
  );
};

const TechSphere3D = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-4">
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; ecosystem</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold mt-2">Tech Ecosystem</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
          <Canvas
            camera={{ position: [0, 0, 7], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.5} />
            <RotatingGroup />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default TechSphere3D;
