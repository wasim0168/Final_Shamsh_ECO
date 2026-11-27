// Scene3D.tsx
"use client";

import { type FC, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Float,
  Text,
  Sparkles,
  Billboard,
} from "@react-three/drei";
import * as THREE from "three";

interface SceneAnimationProps {
  step: number;
}

// ─── 3D Components ──────────────────────────────────────────────────────────

// Solar Panel 3D Component
const SolarPanel3D: FC<{ position?: [number, number, number]; scale?: number; step: number }> = ({
  position = [0, 0, 0],
  scale = 1,
  step,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      const targetRotation = step === 3 ? Math.PI / 4 : 0;
      groupRef.current.rotation.x += (targetRotation - groupRef.current.rotation.x) * 0.05;
      const targetScale = step >= 5 ? Math.max(0.3, 1 - (step - 5) * 0.15) : scale;
      const currentScale = groupRef.current.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * 0.1;
      groupRef.current.scale.setScalar(newScale);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#1a237e" metalness={0.7} roughness={0.2} emissive="#0d47a1" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.8, 0.9, 6, 3]} />
        <meshStandardMaterial color="#1565c0" metalness={0.9} roughness={0.1} emissive="#0d47a1" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.8, 0.9, 6, 3]} />
        <meshBasicMaterial color="#000" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.1, 0.15, 1.1]} />
        <meshStandardMaterial color="#bdbdbd" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Conveyor Belt
const ConveyorBelt: FC = () => {
  const beltRef = useRef<THREE.Mesh>(null);
  const textureRef = useRef<THREE.Texture | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#34495e';
    ctx.fillRect(0, 0, 512, 64);
    for (let i = 0; i < 16; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#2c3e50' : '#3d4d5d';
      ctx.fillRect(i * 32, 0, 32, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 1);
    textureRef.current = texture;
  }, []);

  useFrame((state) => {
    if (beltRef.current && textureRef.current) {
      textureRef.current.offset.x = -state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={beltRef} position={[0, 0.5, 0]} receiveShadow>
        <boxGeometry args={[20, 0.2, 1.5]} />
        <meshStandardMaterial map={textureRef.current || undefined} color="#7f8c8d" metalness={0.3} roughness={0.7} />
      </mesh>
      {Array.from({ length: 10 }, (_, i) => (
        <mesh key={i} position={[-9 + i * 2, 0.25, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
          <meshStandardMaterial color="#5d6d7e" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={`roller-${i}`} position={[-9.5 + i, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
          <meshStandardMaterial color="#95a5a6" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

// Factory Machine
const FactoryMachine: FC<{
  position: [number, number, number];
  color: string;
  scale?: [number, number, number];
  label: string;
  icon: string;
  isActive: boolean;
}> = ({ position, color, scale = [1, 1, 1], label, icon, isActive }) => {
  const lightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (lightRef.current && isActive) {
      const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
      (lightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.9, 0]} castShadow>
        <boxGeometry args={[1.8, 0.3, 1.8]} />
        <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(1.2).getStyle()} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.4, 1.01]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} ref={i === 1 ? lightRef : undefined} position={[(i - 1) * 0.3, 1.1, 1.01]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color={isActive ? (i === 0 ? '#4caf50' : i === 1 ? '#ffeb3b' : '#ff5252') : '#555'}
            emissive={isActive ? (i === 0 ? '#4caf50' : i === 1 ? '#ffeb3b' : '#ff5252') : '#333'}
            emissiveIntensity={isActive ? 1 : 0.1}
          />
        </mesh>
      ))}
      <Billboard position={[0, 1.8, 0]}>
        <Text fontSize={0.3} color="white" anchorX="center" anchorY="middle" outlineWidth={0.02} outlineColor="#000">
          {`${icon} ${label}`}
        </Text>
      </Billboard>
    </group>
  );
};

// Truck 3D Component
const Truck3D: FC<{ position: [number, number, number]; color: string; isVisible: boolean }> = ({
  position,
  color,
  isVisible,
}) => {
  const truckRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (truckRef.current) {
      const targetPosition = isVisible ? position : [position[0] - 20, position[1], position[2]];
      truckRef.current.position.x += (targetPosition[0] - truckRef.current.position.x) * 0.05;
      truckRef.current.children.forEach((child) => {
        if (child.name === 'wheel') {
          child.rotation.x += state.clock.elapsedTime * 0.1;
        }
      });
    }
  });

  return (
    <group ref={truckRef} position={position}>
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 1.5]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh castShadow position={[-1.5, 1.2, 0]}>
        <boxGeometry args={[1.2, 0.8, 1.4]} />
        <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(0.8).getStyle()} metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[-1.5, 1.3, 0.71]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshPhysicalMaterial color="#3498db" metalness={0.9} roughness={0} transparent opacity={0.7} />
      </mesh>
      {[-1, 1].map((x) =>
        [-0.8, 0.8].map((z) => (
          <mesh key={`${x}-${z}`} name="wheel" position={[x, 0.3, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
            <meshStandardMaterial color="#2c3e50" roughness={0.7} />
          </mesh>
        ))
      )}
      <mesh position={[1.51, 0.6, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={1} />
      </mesh>
      <mesh position={[1.51, 0.6, -0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

// Material Cube for separation step
const MaterialCube: FC<{
  position: [number, number, number];
  color: string;
  label: string;
  icon: string;
  isVisible: boolean;
  step: number;
}> = ({ position, color, label, icon, isVisible, step }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.3;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const targetScale = step === 8 ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = step === 7 ? 0.8 : 0.2;
    }
  });

  return (
    <group visible={isVisible}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} position={position} castShadow>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        <Billboard position={[position[0], position[1] + 1, position[2]]}>
          <Text fontSize={0.25} color="white" anchorX="center" anchorY="middle" outlineWidth={0.02} outlineColor="#000">
            {`${icon} ${label}`}
          </Text>
        </Billboard>
      </Float>
    </group>
  );
};

// Particle Effects
const ParticleEffects: FC<{ step: number }> = ({ step }) => {
  return (
    <>
      {step === 4 && (
        <Sparkles count={50} scale={[3, 2, 3]} size={2} speed={0.4} color="#17a589" position={[0, 2, 0]} />
      )}
      {step === 5 && (
        <>
          <Sparkles count={100} scale={[4, 3, 4]} size={4} speed={1} color="#ff9800" position={[2, 2, 0]} />
          <pointLight position={[2, 3, 0]} intensity={2} color="#ff9800" distance={5} />
        </>
      )}
      {step >= 6 && (
        <Sparkles count={80} scale={[10, 5, 5]} size={3} speed={0.6} color="#4fc3f7" position={[8, 3, 0]} />
      )}
    </>
  );
};

// ─── Main Scene3D Component ────────────────────────────────────────────────

export const Scene3D: FC<SceneAnimationProps> = ({ step }) => {
  const materials = [
    { position: [6, 2, -1] as [number, number, number], color: '#4fc3f7', label: 'Glass', icon: '🪟' },
    { position: [8, 2, 1] as [number, number, number], color: '#78909c', label: 'Silicon', icon: '💠' },
    { position: [6, 3, 1] as [number, number, number], color: '#b0bec5', label: 'Silver', icon: '🔩' },
    { position: [8, 3, -1] as [number, number, number], color: '#ff9800', label: 'Copper', icon: '⚡' },
  ];

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 10, 15], fov: 50 }}
      style={{ 
        background: '#0a2540',
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      gl={{ 
        antialias: true,
        alpha: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#0a2540');
      }}
    >
      <color attach="background" args={['#0a2540']} />
      
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} color="#87ceeb" groundColor="#2c3e50" />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#87ceeb" />
      <pointLight position={[0, 10, 0]} intensity={2} color="#ff9800" />
      <pointLight position={[10, 5, 5]} intensity={1} color="#4fc3f7" />
      <pointLight position={[-10, 5, -5]} intensity={0.5} color="#ff5722" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.7} metalness={0.3} />
      </mesh>

      <gridHelper args={[30, 30, '#4a5a6a', '#3d4d5d']} position={[0, 0, 0]} />

      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[-7 + i * 2, 5, -4]}>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
            <meshStandardMaterial color="#4a5a6a" />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={0.8} />
          </mesh>
          <pointLight position={[0, -0.5, 0]} intensity={0.5} color="#ffeb3b" distance={3} />
        </group>
      ))}

      <ConveyorBelt />

      <FactoryMachine position={[-8, 0.75, 0]} color="#546e7a" label="Inspection" icon="🔬" isActive={step >= 2} />
      <FactoryMachine position={[-4, 0.75, 0]} color="#455a64" label="Dismantling" icon="⚙️" isActive={step >= 3} />
      <FactoryMachine position={[0, 0.75, 0]} color="#37474f" label="Chemical" icon="⚗️" isActive={step >= 4} />
      <FactoryMachine position={[4, 0.75, 0]} color="#4e342e" label="Thermal" icon="🔥" isActive={step >= 5} />
      <FactoryMachine position={[8, 0.75, 0]} color="#1a237e" label="Separation" icon="🔱" isActive={step >= 6} />

      <SolarPanel3D position={[-10 + step * 2.5, 1, 0]} scale={1} step={step} />

      <Truck3D position={[-12, 0, -3]} color="#e74c3c" isVisible={step === 1} />
      <Truck3D position={[10, 0, -3]} color="#4caf50" isVisible={step === 8} />

      {materials.map((mat) => (
        <MaterialCube
          key={mat.label}
          position={mat.position}
          color={mat.color}
          label={mat.label}
          icon={mat.icon}
          isVisible={step >= 6}
          step={step}
        />
      ))}

      <ParticleEffects step={step} />

      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={30} blur={2} far={5} />

      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={8}
        maxDistance={25}
        target={[0, 1.5, 0]}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};