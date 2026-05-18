"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function WireframeIcosahedron({ position, scale = 1, speed = 0.3 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          wireframe
          color="#333333"
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function WireframeOctahedron({ position, scale = 1, speed = 0.2 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.7;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          wireframe
          color="#2a2a2a"
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function WireframeTorus({ position, scale = 1, speed = 0.15 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 1.2;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 8, 16]} />
        <meshBasicMaterial
          wireframe
          color="#2a2a2a"
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#444444"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial
        wireframe
        color="#1a1a1a"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function MouseFollower() {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (ref.current) {
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      ref.current.position.x += (x - ref.current.position.x) * 0.05;
      ref.current.position.y += (y - ref.current.position.y) * 0.05;
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ref} scale={0.4}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        wireframe
        color="#444444"
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />

        <WireframeIcosahedron position={[-5, 2, -2]} scale={1.5} speed={0.25} />
        <WireframeOctahedron position={[5, -1, -3]} scale={1.2} speed={0.2} />
        <WireframeTorus position={[-3, -3, -4]} scale={0.8} speed={0.15} />
        <WireframeIcosahedron position={[4, 3, -5]} scale={0.6} speed={0.35} />
        <WireframeOctahedron position={[-6, -2, -6]} scale={0.5} speed={0.3} />

        <ParticleField />
        <GridPlane />
        <MouseFollower />
      </Canvas>
    </div>
  );
}
